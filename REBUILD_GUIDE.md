# Guía de Reconstrucción del Proyecto - Cygnus Web

Esta guía te permitirá clonar y ejecutar el proyecto en tu nueva computadora sin pérdida de configuración.

## 1. Clonar el repositorio
Abre una terminal y ejecuta:
```bash
git clone https://github.com/nmiuc/cygnus-web-dev-2026.git
cd cygnus-web-dev-2026
```

## 2. Configurar variables de entorno
Crea un archivo `.env` en la raíz del proyecto con tus credenciales de Supabase:
```env
NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_anon_key
```

## 3. Instalar dependencias
Asegúrate de tener **Node.js 18+** instalado. Ejecuta:
```bash
npm install
```

## 4. Iniciar el servidor de desarrollo
```bash
npm run dev
```

## Notas Técnicas Finales
- El esquema de Supabase ya ha sido corregido en la instancia de la nube (`csuqffmaqkdkxlcofezm`).
- Los componentes de Autenticación (`AuthProvider`) y la lógica del Dashboard ya están integrados en el código.
- Los archivos de traducción se encuentran en `src/messages/`.

¡Buen viaje con tu nueva computadora! 🚀
