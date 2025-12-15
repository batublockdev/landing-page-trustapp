export default function PoliticaDePrivacidad() {
    return (
        <main className="min-h-screen bg-black text-gray-300 px-6 py-20">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-green-400 mb-6">
                    Política de Privacidad — TrustApp
                </h1>

                <p className="text-sm text-gray-400 mb-10">
                    Última actualización: 2025
                </p>

                {/* INTRO */}
                <section className="space-y-4 mb-10">
                    <p>
                        En TrustApp valoramos tu privacidad y seguridad. Esta política
                        explica qué información recopilamos, cómo la utilizamos y
                        cuáles son tus derechos sobre tus datos. Al usar nuestra
                        aplicación, aceptas los términos de esta política.
                    </p>
                </section>

                {/* 1 */}
                <section className="space-y-4 mb-8">
                    <h2 className="text-2xl font-semibold text-white">
                        1. Información que Recopilamos
                    </h2>

                    <h3 className="text-lg font-semibold text-green-400">
                        a) Datos de acuerdos
                    </h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            Información ingresada por los usuarios al crear acuerdos
                            en la aplicación.
                        </li>
                        <li>
                            Esta información se utiliza exclusivamente para ejecutar
                            y gestionar los contratos inteligentes asociados.
                        </li>
                    </ul>

                    <h3 className="text-lg font-semibold text-green-400 mt-4">
                        b) Información técnica
                    </h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            Datos básicos del dispositivo (tipo de dispositivo,
                            sistema operativo y versiones) utilizados únicamente
                            para mejorar el rendimiento y la experiencia de uso.
                        </li>
                    </ul>

                    <h3 className="text-lg font-semibold text-green-400 mt-4">
                        c) Claves privadas
                    </h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            Si decides importar tu clave privada, esta se almacena
                            <strong> cifrada (encriptada)</strong> únicamente en tu
                            dispositivo.
                        </li>
                        <li>
                            La clave privada <strong>no se envía</strong> ni se
                            almacena en servidores de TrustApp.
                        </li>
                        <li>
                            TrustApp no tiene acceso, control ni posibilidad de
                            recuperación de claves privadas.
                        </li>
                    </ul>
                </section>

                {/* 2 */}
                <section className="space-y-3 mb-8">
                    <h2 className="text-2xl font-semibold text-white">
                        2. Cómo Utilizamos la Información
                    </h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            Permitir la creación, firma y gestión de acuerdos mediante
                            contratos inteligentes.
                        </li>
                        <li>
                            Mejorar la experiencia de uso y la funcionalidad de la
                            aplicación.
                        </li>
                        <li>
                            Detectar errores o problemas técnicos y optimizar el
                            rendimiento.
                        </li>
                    </ul>
                </section>

                {/* 3 */}
                <section className="space-y-3 mb-8">
                    <h2 className="text-2xl font-semibold text-white">
                        3. Qué No Recopilamos
                    </h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            No recopilamos datos personales sensibles como información
                            financiera, biométrica o médica.
                        </li>
                        <li>
                            No vendemos, alquilamos ni compartimos información de los
                            usuarios con terceros con fines comerciales.
                        </li>
                        <li>
                            No almacenamos claves privadas en servidores de TrustApp.
                        </li>
                    </ul>
                </section>

                {/* 4 */}
                <section className="space-y-3 mb-8">
                    <h2 className="text-2xl font-semibold text-white">
                        4. Seguridad de la Información
                    </h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            Implementamos medidas técnicas y organizativas razonables
                            para proteger la información.
                        </li>
                        <li>
                            El usuario es responsable de mantener la seguridad de sus
                            claves privadas, dispositivos y cuentas.
                        </li>
                        <li>
                            TrustApp no se hace responsable de pérdidas o accesos no
                            autorizados derivados del mal manejo de la clave privada
                            por parte del usuario.
                        </li>
                    </ul>
                </section>

                {/* 5 */}
                <section className="space-y-3 mb-8">
                    <h2 className="text-2xl font-semibold text-white">
                        5. Derechos de los Usuarios
                    </h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            Puedes solicitar la eliminación de cualquier información
                            almacenada localmente dentro de la aplicación.
                        </li>
                        <li>
                            Tienes derecho a revisar y corregir la información
                            ingresada en la app.
                        </li>
                    </ul>
                </section>

                {/* 6 */}
                <section className="space-y-3 mb-8">
                    <h2 className="text-2xl font-semibold text-white">
                        6. Cambios en la Política
                    </h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            Podemos actualizar esta política de privacidad en
                            cualquier momento.
                        </li>
                        <li>
                            Las actualizaciones se notificarán dentro de la
                            aplicación.
                        </li>
                        <li>
                            El uso continuo de la app tras la notificación implica la
                            aceptación de la versión actualizada.
                        </li>
                    </ul>
                </section>

                {/* 7 */}
                <section className="space-y-3 mb-12">
                    <h2 className="text-2xl font-semibold text-white">
                        7. Contacto
                    </h2>
                    <p>
                        Para cualquier duda, solicitud o soporte sobre la privacidad
                        de tus datos, contáctanos en:
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
