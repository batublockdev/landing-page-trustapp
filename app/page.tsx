"use client";

import React, { useState } from "react";
import CreateTestAccountModal from "./CreateTestAccountModal";

export default function LandingPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-6">
      {/* ================= HEADER ================= */}
      <header className="w-full max-w-6xl flex flex-col sm:flex-row items-center justify-between py-6 gap-4">
        <div className="flex items-center gap-3">
          <img src="./trust-new.png" alt="App Logo" className="h-10" />
          <h1 className="text-2xl font-bold">TrustApp</h1>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="px-4 py-2 rounded-xl bg-blue-600 text-white w-full sm:w-auto"
        >
          Cuenta nueva de prueba
        </button>

        <CreateTestAccountModal open={open} onClose={() => setOpen(false)} />
      </header>

      {/* ================= HERO ================= */}
      <section className="w-full max-w-2xl text-center mt-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Acuerdos Seguros y Confiables
        </h2>

        <p className="text-base sm:text-lg text-gray-300 mb-8">
          Crea acuerdos sobre fútbol protegidos por contratos inteligentes en
          blockchain. Sin apuestas, sin intermediarios, solo confianza.
        </p>

        {/* DOWNLOAD BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://expo.dev/accounts/batublockdev/projects/mobile/builds/bf1634c6-08a3-4ec2-8d3a-2fc7d6b2f31c"
            className="px-6 py-3 rounded-2xl bg-green-500 text-black font-semibold hover:bg-green-400 transition text-lg"
          >
            Descargar APK
          </a>

          <button
            disabled
            className="px-6 py-3 rounded-2xl bg-gray-700 text-gray-400 font-semibold text-lg cursor-not-allowed"
          >
            App Store
          </button>
        </div>

        <p className="mt-4 text-sm text-gray-400">
          Pronto disponible en las tiendas oficiales
        </p>
      </section>

      {/* ================= SCREENSHOTS ================= */}
      {/* ================= SCREENSHOTS ================= */}
      <section className="w-full max-w-6xl mt-20 mx-auto">
        <h3 className="text-xl font-semibold mb-4 text-center">
          Vista previa de la app
        </h3>

        {/* Centered horizontal scroll */}
        <div className="flex justify-center">
          <div className="flex gap-4 overflow-x-auto pb-4">
            <img
              src="/screenshots/screen1.jpg"
              className="h-96 rounded-2xl border border-gray-800 flex-shrink-0"
              alt="Screenshot 1"
            />
            <img
              src="/screenshots/screen2.jpg"
              className="h-96 rounded-2xl border border-gray-800 flex-shrink-0"
              alt="Screenshot 2"
            />
            <img
              src="/screenshots/screen3.jpg"
              className="h-96 rounded-2xl border border-gray-800 flex-shrink-0"
              alt="Screenshot 3"
            />
          </div>
        </div>
      </section>


      {/* ================= LEGAL LINKS ================= */}
      <section className="mt-16 flex flex-col sm:flex-row gap-4 text-gray-400 text-sm">
        <a href="/terminos-y-condiciones" className="hover:underline">
          Términos y Condiciones
        </a>
        <a href="/politica-de-privacidad" className="hover:underline">
          Política de Privacidad
        </a>
        <a
          href="https://stellar.expert/explorer/testnet/contract/CCAY5HOH47O5IVZQV6XCLV7NXAN7ST7LNRFXYM6TJ47CUBGANLWDN57G"
          className="hover:underline"
        >
          Ver Contrato Inteligente
        </a>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="mt-16 mb-6 text-gray-500 text-sm text-center">
        © 2025 TrustApp. Todos los derechos reservados.
      </footer>
    </div>
  );
}
