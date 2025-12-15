export default function TerminosYCondiciones() {
    return (
        <main className="min-h-screen bg-black text-gray-300 px-6 py-20">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-green-400 mb-6">
                    Términos y Condiciones de Uso — TrustApp
                </h1>

                <p className="text-sm text-gray-400 mb-10">
                    Última actualización: 2025
                </p>

                {/* INTRO */}
                <section className="space-y-4 mb-10">
                    <p>
                        Bienvenido a TrustApp. Al acceder o utilizar nuestra aplicación,
                        aceptas cumplir estos Términos y Condiciones. Léelos detenidamente.
                        Si no estás de acuerdo, no debes usar la aplicación.
                    </p>
                </section>

                {/* 1 */}
                <section className="space-y-3 mb-8">
                    <h2 className="text-2xl font-semibold text-white">
                        1. Naturaleza del Servicio
                    </h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            TrustApp es una plataforma que permite a los usuarios crear,
                            gestionar y firmar acuerdos relacionados con fútbol mediante
                            contratos inteligentes en blockchain.
                        </li>
                        <li>
                            TrustApp <strong>NO</strong> es una casa de apuestas,{" "}
                            <strong>NO</strong> realiza intercambio de criptomonedas y{" "}
                            <strong>NO</strong> funciona como billetera digital.
                        </li>
                        <li>
                            TrustApp no ofrece asesoramiento financiero, legal o deportivo.
                        </li>
                    </ul>
                </section>

                {/* 2 */}
                <section className="space-y-3 mb-8">
                    <h2 className="text-2xl font-semibold text-white">
                        2. Uso de la Aplicación
                    </h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Debes utilizar la aplicación de forma responsable.</li>
                        <li>
                            Todos los acuerdos creados son entre usuarios. TrustApp no
                            participa, valida ni garantiza resultados.
                        </li>
                        <li>
                            Eres responsable de toda la información que ingreses en la app.
                        </li>
                        <li>El uso de la aplicación es bajo tu propio riesgo.</li>
                    </ul>
                </section>

                {/* 3 */}
                <section className="space-y-3 mb-8">
                    <h2 className="text-2xl font-semibold text-white">
                        3. Claves Privadas y Seguridad
                    </h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            Si importas tu clave privada, se usa únicamente para firmar
                            transacciones.
                        </li>
                        <li>TrustApp no almacena ni accede a tu clave privada.</li>
                        <li>
                            Eres responsable de la seguridad de tus claves y dispositivos.
                        </li>
                        <li>
                            TrustApp no puede recuperar claves privadas perdidas.
                        </li>
                    </ul>
                </section>

                {/* 4 */}
                <section className="space-y-3 mb-8">
                    <h2 className="text-2xl font-semibold text-white">
                        4. Actividades Prohibidas
                    </h2>
                    <p>Prohibido:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Usar la app para actividades ilegales.</li>
                        <li>
                            Manipular o intentar alterar el contrato inteligente o los
                            sistemas de TrustApp.
                        </li>
                        <li>
                            Crear acuerdos falsos, malintencionados o que afecten derechos de
                            otros.
                        </li>
                        <li>
                            Publicar contenido ofensivo, acosador, violento o inapropiado.
                        </li>
                        <li>
                            Intentar acceder sin autorización a datos, cuentas o servidores.
                        </li>
                    </ul>
                </section>

                {/* 5 */}
                <section className="space-y-3 mb-8">
                    <h2 className="text-2xl font-semibold text-white">
                        5. Limitación de Responsabilidad
                    </h2>
                    <p>TrustApp no se hace responsable por:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Pérdida de fondos o activos digitales.</li>
                        <li>Errores creados por los usuarios en acuerdos.</li>
                        <li>Fallos de la red blockchain o servicios externos.</li>
                        <li>Problemas derivados del mal uso de claves privadas.</li>
                        <li>Consecuencias generadas por decisiones de los usuarios.</li>
                    </ul>
                </section>

                {/* 6 */}
                <section className="space-y-3 mb-8">
                    <h2 className="text-2xl font-semibold text-white">
                        6. Disponibilidad del Servicio
                    </h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            No garantizamos disponibilidad continua ni ausencia de errores.
                        </li>
                        <li>
                            Podemos modificar o suspender funciones de la app en cualquier
                            momento.
                        </li>
                    </ul>
                </section>

                {/* 7 */}
                <section className="space-y-3 mb-8">
                    <h2 className="text-2xl font-semibold text-white">
                        7. Actualizaciones de los Términos
                    </h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Podemos actualizar estos términos en cualquier momento.</li>
                        <li>Se notificará dentro de la app.</li>
                        <li>
                            Si continúas usando la app, aceptas los cambios.
                        </li>
                    </ul>
                </section>

                {/* 8 */}
                <section className="space-y-3 mb-12">
                    <h2 className="text-2xl font-semibold text-white">
                        8. Contacto
                    </h2>
                    <p>
                        Para dudas o soporte, comunícate a:
                    </p>
                    <p className="text-green-400 font-medium">
                        batublockchain@gmail.com
                    </p>
                </section>

                <footer className="text-xs text-gray-500 text-center">
                    © {new Date().getFullYear()} TrustApp — Todos los derechos reservados
                </footer>
            </div>
        </main>
    );
}
