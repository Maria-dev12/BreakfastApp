import React, { useState } from 'react';
import { 
  FileCode, 
  Copy, 
  Check, 
  Download, 
  FolderTree, 
  Search, 
  FileText, 
  Code2, 
  Sparkles,
  ExternalLink,
  Layers
} from 'lucide-react';
import JSZip from 'jszip';
import { ALL_ANDROID_FILES, AndroidFile } from '../data/androidFilesConfig';

export const CodeViewer: React.FC = () => {
  const [selectedFileId, setSelectedFileId] = useState<string>('activity_main_xml');
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isZipping, setIsZipping] = useState(false);

  const selectedFile = ALL_ANDROID_FILES.find(f => f.id === selectedFileId) || ALL_ANDROID_FILES[0];

  const filteredFiles = ALL_ANDROID_FILES.filter(file => {
    const matchesSearch = file.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          file.path.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          file.description.toLowerCase().includes(searchQuery.toLowerCase());
    if (categoryFilter === 'all') return matchesSearch;
    if (categoryFilter === 'layout') return matchesSearch && file.category === 'layout';
    if (categoryFilter === 'java') return matchesSearch && file.category === 'java';
    if (categoryFilter === 'config') return matchesSearch && (file.category === 'manifest' || file.category === 'values' || file.category === 'gradle');
    return matchesSearch;
  });

  const handleCopyCode = (content: string, id: string) => {
    navigator.clipboard.writeText(content);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(prev => (prev === id ? null : prev));
    }, 2000);
  };

  const handleDownloadZip = async () => {
    try {
      setIsZipping(true);
      const zip = new JSZip();

      // Add each file into its proper Android Studio structure
      ALL_ANDROID_FILES.forEach(file => {
        zip.file(file.path, file.content);
      });

      // Add a README.md for the coursework grader
      const readmeContent = `# Breakfast App - Recetas para un Desayuno Saludable
## Entrega 2 - Práctica Universitaria Android (Java y XML)

### Arquitectura Dual-Fragment
- **activity_main.xml**: Contenedor horizontal con \`FragmentContainerView\` (Izquierdo) y \`FrameLayout\` (Derecho).
- **MainActivity.java**: Implementa \`MenuFragment.OnMenuOptionSelectedListener\` y transacciones con \`FragmentManager\`.

### Fragmentos Implementados:
1. **MenuFragment**: Menú lateral vertical con botones estilizados (Perfil, Fotos, Video, Web, Botones).
2. **PerfilFragment**: ScrollView, imagen de perfil, datos de usuario y resumen semanal.
3. **FotosFragment**: Galería gastronómica, tarjeta de detalle dinámico y eventos onClick.
4. **VideoFragment**: VideoView con MediaController, controles Play/Pause y recetas paso a paso.
5. **WebFragment**: EditText, Button "Cargar Página", ProgressBar y WebView con WebViewClient.
6. **BotonesFragment**: Button, CheckBox, RadioGroup y Switch con consola Logcat / TextView txtResultado.

### Instrucciones de Importación en Android Studio:
1. Abrir Android Studio y crear un nuevo proyecto "Empty Views Activity" con lenguaje **Java**.
2. Copiar los archivos de la carpeta \`app/src/main/res/layout/\` a la carpeta de layouts de tu proyecto.
3. Copiar las clases Java de \`app/src/main/java/com/example/breakfastapp/\` a tu paquete Java.
4. Agregar los permisos de Internet en \`AndroidManifest.xml\`.
5. Sincronizar Gradle y compilar en tu emulador o dispositivo físico.
`;
      zip.file('README_ENTREGA_2.md', readmeContent);

      const blob = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'BreakfastApp_Entrega2_AndroidStudio.zip';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Error generating ZIP:', err);
    } finally {
      setIsZipping(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#090d16] text-slate-200 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
      {/* Top Action Toolbar */}
      <div className="bg-[#111827] border-b border-slate-800 px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Code2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-white flex items-center gap-2">
              Explorador de Código Android Studio
              <span className="text-[10px] bg-emerald-900/60 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/30">
                Java & XML Nativo
              </span>
            </h2>
            <p className="text-xs text-slate-400">
              Estructura completa de archivos lista para copiar y pegar en tu proyecto universitario
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleCopyCode(selectedFile.content, selectedFile.id)}
            className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-2 transition border border-slate-700 shadow-sm"
          >
            {copiedId === selectedFile.id ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">¡Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span>Copiar Este Archivo</span>
              </>
            )}
          </button>

          <button
            onClick={handleDownloadZip}
            disabled={isZipping}
            className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-2 transition shadow-md disabled:opacity-50"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{isZipping ? 'Comprimiendo...' : 'Descargar Proyecto (.zip)'}</span>
          </button>
        </div>
      </div>

      {/* Main Workspace Split (Tree on Left, Code on Right) */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* LEFT SIDEBAR: File Tree & Filter */}
        <div className="w-full md:w-80 bg-[#0d131f] border-r border-slate-800 flex flex-col shrink-0">
          {/* Search Input */}
          <div className="p-3 border-b border-slate-800">
            <div className="flex items-center bg-[#151c2c] px-2.5 py-1.5 rounded-lg border border-slate-700 text-xs">
              <Search className="w-3.5 h-3.5 text-slate-400 mr-2 shrink-0" />
              <input
                type="text"
                placeholder="Buscar archivo o clase..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-white outline-none w-full placeholder:text-slate-500"
              />
            </div>
          </div>

          {/* Category Filter Chips */}
          <div className="px-3 py-2 border-b border-slate-800/80 flex items-center gap-1.5 overflow-x-auto text-[11px]">
            <button
              onClick={() => setCategoryFilter('all')}
              className={`px-2 py-1 rounded-md transition ${categoryFilter === 'all' ? 'bg-emerald-500/20 text-emerald-300 font-bold' : 'text-slate-400 hover:bg-slate-800'}`}
            >
              Todos ({ALL_ANDROID_FILES.length})
            </button>
            <button
              onClick={() => setCategoryFilter('layout')}
              className={`px-2 py-1 rounded-md transition ${categoryFilter === 'layout' ? 'bg-emerald-500/20 text-emerald-300 font-bold' : 'text-slate-400 hover:bg-slate-800'}`}
            >
              XML Layouts
            </button>
            <button
              onClick={() => setCategoryFilter('java')}
              className={`px-2 py-1 rounded-md transition ${categoryFilter === 'java' ? 'bg-emerald-500/20 text-emerald-300 font-bold' : 'text-slate-400 hover:bg-slate-800'}`}
            >
              Clases Java
            </button>
            <button
              onClick={() => setCategoryFilter('config')}
              className={`px-2 py-1 rounded-md transition ${categoryFilter === 'config' ? 'bg-emerald-500/20 text-emerald-300 font-bold' : 'text-slate-400 hover:bg-slate-800'}`}
            >
              Config
            </button>
          </div>

          {/* File List */}
          <div className="flex-1 overflow-y-auto p-2 space-y-1">
            {filteredFiles.map(file => {
              const isSelected = file.id === selectedFileId;
              const isJava = file.language === 'java';
              const isXml = file.language === 'xml';

              return (
                <button
                  key={file.id}
                  onClick={() => setSelectedFileId(file.id)}
                  className={`w-full text-left p-2 rounded-lg transition-all flex items-start gap-2.5 ${
                    isSelected
                      ? 'bg-emerald-600/20 border border-emerald-500/40 text-white'
                      : 'hover:bg-slate-800/60 text-slate-300 border border-transparent'
                  }`}
                >
                  <div className={`p-1 rounded mt-0.5 shrink-0 ${
                    isJava ? 'bg-orange-500/20 text-orange-400' : isXml ? 'bg-sky-500/20 text-sky-400' : 'bg-purple-500/20 text-purple-400'
                  }`}>
                    <FileCode className="w-3.5 h-3.5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold truncate text-white">{file.name}</span>
                      <span className="text-[10px] font-mono uppercase text-slate-500">
                        {file.language}
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">
                      {file.path}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Summary Box */}
          <div className="p-3 border-t border-slate-800 bg-[#111827]/60 text-[11px] text-slate-400">
            <span className="font-semibold text-emerald-400">Total archivos:</span> {ALL_ANDROID_FILES.length} componentes listos para compilar en Android SDK 34 / Java 17.
          </div>
        </div>

        {/* RIGHT CODE DISPLAY */}
        <div className="flex-1 flex flex-col bg-[#070b12] overflow-hidden">
          {/* File Header */}
          <div className="bg-[#0e1422] border-b border-slate-800 px-4 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-emerald-400">
                {selectedFile.path}
              </span>
            </div>
            <span className="text-xs text-slate-400 hidden sm:inline">
              {selectedFile.description}
            </span>
          </div>

          {/* Code Viewer with Line Numbers */}
          <div className="flex-1 overflow-auto p-4 font-mono text-xs leading-relaxed text-slate-300">
            <pre className="select-text">
              <code>
                {selectedFile.content.split('\n').map((line, i) => (
                  <div key={i} className="table-row hover:bg-slate-800/40">
                    <span className="table-cell select-none pr-4 text-right text-slate-600 text-[11px] w-10">
                      {i + 1}
                    </span>
                    <span className="table-cell whitespace-pre">
                      {line}
                    </span>
                  </div>
                ))}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
