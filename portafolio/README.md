# Portafolio Minimalista

Este es un prototipo de portafolio creado con Next.js, TypeScript y Tailwind CSS, siguiendo un diseño minimalista y moderno.

## Cómo Correr el Proyecto Localmente

1.  **Instalar Dependencias:**
    Abre una terminal en el directorio del proyecto y ejecuta:
    ```bash
    npm install
    ```

2.  **Iniciar el Servidor de Desarrollo:**
    Una vez instaladas las dependencias, ejecuta:
    ```bash
    npm run dev
    ```

3.  **Abrir en el Navegador:**
    Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## Recomendaciones para Fusión

Para fusionar este diseño en tu portafolio principal (`jacenteno.github.io`):

1.  **Copiar Componentes:**
    Copia el directorio `src/components` de este proyecto a la misma ubicación en tu portafolio principal.

2.  **Transferir Estilos y Fuentes:**
    *   **`globals.css`**: Copia los estilos base del archivo `src/app/globals.css` de este proyecto al de tu portafolio principal.
    *   **`layout.tsx`**: Asegúrate de que tu archivo `src/app/layout.tsx` principal importe y use la fuente `Inter` de la misma manera que se hace en este proyecto.

3.  **Configuración de Tailwind CSS:**
    *   Copia el archivo `tailwind.config.ts` de este proyecto a tu proyecto principal. Esto transferirá la configuración del tema, como el ancho máximo (`max-w-640`) y la fuente `Inter`.
    *   Verifica que tu archivo `postcss.config.mjs` esté configurado para usar Tailwind.

4.  **Ensamblar la Página Principal:**
    *   Modifica el archivo `src/app/page.tsx` de tu proyecto principal para importar y renderizar los componentes de las secciones (Hero, Projects, etc.) en el orden que desees.
    *   Ajusta los `className` del contenedor principal para que coincidan con los de este prototipo (`max-w-640`, `mx-auto`, etc.).

5.  **Instalar Dependencias:**
    Asegúrate de instalar las dependencias que usa este prototipo en tu proyecto principal:
    ```bash
    npm install framer-motion
    ```
