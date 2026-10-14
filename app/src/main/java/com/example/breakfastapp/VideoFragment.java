package com.example.breakfastapp;

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
