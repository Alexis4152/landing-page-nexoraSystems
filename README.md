# Nexora Systems — Landing

Landing page corporativa de Nexora Systems (React 19 + Vite 5, sin backend). El copy vive centralizado en [src/data/content.js](src/data/content.js).

## Desarrollo

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview   # sirve dist/ localmente para verificar el build
```

## Despliegue en Coolify

El repo incluye [Dockerfile](Dockerfile) y [nginx.conf](nginx.conf), listos para que Coolify construya y sirva la app sin configuración adicional:

1. En Coolify, crear un nuevo recurso apuntando a este repositorio de GitHub, con **Build Pack: Dockerfile**.
2. Configurar el dominio (`nexorasistemas.com.mx`) en la pestaña de dominios del recurso — Coolify emite el certificado HTTPS (Let's Encrypt) automáticamente vía Traefik.
3. No se necesitan variables de entorno: es un sitio 100% estático.
4. Health check opcional: `GET /health` responde `200 ok`.

La imagen sirve `dist/` con Nginx y agrega headers de seguridad (CSP, HSTS, X-Frame-Options, etc.) — ver [nginx.conf](nginx.conf).
