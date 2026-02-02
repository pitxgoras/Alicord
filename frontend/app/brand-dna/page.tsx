'use client';
import { useState } from 'react';
import { Save, Sparkles } from 'lucide-react';

export default function BrandDNA() {
  const [loading, setLoading] = useState(false);
  const [manual, setManual] = useState("");

  const handleGenerate = () => {
    setLoading(true);
    setTimeout(() => {
      setManual("# Manual de Marca: Snack Gen Z\n- Tono: Divertido pero profesional.\n- Restricciones: No usar tecnicismos.");
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-8">
        <h2 className="text-3xl font-bold text-black">Módulo I: Brand DNA Architect</h2>
        <p className="text-black font-bold">Define la identidad y reglas de tu marca.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Formulario de Entrada - AHORA MÁS OSCURO */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-black">
          <h3 className="text-lg font-black mb-4 text-black uppercase tracking-tight">Parámetros del Producto</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-black mb-1 text-black">Concepto del Producto</label>
              <input 
                type="text" 
                placeholder="Ej: Snack saludable de quinua" 
                className="w-full p-2 border-2 border-black rounded-md text-black font-bold placeholder:text-slate-600 focus:ring-2 focus:ring-blue-600 outline-none" 
              />
            </div>
            <div>
              <label className="block text-sm font-black mb-1 text-black">Tono de Comunicación</label>
              <select className="w-full p-2 border-2 border-black rounded-md text-black font-bold focus:ring-2 focus:ring-blue-600 outline-none">
                <option>Divertido pero profesional</option>
                <option>Formal e institucional</option>
                <option>Rebelde y audaz</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-black mb-1 text-black">Público Objetivo</label>
              <input 
                type="text" 
                placeholder="Ej: Gen Z" 
                className="w-full p-2 border-2 border-black rounded-md text-black font-bold placeholder:text-slate-600 focus:ring-2 focus:ring-blue-600 outline-none" 
              />
            </div>
            <button 
              onClick={handleGenerate}
              className="w-full bg-black text-white py-3 rounded-md font-black flex items-center justify-center gap-2 hover:bg-slate-900 transition shadow-md"
            >
              {loading ? "GENERANDO..." : <><Sparkles size={18}/> GENERAR MANUAL</>}
            </button>
          </div>
        </div>

        {/* Visualización del Manual */}
        <div className="bg-white p-6 rounded-xl border-2 border-black">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-black text-black uppercase tracking-tight">Manual Estructurado</h3>
            {manual && <button className="text-blue-700 font-black text-sm flex items-center gap-1 hover:underline"><Save size={14}/> GUARDAR</button>}
          </div>
          <div className="bg-white p-4 rounded-md min-h-[200px] border-2 border-black shadow-inner overflow-auto">
            {manual ? (
              <pre className="whitespace-pre-wrap font-sans text-sm font-black text-black leading-relaxed">
                {manual}
              </pre>
            ) : (
              <p className="text-black font-black italic text-center mt-20">Los resultados aparecerán aquí...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}