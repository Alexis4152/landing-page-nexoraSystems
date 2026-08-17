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

## Despliegue en producción (Hostinger)

`nexorasistemas.com.mx` vive en el hosting de sitios web de Hostinger (hPanel), conectado por Git a `Alexis4152/landing-page-nexoraSystems`, rama `main`. Hostinger detecta el proyecto como Vite y corre su propio build (`npm run build`) — no usa el `Dockerfile` de este repo.

- Headers de seguridad: [public/_headers](public/_headers) (CSP, HSTS, X-Frame-Options, etc.), convención tipo Netlify/Cloudflare Pages que Vite copia a `dist/_headers` en cada build. Pendiente confirmar con soporte de Hostinger que su plataforma los respeta.
- Variables de entorno: ninguna, es un sitio 100% estático.
- Redeploy: botón "Redesplegar" en el panel del sitio (hPanel → Sitios web → nexorasistemas.com.mx), o automático en cada push a `main` si "Implementación automática" está activo.

## Despliegue alternativo (Coolify)

El repo también incluye [Dockerfile](Dockerfile) y [nginx.conf](nginx.conf) por si en algún momento se migra este sitio a Coolify (como DemoPV o libreria):

1. En Coolify, crear un nuevo recurso apuntando a este repositorio de GitHub, con **Build Pack: Dockerfile**.
2. Configurar el dominio en la pestaña de dominios del recurso — Coolify emite el certificado HTTPS (Let's Encrypt) automáticamente vía Traefik.
3. Health check opcional: `GET /health` responde `200 ok`.

La imagen sirve `dist/` con Nginx y agrega los mismos headers de seguridad que `public/_headers`, pero garantizados (ver [nginx.conf](nginx.conf)).
