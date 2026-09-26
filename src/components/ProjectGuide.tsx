import React from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  FolderCheck, 
  AlertCircle, 
  Sparkles,
  Smartphone,
  ExternalLink
} from 'lucide-react';

export const ProjectGuide: React.FC = () => {
  return (
    <div className="bg-[#0f172a] text-slate-200 p-6 rounded-2xl border border-slate-800 space-y-6">
      <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
        <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <BookOpen className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-white">
            Guía de Integración y Rúbrica - Entrega 2 Android
          </h2>
          <p className="text-xs text-slate-400">
            Arquitectura de Doble Fragmento en la Misma Pantalla (Dual-Pane) en Java y XML Nativo
          </p>
        </div>
      </div>

      {/* Grid of 6 Requirements Analysis */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Req 1 */}
        <div className="bg-[#1e293b]/70 border border-slate-700/60 p-4 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase">
            <CheckCircle2 className="w-4 h-4" />
            <span>1. Contenedor Principal</span>
          </div>
          <h3 className="text-sm font-semibold text-white">activity_main.xml y MainActivity.java</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Layout horizontal que divide la pantalla mediante pesos (<code className="text-emerald-400 font-mono">layout_weight</code>).
            El lado izquierdo hospeda a <code className="text-emerald-400 font-mono">MenuFragment</code> y el lado derecho es un <code className="text-emerald-400 font-mono">FrameLayout</code> donde <code className="text-emerald-400 font-mono">FragmentManager</code> ejecuta <code className="text-emerald-400 font-mono">replace()</code> y <code className="text-emerald-400 font-mono">addToBackStack()</code>.
          </p>
        </div>

        {/* Req 2 */}
        <div className="bg-[#1e293b]/70 border border-slate-700/60 p-4 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase">
            <CheckCircle2 className="w-4 h-4" />
            <span>2. Fragmento Perfil</span>
          </div>
          <h3 className="text-sm font-semibold text-white">PerfilFragment.java y fragment_perfil.xml</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Envuelve toda la interfaz en un <code className="text-emerald-400 font-mono">ScrollView</code> para evitar cortes en pantallas pequeñas. Presenta foto de perfil, datos de alumno, objetivos de nutrición y contadores de hábitos.
          </p>
        </div>

        {/* Req 3 */}
        <div className="bg-[#1e293b]/70 border border-slate-700/60 p-4 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase">
            <CheckCircle2 className="w-4 h-4" />
            <span>3. Fragmento Fotos</span>
          </div>
          <h3 className="text-sm font-semibold text-white">FotosFragment.java y fragment_fotos.xml</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Galería vertical con tarjetas de platillos saludables. Cada <code className="text-emerald-400 font-mono">CardView</code> tiene su <code className="text-emerald-400 font-mono">setOnClickListener</code> que actualiza dinámicamente la tarjeta de detalle superior y dispara un <code className="text-emerald-400 font-mono">Toast</code> informativo.
          </p>
        </div>

        {/* Req 4 */}
        <div className="bg-[#1e293b]/70 border border-slate-700/60 p-4 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase">
            <CheckCircle2 className="w-4 h-4" />
            <span>4. Fragmento Video</span>
          </div>
          <h3 className="text-sm font-semibold text-white">VideoFragment.java y fragment_video.xml</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Integra el componente nativo <code className="text-emerald-400 font-mono">VideoView</code> junto con <code className="text-emerald-400 font-mono">MediaController</code>. Admite videos en <code className="text-emerald-400 font-mono">res/raw/</code> o URLs remotas (H.264/MP4) con control de ciclo de vida en <code className="text-emerald-400 font-mono">onPause()</code> y <code className="text-emerald-400 font-mono">onResume()</code>.
          </p>
        </div>

        {/* Req 5 */}
        <div className="bg-[#1e293b]/70 border border-slate-700/60 p-4 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase">
            <CheckCircle2 className="w-4 h-4" />
            <span>5. Fragmento Web</span>
          </div>
          <h3 className="text-sm font-semibold text-white">WebFragment.java y fragment_web.xml</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Barra de direcciones con <code className="text-emerald-400 font-mono">EditText</code> y <code className="text-emerald-400 font-mono">Button</code>. Se configura con <code className="text-emerald-400 font-mono">setJavaScriptEnabled(true)</code> y un <code className="text-emerald-400 font-mono">WebViewClient</code> para evitar que se abra en el navegador externo de Android.
          </p>
        </div>

        {/* Req 6 */}
        <div className="bg-[#1e293b]/70 border border-slate-700/60 p-4 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase">
            <CheckCircle2 className="w-4 h-4" />
            <span>6. Fragmento Botones</span>
          </div>
          <h3 className="text-sm font-semibold text-white">BotonesFragment.java y fragment_botones.xml</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Muestra una consola simulada en <code className="text-emerald-400 font-mono">txtResultado</code>. Registra eventos de <code className="text-emerald-400 font-mono">Button.setOnClickListener</code>, <code className="text-emerald-400 font-mono">CheckBox.setOnCheckedChangeListener</code>, <code className="text-emerald-400 font-mono">RadioGroup.setOnCheckedChangeListener</code> y <code className="text-emerald-400 font-mono">Switch</code>.
          </p>
        </div>
      </div>

      {/* Step by Step Android Studio Integration */}
      <div className="bg-[#111827] p-5 rounded-xl border border-slate-800 space-y-3">
        <h3 className="text-sm font-bold text-white flex items-center gap-2">
          <FolderCheck className="w-4 h-4 text-emerald-400" />
          Pasos para Ejecutar en Android Studio:
        </h3>
        <ol className="list-decimal list-inside space-y-2 text-xs text-slate-300 leading-relaxed">
          <li>
            <strong>Crear el Proyecto:</strong> Abre Android Studio, selecciona <code className="text-emerald-400 font-mono">New Project</code> → <code className="text-emerald-400 font-mono">Empty Views Activity</code>, selecciona el lenguaje <strong>Java</strong> y el nombre del paquete <code className="text-emerald-400 font-mono">com.example.breakfastapp</code>.
          </li>
          <li>
            <strong>Copiar Layouts XML:</strong> Pega los 7 archivos XML generados en la carpeta <code className="text-emerald-400 font-mono">app/src/main/res/layout/</code>.
          </li>
          <li>
            <strong>Copiar Clases Java:</strong> Pega los 7 archivos Java en la carpeta <code className="text-emerald-400 font-mono">app/src/main/java/com/example/breakfastapp/</code>.
          </li>
          <li>
            <strong>Permisos de Internet:</strong> Asegúrate de que <code className="text-emerald-400 font-mono">AndroidManifest.xml</code> incluya <code className="text-emerald-400 font-mono">&lt;uses-permission android:name="android.permission.INTERNET" /&gt;</code> para que el WebView y Video funcionen.
          </li>
          <li>
            <strong>Compilación:</strong> Pulsa <code className="text-emerald-400 font-mono">Sync Project with Gradle Files</code> y luego <code className="text-emerald-400 font-mono">Run 'app'</code> (Shift+F10) en tu emulador o dispositivo físico Android.
          </li>
        </ol>
      </div>
    </div>
  );
};
