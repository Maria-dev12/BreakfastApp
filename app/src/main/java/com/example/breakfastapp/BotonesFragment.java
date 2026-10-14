package com.example.breakfastapp;

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
