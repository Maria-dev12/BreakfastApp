import React, { useState } from 'react';
import { 
  Smartphone, 
  Code2, 
  BookOpen, 
  Download, 
  Sparkles, 
  Layers, 
  SplitSquareVertical, 
  HelpCircle,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { AndroidEmulator, FragmentType } from './components/AndroidEmulator';
import { CodeViewer } from './components/CodeViewer';
import { ProjectGuide } from './components/ProjectGuide';

export default function App() {
  const [activeView, setActiveView] = useState<'split' | 'emulator' | 'code' | 'guide'>('split');
  const [selectedFragment, setSelectedFragment] = useState<FragmentType>('fotos');

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      {/* Top Application Navbar */}
      <header className="h-16 bg-[#0f172a]/90 backdrop-blur-md border-b border-slate-800 px-4 sm:px-6 flex items-center justify-between z-40 sticky top-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-green-400 text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-emerald-500/20">
            🥗
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-sm sm:text-base font-bold text-white tracking-tight">
                Breakfast App • Entrega 2
              </h1>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
                Android SDK (Java + XML)
              </span>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">
              Arquitectura Dual-Pane • Dos Fragmentos en Pantalla • Código Completo
            </p>
          </div>
        </div>

        {/* View Mode Navigation Tabs */}
        <div className="flex items-center bg-[#1e293b] p-1 rounded-xl border border-slate-700/80">
          <button
            onClick={() => setActiveView('split')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeView === 'split'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
            title="Ver Emulador y Código simultáneamente"
          >
            <SplitSquareVertical className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Vista Dividida</span>
          </button>

          <button
            onClick={() => setActiveView('emulator')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeView === 'emulator'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
            title="Emulador interactivo en pantalla completa"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Emulador</span>
          </button>

          <button
            onClick={() => setActiveView('code')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeView === 'code'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
            title="Archivos de código Java y XML"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Código Android Studio</span>
          </button>

          <button
            onClick={() => setActiveView('guide')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeView === 'guide'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
            title="Guía técnica y rúbrica"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Guía & Rúbrica</span>
          </button>
        </div>
      </header>

      {/* Main Workspace Body */}
      <main className="flex-1 p-3 sm:p-4 md:p-6 overflow-hidden flex flex-col">
        {activeView === 'split' && (
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 min-h-[640px]">
            {/* Left Column: Android Emulator (5 cols on LG) */}
            <div className="lg:col-span-5 h-[680px] lg:h-full flex flex-col">
              <div className="flex items-center justify-between mb-2 px-1">
                <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                  <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
                  Simulador Android (Doble Fragmento en Vivo)
                </span>
                <span className="text-[11px] text-slate-500">
                  Prueba la interacción en tiempo real
                </span>
              </div>
              <div className="flex-1 min-h-0">
                <AndroidEmulator 
                  activeTab={selectedFragment} 
                  onSelectTab={setSelectedFragment} 
                />
              </div>
            </div>

            {/* Right Column: Code Viewer (7 cols on LG) */}
            <div className="lg:col-span-7 h-[680px] lg:h-full flex flex-col">
              <div className="flex items-center justify-between mb-2 px-1">
                <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                  Archivos Fuente para Android Studio
                </span>
                <span className="text-[11px] text-emerald-400 font-medium">
                  Listo para copiar / Exportar ZIP
                </span>
              </div>
              <div className="flex-1 min-h-0">
                <CodeViewer />
              </div>
            </div>
          </div>
        )}

        {activeView === 'emulator' && (
          <div className="flex-1 max-w-4xl w-full mx-auto h-[780px] flex flex-col">
            <AndroidEmulator 
              activeTab={selectedFragment} 
              onSelectTab={setSelectedFragment} 
            />
          </div>
        )}

        {activeView === 'code' && (
          <div className="flex-1 h-full min-h-[640px]">
            <CodeViewer />
          </div>
        )}

        {activeView === 'guide' && (
          <div className="flex-1 max-w-5xl w-full mx-auto overflow-y-auto">
            <ProjectGuide />
          </div>
        )}
      </main>

      {/* Bottom Footer Info */}
      <footer className="h-10 bg-[#0f172a] border-t border-slate-800/80 px-4 text-xs text-slate-400 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Entrega 2: 2 Fragmentos en pantalla (Menú + Contenedor Dinámico)</span>
        </div>
        <div className="flex items-center gap-4 text-slate-500 text-[11px]">
          <span>AndroidX FragmentManager</span>
          <span>•</span>
          <span>Java SE 17</span>
          <span>•</span>
          <span>Material Design 3</span>
        </div>
      </footer>
    </div>
  );
}
