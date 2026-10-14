package com.example.breakfastapp;

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
