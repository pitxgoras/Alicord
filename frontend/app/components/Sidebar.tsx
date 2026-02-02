'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, PenTool, ShieldCheck, Activity, LogOut } from 'lucide-react';

export default function Sidebar() {
  const [role, setRole] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Obtenemos el rol guardado en el login
    setRole(localStorage.getItem('userRole'));
  }, []);

  // No mostramos el sidebar en la página de login
  if (pathname === '/login') return null;

  const menuItems = [
    { name: 'Brand DNA', href: '/brand-dna', icon: LayoutDashboard, roles: ['Creador'] },
    { name: 'Creative Engine', href: '/creative', icon: PenTool, roles: ['Creador'] },
    { name: 'Governance', href: '/governance', icon: ShieldCheck, roles: ['Aprobador A', 'Aprobador B'] },
  ];

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    window.location.href = '/login';
  };

  return (
    <aside className="w-64 h-screen bg-slate-900 text-white p-5 fixed left-0 top-0 flex flex-col">
      <div className="mb-8 border-b border-slate-700 pb-4">
        <h1 className="text-xl font-bold text-blue-400">Alicorp Suite</h1>
        <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Rol: {role || 'Cargando...'}</p>
      </div>
      
      <nav className="flex flex-col gap-2 flex-1">
        {menuItems.map((item) => {
          // Filtro de seguridad visual: solo mostramos si el rol coincide
          if (role && !item.roles.includes(role)) return null;
          
          return (
            <Link key={item.href} href={item.href}
              className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                pathname === item.href ? 'bg-blue-600 text-white' : 'hover:bg-slate-800 text-slate-300'
              }`}>
              <item.icon size={20} />
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-5 border-t border-slate-700">
        <Link href="https://cloud.langfuse.com" target="_blank" className="flex items-center gap-3 p-3 text-orange-400 hover:bg-orange-900/20 rounded-lg mb-2">
          <Activity size={20} />
          <span className="text-sm font-medium">Logs Langfuse</span>
        </Link>
        <button onClick={handleLogout} className="w-full flex items-center gap-3 p-3 text-red-400 hover:bg-red-900/20 rounded-lg transition-all">
          <LogOut size={20} />
          <span className="text-sm font-medium">Cerrar Sesión</span>
        </button>
      </div>
    </aside>
  );
}