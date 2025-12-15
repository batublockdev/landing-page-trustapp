"use client";

import { useState } from "react";
import { Keypair } from "stellar-sdk";
import { createAccount, Trustline, fund } from '../self-wallet/wallet'
interface Props {
    open: boolean;
    onClose: () => void;
}

export default function CreateTestAccountModal({ open, onClose }: Props) {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [loadingState, setLoadingState] = useState("");

    const [error, setError] = useState("");
    const [keys, setKeys] = useState<{
        publicKey: string;
        secretKey: string;
    } | null>(null);

    if (!open) return null;

    const createAccountTest = async () => {
        setLoading(true);
        setError("");
        setKeys(null);
        setLoadingState('')
        console.log("Check not ok")

        try {
            const keypair = Keypair.random();
            // 1️⃣ Check if account already exists
            setLoadingState("Verificando correo");

            const checkRes = await fetch(
                `https://backendtrustapp-production.up.railway.app/api/testaccount?email=${encodeURIComponent(email)}`
            );

            if (!checkRes.ok) {
                console.log("Check not ok")
                throw new Error("Error verificando el correo");
            }

            const rows = await checkRes.json();
            console.log(rows)
            // rows === [] → no account exists
            if (rows.length > 0) {
                // Account already exists → show stored keys
                setLoadingState("Cuenta encontrada");

                setKeys({
                    publicKey: rows[0].public_key,
                    secretKey: rows[0].private_key,
                });

                setLoading(false);
                setLoadingState("");
                return; // ⛔ stop execution, do NOT create a new account
            }


            setLoadingState('Creando cuenta')

            console.log("Public Key:", keypair.publicKey());
            console.log("Secret Key:", keypair.secret());
            await createAccount(keypair.publicKey());
            setLoadingState('Creando trust lines')


            await Trustline(keypair);
            setLoadingState('Cargando fondos')

            await fund(keypair.publicKey());
            setLoadingState("Guardando cuenta");

            const insertRes = await fetch(
                `https://backendtrustapp-production.up.railway.app/api/inserttestaccount?email=${encodeURIComponent(email)}&private=${encodeURIComponent(
                    keypair.secret()
                )}&public=${encodeURIComponent(keypair.publicKey())}`,
                {
                    method: "POST",
                }
            );

            if (!insertRes.ok) {
                throw new Error("Error al guardar la cuenta");
            }

            setKeys({
                publicKey: keypair.publicKey(),
                secretKey: keypair.secret(),
            });
        } catch (error) {
            console.log(error)
            console.log("error")

            setError("Error al crear la cuenta. Intenta de nuevo.",);
        } finally {
            setLoading(false);
        }
    };
    const sleep = (ms: number) =>
        new Promise((resolve) => setTimeout(resolve, ms));

    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="bg-black border border-green-500/40 rounded-2xl p-6 w-full max-w-md shadow-[0_0_30px_rgba(34,197,94,0.25)]">

                <h2 className="text-xl font-semibold mb-4 text-green-400 text-center">
                    Crear cuenta de prueba
                </h2>

                {!keys && (
                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="
          w-full bg-black text-green-300
          border border-green-500/40
          rounded-lg p-2 mb-4
          placeholder-green-600
          focus:outline-none
          focus:ring-2 focus:ring-green-500/60
        "
                    />
                )}

                {loading && (
                    <p className="text-center text-green-400 animate-pulse">
                        {loadingState}
                    </p>
                )}

                {error && (
                    <p className="text-red-500 text-sm mb-3 text-center">
                        {error}
                    </p>
                )}

                {keys && (
                    <div className="bg-black border border-green-500/40 p-3 rounded-lg text-sm space-y-3">
                        <p className="text-green-300">
                            <strong className="text-green-400">Public Key:</strong>
                            <br />
                            <span className="break-all font-mono text-green-200">
                                {keys.publicKey}
                            </span>
                        </p>

                        <p className="text-green-300">
                            <strong className="text-green-400">Private Key:</strong>
                            <br />
                            <span className="break-all font-mono text-green-500">
                                {keys.secretKey}
                            </span>
                        </p>
                    </div>
                )}

                <div className="flex gap-2 mt-5">
                    {!keys && (
                        <button
                            onClick={createAccountTest}
                            disabled={loading || !email}
                            className="
            flex-1 py-2 rounded-xl font-semibold
            bg-green-500 text-black
            hover:bg-green-400
            shadow-[0_0_20px_rgba(34,197,94,0.6)]
            disabled:opacity-40
            disabled:shadow-none
            transition
          "
                        >
                            Crear
                        </button>
                    )}

                    <button
                        onClick={onClose}
                        className="
          flex-1 py-2 rounded-xl
          border border-green-500/40
          text-green-400
          hover:bg-green-500/10
          transition
        "
                    >
                        Cerrar
                    </button>
                </div>
            </div>
        </div>

    );
}
