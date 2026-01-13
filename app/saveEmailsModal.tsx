import { useState } from "react";
import { createAccount, Trustline, fund } from '../self-wallet/wallet'
import { Keypair } from "stellar-sdk";

type EmailModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function EmailModal({ isOpen, onClose }: EmailModalProps) {
    const [step, setStep] = useState<
        "idle" | "loading" | "success" | "error"
    >("idle");
    const [email, setEmail] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);
    const [loadingState, setLoadingState] = useState("");
    const [error, setError] = useState("");
    const [keys, setKeys] = useState<{
        publicKey: string;
        secretKey: string;
    } | null>(null);
    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setError("");
        setKeys(null);
        setLoadingState("");
        setStep("loading");

        try {
            const keypair = Keypair.random();

            setLoadingState("Verificando correo...");

            const checkRes = await fetch(
                `https://trustappbackendlive-production.up.railway.app/api/testaccount?email=${encodeURIComponent(email)}`
            );

            if (!checkRes.ok) {
                throw new Error("Error verificando el correo");
            }

            const rows = await checkRes.json();

            if (rows.length > 0) {
                setLoadingState("Cuenta encontrada");

                setKeys({
                    publicKey: rows[0].public_key,
                    secretKey: rows[0].private_key,
                });

                setStep("success");
                return;
            }

            setLoadingState("Creando cuenta...");
            await createAccount(keypair.publicKey());

            setLoadingState("Creando trustlines...");
            await Trustline(keypair);

            setLoadingState("Cargando fondos...");
            await fund(keypair.publicKey());

            setLoadingState("Guardando cuenta...");
            const insertRes = await fetch(
                `https://trustappbackendlive-production.up.railway.app/api/inserttestaccount?email=${encodeURIComponent(
                    email
                )}&private=${encodeURIComponent(
                    keypair.secret()
                )}&public=${encodeURIComponent(keypair.publicKey())}`,
                { method: "POST" }
            );

            if (!insertRes.ok) {
                throw new Error("Error al guardar la cuenta");
            }

            setKeys({
                publicKey: keypair.publicKey(),
                secretKey: keypair.secret(),
            });

            setStep("success");
        } catch (err) {
            console.error(err);
            setError("Error al crear la cuenta. Intenta de nuevo.");
            setStep("error");
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div
                className="bg-zinc-900 rounded-2xl p-6 w-full max-w-md shadow-xl relative"
                onClick={(e) => e.stopPropagation()}
            >

                {step === "idle" && (
                    <>
                        <h3 className="text-xl font-semibold mb-4 text-white">
                            Déjanos tu correo
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    setEmail(e.target.value)
                                }
                                placeholder="tu@email.com"
                                className="w-full px-4 py-3 rounded-xl bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                            />

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full px-4 py-3 rounded-xl bg-emerald-400 text-black font-semibold hover:bg-emerald-300 transition disabled:opacity-50"
                            >
                                {loading ? loadingState : "Recibir información"}
                            </button>
                        </form>

                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white"
                            aria-label="Cerrar modal"
                        >
                            ✕
                        </button>
                    </>
                )}

                {step === "loading" && (
                    <div className="flex flex-col items-center justify-center py-10 gap-4">
                        <div className="w-10 h-10 border-4 border-emerald-400 border-t-transparent rounded-full animate-spin" />
                        <p className="text-gray-300 text-center">{loadingState}</p>
                    </div>
                )}

                {step === "success" && (
                    <div className="text-center py-10">
                        <h3 className="text-2xl font-semibold text-white mb-2">
                            ¡Listo! 🎉
                        </h3>
                        <p className="text-gray-400">
                            En breve revisa tu correo, te llegará toda la información.
                        </p>
                        <button
                            onClick={onClose}
                            className="mt-6 px-6 py-2 rounded-xl bg-emerald-400 text-black font-semibold"
                        >
                            Cerrar
                        </button>
                    </div>
                )}

                {step === "error" && (
                    <div className="text-center py-10">
                        <p className="text-red-400 mb-4">{error}</p>
                        <button
                            onClick={() => setStep("idle")}
                            className="px-6 py-2 rounded-xl bg-emerald-400 text-black font-semibold"
                        >
                            Intentar de nuevo
                        </button>
                    </div>
                )}


            </div>
        </div>
    );
}
