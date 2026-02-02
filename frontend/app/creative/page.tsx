'use client';
import { useState } from 'react';
import { Send, FileText, Video, ImageIcon, Info } from 'lucide-react';

export default function CreativeEngine() {
  const [content, setContent] = useState("");
  const [isConsultingRAG, setIsConsultingRAG] = useState(false);

  const generateContent = (type: string) => {
    setIsConsultingRAG(true);
    // Simulación de consulta al RAG y generación de IA
    setTimeout(() => {
      setContent(`[Generado como ${type}]\n¡Atención Gen Z! 🚀 Este snack de quinua es el match perfecto para tu día. Sin complicaciones, solo sabor real. #HealthySnack`);
      setIsConsultingRAG(false);
    }, 2000);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <header className="mb-8">
        <h2 className="text-3xl font-bold text-slate-800">Módulo II: Creative Engine</h2>
        <p className="text-slate-500">Generación de contenido coherente con el ADN de marca.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Panel de Control */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="text-sm font-bold uppercase text-slate-400 mb-4 tracking-wider">¿Qué deseas crear?</h3>
            <div className="grid grid-cols-1 gap-3">
              <button onClick={() => generateContent('Descripción')} className="flex items-center gap-3 p-3 rounded-lg border hover:bg-blue-50 hover:border-blue-200 transition group">
                <FileText className="text-slate-400 group-hover:text-blue-600" />
                <span className="font-medium text-slate-700">Descripción de Producto</span>
              </button>
              <button onClick={() => generateContent('Guion')} className="flex items-center gap-3 p-3 rounded-lg border hover:bg-blue-50 hover:border-blue-200 transition group">
                <Video className="text-slate-400 group-hover:text-blue-600" />
                <span className="font-medium text-slate-700">Guion para Video</span>
              </button>
              <button onClick={() => generateContent('Prompt')} className="flex items-center gap-3 p-3 rounded-lg border hover:bg-blue-50 hover:border-blue-200 transition group">
                <ImageIcon className="text-slate-400 group-hover:text-blue-600" />
                <span className="font-medium text-slate-700">Prompt de Imagen</span>
              </button>
            </div>
          </div>

          {/* Indicador de RAG Contextual */}
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex gap-3">
            <Info className="text-blue-600 shrink-0" size={20} />
            <p className="text-xs text-blue-800">
              <strong>Validación RAG:</strong> El sistema filtrará automáticamente tecnicismos según las reglas del manual. 
            </p>
          </div>
        </div>

        {/* Área de Salida */}
        <div className="lg:col-span-2">
          <div className="bg-white h-full min-h-[400px] rounded-xl shadow-sm border border-slate-200 flex flex-col">
            <div className="p-4 border-b bg-slate-50 flex justify-between items-center rounded-t-xl">
              <span className="text-xs font-bold text-slate-500 uppercase">Resultado de la IA</span>
              {isConsultingRAG && (
                <span className="text-xs text-blue-600 animate-pulse font-medium">Consultando Manual de Marca...</span>
              )}
            </div>
            <div className="p-6 flex-1 relative text-slate-700 font-medium">
              {content ? (
                <div className="whitespace-pre-wrap animate-in fade-in duration-500">{content}</div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-slate-400 opacity-50">
                  <Send size={48} className="mb-2" />
                  <p>Selecciona un tipo de contenido para empezar</p>
                </div>
              )}
            </div>
            <div className="p-4 border-t bg-slate-50 rounded-b-xl flex justify-end">
              <button disabled={!content} className="px-4 py-2 bg-slate-800 text-white rounded-md text-sm hover:bg-slate-700 disabled:opacity-50">
                Enviar a Aprobación
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}