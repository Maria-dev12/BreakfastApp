package com.example.breakfastapp;

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
