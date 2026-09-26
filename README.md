# BreakfastApp: Recetas para un Desayuno Saludable 🥑🍳

Aplicación Android nativa con arquitectura **Dual-Pane** y gestión dinámica de fragmentos para promover hábitos de alimentación saludable.

---

## 📱 Características y Módulos

* **Navegación Dual-Pane:** Menú de navegación lateral persistente (`MenuFragment`) y contenedor dinámico para la carga de vistas[cite: 3].
* **Perfil de Usuario (`PerfilFragment`):** Visualización de información del usuario, rol y metas nutricionales[cite: 1, 3].
* **Galería Gastronómica (`FotosFragment`):** Catálogo de recetas con detalle nutricional, tiempo de preparación y calorías[cite: 1, 3].
* **Reproductor Multimedia (`VideoFragment`):** Video guías de preparación paso a paso mediante `VideoView` y `MediaController`[cite: 1, 3].
* **Navegador Integrado (`WebFragment`):** Visualizador web embebido con `WebView` para consultar contenido educativo en línea[cite: 1, 3].
* **Consola de Eventos (`BotonesFragment`):** Pruebas de interacción con componentes `Button`, `CheckBox` y `Switch` en tiempo real[cite: 3].

---

## 🛠️ Tecnologías Utilizadas

* **Lenguaje:** Java / Android SDK[cite: 3]
* **UI/UX:** XML Layouts, Material Design, Dual-Pane Architecture (`FragmentContainerView` + `FrameLayout`)[cite: 2, 3]
* **Componentes:** `VideoView`, `WebView`, `ScrollView`, `CardView`[cite: 1, 3]
