'use client';
import { useState } from 'react';
import { CheckCircle, XCircle, Upload, Eye, ShieldAlert } from 'lucide-react';

export default function GovernanceAudit() {
  const [status, setStatus] = useState('Pendiente');
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditResult, setAuditResult] = useState<{check: boolean, msg: string} | null>(null);

  const handleImageAudit = () => {
    setIsAuditing(true);
    // Simulación de auditoría multimodal (Modelo de Visión vs Manual)
    setTimeout(() => {
      setAuditResult({
        check: false,
        msg: "El logo es demasiado pequeño según las reglas del manual."
      });
      setIsAuditing(false);
    }, 2500);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <header className="mb-8 flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Módulo III: Governance & Audit</h2>
          <p className="text-slate-500">Flujo de aprobación y auditoría multimodal de activos.</p>
        </div>
        <div className="flex gap-2">
          <span className={`px-4 py-1 rounded-full text-sm font-bold ${
            status === 'Aprobado' ? 'bg-green-100 text-green-700' : 
            status === 'Rechazado' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
          }`}>
            Estado: {status}
          </span>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Panel A: Revisión de Contenido (Aprobador A) */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Eye size={20} className="text-blue-500"/> Revisión de Texto
          </h3>
          <div className="bg-slate-50 p-4 rounded-lg mb-6 text-sm text-slate-600 italic border">
            "¡Atención Gen Z! 🚀 Este snack de quinua es el match perfecto para tu día..."
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => setStatus('Aprobado')}
              className="flex-1 bg-green-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-green-700 transition"
            >
              <CheckCircle size={18}/> Aprobar
            </button>
            <button 
              onClick={() => setStatus('Rechazado')}
              className="flex-1 bg-white border border-red-200 text-red-600 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-red-50 transition"
            >
              <XCircle size={18}/> Rechazar
            </button>
          </div>
        </div>

        {/* Panel B: Auditoría Multimodal (Aprobador B) */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <ShieldAlert size={20} className="text-orange-500"/> Auditoría de Imagen
          </h3>
          <div className="border-2 border-dashed border-slate-200 rounded-lg p-8 flex flex-col items-center justify-center mb-4">
            <Upload className="text-slate-300 mb-2" size={32} />
            <p className="text-xs text-slate-500 text-center">Subir activo visual para contrastar con el ADN de marca</p>
            <input type="file" className="mt-4 text-xs" onChange={handleImageAudit} />
          </div>

          {isAuditing && (
            <div className="text-center py-4 animate-pulse text-blue-600 font-medium text-sm">
              IA analizando composición visual...
            </div>
          )}

          {auditResult && (
            <div className={`p-4 rounded-lg border ${auditResult.check ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
              <div className="flex items-start gap-3">
                {auditResult.check ? <CheckCircle className="text-green-600"/> : <XCircle className="text-red-600"/>}
                <div>
                  <p className={`text-sm font-bold ${auditResult.check ? 'text-green-800' : 'text-red-800'}`}>
                    {auditResult.check ? "Validación Exitosa" : "Fallo de Consistencia"}
                  </p>
                  <p className="text-xs text-slate-600 mt-1">{auditResult.msg}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}