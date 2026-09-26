import React, { useState } from 'react';
import { 
  User, 
  Image as ImageIcon, 
  Video, 
  Globe, 
  ToggleLeft, 
  CheckCircle, 
  Flame, 
  Play, 
  Pause, 
  RotateCcw, 
  RotateCw, 
  Maximize2, 
  Search, 
  ExternalLink, 
  Heart, 
  RefreshCw, 
  X, 
  Check, 
  PieChart, 
  Lightbulb, 
  Terminal, 
  Edit3,
  Clock,
  Sparkles
} from 'lucide-react';

export type FragmentType = 'perfil' | 'fotos' | 'video' | 'web' | 'botones';

interface AndroidEmulatorProps {
  activeTab: FragmentType;
  onSelectTab: (tab: FragmentType) => void;
}

export const AndroidEmulator: React.FC<AndroidEmulatorProps> = ({ activeTab, onSelectTab }) => {
  // Toast state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 2800);
  };

  // State for FotosFragment
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const recipes = [
    {
      id: 1,
      title: 'Tostada con Aguacate y Huevo Poché',
      subtitle: 'Pan integral con puré de aguacate y semillas',
      badge: 'Foto Seleccionada: Tostada con Aguacate y Huevo',
      desc: 'Desayuno balanceado que aporta ácidos grasos saludables, proteínas completas de alto valor biológico y fibra vegetal. Ideal para iniciar la jornada de estudio con energía sostenida.',
      kcal: '280 kcal',
      time: '10 min',
      difficulty: 'Fácil',
      imgUrl: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 2,
      title: 'Bowl de Avena con Frutos Rojos',
      subtitle: 'Avena cocida en leche descremada con arándanos y fresas',
      badge: 'Foto Seleccionada: Bowl de Avena con Frutos Rojos',
      desc: 'Avena integral cocida a fuego lento con betaglucanos para el control glucémico, combinada con fresas, arándanos antioxidantes y un toque de canela ceilan.',
      kcal: '320 kcal',
      time: '8 min',
      difficulty: 'Muy Fácil',
      imgUrl: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 3,
      title: 'Batido Verde Energético',
      subtitle: 'Espinaca, manzana verde, plátano y agua de coco',
      badge: 'Foto Seleccionada: Batido Verde Energético',
      desc: 'Bebida isotónica natural repleta de clorofila, potasio y micronutrientes esenciales. Acelera la digestión matutina y promueve una óptima hidratación celular.',
      kcal: '190 kcal',
      time: '5 min',
      difficulty: 'Fácil',
      imgUrl: 'https://images.unsplash.com/photo-1556881286-fc6915169721?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 4,
      title: 'Parfait de Yogur Natural',
      subtitle: 'Yogur sin azúcar con nueces picadas y miel pura',
      badge: 'Foto Seleccionada: Parfait de Yogur Natural',
      desc: 'Capas de yogur griego desnatado con probióticos activos, nueces de nogal trituradas con omega 3 y un hilo de miel cruda de flores silvestres.',
      kcal: '250 kcal',
      time: '6 min',
      difficulty: 'Muy Fácil',
      imgUrl: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&auto=format&fit=crop&q=80'
    }
  ];

  // State for VideoFragment
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoProgress, setVideoProgress] = useState(40);

  // State for WebFragment
  const [urlInput, setUrlInput] = useState('https://nutricion-saludable.edu/desayunos');
  const [isWebLoading, setIsWebLoading] = useState(false);
  const [webProgress, setWebProgress] = useState(100);

  const handleLoadWeb = () => {
    setIsWebLoading(true);
    setWebProgress(25);
    setTimeout(() => setWebProgress(70), 300);
    setTimeout(() => {
      setWebProgress(100);
      setIsWebLoading(false);
      showToast('Página cargada en WebViewClient (HTTP 200 OK)');
    }, 700);
  };

  // State for BotonesFragment
  const [logOutput, setLogOutput] = useState('Última interacción: Botón Normal presionado - CheckBox 1 activo - Switch 1 activado');
  const [chk1, setChk1] = useState(true);
  const [chk2, setChk2] = useState(true);
  const [chk3, setChk3] = useState(false);
  const [activityLevel, setActivityLevel] = useState('Ligera');
  const [switchNotif, setSwitchNotif] = useState(true);
  const [switchData, setSwitchData] = useState(false);

  const updateLog = (eventText: string) => {
    const log = `Última interacción: ${eventText} | CheckBox 1 ${chk1 ? 'activo' : 'inactivo'} | Switch ${switchNotif ? 'ON' : 'OFF'}`;
    setLogOutput(log);
    showToast(eventText);
  };

  return (
    <div className="flex flex-col h-full bg-[#fbf9f9] text-[#1b1c1c] rounded-2xl overflow-hidden border border-slate-700 shadow-2xl relative select-none">
      {/* Top Header Mockup */}
      <header className="h-14 bg-white/95 backdrop-blur border-b border-[#efeded] px-4 flex items-center justify-between shrink-0 z-30">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm shadow-sm">
            🥗
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-[#006e1c] leading-tight">
                Recetario de Desayunos Saludables
              </span>
              <span className="text-[11px] text-[#6f7a6b] font-medium hidden sm:inline">
                - Proyecto Móvil
              </span>
            </div>
            <span className="text-[11px] text-[#6f7a6b] capitalize">
              Práctica Universitaria Android • {activeTab}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#006e1c] text-white flex items-center justify-center shadow-sm">
            <User className="w-4 h-4" />
          </div>
        </div>
      </header>

      {/* DUAL FRAGMENT CONTAINER (LAYOUT HORIZONTAL) */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* FRAGMENTO IZQUIERDO: MenuFragment (Persistent Left Pane) */}
        <aside className="w-24 sm:w-28 bg-[#f5f3f3] border-r border-[#efeded] flex flex-col items-center py-4 gap-2 shrink-0 z-20 overflow-y-auto">
          <div className="text-[10px] font-bold text-[#6f7a6b] uppercase tracking-wider mb-1">
            Menú
          </div>

          {/* Botón 1: Perfil */}
          <button
            onClick={() => {
              onSelectTab('perfil');
              showToast('Transacción: PerfilFragment cargado');
            }}
            className={`w-20 sm:w-24 h-16 rounded-xl flex flex-col items-center justify-center transition-all ${
              activeTab === 'perfil'
                ? 'bg-[#4caf50] text-white shadow-md font-semibold'
                : 'bg-white text-[#1b1c1c] hover:bg-slate-50 border border-[#e3e2e2]'
            }`}
          >
            <User className={`w-5 h-5 mb-1 ${activeTab === 'perfil' ? 'text-white' : 'text-[#006e1c]'}`} />
            <span className="text-xs">Perfil</span>
          </button>

          {/* Botón 2: Fotos */}
          <button
            onClick={() => {
              onSelectTab('fotos');
              showToast('Transacción: FotosFragment cargado');
            }}
            className={`w-20 sm:w-24 h-16 rounded-xl flex flex-col items-center justify-center transition-all ${
              activeTab === 'fotos'
                ? 'bg-[#4caf50] text-white shadow-md font-semibold'
                : 'bg-white text-[#1b1c1c] hover:bg-slate-50 border border-[#e3e2e2]'
            }`}
          >
            <ImageIcon className={`w-5 h-5 mb-1 ${activeTab === 'fotos' ? 'text-white' : 'text-[#006e1c]'}`} />
            <span className="text-xs">Fotos</span>
          </button>

          {/* Botón 3: Video */}
          <button
            onClick={() => {
              onSelectTab('video');
              showToast('Transacción: VideoFragment cargado');
            }}
            className={`w-20 sm:w-24 h-16 rounded-xl flex flex-col items-center justify-center transition-all ${
              activeTab === 'video'
                ? 'bg-[#4caf50] text-white shadow-md font-semibold'
                : 'bg-white text-[#1b1c1c] hover:bg-slate-50 border border-[#e3e2e2]'
            }`}
          >
            <Video className={`w-5 h-5 mb-1 ${activeTab === 'video' ? 'text-white' : 'text-[#006e1c]'}`} />
            <span className="text-xs">Video</span>
          </button>

          {/* Botón 4: Web */}
          <button
            onClick={() => {
              onSelectTab('web');
              showToast('Transacción: WebFragment cargado');
            }}
            className={`w-20 sm:w-24 h-16 rounded-xl flex flex-col items-center justify-center transition-all ${
              activeTab === 'web'
                ? 'bg-[#4caf50] text-white shadow-md font-semibold'
                : 'bg-white text-[#1b1c1c] hover:bg-slate-50 border border-[#e3e2e2]'
            }`}
          >
            <Globe className={`w-5 h-5 mb-1 ${activeTab === 'web' ? 'text-white' : 'text-[#006e1c]'}`} />
            <span className="text-xs">Web</span>
          </button>

          {/* Botón 5: Botones */}
          <button
            onClick={() => {
              onSelectTab('botones');
              showToast('Transacción: BotonesFragment cargado');
            }}
            className={`w-20 sm:w-24 h-16 rounded-xl flex flex-col items-center justify-center transition-all ${
              activeTab === 'botones'
                ? 'bg-[#4caf50] text-white shadow-md font-semibold'
                : 'bg-white text-[#1b1c1c] hover:bg-slate-50 border border-[#e3e2e2]'
            }`}
          >
            <ToggleLeft className={`w-5 h-5 mb-1 ${activeTab === 'botones' ? 'text-white' : 'text-[#006e1c]'}`} />
            <span className="text-xs">Botones</span>
          </button>
        </aside>

        {/* FRAGMENTO DERECHO: Contenedor Dinámico Reemplazable */}
        <main className="flex-1 bg-white overflow-y-auto p-4 sm:p-6 relative">
          {/* ==================== 1. PERFIL FRAGMENT ==================== */}
          {activeTab === 'perfil' && (
            <div className="max-w-2xl mx-auto space-y-4 animate-in fade-in duration-200">
              {/* Header Box */}
              <div className="bg-[#f5f3f3] p-4 rounded-xl flex flex-col gap-1 border border-[#efeded]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5 text-[#006e1c]" />
                    <h2 className="text-lg font-bold text-[#1b1c1c]">Mi Perfil</h2>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#abf4ac] text-[#002107]">
                    Miembro Activo
                  </span>
                </div>
                <p className="text-xs text-[#3f4a3c]">
                  Plan Bienestar Matutino • Miembro desde <span className="font-semibold">Marzo 2024</span>
                </p>
              </div>

              {/* Avatar + Datos */}
              <div className="bg-white p-4 rounded-xl border border-[#efeded] shadow-sm flex flex-col sm:flex-row items-center gap-4">
                <div className="flex flex-col items-center">
                  <div className="relative w-24 h-24 rounded-full p-1 bg-[#e9e8e7]">
                    <img 
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80"
                      alt="Avatar"
                      className="w-full h-full object-cover rounded-full"
                    />
                    <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-[#4caf50] text-white flex items-center justify-center text-xs shadow">
                      ✓
                    </div>
                  </div>
                  <span className="mt-2 text-xs font-semibold text-[#006e1c] flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> Verificado
                  </span>
                </div>

                <div className="flex-1 w-full space-y-2">
                  <div className="bg-[#f5f3f3] p-3 rounded-lg flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-[#6f7a6b] uppercase">Nombre Completo</span>
                      <p className="text-sm font-bold text-[#1b1c1c]">Carlos Andrés Mendoza Silva</p>
                    </div>
                    <Edit3 className="w-4 h-4 text-[#6f7a6b]" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div className="bg-[#f5f3f3] p-2.5 rounded-lg">
                      <span className="text-[10px] font-bold text-[#6f7a6b] uppercase block">Ocupación / Profesión</span>
                      <span className="font-medium text-[#1b1c1c]">Diseñador Gráfico & Creativo</span>
                    </div>
                    <div className="bg-[#f5f3f3] p-2.5 rounded-lg">
                      <span className="text-[10px] font-bold text-[#6f7a6b] uppercase block">Código de Usuario</span>
                      <span className="font-bold text-[#006e1c] font-mono">#HB-84920</span>
                    </div>
                    <div className="bg-[#f5f3f3] p-2.5 rounded-lg">
                      <span className="text-[10px] font-bold text-[#6f7a6b] uppercase block">Plan de Alimentación</span>
                      <span className="text-[#1b1c1c]">Estilo Saludable & Vitalidad</span>
                    </div>
                    <div className="bg-[#f5f3f3] p-2.5 rounded-lg">
                      <span className="text-[10px] font-bold text-[#6f7a6b] uppercase block">Objetivo de Salud</span>
                      <span className="text-[#1b1c1c]">Desayunos balanceados</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ScrollView Simulado de Hábitos */}
              <div className="bg-white p-4 rounded-xl border border-[#efeded] shadow-sm space-y-3">
                <div className="flex items-center justify-between border-b border-[#efeded] pb-2">
                  <span className="text-xs font-bold text-[#006e1c] flex items-center gap-1.5 uppercase">
                    <Sparkles className="w-4 h-4" /> Hábitos y Rutinas Matutinas
                  </span>
                  <span className="text-[11px] bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded-full font-medium">
                    Actualizado hoy
                  </span>
                </div>

                <div className="space-y-2 text-xs text-[#3f4a3c]">
                  <div className="flex items-start gap-2 bg-[#f5f3f3] p-2.5 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-[#006e1c] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#1b1c1c] block">Educación Secundaria Completa</span>
                      <span>Bachiller Académico con Énfasis en Ciencias Naturales (2020)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 bg-[#f5f3f3] p-2.5 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-[#006e1c] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#1b1c1c] block">Grado en Tecnología de Software</span>
                      <span>En curso (75% completado) • Facultad de Ingeniería</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 bg-[#f5f3f3] p-2.5 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-[#006e1c] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#1b1c1c] block">Cursos Certificados de Desarrollo</span>
                      <span>Java SE 17, Fundamentos de Android Core SDK y Jetpack Essentials</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Summary Footer */}
              <div className="bg-[#f5f3f3] p-4 rounded-xl flex items-center justify-between gap-3 border border-[#efeded]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-[#006e1c]">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#006e1c] uppercase block">
                      Resumen de Progreso Semanal
                    </span>
                    <p className="text-xs text-[#1b1c1c]">
                      <strong className="text-[#006e1c]">5 de 7 días</strong> desayunando saludable • <strong>14 recetas</strong> guardadas
                    </p>
                  </div>
                </div>

                <button 
                  onClick={() => showToast('Abriendo PerfilEditActivity en Android...')}
                  className="px-4 py-2 bg-[#006e1c] text-white rounded-lg text-xs font-bold hover:bg-emerald-800 transition shadow"
                >
                  Editar Información
                </button>
              </div>
            </div>
          )}

          {/* ==================== 2. FOTOS FRAGMENT ==================== */}
          {activeTab === 'fotos' && (
            <div className="max-w-2xl mx-auto space-y-4 animate-in fade-in duration-200">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <ImageIcon className="w-5 h-5 text-[#006e1c]" />
                  <h2 className="text-lg font-bold text-[#1b1c1c]">Galería Gastronómica</h2>
                </div>
                <p className="text-xs text-[#3f4a3c]">
                  Demostración de ScrollView y eventos onClick en ImageView
                </p>
              </div>

              {/* DETALLE CARD */}
              <div className="bg-white rounded-xl border border-[#efeded] shadow-sm p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#3f4a3c] uppercase">
                    Detalle de la Imagen Seleccionada:
                  </span>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#abf4ac] text-[#002107]">
                    ✔ Activo
                  </span>
                </div>

                <div className="relative h-48 rounded-xl overflow-hidden bg-slate-100">
                  <img 
                    src={recipes[selectedPhotoIndex].imgUrl}
                    alt={recipes[selectedPhotoIndex].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-white flex items-center justify-between">
                    <span className="text-xs font-semibold drop-shadow">
                      {recipes[selectedPhotoIndex].badge}
                    </span>
                    <Search className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#1b1c1c]">
                    {recipes[selectedPhotoIndex].title}
                  </h3>
                  <p className="text-xs text-[#3f4a3c] mt-1 leading-relaxed">
                    {recipes[selectedPhotoIndex].desc}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                  <div className="bg-[#f5f3f3] p-2 rounded-lg">
                    <span className="text-[10px] text-[#3f4a3c] block">Calorías</span>
                    <span className="text-xs font-bold text-[#006e1c]">{recipes[selectedPhotoIndex].kcal}</span>
                  </div>
                  <div className="bg-[#f5f3f3] p-2 rounded-lg">
                    <span className="text-[10px] text-[#3f4a3c] block">Tiempo prep.</span>
                    <span className="text-xs font-bold text-[#1b1c1c]">{recipes[selectedPhotoIndex].time}</span>
                  </div>
                  <div className="bg-[#f5f3f3] p-2 rounded-lg">
                    <span className="text-[10px] text-[#3f4a3c] block">Dificultad</span>
                    <span className="text-xs font-bold text-[#286b33]">{recipes[selectedPhotoIndex].difficulty}</span>
                  </div>
                </div>
              </div>

              {/* LISTA VERTICAL SCROLLVIEW */}
              <div className="space-y-2">
                <div className="flex items-center justify-between px-1">
                  <span className="text-[11px] font-bold text-[#3f4a3c] uppercase">
                    Opciones del Menú (ScrollView)
                  </span>
                  <span className="text-[11px] text-[#6f7a6b]">4 recetas registradas</span>
                </div>

                {recipes.map((item, idx) => (
                  <div 
                    key={item.id}
                    onClick={() => {
                      setSelectedPhotoIndex(idx);
                      showToast(`Toast: Receta seleccionada -> ${item.title}`);
                    }}
                    className={`p-2.5 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${
                      selectedPhotoIndex === idx
                        ? 'bg-emerald-50/70 border-emerald-500 shadow-sm'
                        : 'bg-white border-[#efeded] hover:bg-slate-50'
                    }`}
                  >
                    <img 
                      src={item.imgUrl} 
                      alt={item.title} 
                      className="w-14 h-14 rounded-lg object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold text-[#1b1c1c] truncate">{item.title}</h4>
                        {selectedPhotoIndex === idx && (
                          <span className="text-[10px] font-bold bg-[#4caf50] text-white px-2 py-0.5 rounded-full shrink-0">
                            ✔ Seleccionado
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-[#3f4a3c] truncate mt-0.5">{item.subtitle}</p>
                      <div className="flex items-center gap-2 mt-1 text-[10px]">
                        <span className="text-[#006e1c] font-bold">{item.kcal}</span>
                        <span>•</span>
                        <span className="text-[#6f7a6b]">{item.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ==================== 3. VIDEO FRAGMENT ==================== */}
          {activeTab === 'video' && (
            <div className="max-w-2xl mx-auto space-y-4 animate-in fade-in duration-200">
              <div className="bg-[#efeded] p-3.5 rounded-xl border border-[#e3e2e2]">
                <div className="flex items-center gap-1.5 text-[#006e1c] text-xs font-bold uppercase mb-0.5">
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Lifecycle: onResume()</span>
                </div>
                <h2 className="text-lg font-bold text-[#1b1c1c]">Recetas en Video</h2>
                <p className="text-xs text-[#3f4a3c]">Uso de componente VideoView y MediaController en Android</p>
              </div>

              {/* VIDEOVIEW PLAYER CONTAINER */}
              <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-lg group">
                <img 
                  src="https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=900&auto=format&fit=crop&q=80"
                  alt="Video thumbnail"
                  className={`w-full h-full object-cover transition duration-300 ${isPlaying ? 'brightness-105' : 'brightness-75'}`}
                />

                {/* Badge R.raw */}
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur text-[#abf4ac] text-[11px] font-mono px-2.5 py-1 rounded-md shadow">
                  R.raw.receta_batido_matutino
                </div>

                {/* Center Play/Pause button */}
                <button 
                  onClick={() => {
                    setIsPlaying(!isPlaying);
                    showToast(isPlaying ? 'VideoView.pause()' : 'VideoView.start()');
                  }}
                  className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-white/90 text-[#006e1c] flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition"
                >
                  {isPlaying ? <Pause className="w-7 h-7 fill-current" /> : <Play className="w-7 h-7 fill-current ml-0.5" />}
                </button>

                {/* Simulated Android MediaController */}
                <div className="absolute bottom-0 inset-x-0 bg-black/90 p-2.5 text-white flex flex-col gap-1.5 backdrop-blur-sm">
                  {/* SeekBar */}
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-mono text-[11px] text-slate-300">02:15</span>
                    <input 
                      type="range" 
                      min="0" 
                      max="100" 
                      value={videoProgress}
                      onChange={(e) => setVideoProgress(Number(e.target.value))}
                      className="flex-1 accent-[#4caf50] h-1.5 cursor-pointer"
                    />
                    <span className="font-mono text-[11px] text-slate-400">05:40</span>
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center justify-between text-slate-200">
                    <div className="flex items-center gap-3">
                      <button onClick={() => setIsPlaying(!isPlaying)} className="hover:text-emerald-400">
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </button>
                      <button onClick={() => showToast('Rebobinar 10s')} className="hover:text-emerald-400">
                        <RotateCcw className="w-4 h-4" />
                      </button>
                      <button onClick={() => showToast('Adelantar 10s')} className="hover:text-emerald-400">
                        <RotateCw className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center gap-2 text-[11px]">
                      <span className="text-slate-400">HD 720p</span>
                      <Maximize2 className="w-4 h-4 hover:text-emerald-400 cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div className="bg-white p-4 rounded-xl border border-[#efeded] shadow-sm space-y-2">
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#abf4ac] text-[#002107]">
                  Desayuno Rápido
                </span>
                <h3 className="text-base font-bold text-[#1b1c1c]">
                  Preparación de Batido Proteico y Energético Matutino
                </h3>
                <span className="inline-block text-[11px] font-mono bg-blue-50 text-blue-800 px-2 py-0.5 rounded">
                  android:id="@+id/videoView"
                </span>
                <p className="text-xs text-[#3f4a3c] leading-relaxed">
                  Tutorial paso a paso diseñado para estudiantes universitarios. Explica cómo combinar frutas, semillas de chía y leche vegetal para un desayuno rápido y nutritivo antes de clases.
                </p>
              </div>

              {/* Steps */}
              <div className="bg-white p-4 rounded-xl border border-[#efeded] shadow-sm space-y-2.5">
                <h4 className="text-xs font-bold text-[#006e1c] uppercase flex items-center gap-1.5">
                  <Clock className="w-4 h-4" /> Instrucciones Resumidas
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="flex gap-2.5 items-start bg-[#f5f3f3] p-2.5 rounded-lg">
                    <span className="w-5 h-5 rounded-full bg-[#4caf50] text-white flex items-center justify-center font-bold text-xs shrink-0">1</span>
                    <div>
                      <span className="font-bold text-[#1b1c1c] block">Carga de ingredientes sólidos</span>
                      <span className="text-[#3f4a3c]">Colocar plátano congelado y frutos rojos en el vaso de la licuadora.</span>
                    </div>
                  </div>
                  <div className="flex gap-2.5 items-start bg-[#f5f3f3] p-2.5 rounded-lg">
                    <span className="w-5 h-5 rounded-full bg-[#4caf50] text-white flex items-center justify-center font-bold text-xs shrink-0">2</span>
                    <div>
                      <span className="font-bold text-[#1b1c1c] block">Adición de base líquida</span>
                      <span className="text-[#3f4a3c]">Agregar 250ml de leche o bebida vegetal (almendras, avena o soya).</span>
                    </div>
                  </div>
                  <div className="flex gap-2.5 items-start bg-[#f5f3f3] p-2.5 rounded-lg">
                    <span className="w-5 h-5 rounded-full bg-[#4caf50] text-white flex items-center justify-center font-bold text-xs shrink-0">3</span>
                    <div>
                      <span className="font-bold text-[#1b1c1c] block">Procesado y consistencia</span>
                      <span className="text-[#3f4a3c]">Licuar a velocidad media-alta durante 45 segundos hasta obtener textura homogénea.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ==================== 4. WEB FRAGMENT ==================== */}
          {activeTab === 'web' && (
            <div className="max-w-2xl mx-auto space-y-4 animate-in fade-in duration-200">
              <div className="bg-[#f5f3f3] p-3.5 rounded-xl border border-[#efeded]">
                <span className="text-[10px] font-bold text-[#006e1c] uppercase tracking-wider block">
                  ANDROID STUDIO LAB • VISTA WEB
                </span>
                <h2 className="text-lg font-bold text-[#1b1c1c]">Vista Web - Navegador Integrado</h2>
                <p className="text-xs text-[#3f4a3c]">Implementación de android.webkit.WebView y EditText</p>
              </div>

              {/* URL BAR + BUTTON */}
              <div className="bg-white p-3 rounded-xl border border-[#efeded] shadow-sm flex flex-col sm:flex-row gap-2">
                <div className="flex-1 flex items-center bg-[#f5f3f3] px-3 py-1.5 rounded-lg border border-[#e3e2e2]">
                  <Globe className="w-4 h-4 text-[#6f7a6b] mr-2 shrink-0" />
                  <input 
                    type="text" 
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleLoadWeb()}
                    placeholder="https://..."
                    className="w-full bg-transparent text-xs text-[#1b1c1c] outline-none"
                  />
                  {urlInput && (
                    <button onClick={() => setUrlInput('')} className="text-slate-400 hover:text-slate-600">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                <button 
                  onClick={handleLoadWeb}
                  disabled={isWebLoading}
                  className="px-4 py-2 bg-[#006e1c] text-white rounded-lg text-xs font-bold hover:bg-emerald-800 transition flex items-center justify-center gap-1.5 shadow"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isWebLoading ? 'animate-spin' : ''}`} />
                  <span>{isWebLoading ? 'Cargando...' : 'Cargar Página'}</span>
                </button>
              </div>

              {/* Progress & Status */}
              <div className="space-y-1">
                <div className="h-1 bg-slate-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#006e1c] transition-all duration-300"
                    style={{ width: `${webProgress}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#006e1c] px-1 font-medium">
                  <span>✔ Página cargada con éxito (HTTP 200 OK)</span>
                  <span className="text-[#3f4a3c]">SSL Activo • TLS 1.3</span>
                </div>
              </div>

              {/* WEBVIEW SIMULATED CONTAINER */}
              <div className="bg-white rounded-xl border border-[#efeded] shadow-sm overflow-hidden">
                <div className="bg-[#e9e8e7] px-4 py-2 flex items-center justify-between border-b border-[#efeded]">
                  <span className="text-xs font-bold text-[#1b1c1c] flex items-center gap-1.5 truncate">
                    <Globe className="w-3.5 h-3.5 text-[#005faf]" />
                    Portal de Nutrición y Salud Estudiantil
                  </span>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  </div>
                </div>

                <div className="p-4 sm:p-6 space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                      Campus Nutrición
                    </span>
                    <h3 className="text-base font-bold text-[#1b1c1c] mt-1">
                      Guía de Desayunos Saludables para Estudiantes Universitarios
                    </h3>
                  </div>

                  <img 
                    src="https://images.unsplash.com/photo-1493770348161-369560ae357d?w=800&auto=format&fit=crop&q=80" 
                    alt="Healthy Breakfast spread"
                    className="w-full h-40 object-cover rounded-xl shadow-sm"
                  />

                  <p className="text-xs text-[#3f4a3c] leading-relaxed">
                    Una nutrición adecuada durante las horas de estudio incrementa la concentración y evita la fatiga mental durante los exámenes.
                  </p>

                  {/* Nutrition Plate */}
                  <div className="bg-[#f5f3f3] p-3.5 rounded-xl space-y-2 border border-[#efeded]">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#006e1c]">
                      <PieChart className="w-4 h-4" />
                      <span>Regla del Plato Matutino</span>
                    </div>
                    <p className="text-[11px] text-[#3f4a3c]">Estructura equilibrada recomendada por Bienestar:</p>
                    <div className="grid grid-cols-3 gap-2 text-center text-xs">
                      <div className="bg-emerald-100/70 p-2 rounded-lg">
                        <span className="font-bold text-emerald-900 block text-sm">50%</span>
                        <span className="text-[10px] text-emerald-800">Frutas & Vegetales</span>
                      </div>
                      <div className="bg-blue-100/70 p-2 rounded-lg">
                        <span className="font-bold text-blue-900 block text-sm">25%</span>
                        <span className="text-[10px] text-blue-800">Proteínas Limpias</span>
                      </div>
                      <div className="bg-amber-100/70 p-2 rounded-lg">
                        <span className="font-bold text-amber-900 block text-sm">25%</span>
                        <span className="text-[10px] text-amber-800">Granos Enteros</span>
                      </div>
                    </div>
                  </div>

                  {/* 3 Tips */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-[#1b1c1c] flex items-center gap-1.5">
                      <Lightbulb className="w-4 h-4 text-amber-500" />
                      3 Consejos Clave para el Rendimiento Académico:
                    </span>
                    <div className="space-y-1.5 text-xs">
                      <div className="p-2 bg-[#f5f3f3] rounded-lg flex items-start gap-2">
                        <span className="w-4 h-4 rounded-full bg-[#006e1c] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">1</span>
                        <div>
                          <strong className="text-[#1b1c1c]">No saltarse el desayuno antes de las 9:00 AM</strong>
                          <p className="text-[11px] text-[#3f4a3c]">Activa el metabolismo circadiano y regula picos de cortisol.</p>
                        </div>
                      </div>
                      <div className="p-2 bg-[#f5f3f3] rounded-lg flex items-start gap-2">
                        <span className="w-4 h-4 rounded-full bg-[#006e1c] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">2</span>
                        <div>
                          <strong className="text-[#1b1c1c]">Mantener hidratación continua</strong>
                          <p className="text-[11px] text-[#3f4a3c]">Un vaso con limón en ayunas favorece la absorción de nutrientes.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ==================== 5. BOTONES FRAGMENT ==================== */}
          {activeTab === 'botones' && (
            <div className="max-w-2xl mx-auto space-y-4 animate-in fade-in duration-200">
              <div className="bg-white p-3 rounded-xl border border-[#efeded]">
                <h2 className="text-lg font-bold text-[#1b1c1c]">Botones y Controles</h2>
                <p className="text-xs text-[#3f4a3c]">Demostración de Button, CheckBox, RadioGroup y Switch</p>
              </div>

              {/* LOGCAT TERMINAL TXTRESULTADO */}
              <div className="bg-[#303031] text-white p-3.5 rounded-xl shadow-md space-y-2">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="font-bold text-[#abf4ac] flex items-center gap-1 uppercase tracking-wider">
                    <Terminal className="w-3.5 h-3.5" /> LogCat Emulator • TextView txtResultado
                  </span>
                  <span className="bg-white/10 px-1.5 py-0.5 rounded font-mono">tag: UI_EVENT</span>
                </div>
                <div className="bg-[#1b1c1c] p-2.5 rounded-lg font-mono text-xs text-[#78dc77] break-words border border-white/5">
                  {logOutput}
                </div>
              </div>

              {/* SECCIÓN 1: BOTONES ESTÁNDAR */}
              <div className="bg-white p-4 rounded-xl border border-[#efeded] shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-[#1b1c1c] uppercase">
                    1. Botones Estándar (Button / AppCompatButton)
                  </h3>
                  <span className="text-[10px] text-[#6f7a6b] font-mono">layout_width="match_parent"</span>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => updateLog('Botón Normal presionado (Acción Primaria)')}
                    className="w-full py-2.5 bg-[#4caf50] hover:bg-emerald-600 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow transition"
                  >
                    <CheckCircle className="w-4 h-4" />
                    <span>Botón Normal (Acción Primaria)</span>
                  </button>

                  <button
                    onClick={() => updateLog('Botón Favorito presionado (Agregado a favoritos)')}
                    className="w-full py-2.5 bg-[#54a0fe] hover:bg-blue-600 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow transition"
                  >
                    <Heart className="w-4 h-4 fill-current" />
                    <span>Botón con Icono (Favorito)</span>
                  </button>

                  <button
                    disabled
                    className="w-full py-2.5 bg-[#e3e2e2] text-[#6f7a6b] rounded-xl text-xs font-medium cursor-not-allowed flex items-center justify-center gap-1.5"
                  >
                    <span>🚫 Botón Deshabilitado (android:enabled="false")</span>
                  </button>
                </div>
              </div>

              {/* SECCIÓN 2: CHECKBOXES */}
              <div className="bg-white p-4 rounded-xl border border-[#efeded] shadow-sm space-y-3">
                <h3 className="text-xs font-bold text-[#1b1c1c] uppercase">
                  2. Controles de Selección Múltiple (CheckBox)
                </h3>

                <div className="space-y-2 text-xs">
                  <label className="flex items-center gap-3 p-2.5 rounded-xl bg-[#f5f3f3] cursor-pointer hover:bg-slate-100 transition">
                    <input 
                      type="checkbox"
                      checked={chk1}
                      onChange={(e) => {
                        setChk1(e.target.checked);
                        updateLog(`CheckBox 1: Recordar desayuno -> ${e.target.checked ? 'ACTIVADO' : 'DESACTIVADO'}`);
                      }}
                      className="w-4 h-4 accent-[#4caf50] rounded"
                    />
                    <div>
                      <span className="font-medium text-[#1b1c1c] block">Recordar desayuno diario a las 7:30 AM</span>
                      <span className="text-[10px] text-[#6f7a6b] font-mono">android:id="@+id/chkBreakfastReminder"</span>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-2.5 rounded-xl bg-[#f5f3f3] cursor-pointer hover:bg-slate-100 transition">
                    <input 
                      type="checkbox"
                      checked={chk2}
                      onChange={(e) => {
                        setChk2(e.target.checked);
                        updateLog(`CheckBox 2: Sin lactosa -> ${e.target.checked ? 'ACTIVADO' : 'DESACTIVADO'}`);
                      }}
                      className="w-4 h-4 accent-[#4caf50] rounded"
                    />
                    <div>
                      <span className="font-medium text-[#1b1c1c] block">Incluir recetas sin lactosa</span>
                      <span className="text-[10px] text-[#6f7a6b] font-mono">android:id="@+id/chkLactoseFree"</span>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-2.5 rounded-xl bg-[#f5f3f3] cursor-pointer hover:bg-slate-100 transition">
                    <input 
                      type="checkbox"
                      checked={chk3}
                      onChange={(e) => {
                        setChk3(e.target.checked);
                        updateLog(`CheckBox 3: Modo offline -> ${e.target.checked ? 'ACTIVADO' : 'DESACTIVADO'}`);
                      }}
                      className="w-4 h-4 accent-[#4caf50] rounded"
                    />
                    <div>
                      <span className="font-medium text-[#1b1c1c] block">Modo offline para recetas descargadas</span>
                      <span className="text-[10px] text-[#6f7a6b] font-mono">android:id="@+id/chkOfflineMode"</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* SECCIÓN 3: RADIOGROUP */}
              <div className="bg-white p-4 rounded-xl border border-[#efeded] shadow-sm space-y-3">
                <div>
                  <h3 className="text-xs font-bold text-[#1b1c1c] uppercase">
                    3. Selección Única (RadioGroup / RadioButton)
                  </h3>
                  <p className="text-[11px] text-[#3f4a3c]">Nivel de actividad matutina:</p>
                </div>

                <div className="space-y-2 text-xs">
                  {['Ligera (Estudio y clases teóricas)', 'Moderada (Caminata al campus / laboratorio)', 'Intensa (Deporte universitario matutino)'].map((level) => (
                    <label key={level} className="flex items-center gap-3 p-2.5 rounded-xl bg-[#f5f3f3] cursor-pointer hover:bg-slate-100 transition">
                      <input 
                        type="radio" 
                        name="actLevel"
                        checked={activityLevel === level}
                        onChange={() => {
                          setActivityLevel(level);
                          updateLog(`RadioButton seleccionado: ${level.split(' ')[0]}`);
                        }}
                        className="w-4 h-4 accent-[#006e1c]"
                      />
                      <span className="text-[#1b1c1c]">{level}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* SECCIÓN 4: SWITCHES */}
              <div className="bg-white p-4 rounded-xl border border-[#efeded] shadow-sm space-y-3">
                <h3 className="text-xs font-bold text-[#1b1c1c] uppercase">
                  4. Interruptores de Estado (Switch / SwitchCompat)
                </h3>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#f5f3f3]">
                    <div>
                      <span className="font-medium text-[#1b1c1c] block">Notificaciones de hábitos saludables</span>
                      <span className="text-[10px] text-[#6f7a6b] font-mono">android:id="@+id/switchNotifications"</span>
                    </div>
                    <input 
                      type="checkbox" 
                      checked={switchNotif}
                      onChange={(e) => {
                        setSwitchNotif(e.target.checked);
                        updateLog(`Switch Notificaciones: ${e.target.checked ? 'ACTIVADO' : 'DESACTIVADO'}`);
                      }}
                      className="w-5 h-5 accent-[#4caf50] cursor-pointer"
                    />
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#f5f3f3]">
                    <div>
                      <span className="font-medium text-[#1b1c1c] block">Modo ahorro de datos móviles</span>
                      <span className="text-[10px] text-[#6f7a6b] font-mono">android:id="@+id/switchDataSaver"</span>
                    </div>
                    <input 
                      type="checkbox" 
                      checked={switchData}
                      onChange={(e) => {
                        setSwitchData(e.target.checked);
                        updateLog(`Switch Ahorro Datos: ${e.target.checked ? 'ACTIVADO' : 'DESACTIVADO'}`);
                      }}
                      className="w-5 h-5 accent-[#4caf50] cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* ANDROID FLOATING TOAST SIMULATION */}
      {toastMessage && (
        <div className="absolute bottom-6 inset-x-0 mx-auto w-max max-w-sm px-4 py-2 bg-[#303031]/95 text-white text-xs rounded-full shadow-2xl backdrop-blur-md flex items-center gap-2 z-50 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <span className="w-2 h-2 rounded-full bg-[#abf4ac] animate-pulse" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
};
