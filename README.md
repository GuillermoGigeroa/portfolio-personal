# Portfolio Personal

Este es mi portfolio personal, una aplicación web desarrollada con Angular que muestra habilidades, experiencia y proyectos.

Demo en vivo: https://guillermogigeroa.github.io/portfolio-personal/

## Tecnologías principales

- **Framework**: Angular 21.2.15
- **Node**: Recomendado >=18
- **Package Manager**: pnpm
- **Estilos**: Bootstrap 5.2.3 + SCSS
- **Testing**: Jasmine + Karma

## Estado del proyecto

- **Versión del proyecto**: 2.0.0
- Construido y optimizado para despliegue en GitHub Pages (`docs/`).

## Características

- Diseño responsivo para móviles y escritorio.
- Secciones: Habilidades, Proyectos, Contacto.
- Formulario de contacto con integración de WhatsApp/Email y persistencia local (`localStorage`).
- Navegación segura y validación de URLs externas.
- Arquitectura modular con servicios y componentes reutilizables.

## Requisitos

- Node.js 18 o superior
- Angular CLI (compatible con la versión del proyecto)

## Scripts disponibles

Usar `pnpm <script>` desde la raíz del proyecto.

- `start`: Inicia servidor de desarrollo (ng serve -o)
- `start-proxy`: Inicia con configuración de proxy
- `build`: Genera la versión de producción en `docs/` con `--base-href /portfolio-personal/`
- `test`: Ejecuta tests unitarios con Karma

### Scripts de despliegue (PowerShell)

- `.\build.ps1`: Build + commit + push (rama actual)
- `.\build-pages.ps1`: Merge update → develop + push (GitHub Pages)
- `.\deploy.ps1`: Proceso completo (build + commit + merge + push)

Ejemplo:

```bash
pnpm install
pnpm start
```

Despliegue completo (PowerShell):
```powershell
.\deploy.ps1
```

## Estructura principal

```
src/
├── app/
│   ├── components/
│   │   ├── contact/
│   │   ├── pages/
│   │   └── skills/
│   ├── shared/
│   │   ├── model/
│   │   └── services/
└── assets/
    ├── images/
    └── scss/
```

## Deploy

El proyecto está configurado para desplegarse en GitHub Pages. Ejecutar:

**Opción 1 - Despliegue completo (recomendado):**
```powershell
.\deploy.ps1
```

**Opción 2 - Pasos manuales:**
```powershell
pnpm build
# Publicar el contenido de la carpeta docs/ en la rama develop para levantarlo en GitHub Pages
```

## Licencia

© 2026 Guillermo A. Gigeroa – Todos los derechos reservados.
Ver [LICENSE](./LICENSE) para más detalles.