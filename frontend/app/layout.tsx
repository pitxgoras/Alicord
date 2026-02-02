import Sidebar from './components/Sidebar'; // Importas lo que acabas de crear
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="flex bg-gray-50 text-slate-900">
        <Sidebar /> {/* El sidebar vive aquí */}
        <main className="flex-1 ml-64 p-8">
          {children} {/* Aquí se renderizan tus páginas de módulos */}
        </main>
      </body>
    </html>
  );
}