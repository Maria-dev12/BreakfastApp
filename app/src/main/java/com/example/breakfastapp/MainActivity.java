package com.example.breakfastapp;

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
