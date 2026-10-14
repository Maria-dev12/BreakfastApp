package com.example.breakfastapp;

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
