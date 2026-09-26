import { AndroidFile } from './androidFiles';

export const ANDROID_FILES_BATCH_2: AndroidFile[] = [
  {
    id: 'fragment_fotos_xml',
    name: 'fragment_fotos.xml',
    path: 'app/src/main/res/layout/fragment_fotos.xml',
    language: 'xml',
    category: 'layout',
    description: 'Fragmento Fotos: Galería gastronómica, ScrollView vertical, Card de detalle dinámico y lista de platillos con eventos de clic.',
    content: `<?xml version="1.0" encoding="utf-8"?>
<!-- 
    Fragmento Derecho: Fotos / Galería Gastronómica
    Demostración de ScrollView vertical, ImageView y eventos de clic dinámicos
-->
<ScrollView
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/scrollViewFotos"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:fillViewport="true"
    android:background="#FBF9F9"
    tools:context=".FotosFragment">

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="vertical"
        android:padding="16dp">

        <!-- Encabezado del Fragmento -->
        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:orientation="vertical"
            android:layout_marginBottom="12dp">

            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="Galería Gastronómica"
                android:textSize="20sp"
                android:textStyle="bold"
                android:textColor="#1B1C1C" />

            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="Demostración de ScrollView y eventos onClick en ImageView"
                android:textSize="12sp"
                android:textColor="#3F4A3C" />
        </LinearLayout>

        <!-- TARJETA DE DETALLE DE LA IMAGEN SELECCIONADA -->
        <androidx.cardview.widget.CardView
            android:id="@+id/cardDetalleFoto"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_marginBottom="16dp"
            app:cardCornerRadius="12dp"
            app:cardElevation="3dp"
            app:cardBackgroundColor="#FFFFFF">

            <LinearLayout
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:orientation="vertical"
                android:padding="12dp">

                <LinearLayout
                    android:layout_width="match_parent"
                    android:layout_height="wrap_content"
                    android:orientation="horizontal"
                    android:layout_marginBottom="8dp">

                    <TextView
                        android:layout_width="0dp"
                        android:layout_height="wrap_content"
                        android:layout_weight="1"
                        android:text="DETALLE DE LA IMAGEN SELECCIONADA:"
                        android:textSize="11sp"
                        android:textStyle="bold"
                        android:textColor="#3F4A3C" />

                    <TextView
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:text="✔ Activo"
                        android:textSize="11sp"
                        android:textStyle="bold"
                        android:textColor="#006E1C"
                        android:background="#ABF4AC"
                        android:paddingStart="6dp"
                        android:paddingEnd="6dp"
                        android:paddingTop="2dp"
                        android:paddingBottom="2dp" />
                </LinearLayout>

                <!-- Imagen Principal en Detalle -->
                <ImageView
                    android:id="@+id/imgFotoDetalle"
                    android:layout_width="match_parent"
                    android:layout_height="180dp"
                    android:scaleType="centerCrop"
                    android:src="@drawable/receta_tostada_aguacate"
                    android:contentDescription="Foto de platillo en detalle" />

                <!-- Título del Platillo -->
                <TextView
                    android:id="@+id/txtDetalleTitulo"
                    android:layout_width="match_parent"
                    android:layout_height="wrap_content"
                    android:layout_marginTop="10dp"
                    android:text="Tostada con Aguacate y Huevo Poché"
                    android:textSize="17sp"
                    android:textStyle="bold"
                    android:textColor="#1B1C1C" />

                <!-- Descripción Nutricional -->
                <TextView
                    android:id="@+id/txtDetalleDescripcion"
                    android:layout_width="match_parent"
                    android:layout_height="wrap_content"
                    android:layout_marginTop="4dp"
                    android:text="Desayuno balanceado que aporta ácidos grasos saludables, proteínas completas de alto valor biológico y fibra vegetal. Ideal para iniciar la jornada de estudio con energía sostenida."
                    android:textSize="13sp"
                    android:textColor="#3F4A3C" />

                <!-- Grilla de Macros / Métricas -->
                <LinearLayout
                    android:layout_width="match_parent"
                    android:layout_height="wrap_content"
                    android:orientation="horizontal"
                    android:layout_marginTop="12dp">

                    <LinearLayout
                        android:layout_width="0dp"
                        android:layout_height="wrap_content"
                        android:layout_weight="1"
                        android:gravity="center"
                        android:background="#F5F3F3"
                        android:padding="8dp"
                        android:orientation="vertical">
                        <TextView
                            android:layout_width="wrap_content"
                            android:layout_height="wrap_content"
                            android:text="Calorías"
                            android:textSize="11sp"
                            android:textColor="#3F4A3C" />
                        <TextView
                            android:id="@+id/txtDetalleCalorias"
                            android:layout_width="wrap_content"
                            android:layout_height="wrap_content"
                            android:text="280 kcal"
                            android:textSize="13sp"
                            android:textStyle="bold"
                            android:textColor="#006E1C" />
                    </LinearLayout>

                    <LinearLayout
                        android:layout_width="0dp"
                        android:layout_height="wrap_content"
                        android:layout_weight="1"
                        android:gravity="center"
                        android:background="#F5F3F3"
                        android:padding="8dp"
                        android:layout_marginStart="8dp"
                        android:layout_marginEnd="8dp"
                        android:orientation="vertical">
                        <TextView
                            android:layout_width="wrap_content"
                            android:layout_height="wrap_content"
                            android:text="Tiempo prep."
                            android:textSize="11sp"
                            android:textColor="#3F4A3C" />
                        <TextView
                            android:id="@+id/txtDetalleTiempo"
                            android:layout_width="wrap_content"
                            android:layout_height="wrap_content"
                            android:text="10 min"
                            android:textSize="13sp"
                            android:textStyle="bold"
                            android:textColor="#1B1C1C" />
                    </LinearLayout>

                    <LinearLayout
                        android:layout_width="0dp"
                        android:layout_height="wrap_content"
                        android:layout_weight="1"
                        android:gravity="center"
                        android:background="#F5F3F3"
                        android:padding="8dp"
                        android:orientation="vertical">
                        <TextView
                            android:layout_width="wrap_content"
                            android:layout_height="wrap_content"
                            android:text="Dificultad"
                            android:textSize="11sp"
                            android:textColor="#3F4A3C" />
                        <TextView
                            android:id="@+id/txtDetalleDificultad"
                            android:layout_width="wrap_content"
                            android:layout_height="wrap_content"
                            android:text="Fácil"
                            android:textSize="13sp"
                            android:textStyle="bold"
                            android:textColor="#286B33" />
                    </LinearLayout>
                </LinearLayout>

            </LinearLayout>
        </androidx.cardview.widget.CardView>

        <!-- SECCIÓN DE OPCIONES DEL MENÚ CON EVENTOS ONCLICK -->
        <TextView
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:text="OPCIONES DEL MENÚ (SCROLLVIEW - 4 RECETAS)"
            android:textSize="12sp"
            android:textStyle="bold"
            android:textColor="#3F4A3C"
            android:layout_marginBottom="8dp" />

        <!-- Tarjeta 1: Tostada Aguacate -->
        <androidx.cardview.widget.CardView
            android:id="@+id/cardItemTostada"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_marginBottom="8dp"
            android:clickable="true"
            android:focusable="true"
            app:cardCornerRadius="8dp"
            app:cardElevation="1dp"
            app:cardBackgroundColor="#FFFFFF">

            <LinearLayout
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:orientation="horizontal"
                android:gravity="center_vertical"
                android:padding="8dp">

                <ImageView
                    android:id="@+id/imgThumbTostada"
                    android:layout_width="56dp"
                    android:layout_height="56dp"
                    android:scaleType="centerCrop"
                    android:src="@drawable/receta_tostada_aguacate"
                    android:contentDescription="Miniatura tostada" />

                <LinearLayout
                    android:layout_width="0dp"
                    android:layout_height="wrap_content"
                    android:layout_weight="1"
                    android:layout_marginStart="10dp"
                    android:orientation="vertical">

                    <TextView
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:text="Tostada con Aguacate y Huevo"
                        android:textSize="14sp"
                        android:textStyle="bold"
                        android:textColor="#1B1C1C" />

                    <TextView
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:text="Pan integral con puré de aguacate y semillas"
                        android:textSize="11sp"
                        android:textColor="#3F4A3C" />

                    <TextView
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:text="280 kcal • 10 min"
                        android:textSize="11sp"
                        android:textStyle="bold"
                        android:textColor="#006E1C" />
                </LinearLayout>
            </LinearLayout>
        </androidx.cardview.widget.CardView>

        <!-- Tarjeta 2: Bowl de Avena -->
        <androidx.cardview.widget.CardView
            android:id="@+id/cardItemAvena"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_marginBottom="8dp"
            android:clickable="true"
            android:focusable="true"
            app:cardCornerRadius="8dp"
            app:cardElevation="1dp"
            app:cardBackgroundColor="#FFFFFF">

            <LinearLayout
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:orientation="horizontal"
                android:gravity="center_vertical"
                android:padding="8dp">

                <ImageView
                    android:id="@+id/imgThumbAvena"
                    android:layout_width="56dp"
                    android:layout_height="56dp"
                    android:scaleType="centerCrop"
                    android:src="@drawable/receta_bowl_avena"
                    android:contentDescription="Miniatura avena" />

                <LinearLayout
                    android:layout_width="0dp"
                    android:layout_height="wrap_content"
                    android:layout_weight="1"
                    android:layout_marginStart="10dp"
                    android:orientation="vertical">

                    <TextView
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:text="Bowl de Avena con Frutos Rojos"
                        android:textSize="14sp"
                        android:textStyle="bold"
                        android:textColor="#1B1C1C" />

                    <TextView
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:text="Avena cocida en leche descremada con arándanos"
                        android:textSize="11sp"
                        android:textColor="#3F4A3C" />

                    <TextView
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:text="320 kcal • 8 min"
                        android:textSize="11sp"
                        android:textStyle="bold"
                        android:textColor="#006E1C" />
                </LinearLayout>
            </LinearLayout>
        </androidx.cardview.widget.CardView>

        <!-- Tarjeta 3: Batido Verde -->
        <androidx.cardview.widget.CardView
            android:id="@+id/cardItemBatido"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_marginBottom="8dp"
            android:clickable="true"
            android:focusable="true"
            app:cardCornerRadius="8dp"
            app:cardElevation="1dp"
            app:cardBackgroundColor="#FFFFFF">

            <LinearLayout
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:orientation="horizontal"
                android:gravity="center_vertical"
                android:padding="8dp">

                <ImageView
                    android:id="@+id/imgThumbBatido"
                    android:layout_width="56dp"
                    android:layout_height="56dp"
                    android:scaleType="centerCrop"
                    android:src="@drawable/receta_batido_verde"
                    android:contentDescription="Miniatura batido" />

                <LinearLayout
                    android:layout_width="0dp"
                    android:layout_height="wrap_content"
                    android:layout_weight="1"
                    android:layout_marginStart="10dp"
                    android:orientation="vertical">

                    <TextView
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:text="Batido Verde Energético"
                        android:textSize="14sp"
                        android:textStyle="bold"
                        android:textColor="#1B1C1C" />

                    <TextView
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:text="Espinaca, manzana verde, plátano y coco"
                        android:textSize="11sp"
                        android:textColor="#3F4A3C" />

                    <TextView
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:text="190 kcal • 5 min"
                        android:textSize="11sp"
                        android:textStyle="bold"
                        android:textColor="#006E1C" />
                </LinearLayout>
            </LinearLayout>
        </androidx.cardview.widget.CardView>

        <!-- Tarjeta 4: Parfait Yogur -->
        <androidx.cardview.widget.CardView
            android:id="@+id/cardItemParfait"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:clickable="true"
            android:focusable="true"
            app:cardCornerRadius="8dp"
            app:cardElevation="1dp"
            app:cardBackgroundColor="#FFFFFF">

            <LinearLayout
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:orientation="horizontal"
                android:gravity="center_vertical"
                android:padding="8dp">

                <ImageView
                    android:id="@+id/imgThumbParfait"
                    android:layout_width="56dp"
                    android:layout_height="56dp"
                    android:scaleType="centerCrop"
                    android:src="@drawable/receta_parfait_yogur"
                    android:contentDescription="Miniatura parfait" />

                <LinearLayout
                    android:layout_width="0dp"
                    android:layout_height="wrap_content"
                    android:layout_weight="1"
                    android:layout_marginStart="10dp"
                    android:orientation="vertical">

                    <TextView
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:text="Parfait de Yogur Natural"
                        android:textSize="14sp"
                        android:textStyle="bold"
                        android:textColor="#1B1C1C" />

                    <TextView
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:text="Yogur sin azúcar con nueces y miel"
                        android:textSize="11sp"
                        android:textColor="#3F4A3C" />

                    <TextView
                        android:layout_width="wrap_content"
                        android:layout_height="wrap_content"
                        android:text="250 kcal • 6 min"
                        android:textSize="11sp"
                        android:textStyle="bold"
                        android:textColor="#006E1C" />
                </LinearLayout>
            </LinearLayout>
        </androidx.cardview.widget.CardView>

    </LinearLayout>
</ScrollView>`
  },
  {
    id: 'fragment_video_xml',
    name: 'fragment_video.xml',
    path: 'app/src/main/res/layout/fragment_video.xml',
    language: 'xml',
    category: 'layout',
    description: 'Fragmento Video: VideoView con MediaController, reproducción de video local R.raw.receta_demo o URL, y pasos de receta.',
    content: `<?xml version="1.0" encoding="utf-8"?>
<!-- 
    Fragmento Derecho: Reproductor de Video
    Utiliza VideoView con MediaController para reproducción multimedia
-->
<ScrollView
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/scrollViewVideo"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:fillViewport="true"
    android:background="#FBF9F9"
    tools:context=".VideoFragment">

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="vertical"
        android:padding="16dp">

        <!-- Encabezado de Ciclo de Vida -->
        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:orientation="vertical"
            android:background="#EFEDED"
            android:padding="12dp"
            android:layout_marginBottom="12dp">

            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="▶ LIFECYCLE: ONRESUME()"
                android:textSize="11sp"
                android:textStyle="bold"
                android:textColor="#006E1C" />

            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="Recetas en Video"
                android:textSize="20sp"
                android:textStyle="bold"
                android:textColor="#1B1C1C" />

            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="Uso de componente VideoView y MediaController en Android"
                android:textSize="12sp"
                android:textColor="#3F4A3C" />
        </LinearLayout>

        <!-- CONTENEDOR DEL VIDEOVIEW -->
        <FrameLayout
            android:id="@+id/videoContainer"
            android:layout_width="match_parent"
            android:layout_height="220dp"
            android:background="#000000"
            android:layout_marginBottom="14dp">

            <VideoView
                android:id="@+id/videoViewReceta"
                android:layout_width="match_parent"
                android:layout_height="match_parent"
                android:layout_gravity="center" />

            <!-- Indicador de recurso cargado -->
            <TextView
                android:id="@+id/txtVideoResourceBadge"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:layout_gravity="top|start"
                android:layout_margin="8dp"
                android:background="#CC303031"
                android:paddingStart="8dp"
                android:paddingEnd="8dp"
                android:paddingTop="3dp"
                android:paddingBottom="3dp"
                android:text="R.raw.receta_batido_matutino"
                android:textColor="#ABF4AC"
                android:textSize="11sp" />
        </FrameLayout>

        <!-- Botonera de control manual (además del MediaController flotante) -->
        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:orientation="horizontal"
            android:gravity="center"
            android:layout_marginBottom="16dp">

            <Button
                android:id="@+id/btnVideoPlay"
                android:layout_width="0dp"
                android:layout_height="wrap_content"
                android:layout_weight="1"
                android:layout_marginEnd="6dp"
                android:text="Reproducir"
                android:textColor="#FFFFFF"
                android:backgroundTint="#006E1C" />

            <Button
                android:id="@+id/btnVideoPause"
                android:layout_width="0dp"
                android:layout_height="wrap_content"
                android:layout_weight="1"
                android:layout_marginStart="6dp"
                android:text="Pausar"
                android:textColor="#FFFFFF"
                android:backgroundTint="#005FAF" />
        </LinearLayout>

        <!-- Datos del Video / Metadata -->
        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:orientation="vertical"
            android:background="#FFFFFF"
            android:padding="16dp"
            android:elevation="2dp"
            android:layout_marginBottom="14dp">

            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="Desayuno Rápido"
                android:textSize="11sp"
                android:textStyle="bold"
                android:textColor="#002107"
                android:background="#ABF4AC"
                android:paddingStart="6dp"
                android:paddingEnd="6dp"
                android:paddingTop="2dp"
                android:paddingBottom="2dp"
                android:layout_marginBottom="6dp" />

            <TextView
                android:id="@+id/txtVideoTitle"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:text="Preparación de Batido Proteico y Energético Matutino"
                android:textSize="17sp"
                android:textStyle="bold"
                android:textColor="#1B1C1C" />

            <TextView
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:layout_marginTop="4dp"
                android:text="Duración: 5 min 40 seg • Formato: MP4 (H.264)"
                android:textSize="12sp"
                android:textColor="#3F4A3C" />

            <TextView
                android:id="@+id/txtVideoDescription"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:layout_marginTop="8dp"
                android:text="Tutorial paso a paso diseñado para estudiantes universitarios. Explica cómo combinar frutas, semillas de chía y leche vegetal para un desayuno rápido y nutritivo antes de clases."
                android:textSize="13sp"
                android:textColor="#3F4A3C" />
        </LinearLayout>

        <!-- Instrucciones Resumidas -->
        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:orientation="vertical"
            android:background="#FFFFFF"
            android:padding="16dp"
            android:elevation="2dp">

            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="Instrucciones resumidas (Paso a paso)"
                android:textSize="15sp"
                android:textStyle="bold"
                android:textColor="#006E1C"
                android:layout_marginBottom="10dp" />

            <TextView
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:text="1. Carga de ingredientes sólidos: Colocar plátano congelado y frutos rojos en el vaso de la licuadora."
                android:textSize="13sp"
                android:textColor="#3F4A3C"
                android:layout_marginBottom="6dp" />

            <TextView
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:text="2. Adición de base líquida: Agregar 250ml de leche o bebida vegetal (almendras, avena o soya)."
                android:textSize="13sp"
                android:textColor="#3F4A3C"
                android:layout_marginBottom="6dp" />

            <TextView
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:text="3. Procesado y consistencia: Licuar a velocidad media-alta durante 45 segundos hasta obtener textura homogénea."
                android:textSize="13sp"
                android:textColor="#3F4A3C" />
        </LinearLayout>

    </LinearLayout>
</ScrollView>`
  },
  {
    id: 'fragment_web_xml',
    name: 'fragment_web.xml',
    path: 'app/src/main/res/layout/fragment_web.xml',
    language: 'xml',
    category: 'layout',
    description: 'Fragmento Web: Barra de URL con EditText, Button "Cargar Página", ProgressBar y WebView con WebViewClient.',
    content: `<?xml version="1.0" encoding="utf-8"?>
<!-- 
    Fragmento Derecho: Vista Web / Navegador Integrado
    Implementa EditText para URL, Button de carga y componente WebView
-->
<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/layoutWebRoot"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:background="#FBF9F9"
    tools:context=".WebFragment">

    <!-- Encabezado de la Práctica -->
    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="vertical"
        android:background="#F5F3F3"
        android:padding="12dp">

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="ANDROID STUDIO LAB • VISTA WEB"
            android:textSize="11sp"
            android:textStyle="bold"
            android:textColor="#006E1C" />

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Vista Web - Navegador Integrado"
            android:textSize="18sp"
            android:textStyle="bold"
            android:textColor="#1B1C1C" />

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Implementación de android.webkit.WebView y EditText"
            android:textSize="12sp"
            android:textColor="#3F4A3C" />
    </LinearLayout>

    <!-- Barra de Navegación URL + Botón Cargar -->
    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="horizontal"
        android:gravity="center_vertical"
        android:padding="10dp"
        android:background="#FFFFFF">

        <EditText
            android:id="@+id/edtUrl"
            android:layout_width="0dp"
            android:layout_height="44dp"
            android:layout_weight="1"
            android:hint="https://nutricion-saludable.edu"
            android:text="https://nutricion-saludable.edu/desayunos"
            android:textSize="13sp"
            android:textColor="#1B1C1C"
            android:inputType="textUri"
            android:imeOptions="actionGo"
            android:paddingStart="12dp"
            android:paddingEnd="12dp"
            android:background="#F5F3F3" />

        <Button
            android:id="@+id/btnCargarPagina"
            android:layout_width="wrap_content"
            android:layout_height="44dp"
            android:layout_marginStart="8dp"
            android:text="Cargar Página"
            android:textSize="12sp"
            android:textStyle="bold"
            android:textColor="#FFFFFF"
            android:backgroundTint="#006E1C" />
    </LinearLayout>

    <!-- Barra de progreso horizontal para carga de página -->
    <ProgressBar
        android:id="@+id/progressBarWeb"
        style="?android:attr/progressBarStyleHorizontal"
        android:layout_width="match_parent"
        android:layout_height="4dp"
        android:visibility="gone"
        android:progressTint="#006E1C" />

    <!-- Estado de Conexión HTTP -->
    <TextView
        android:id="@+id/txtWebStatus"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:paddingStart="12dp"
        android:paddingEnd="12dp"
        android:paddingTop="4dp"
        android:paddingBottom="4dp"
        android:text="✔ Página cargada con éxito (HTTP 200 OK) • SSL Activo"
        android:textSize="11sp"
        android:textColor="#006E1C"
        android:background="#EFEDED" />

    <!-- COMPONENTE WEBVIEW PRINCIPAL -->
    <WebView
        android:id="@+id/webViewPrincipal"
        android:layout_width="match_parent"
        android:layout_height="0dp"
        android:layout_weight="1"
        android:background="#FFFFFF" />

</LinearLayout>`
  },
  {
    id: 'fragment_botones_xml',
    name: 'fragment_botones.xml',
    path: 'app/src/main/res/layout/fragment_botones.xml',
    language: 'xml',
    category: 'layout',
    description: 'Fragmento Botones: Botones, CheckBoxes, RadioButtons y Switches interactivos con consola Logcat / TextView simulada.',
    content: `<?xml version="1.0" encoding="utf-8"?>
<!-- 
    Fragmento Derecho: Botones y Controles Interactivos
    Demuestra Button, CheckBox, RadioGroup y Switch actualizando txtResultado
-->
<ScrollView
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/scrollViewBotones"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:fillViewport="true"
    android:background="#FBF9F9"
    tools:context=".BotonesFragment">

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="vertical"
        android:padding="16dp">

        <!-- Título -->
        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Botones y Controles"
            android:textSize="20sp"
            android:textStyle="bold"
            android:textColor="#1B1C1C"
            android:layout_marginBottom="12dp" />

        <!-- CONSOLA SIMULADA / TEXTVIEW TXTRESULTADO -->
        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:orientation="vertical"
            android:background="#303031"
            android:padding="12dp"
            android:layout_marginBottom="16dp">

            <LinearLayout
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:orientation="horizontal">

                <TextView
                    android:layout_width="0dp"
                    android:layout_height="wrap_content"
                    android:layout_weight="1"
                    android:text="LOGCAT EMULATOR • TEXTVIEW TXTRESULTADO"
                    android:textSize="10sp"
                    android:textStyle="bold"
                    android:textColor="#ABF4AC" />

                <TextView
                    android:layout_width="wrap_content"
                    android:layout_height="wrap_content"
                    android:text="tag: UI_EVENT"
                    android:textSize="10sp"
                    android:textColor="#E3E2E2" />
            </LinearLayout>

            <TextView
                android:id="@+id/txtResultado"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:layout_marginTop="8dp"
                android:background="#1B1C1C"
                android:padding="8dp"
                android:fontFamily="monospace"
                android:text="Última interacción: Esperando evento de usuario..."
                android:textSize="12sp"
                android:textColor="#78DC77" />
        </LinearLayout>

        <!-- SECCIÓN 1: BOTONES ESTÁNDAR -->
        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="1. Botones Estándar (Button / AppCompatButton)"
            android:textSize="14sp"
            android:textStyle="bold"
            android:textColor="#1B1C1C"
            android:layout_marginBottom="8dp" />

        <Button
            android:id="@+id/btnAccionNormal"
            android:layout_width="match_parent"
            android:layout_height="44dp"
            android:layout_marginBottom="8dp"
            android:text="Botón Normal (Acción Primaria)"
            android:textColor="#FFFFFF"
            android:backgroundTint="#006E1C" />

        <Button
            android:id="@+id/btnFavorito"
            android:layout_width="match_parent"
            android:layout_height="44dp"
            android:layout_marginBottom="8dp"
            android:text="❤ Botón con Icono (Favorito)"
            android:textColor="#FFFFFF"
            android:backgroundTint="#005FAF" />

        <Button
            android:id="@+id/btnDeshabilitado"
            android:layout_width="match_parent"
            android:layout_height="44dp"
            android:layout_marginBottom="16dp"
            android:text="🚫 Botón Deshabilitado (android:enabled=false)"
            android:enabled="false"
            android:textColor="#6F7A6B"
            android:backgroundTint="#E3E2E2" />

        <!-- SECCIÓN 2: CHECKBOXES -->
        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="2. Controles de Selección Múltiple (CheckBox)"
            android:textSize="14sp"
            android:textStyle="bold"
            android:textColor="#1B1C1C"
            android:layout_marginBottom="8dp" />

        <CheckBox
            android:id="@+id/chkBreakfastReminder"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:checked="true"
            android:text="Recordar desayuno diario a las 7:30 AM"
            android:textSize="13sp"
            android:textColor="#1B1C1C" />

        <CheckBox
            android:id="@+id/chkLactoseFree"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:checked="true"
            android:text="Incluir recetas sin lactosa"
            android:textSize="13sp"
            android:textColor="#1B1C1C" />

        <CheckBox
            android:id="@+id/chkOfflineMode"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:checked="false"
            android:layout_marginBottom="16dp"
            android:text="Modo offline para recetas descargadas"
            android:textSize="13sp"
            android:textColor="#1B1C1C" />

        <!-- SECCIÓN 3: RADIOGROUP / RADIOBUTTON -->
        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="3. Selección Única (RadioGroup / RadioButton)"
            android:textSize="14sp"
            android:textStyle="bold"
            android:textColor="#1B1C1C" />

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Nivel de actividad física matutina:"
            android:textSize="12sp"
            android:textColor="#3F4A3C"
            android:layout_marginBottom="6dp" />

        <RadioGroup
            android:id="@+id/rgActivityLevel"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_marginBottom="16dp">

            <RadioButton
                android:id="@+id/rbLightActivity"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:checked="true"
                android:text="Ligera (Estudio y clases teóricas)"
                android:textSize="13sp"
                android:textColor="#1B1C1C" />

            <RadioButton
                android:id="@+id/rbModerateActivity"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:text="Moderada (Caminata al campus / laboratorio)"
                android:textSize="13sp"
                android:textColor="#1B1C1C" />

            <RadioButton
                android:id="@+id/rbIntenseActivity"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:text="Intensa (Deporte universitario matutino)"
                android:textSize="13sp"
                android:textColor="#1B1C1C" />
        </RadioGroup>

        <!-- SECCIÓN 4: SWITCH / INTERRUPTORES -->
        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="4. Interruptores de Estado (Switch / SwitchCompat)"
            android:textSize="14sp"
            android:textStyle="bold"
            android:textColor="#1B1C1C"
            android:layout_marginBottom="8dp" />

        <Switch
            android:id="@+id/switchNotifications"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:checked="true"
            android:layout_marginBottom="8dp"
            android:text="Notificaciones de hábitos saludables"
            android:textSize="13sp"
            android:textColor="#1B1C1C" />

        <Switch
            android:id="@+id/switchDataSaver"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:checked="false"
            android:text="Modo ahorro de datos móviles"
            android:textSize="13sp"
            android:textColor="#1B1C1C" />

    </LinearLayout>
</ScrollView>`
  }
];
