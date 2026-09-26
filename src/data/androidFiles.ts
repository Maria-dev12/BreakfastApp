export interface AndroidFile {
  id: string;
  name: string;
  path: string;
  language: 'xml' | 'java' | 'gradle';
  category: 'layout' | 'java' | 'manifest' | 'values' | 'gradle';
  description: string;
  content: string;
}

export const ANDROID_FILES: AndroidFile[] = [
  {
    id: 'activity_main_xml',
    name: 'activity_main.xml',
    path: 'app/src/main/res/layout/activity_main.xml',
    language: 'xml',
    category: 'layout',
    description: 'Layout principal con arquitectura horizontal de dos fragmentos (Izquierdo: Menú, Derecho: Contenedor Dinámico).',
    content: `<?xml version="1.0" encoding="utf-8"?>
<!-- 
    Proyecto: Breakfast App - Recetas para un Desayuno Saludable
    Archivo: activity_main.xml
    Descripción: Contenedor horizontal con arquitectura de 2 fragmentos (Dual-Pane)
-->
<LinearLayout 
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/main_root_layout"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="horizontal"
    android:baselineAligned="false"
    android:background="#FBF9F9"
    tools:context=".MainActivity">

    <!-- FRAGMENTO IZQUIERDO: Menú lateral de navegación persistente -->
    <androidx.fragment.app.FragmentContainerView
        android:id="@+id/fragment_menu_container"
        android:name="com.example.breakfastapp.MenuFragment"
        android:layout_width="0dp"
        android:layout_height="match_parent"
        android:layout_weight="1.2"
        android:background="#F5F3F3"
        tools:layout="@layout/fragment_menu" />

    <!-- Divisor vertical decorativo y sutil estilo Material -->
    <View
        android:layout_width="1dp"
        android:layout_height="match_parent"
        android:background="#E0E0E0" />

    <!-- FRAGMENTO DERECHO: Contenedor dinámico de contenido intercambiable -->
    <FrameLayout
        android:id="@+id/fragment_content_container"
        android:layout_width="0dp"
        android:layout_height="match_parent"
        android:layout_weight="3.8"
        android:background="#FFFFFF" />

</LinearLayout>`
  },
  {
    id: 'fragment_menu_xml',
    name: 'fragment_menu.xml',
    path: 'app/src/main/res/layout/fragment_menu.xml',
    language: 'xml',
    category: 'layout',
    description: 'Menú lateral vertical con botones de navegación (Perfil, Fotos, Video, Web, Botones).',
    content: `<?xml version="1.0" encoding="utf-8"?>
<!-- 
    Fragmento Izquierdo: Menú de opciones de navegación
    Contiene botones verticales con iconos y títulos
-->
<ScrollView
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:fillViewport="true"
    android:background="#F5F3F3">

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="vertical"
        android:gravity="center_horizontal"
        android:paddingTop="20dp"
        android:paddingBottom="20dp"
        android:paddingStart="8dp"
        android:paddingEnd="8dp">

        <!-- Opción 1: Perfil -->
        <Button
            android:id="@+id/btnMenuPerfil"
            android:layout_width="match_parent"
            android:layout_height="64dp"
            android:layout_marginBottom="12dp"
            android:text="Perfil"
            android:textSize="12sp"
            android:textStyle="bold"
            android:textColor="#1B1C1C"
            android:backgroundTint="#FFFFFF"
            android:drawableTop="@drawable/ic_person"
            android:drawableTint="#006E1C"
            android:paddingTop="8dp"
            android:paddingBottom="6dp" />

        <!-- Opción 2: Fotos -->
        <Button
            android:id="@+id/btnMenuFotos"
            android:layout_width="match_parent"
            android:layout_height="64dp"
            android:layout_marginBottom="12dp"
            android:text="Fotos"
            android:textSize="12sp"
            android:textStyle="bold"
            android:textColor="#FFFFFF"
            android:backgroundTint="#4CAF50"
            android:drawableTop="@drawable/ic_photo_library"
            android:drawableTint="#FFFFFF"
            android:paddingTop="8dp"
            android:paddingBottom="6dp" />

        <!-- Opción 3: Video -->
        <Button
            android:id="@+id/btnMenuVideo"
            android:layout_width="match_parent"
            android:layout_height="64dp"
            android:layout_marginBottom="12dp"
            android:text="Video"
            android:textSize="12sp"
            android:textStyle="bold"
            android:textColor="#1B1C1C"
            android:backgroundTint="#FFFFFF"
            android:drawableTop="@drawable/ic_smart_display"
            android:drawableTint="#006E1C"
            android:paddingTop="8dp"
            android:paddingBottom="6dp" />

        <!-- Opción 4: Web -->
        <Button
            android:id="@+id/btnMenuWeb"
            android:layout_width="match_parent"
            android:layout_height="64dp"
            android:layout_marginBottom="12dp"
            android:text="Web"
            android:textSize="12sp"
            android:textStyle="bold"
            android:textColor="#1B1C1C"
            android:backgroundTint="#FFFFFF"
            android:drawableTop="@drawable/ic_language"
            android:drawableTint="#006E1C"
            android:paddingTop="8dp"
            android:paddingBottom="6dp" />

        <!-- Opción 5: Botones -->
        <Button
            android:id="@+id/btnMenuBotones"
            android:layout_width="match_parent"
            android:layout_height="64dp"
            android:text="Botones"
            android:textSize="12sp"
            android:textStyle="bold"
            android:textColor="#1B1C1C"
            android:backgroundTint="#FFFFFF"
            android:drawableTop="@drawable/ic_smart_button"
            android:drawableTint="#006E1C"
            android:paddingTop="8dp"
            android:paddingBottom="6dp" />

    </LinearLayout>
</ScrollView>`
  },
  {
    id: 'fragment_perfil_xml',
    name: 'fragment_perfil.xml',
    path: 'app/src/main/res/layout/fragment_perfil.xml',
    language: 'xml',
    category: 'layout',
    description: 'Fragmento Perfil: ScrollView vertical con avatar, datos personales, hábitos y contadores.',
    content: `<?xml version="1.0" encoding="utf-8"?>
<!-- 
    Fragmento Derecho: Perfil del Usuario
    Utiliza ScrollView para garantizar desplazamiento en cualquier pantalla
-->
<ScrollView
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/scrollViewPerfil"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:fillViewport="true"
    android:background="#FBF9F9"
    tools:context=".PerfilFragment">

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="vertical"
        android:padding="16dp">

        <!-- Encabezado de Sección -->
        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:orientation="vertical"
            android:background="#F5F3F3"
            android:padding="14dp"
            android:layout_marginBottom="16dp">

            <LinearLayout
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:orientation="horizontal"
                android:gravity="center_vertical">

                <ImageView
                    android:layout_width="24dp"
                    android:layout_height="24dp"
                    android:src="@drawable/ic_person"
                    app:tint="#006E1C"
                    android:contentDescription="Icono de Perfil" />

                <TextView
                    android:id="@+id/txtHeaderTitle"
                    android:layout_width="0dp"
                    android:layout_height="wrap_content"
                    android:layout_weight="1"
                    android:layout_marginStart="8dp"
                    android:text="Mi Perfil"
                    android:textSize="20sp"
                    android:textStyle="bold"
                    android:textColor="#1B1C1C" />

                <TextView
                    android:layout_width="wrap_content"
                    android:layout_height="wrap_content"
                    android:text="Miembro Activo"
                    android:textSize="11sp"
                    android:textStyle="bold"
                    android:textColor="#002107"
                    android:background="#ABF4AC"
                    android:paddingStart="8dp"
                    android:paddingEnd="8dp"
                    android:paddingTop="3dp"
                    android:paddingBottom="3dp" />
            </LinearLayout>

            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:layout_marginTop="4dp"
                android:text="Plan Bienestar Matutino • Miembro desde Marzo 2024"
                android:textSize="12sp"
                android:textColor="#3F4A3C" />
        </LinearLayout>

        <!-- Tarjeta de Foto de Perfil y Verificación -->
        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:orientation="vertical"
            android:gravity="center"
            android:background="#FFFFFF"
            android:padding="16dp"
            android:layout_marginBottom="16dp"
            android:elevation="2dp">

            <ImageView
                android:id="@+id/imgFotoPerfil"
                android:layout_width="96dp"
                android:layout_height="96dp"
                android:src="@drawable/profile_avatar"
                android:scaleType="centerCrop"
                android:background="#E9E8E7"
                android:contentDescription="Foto de perfil del alumno" />

            <TextView
                android:id="@+id/txtVerificadoBadge"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:layout_marginTop="8dp"
                android:text="✔ Verificado por Nutrición"
                android:textSize="12sp"
                android:textStyle="bold"
                android:textColor="#006E1C" />
        </LinearLayout>

        <!-- Bloque de Información del Usuario -->
        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:orientation="vertical"
            android:background="#FFFFFF"
            android:padding="16dp"
            android:layout_marginBottom="16dp"
            android:elevation="2dp">

            <!-- Nombre Completo -->
            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="NOMBRE COMPLETO"
                android:textSize="11sp"
                android:textStyle="bold"
                android:textColor="#6F7A6B" />

            <TextView
                android:id="@+id/txtNombreCompleto"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:layout_marginTop="2dp"
                android:layout_marginBottom="12dp"
                android:text="Carlos Andrés Mendoza Silva"
                android:textSize="16sp"
                android:textStyle="bold"
                android:textColor="#1B1C1C" />

            <!-- Ocupación -->
            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="OCUPACIÓN / PROFESIÓN"
                android:textSize="11sp"
                android:textStyle="bold"
                android:textColor="#6F7A6B" />

            <TextView
                android:id="@+id/txtOcupacion"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:layout_marginTop="2dp"
                android:layout_marginBottom="12dp"
                android:text="Diseñador Gráfico &amp; Creativo"
                android:textSize="14sp"
                android:textColor="#1B1C1C" />

            <!-- Código de Usuario -->
            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="CÓDIGO DE USUARIO"
                android:textSize="11sp"
                android:textStyle="bold"
                android:textColor="#6F7A6B" />

            <TextView
                android:id="@+id/txtCodigoUsuario"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:layout_marginTop="2dp"
                android:layout_marginBottom="12dp"
                android:text="#HB-84920"
                android:textSize="14sp"
                android:textStyle="bold"
                android:textColor="#006E1C" />

            <!-- Plan de Alimentación -->
            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="PLAN DE ALIMENTACIÓN"
                android:textSize="11sp"
                android:textStyle="bold"
                android:textColor="#6F7A6B" />

            <TextView
                android:id="@+id/txtPlanAlimentacion"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:layout_marginTop="2dp"
                android:layout_marginBottom="12dp"
                android:text="Estilo Saludable &amp; Vitalidad"
                android:textSize="14sp"
                android:textColor="#1B1C1C" />

            <!-- Objetivo de Salud -->
            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="OBJETIVO DE SALUD"
                android:textSize="11sp"
                android:textStyle="bold"
                android:textColor="#6F7A6B" />

            <TextView
                android:id="@+id/txtObjetivoSalud"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:layout_marginTop="2dp"
                android:text="Desayunos balanceados y energía sostenida"
                android:textSize="14sp"
                android:textColor="#1B1C1C" />
        </LinearLayout>

        <!-- Bloque de Hábitos y Rutinas Matutinas -->
        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:orientation="vertical"
            android:background="#FFFFFF"
            android:padding="16dp"
            android:layout_marginBottom="16dp"
            android:elevation="2dp">

            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="Hábitos y Rutinas Matutinas"
                android:textSize="16sp"
                android:textStyle="bold"
                android:textColor="#006E1C"
                android:layout_marginBottom="10dp" />

            <TextView
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:text="• Hidratación matutina: 500ml de agua natural antes de ingerir alimentos."
                android:textSize="13sp"
                android:textColor="#3F4A3C"
                android:layout_marginBottom="6dp" />

            <TextView
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:text="• Ingesta de proteína limpia y fibra vegetal en cada desayuno."
                android:textSize="13sp"
                android:textColor="#3F4A3C"
                android:layout_marginBottom="6dp" />

            <TextView
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:text="• Desayuno antes de las 9:00 AM para regular el metabolismo circadiano."
                android:textSize="13sp"
                android:textColor="#3F4A3C" />
        </LinearLayout>

        <!-- Resumen de Progreso Semanal / Contadores -->
        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:orientation="horizontal"
            android:gravity="center_vertical"
            android:background="#F5F3F3"
            android:padding="14dp"
            android:layout_marginBottom="16dp">

            <ImageView
                android:layout_width="36dp"
                android:layout_height="36dp"
                android:src="@drawable/ic_local_fire"
                app:tint="#006E1C"
                android:contentDescription="Fuego" />

            <LinearLayout
                android:layout_width="0dp"
                android:layout_height="wrap_content"
                android:layout_weight="1"
                android:layout_marginStart="10dp"
                android:orientation="vertical">

                <TextView
                    android:layout_width="wrap_content"
                    android:layout_height="wrap_content"
                    android:text="RESUMEN DE PROGRESO SEMANAL"
                    android:textSize="11sp"
                    android:textStyle="bold"
                    android:textColor="#006E1C" />

                <TextView
                    android:id="@+id/txtProgresoSemanal"
                    android:layout_width="wrap_content"
                    android:layout_height="wrap_content"
                    android:text="5 de 7 días desayunando saludable • 14 recetas guardadas"
                    android:textSize="13sp"
                    android:textColor="#1B1C1C" />
            </LinearLayout>
        </LinearLayout>

        <!-- Botón para Editar Información -->
        <Button
            android:id="@+id/btnEditarPerfil"
            android:layout_width="match_parent"
            android:layout_height="48dp"
            android:text="Editar Información"
            android:textSize="14sp"
            android:textStyle="bold"
            android:textColor="#FFFFFF"
            android:backgroundTint="#006E1C" />

    </LinearLayout>
</ScrollView>`
  }
];
