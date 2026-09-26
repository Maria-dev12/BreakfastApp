import { AndroidFile } from './androidFiles';

export const ANDROID_FILES_JAVA: AndroidFile[] = [
  {
    id: 'main_activity_java',
    name: 'MainActivity.java',
    path: 'app/src/main/java/com/example/breakfastapp/MainActivity.java',
    language: 'java',
    category: 'java',
    description: 'Actividad principal: Implementa MenuFragment.OnMenuOptionSelectedListener y gestiona las transacciones entre los 5 fragmentos.',
    content: `package com.example.breakfastapp;

import android.os.Bundle;
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentTransaction;

/**
 * MainActivity - Controladora de la Entrega 2 "Breakfast App"
 * Gestiona la arquitectura Dual-Pane con dos fragmentos en pantalla:
 * - Fragmento Izquierdo: MenuFragment (Navegación)
 * - Fragmento Derecho: Contenido dinámico (Perfil, Fotos, Video, Web, Botones)
 */
public class MainActivity extends AppCompatActivity implements MenuFragment.OnMenuOptionSelectedListener {

    private FragmentManager fragmentManager;
    private int currentSelectedOption = 1; // 0=Perfil, 1=Fotos, 2=Video, 3=Web, 4=Botones

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Inicializar FragmentManager de AndroidX
        fragmentManager = getSupportFragmentManager();

        // Cargar por defecto el fragmento inicial (FotosFragment según el mockup principal)
        if (savedInstanceState == null) {
            cargarFragmento(new FotosFragment(), false);
        }
    }

    /**
     * Callback invocado por MenuFragment cuando el usuario pulsa un botón
     * @param opcionId Identificador de la opción seleccionada (0 a 4)
     */
    @Override
    public void onMenuOptionSelected(int opcionId) {
        this.currentSelectedOption = opcionId;
        Fragment fragmentoDestino = null;
        String nombreFragmento = "";

        switch (opcionId) {
            case 0:
                fragmentoDestino = new PerfilFragment();
                nombreFragmento = "Perfil del Usuario";
                break;
            case 1:
                fragmentoDestino = new FotosFragment();
                nombreFragmento = "Galería de Fotos";
                break;
            case 2:
                fragmentoDestino = new VideoFragment();
                nombreFragmento = "Video de Recetas";
                break;
            case 3:
                fragmentoDestino = new WebFragment();
                nombreFragmento = "Vista Web";
                break;
            case 4:
                fragmentoDestino = new BotonesFragment();
                nombreFragmento = "Botones y Controles";
                break;
            default:
                fragmentoDestino = new FotosFragment();
                nombreFragmento = "Galería";
                break;
        }

        if (fragmentoDestino != null) {
            cargarFragmento(fragmentoDestino, true);
            Toast.makeText(this, "Navegando a: " + nombreFragmento, Toast.LENGTH_SHORT).show();
        }
    }

    /**
     * Reemplaza el fragmento contenido en el FrameLayout derecho
     * @param fragment Nueva instancia del fragmento a desplegar
     * @param addToBackStack Si se añade a la pila de retroceso
     */
    private void cargarFragmento(Fragment fragment, boolean addToBackStack) {
        FragmentTransaction transaction = fragmentManager.beginTransaction();
        
        // Transición suave entre fragmentos
        transaction.setCustomAnimations(
            android.R.anim.fade_in,
            android.R.anim.fade_out
        );

        // Reemplazo en el contenedor derecho
        transaction.replace(R.id.fragment_content_container, fragment);

        if (addToBackStack) {
            transaction.addToBackStack(null);
        }

        transaction.commit();
    }
}
`
  },
  {
    id: 'menu_fragment_java',
    name: 'MenuFragment.java',
    path: 'app/src/main/java/com/example/breakfastapp/MenuFragment.java',
    language: 'java',
    category: 'java',
    description: 'Fragmento del menú lateral con interfaz de comunicación hacia MainActivity.',
    content: `package com.example.breakfastapp;

import android.content.Context;
import android.graphics.Color;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

/**
 * MenuFragment - Fragmento Izquierdo
 * Contiene los botones de opciones y emite eventos a MainActivity mediante listener
 */
public class MenuFragment extends Fragment {

    // Interfaz para comunicar eventos de navegación a MainActivity
    public interface OnMenuOptionSelectedListener {
        void onMenuOptionSelected(int opcionId);
    }

    private OnMenuOptionSelectedListener listener;

    // Declaración de vistas de botones
    private Button btnPerfil;
    private Button btnFotos;
    private Button btnVideo;
    private Button btnWeb;
    private Button btnBotones;

    // Colores temáticos Material
    private final int COLOR_ACTIVO = Color.parseColor("#4CAF50");
    private final int COLOR_INACTIVO = Color.parseColor("#FFFFFF");
    private final int TEXTO_ACTIVO = Color.parseColor("#FFFFFF");
    private final int TEXTO_INACTIVO = Color.parseColor("#1B1C1C");

    @Override
    public void onAttach(@NonNull Context context) {
        super.onAttach(context);
        if (context instanceof OnMenuOptionSelectedListener) {
            listener = (OnMenuOptionSelectedListener) context;
        } else {
            throw new RuntimeException(context.toString() + " debe implementar OnMenuOptionSelectedListener");
        }
    }

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_menu, container, false);

        // Vinculación con findViewById
        btnPerfil = view.findViewById(R.id.btnMenuPerfil);
        btnFotos = view.findViewById(R.id.btnMenuFotos);
        btnVideo = view.findViewById(R.id.btnMenuVideo);
        btnWeb = view.findViewById(R.id.btnMenuWeb);
        btnBotones = view.findViewById(R.id.btnMenuBotones);

        // Configuración de listeners
        btnPerfil.setOnClickListener(v -> {
            resaltarBoton(btnPerfil);
            listener.onMenuOptionSelected(0);
        });

        btnFotos.setOnClickListener(v -> {
            resaltarBoton(btnFotos);
            listener.onMenuOptionSelected(1);
        });

        btnVideo.setOnClickListener(v -> {
            resaltarBoton(btnVideo);
            listener.onMenuOptionSelected(2);
        });

        btnWeb.setOnClickListener(v -> {
            resaltarBoton(btnWeb);
            listener.onMenuOptionSelected(3);
        });

        btnBotones.setOnClickListener(v -> {
            resaltarBoton(btnBotones);
            listener.onMenuOptionSelected(4);
        });

        return view;
    }

    /**
     * Actualiza el estado visual del botón activo en el menú
     */
    private void resaltarBoton(Button botonSeleccionado) {
        Button[] botones = {btnPerfil, btnFotos, btnVideo, btnWeb, btnBotones};
        for (Button btn : botones) {
            if (btn == botonSeleccionado) {
                btn.setBackgroundColor(COLOR_ACTIVO);
                btn.setTextColor(TEXTO_ACTIVO);
            } else {
                btn.setBackgroundColor(COLOR_INACTIVO);
                btn.setTextColor(TEXTO_INACTIVO);
            }
        }
    }

    @Override
    public void onDetach() {
        super.onDetach();
        listener = null;
    }
}
`
  },
  {
    id: 'perfil_fragment_java',
    name: 'PerfilFragment.java',
    path: 'app/src/main/java/com/example/breakfastapp/PerfilFragment.java',
    language: 'java',
    category: 'java',
    description: 'Fragmento Perfil: Manejo de datos del usuario, ScrollView y botón de edición.',
    content: `package com.example.breakfastapp;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

/**
 * PerfilFragment - Fragmento de datos del usuario
 * Muestra avatar, información nutricional, hábitos y contadores envueltos en ScrollView
 */
public class PerfilFragment extends Fragment {

    // Declaración de variables de vista
    private ImageView imgFotoPerfil;
    private TextView txtNombreCompleto;
    private TextView txtOcupacion;
    private TextView txtCodigoUsuario;
    private TextView txtPlanAlimentacion;
    private TextView txtObjetivoSalud;
    private TextView txtProgresoSemanal;
    private Button btnEditarPerfil;

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_perfil, container, false);

        // Vinculación de vistas mediante findViewById
        imgFotoPerfil = view.findViewById(R.id.imgFotoPerfil);
        txtNombreCompleto = view.findViewById(R.id.txtNombreCompleto);
        txtOcupacion = view.findViewById(R.id.txtOcupacion);
        txtCodigoUsuario = view.findViewById(R.id.txtCodigoUsuario);
        txtPlanAlimentacion = view.findViewById(R.id.txtPlanAlimentacion);
        txtObjetivoSalud = view.findViewById(R.id.txtObjetivoSalud);
        txtProgresoSemanal = view.findViewById(R.id.txtProgresoSemanal);
        btnEditarPerfil = view.findViewById(R.id.btnEditarPerfil);

        // Inicialización de datos
        cargarDatosUsuario();

        // Evento de clic en botón de editar perfil
        btnEditarPerfil.setOnClickListener(v -> {
            Toast.makeText(getContext(), 
                "Abriendo editor de datos para: " + txtNombreCompleto.getText(), 
                Toast.LENGTH_SHORT).show();
        });

        // Evento de clic en la imagen de avatar
        imgFotoPerfil.setOnClickListener(v -> {
            Toast.makeText(getContext(), 
                "Código de usuario: " + txtCodigoUsuario.getText(), 
                Toast.LENGTH_SHORT).show();
        });

        return view;
    }

    private void cargarDatosUsuario() {
        txtNombreCompleto.setText("Carlos Andrés Mendoza Silva");
        txtOcupacion.setText("Diseñador Gráfico & Creativo");
        txtCodigoUsuario.setText("#HB-84920");
        txtPlanAlimentacion.setText("Estilo Saludable & Vitalidad");
        txtObjetivoSalud.setText("Desayunos balanceados y energía sostenida");
        txtProgresoSemanal.setText("5 de 7 días desayunando saludable • 14 recetas guardadas");
    }
}
`
  },
  {
    id: 'fotos_fragment_java',
    name: 'FotosFragment.java',
    path: 'app/src/main/java/com/example/breakfastapp/FotosFragment.java',
    language: 'java',
    category: 'java',
    description: 'Fragmento Fotos: Gestión de clics en tarjetas de recetas y actualización de la vista de detalle.',
    content: `package com.example.breakfastapp;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.cardview.widget.CardView;
import androidx.fragment.app.Fragment;

/**
 * FotosFragment - Galería gastronómica de desayunos saludables
 * Permite seleccionar recetas para actualizar dinámicamente la tarjeta de detalle
 */
public class FotosFragment extends Fragment {

    // Componentes de la tarjeta de detalle principal
    private ImageView imgFotoDetalle;
    private TextView txtDetalleTitulo;
    private TextView txtDetalleDescripcion;
    private TextView txtDetalleCalorias;
    private TextView txtDetalleTiempo;
    private TextView txtDetalleDificultad;

    // Tarjetas clickeables de la lista
    private CardView cardItemTostada;
    private CardView cardItemAvena;
    private CardView cardItemBatido;
    private CardView cardItemParfait;

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_fotos, container, false);

        // Vinculación de vistas de detalle
        imgFotoDetalle = view.findViewById(R.id.imgFotoDetalle);
        txtDetalleTitulo = view.findViewById(R.id.txtDetalleTitulo);
        txtDetalleDescripcion = view.findViewById(R.id.txtDetalleDescripcion);
        txtDetalleCalorias = view.findViewById(R.id.txtDetalleCalorias);
        txtDetalleTiempo = view.findViewById(R.id.txtDetalleTiempo);
        txtDetalleDificultad = view.findViewById(R.id.txtDetalleDificultad);

        // Vinculación de tarjetas de la galería
        cardItemTostada = view.findViewById(R.id.cardItemTostada);
        cardItemAvena = view.findViewById(R.id.cardItemAvena);
        cardItemBatido = view.findViewById(R.id.cardItemBatido);
        cardItemParfait = view.findViewById(R.id.cardItemParfait);

        // Configuración de listeners onClick para cada platillo
        configurarEventosClic();

        return view;
    }

    private void configurarEventosClic() {
        cardItemTostada.setOnClickListener(v -> actualizarDetalle(
            R.drawable.receta_tostada_aguacate,
            "Tostada con Aguacate y Huevo Poché",
            "Desayuno balanceado que aporta ácidos grasos saludables, proteínas completas y fibra vegetal.",
            "280 kcal",
            "10 min",
            "Fácil"
        ));

        cardItemAvena.setOnClickListener(v -> actualizarDetalle(
            R.drawable.receta_bowl_avena,
            "Bowl de Avena con Frutos Rojos",
            "Avena integral cocida con betaglucanos, fresas y arándanos ricos en antioxidantes naturales.",
            "320 kcal",
            "8 min",
            "Muy Fácil"
        ));

        cardItemBatido.setOnClickListener(v -> actualizarDetalle(
            R.drawable.receta_batido_verde,
            "Batido Verde Energético",
            "Bebida rica en clorofila y minerales con espinaca fresca, manzana verde, plátano y coco.",
            "190 kcal",
            "5 min",
            "Fácil"
        ));

        cardItemParfait.setOnClickListener(v -> actualizarDetalle(
            R.drawable.receta_parfait_yogur,
            "Parfait de Yogur Natural",
            "Capas de yogur griego con probióticos activos, nueces trituradas con omega 3 y miel silvestre.",
            "250 kcal",
            "6 min",
            "Muy Fácil"
        ));
    }

    /**
     * Actualiza la vista de detalle y muestra un Toast informativo
     */
    private void actualizarDetalle(int imageResId, String titulo, String desc, String kcal, String tiempo, String dif) {
        imgFotoDetalle.setImageResource(imageResId);
        txtDetalleTitulo.setText(titulo);
        txtDetalleDescripcion.setText(desc);
        txtDetalleCalorias.setText(kcal);
        txtDetalleTiempo.setText(tiempo);
        txtDetalleDificultad.setText(dif);

        Toast.makeText(getContext(), "Receta seleccionada: " + titulo, Toast.LENGTH_SHORT).show();
    }
}
`
  },
  {
    id: 'video_fragment_java',
    name: 'VideoFragment.java',
    path: 'app/src/main/java/com/example/breakfastapp/VideoFragment.java',
    language: 'java',
    category: 'java',
    description: 'Fragmento Video: Control de VideoView, MediaController, URI local/remota y ciclo de vida.',
    content: `package com.example.breakfastapp;

import android.net.Uri;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.MediaController;
import android.widget.TextView;
import android.widget.Toast;
import android.widget.VideoView;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

/**
 * VideoFragment - Reproducción de recetas audiovisuales
 * Utiliza VideoView y MediaController con manejo seguro de ciclo de vida
 */
public class VideoFragment extends Fragment {

    private VideoView videoView;
    private MediaController mediaController;
    private Button btnPlay;
    private Button btnPause;
    private TextView txtVideoTitle;
    private TextView txtResourceBadge;

    private int posicionActual = 0;

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_video, container, false);

        // Vinculación de vistas
        videoView = view.findViewById(R.id.videoViewReceta);
        btnPlay = view.findViewById(R.id.btnVideoPlay);
        btnPause = view.findViewById(R.id.btnVideoPause);
        txtVideoTitle = view.findViewById(R.id.txtVideoTitle);
        txtResourceBadge = view.findViewById(R.id.txtVideoResourceBadge);

        // Inicialización y configuración de VideoView
        configurarReproductor();

        return view;
    }

    private void configurarReproductor() {
        // Crear e inicializar MediaController estándar de Android
        mediaController = new MediaController(requireContext());
        mediaController.setAnchorView(videoView);
        videoView.setMediaController(mediaController);

        // Construcción de URI para recurso local en res/raw/receta_demo.mp4
        // Uri videoUri = Uri.parse("android.resource://" + requireContext().getPackageName() + "/" + R.raw.receta_batido_matutino);
        
        // Alternativa con URL web demostrativa:
        Uri videoUri = Uri.parse("https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4");
        videoView.setVideoURI(videoUri);

        // Listeners de estado
        videoView.setOnPreparedListener(mp -> {
            txtResourceBadge.setText("✔ Listo para reproducir (" + (videoView.getDuration() / 1000) + "s)");
            if (posicionActual > 0) {
                videoView.seekTo(posicionActual);
            }
        });

        videoView.setOnCompletionListener(mp -> {
            Toast.makeText(getContext(), "Reproducción finalizada", Toast.LENGTH_SHORT).show();
        });

        videoView.setOnErrorListener((mp, what, extra) -> {
            Toast.makeText(getContext(), "Error al cargar el video", Toast.LENGTH_SHORT).show();
            return true;
        });

        // Controles de botones manuales
        btnPlay.setOnClickListener(v -> {
            if (!videoView.isPlaying()) {
                videoView.start();
                Toast.makeText(getContext(), "Reproduciendo video...", Toast.LENGTH_SHORT).show();
            }
        });

        btnPause.setOnClickListener(v -> {
            if (videoView.isPlaying()) {
                videoView.pause();
                Toast.makeText(getContext(), "Video pausado", Toast.LENGTH_SHORT).show();
            }
        });
    }

    @Override
    public void onPause() {
        super.onPause();
        if (videoView != null && videoView.isPlaying()) {
            posicionActual = videoView.getCurrentPosition();
            videoView.pause();
        }
    }

    @Override
    public void onResume() {
        super.onResume();
        if (videoView != null && posicionActual > 0) {
            videoView.seekTo(posicionActual);
        }
    }
}
`
  },
  {
    id: 'web_fragment_java',
    name: 'WebFragment.java',
    path: 'app/src/main/java/com/example/breakfastapp/WebFragment.java',
    language: 'java',
    category: 'java',
    description: 'Fragmento Web: Manejo de WebView, habilitación de JavaScript, WebViewClient y ProgressBar.',
    content: `package com.example.breakfastapp;

import android.graphics.Bitmap;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ProgressBar;
import android.widget.TextView;
import android.widget.Toast;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

/**
 * WebFragment - Navegador web integrado con WebView
 * Maneja carga de URLs mediante EditText y Button con WebViewClient personalizado
 */
public class WebFragment extends Fragment {

    private EditText edtUrl;
    private Button btnCargarPagina;
    private ProgressBar progressBar;
    private TextView txtWebStatus;
    private WebView webView;

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_web, container, false);

        // Vinculación de vistas
        edtUrl = view.findViewById(R.id.edtUrl);
        btnCargarPagina = view.findViewById(R.id.btnCargarPagina);
        progressBar = view.findViewById(R.id.progressBarWeb);
        txtWebStatus = view.findViewById(R.id.txtWebStatus);
        webView = view.findViewById(R.id.webViewPrincipal);

        // Configuración de los ajustes de WebView
        configurarWebView();

        // Listener del botón para cargar URL digitada
        btnCargarPagina.setOnClickListener(v -> {
            String url = edtUrl.getText().toString().trim();
            cargarUrl(url);
        });

        // Carga inicial
        cargarUrl("https://nutricion-saludable.edu/desayunos");

        return view;
    }

    private void configurarWebView() {
        WebSettings settings = webView.getSettings();
        // Habilitar ejecución de JavaScript según requerimiento
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setLoadWithOverviewMode(true);
        settings.setUseWideViewPort(true);

        // WebViewClient para mantener navegación dentro de la app sin abrir navegador externo
        webView.setWebViewClient(new WebViewClient() {
            @Override
            public void onPageStarted(WebView view, String url, Bitmap favicon) {
                super.onPageStarted(view, url, favicon);
                progressBar.setVisibility(View.VISIBLE);
                txtWebStatus.setText("Cargando: " + url + "...");
            }

            @Override
            public void onPageFinished(WebView view, String url) {
                super.onPageFinished(view, url);
                progressBar.setVisibility(View.GONE);
                txtWebStatus.setText("✔ Página cargada con éxito (HTTP 200 OK) • SSL Activo");
            }

            @Override
            public void onReceivedError(WebView view, int errorCode, String description, String failingUrl) {
                super.onReceivedError(view, errorCode, description, failingUrl);
                progressBar.setVisibility(View.GONE);
                txtWebStatus.setText("✖ Error al cargar (" + description + ")");
                Toast.makeText(getContext(), "Error: " + description, Toast.LENGTH_SHORT).show();
            }
        });

        // WebChromeClient para actualizar la barra de progreso
        webView.setWebChromeClient(new WebChromeClient() {
            @Override
            public void onProgressChanged(WebView view, int newProgress) {
                progressBar.setProgress(newProgress);
            }
        });
    }

    private void cargarUrl(String url) {
        if (url.isEmpty()) {
            Toast.makeText(getContext(), "Por favor ingresa una URL válida", Toast.LENGTH_SHORT).show();
            return;
        }

        // Validación de protocolo
        if (!url.startsWith("http://") && !url.startsWith("https://")) {
            url = "https://" + url;
            edtUrl.setText(url);
        }

        webView.loadUrl(url);
    }
}
`
  },
  {
    id: 'botones_fragment_java',
    name: 'BotonesFragment.java',
    path: 'app/src/main/java/com/example/breakfastapp/BotonesFragment.java',
    language: 'java',
    category: 'java',
    description: 'Fragmento Botones: Controladores de eventos onClick, onCheckedChange y actualización dinámica de txtResultado.',
    content: `package com.example.breakfastapp;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.CompoundButton;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.Switch;
import android.widget.TextView;
import android.widget.Toast;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

/**
 * BotonesFragment - Demostración interactiva de controles y listeners en Android
 * Maneja Button, CheckBox, RadioGroup y Switch, actualizando el TextView txtResultado
 */
public class BotonesFragment extends Fragment {

    // Consola / Logcat TextView
    private TextView txtResultado;

    // Botones
    private Button btnAccionNormal;
    private Button btnFavorito;
    private Button btnDeshabilitado;

    // CheckBoxes
    private CheckBox chkBreakfastReminder;
    private CheckBox chkLactoseFree;
    private CheckBox chkOfflineMode;

    // RadioGroup & RadioButtons
    private RadioGroup rgActivityLevel;
    private RadioButton rbLightActivity;
    private RadioButton rbModerateActivity;
    private RadioButton rbIntenseActivity;

    // Switches
    private Switch switchNotifications;
    private Switch switchDataSaver;

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_botones, container, false);

        // Vinculación de vistas con findViewById
        txtResultado = view.findViewById(R.id.txtResultado);

        btnAccionNormal = view.findViewById(R.id.btnAccionNormal);
        btnFavorito = view.findViewById(R.id.btnFavorito);
        btnDeshabilitado = view.findViewById(R.id.btnDeshabilitado);

        chkBreakfastReminder = view.findViewById(R.id.chkBreakfastReminder);
        chkLactoseFree = view.findViewById(R.id.chkLactoseFree);
        chkOfflineMode = view.findViewById(R.id.chkOfflineMode);

        rgActivityLevel = view.findViewById(R.id.rgActivityLevel);
        rbLightActivity = view.findViewById(R.id.rbLightActivity);
        rbModerateActivity = view.findViewById(R.id.rbModerateActivity);
        rbIntenseActivity = view.findViewById(R.id.rbIntenseActivity);

        switchNotifications = view.findViewById(R.id.switchNotifications);
        switchDataSaver = view.findViewById(R.id.switchDataSaver);

        // Configuración de listeners
        configurarListeners();

        // Estado inicial
        actualizarConsola("Fragmento inicializado correctamente");

        return view;
    }

    private void configurarListeners() {
        // 1. Listeners para Botones estándar
        btnAccionNormal.setOnClickListener(v -> {
            actualizarConsola("Botón Normal presionado (Acción Primaria)");
            Toast.makeText(getContext(), "Acción primaria ejecutada", Toast.LENGTH_SHORT).show();
        });

        btnFavorito.setOnClickListener(v -> {
            actualizarConsola("Botón Favorito presionado (Agregado a favoritos)");
            Toast.makeText(getContext(), "Receta añadida a favoritos", Toast.LENGTH_SHORT).show();
        });

        // 2. Listeners para CheckBoxes (OnCheckedChangeListener)
        CompoundButton.OnCheckedChangeListener checkListener = (buttonView, isChecked) -> {
            String texto = buttonView.getText().toString();
            String estado = isChecked ? "ACTIVADO" : "DESACTIVADO";
            actualizarConsola("CheckBox [" + texto + "] -> " + estado);
        };

        chkBreakfastReminder.setOnCheckedChangeListener(checkListener);
        chkLactoseFree.setOnCheckedChangeListener(checkListener);
        chkOfflineMode.setOnCheckedChangeListener(checkListener);

        // 3. Listener para RadioGroup
        rgActivityLevel.setOnCheckedChangeListener((group, checkedId) -> {
            RadioButton selectedRb = group.findViewById(checkedId);
            if (selectedRb != null) {
                actualizarConsola("Nivel de Actividad seleccionado: " + selectedRb.getText());
            }
        });

        // 4. Listeners para Switches
        switchNotifications.setOnCheckedChangeListener((buttonView, isChecked) -> {
            actualizarConsola("Switch Notificaciones: " + (isChecked ? "ON" : "OFF"));
        });

        switchDataSaver.setOnCheckedChangeListener((buttonView, isChecked) -> {
            actualizarConsola("Switch Ahorro de Datos: " + (isChecked ? "ON" : "OFF"));
        });
    }

    /**
     * Helper para actualizar la salida simulada de Logcat en txtResultado
     */
    private void actualizarConsola(String evento) {
        String estadoGeneral = String.format(
            "Última interacción: %s | Recordatorio: %s | Notificaciones: %s",
            evento,
            chkBreakfastReminder.isChecked() ? "SI" : "NO",
            switchNotifications.isChecked() ? "ON" : "OFF"
        );
        txtResultado.setText(estadoGeneral);
    }
}
`
  }
];
