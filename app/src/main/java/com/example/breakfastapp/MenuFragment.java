package com.example.breakfastapp;

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
