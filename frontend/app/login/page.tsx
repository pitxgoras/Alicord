'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, User, ShieldCheck } from 'lucide-react';

export default function LoginPage() {
  const [role, setRole] = useState('Creador');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    document.cookie = `userRole=${role}; path=/; max-age=3600; SameSite=Lax`;
    localStorage.setItem('userRole', role);
    
    if (role === 'Creador') router.push('/brand-dna');
    else router.push('/governance');
  };

  return (
    /* CONTENEDOR CON FONDO ANIMADO */
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-slate-950 ml-[-256px]">
      
      {/* Círculos de luz animados de fondo */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Tarjeta de Login */}
      <div className="relative z-10 bg-white/95 backdrop-blur-md p-10 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.3)] w-full max-w-md border border-white/20">
        <div className="text-center mb-10">
          <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/50">
            <ShieldCheck className="text-white" size={32} />
          </div>
          <h1 className="text-3xl font-black text-black tracking-tighter">ALICORP IA</h1>
          <p className="text-slate-600 font-bold text-sm mt-2">Content Governance Suite</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-xs font-black text-black uppercase mb-2 tracking-widest">Selecciona tu Rol</label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-black" size={20} />
              <select 
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-black rounded-xl font-bold text-black focus:ring-4 focus:ring-blue-500/20 outline-none appearance-none bg-white cursor-pointer"
              >
                <option value="Creador">Creador (Módulos I y II)</option>
                <option value="Aprobador A">Aprobador A (Texto)</option>
                <option value="Aprobador B">Aprobador B (Multimodal)</option>
              </select>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-black text-white py-4 rounded-xl font-black text-lg hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-xl"
          >
            <Lock size={20} /> ACCEDER AL SISTEMA
          </button>
        </form>
        
        <div className="mt-8 pt-6 border-t border-slate-200 text-center">
          <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">
            Challenge Full-Stack 2026
          </p>
        </div>
      </div>
    </div>
  );
}