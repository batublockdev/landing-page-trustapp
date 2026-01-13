"use client";

import React, { useState } from "react";
import CreateTestAccountModal from "./CreateTestAccountModal";
import EmailModal from './saveEmailsModal'
export default function LandingPage() {
  const [open, setOpen] = useState(false);
  const [openEmail, setOpenEmail] = useState(false);

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

        <CreateTestAccountModal open={openEmail} onClose={() => setOpenEmail(false)} />
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

          <button
            onClick={() => setOpenEmail(true)}

            className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-emerald-400 text-black font-semibold hover:bg-emerald-300 transition text-lg"
          >
            <img src="/google-play.svg" alt="Google Play" className="w-6 h-6" />
            Play Store
          </button>


          <button
            disabled
            className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-gray-700 text-gray-400 font-semibold text-lg cursor-not-allowed"
          >
            <img src="/apple.svg" alt="App Store" className="w-6 h-6 opacity-50" />
            App Store
          </button>
          <EmailModal isOpen={openEmail} onClose={() => setOpenEmail(false)} />
        </div>

        <p className="mt-4 text-sm text-gray-400">
          Pronto disponible en las tiendas oficiales
        </p>
      </section>


      <div className="mt-3 flex items-center gap-4">
        {/* X (Twitter) */}
        <a
          href="https://x.com/trustapp1xt"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition"
          aria-label="X"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path d="M18.244 2H21l-6.52 7.455L22 22h-6.828l-5.34-6.97L3.77 22H1l7.02-8.03L2 2h7l4.83 6.3L18.244 2z" />
          </svg>
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/trustapp1xt"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition"
          aria-label="Instagram"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.9.25 2.3.42a4.7 4.7 0 011.7 1.1 4.7 4.7 0 011.1 1.7c.17.4.36 1.1.42 2.3.07 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.25 1.9-.42 2.3a4.7 4.7 0 01-1.1 1.7 4.7 4.7 0 01-1.7 1.1c-.4.17-1.1.36-2.3.42-1.3.07-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-1.9-.25-2.3-.42a4.7 4.7 0 01-1.7-1.1 4.7 4.7 0 01-1.1-1.7c-.17-.4-.36-1.1-.42-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-1.9.42-2.3a4.7 4.7 0 011.1-1.7 4.7 4.7 0 011.7-1.1c.4-.17 1.1-.36 2.3-.42C8.4 2.2 8.8 2.2 12 2.2zM12 6.4a5.6 5.6 0 100 11.2 5.6 5.6 0 000-11.2zm0 9.2a3.6 3.6 0 110-7.2 3.6 3.6 0 010 7.2zm5.8-9.8a1.3 1.3 0 11-2.6 0 1.3 1.3 0 012.6 0z" />
          </svg>
        </a>
      </div>


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
          href="https://stellar.expert/explorer/public/contract/CA3UB5N7S6XXXHEZGZ6GJU5OVIIX5OQ7TAQ7X65BWY4YK3MWLVZF4ZL3"
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
