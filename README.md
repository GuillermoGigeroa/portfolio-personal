# Portfolio Personal

Este es mi portfolio personal, una aplicación web desarrollada con Angular que muestra mis habilidades, experiencia y proyectos.

## 🌐 Acceso

Puedes acceder a mi portfolio en [https://guillermogigeroa.github.io/portfolio-personal/](https://guillermogigeroa.github.io/portfolio-personal/)

## 🛠️ Tecnologías

- **Framework**: Angular 19.2.5
- **Node**: 18.19.1
- **Package Manager**: npm 10.2.4
- **Estilado**: Bootstrap 5.2.3 + SCSS
- **Testing**: Jasmine + Karma

## 📋 Características

- **Diseño Responsivo**: Adaptable a dispositivos móviles y escritorio
- **Secciones Principales**:
  - 🎯 Habilidades y formación académica
  - 🔗 Enlaces a redes sociales y proyectos
  - 📞 Formulario de contacto con integración WhatsApp/Email
- **Persistencia Local**: Almacenamiento de mensajes en localStorage
- **Navegación Segura**: Validación de URLs externas
- **Arquitectura Modular**: Componentes reutilizables y servicios especializados

## 🚀 Configuración del Entorno

### Requisitos Previos

- Node.js 18.19.1 o superior
- Angular CLI 19.2.6

### Dependencias Principales

```json
{
  "dependencies": {
    "@angular/core": "^19.2.7",
    "bootstrap": "^5.2.3",
    "rxjs": "~7.8.1"
  }
}
```

## 💻 Scripts Disponibles

- **Desarrollo**: `npm run start`
  - Inicia servidor en http://localhost:4200

- **Proxy**: `npm run start-proxy`
  - Similar a `start` pero con configuración de proxy

- **Construcción**: `npm run build`
  - Genera archivos en directorio `docs/` para GitHub Pages
  - Configurado con base-href para portfolio-personal

- **Testing**: `npm run test`
  - Ejecuta tests unitarios con Karma
  - Configuración para reportes de cobertura

## 🏗️ Estructura del Proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── contact/      # Componente de contacto
│   │   ├── pages/        # Componente de páginas/links
│   │   └── skills/       # Componente de habilidades
│   ├── shared/
│   │   ├── models/       # Interfaces y enums
│   │   ├── services/     # Servicios compartidos
│   │   └── mocks/        # Mocks para testing
│   └── app.module.ts     # Módulo principal
└── assets/
    ├── images/           # Recursos gráficos
    └── scss/            # Estilos globales
```

## 📱 Características Móviles

- Detección automática de dispositivos móviles
- Interfaz adaptativa
- Menús colapsables para mejor navegación
- Integración con apps nativas (WhatsApp/Email)

## 🔒 Seguridad

- Validación de URLs externas
- Protección contra inyección de scripts
- Sanitización de inputs
- Manejo seguro de navegación externa