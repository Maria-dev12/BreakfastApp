import { AndroidFile, ANDROID_FILES } from './androidFiles';
import { ANDROID_FILES_BATCH_2 } from './androidFilesBatch2';
import { ANDROID_FILES_JAVA } from './androidFilesJava';

export const ANDROID_FILES_CONFIG: AndroidFile[] = [
  {
    id: 'android_manifest_xml',
    name: 'AndroidManifest.xml',
    path: 'app/src/main/AndroidManifest.xml',
    language: 'xml',
    category: 'manifest',
    description: 'Manifiesto de la aplicación: Permisos de INTERNET y ACCESS_NETWORK_STATE para WebView y VideoView, declaración de MainActivity.',
    content: `<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.breakfastapp">

    <!-- Permiso esencial para el WebView (WebFragment) y carga de videos remotos (VideoFragment) -->
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />

    <application
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:hardwareAccelerated="true"
        android:usesCleartextTraffic="true"
        android:theme="@style/Theme.BreakfastApp">

        <!-- Actividad Principal con los dos contenedores de fragmentos -->
        <activity
            android:name=".MainActivity"
            android:exported="true"
            android:screenOrientation="unspecified"
            android:configChanges="orientation|screenSize">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>

    </application>

</manifest>`
  },
  {
    id: 'build_gradle',
    name: 'build.gradle (Module: app)',
    path: 'app/build.gradle',
    language: 'gradle',
    category: 'gradle',
    description: 'Configuración Gradle del módulo app con dependencias de AndroidX, Fragment, CardView y Material Components.',
    content: `plugins {
    id 'com.android.application'
}

android {
    namespace 'com.example.breakfastapp'
    compileSdk 34

    defaultConfig {
        applicationId "com.example.breakfastapp"
        minSdk 24
        targetSdk 34
        versionCode 1
        versionName "1.0"

        testInstrumentationRunner "androidx.test.runner.AndroidJUnitRunner"
    }

    buildTypes {
        release {
            minifyEnabled false
            proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
        }
    }
    compileOptions {
        sourceCompatibility JavaVersion.VERSION_17
        targetCompatibility JavaVersion.VERSION_17
    }
}

dependencies {
    implementation 'androidx.appcompat:appcompat:1.6.1'
    implementation 'com.google.android.material:material:1.11.0'
    implementation 'androidx.constraintlayout:constraintlayout:2.1.4'
    implementation 'androidx.fragment:fragment:1.6.2'
    implementation 'androidx.cardview:cardview:1.0.0'

    testImplementation 'junit:junit:4.13.2'
    androidTestImplementation 'androidx.test.ext:junit:1.1.5'
    androidTestImplementation 'androidx.test.espresso:espresso-core:3.5.1'
}`
  },
  {
    id: 'strings_xml',
    name: 'strings.xml',
    path: 'app/src/main/res/values/strings.xml',
    language: 'xml',
    category: 'values',
    description: 'Recurso de cadenas de texto de la aplicación universitaria.',
    content: `<resources>
    <string name="app_name">Breakfast App - Recetas Saludables</string>
    <string name="menu_perfil">Perfil</string>
    <string name="menu_fotos">Fotos</string>
    <string name="menu_video">Video</string>
    <string name="menu_web">Web</string>
    <string name="menu_botones">Botones</string>

    <string name="btn_cargar_pagina">Cargar Página</string>
    <string name="btn_reproducir">Reproducir</string>
    <string name="btn_pausar">Pausar</string>
    <string name="btn_editar_perfil">Editar Información</string>
</resources>`
  },
  {
    id: 'colors_xml',
    name: 'colors.xml',
    path: 'app/src/main/res/values/colors.xml',
    language: 'xml',
    category: 'values',
    description: 'Paleta cromática Material Design correspondiente al estilo verde nutricional del mockup.',
    content: `<resources>
    <color name="primary">#006E1C</color>
    <color name="primary_container">#4CAF50</color>
    <color name="on_primary">#FFFFFF</color>
    <color name="secondary">#005FAF</color>
    <color name="surface">#FBF9F9</color>
    <color name="surface_container_low">#F5F3F3</color>
    <color name="on_surface">#1B1C1C</color>
    <color name="on_surface_variant">#3F4A3C</color>
    <color name="tertiary_fixed">#ABF4AC</color>
    <color name="inverse_surface">#303031</color>
</resources>`
  }
];

export const ALL_ANDROID_FILES: AndroidFile[] = [
  ...ANDROID_FILES,
  ...ANDROID_FILES_BATCH_2,
  ...ANDROID_FILES_JAVA,
  ...ANDROID_FILES_CONFIG
];
