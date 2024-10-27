
# Route Grouping en Next.js

**Route Grouping** en Next.js es una funcionalidad avanzada que permite crear grupos de rutas sin que estas generen una URL específica. Esto se logra utilizando carpetas entre paréntesis `( )`. Cuando se coloca una carpeta entre paréntesis, el sistema de rutas la ignora en la generación de la URL, pero la estructura sigue permitiendo la organización y aplicación de layouts o middleware compartido.


## ¿Cómo Funciona Route Grouping?

En Next.js, normalmente cada carpeta dentro de la estructura de `app/` representa una ruta en la URL. Por ejemplo:

```
/app
|-- dashboard
|   |-- page.js  // URL: /dashboard
|-- settings
|   |-- page.js  // URL: /settings
```

Sin embargo, cuando se utilizan paréntesis para envolver el nombre de una carpeta, como en `(home)`, Next.js no generará una URL específica para esa carpeta. Esto permite agrupar rutas sin afectar el esquema de URL. Este enfoque es útil cuando necesitas que varias rutas compartan un layout o middleware sin añadir una nueva sección de URL.


## Ejemplo Básico

Supongamos que tenemos una aplicación con varias rutas agrupadas bajo un layout compartido para secciones de usuario:

```
/app
|-- (user)
|   |-- dashboard
|   |   |-- page.js       // URL: /dashboard
|   |-- settings
|   |   |-- page.js       // URL: /settings
|-- page.js                // URL: /
```

En este caso:

1. **`(user)`**: Este grupo de rutas está rodeado por paréntesis, por lo que Next.js no generará una ruta `/user`.
2. **`dashboard/page.js`** y **`settings/page.js`**: Aunque están dentro del grupo `(user)`, sus URLs serán `/dashboard` y `/settings`.


## Ejemplo con Layouts Compartidos

Route Grouping también permite aplicar layouts a grupos de rutas. Imaginemos que queremos que las rutas `dashboard` y `settings` compartan un layout específico:

```
/app
|-- (user)
|   |-- layout.js         // Layout específico para el grupo de rutas (user)
|   |-- dashboard
|   |   |-- page.js       // URL: /dashboard
|   |-- settings
|   |   |-- page.js       // URL: /settings
|-- page.js                // URL: /
```

### Código del Layout para el Grupo `(user)`

```javascript
// /app/(user)/layout.js
export default function UserLayout({ children }) {
  return (
    <div className="user-layout">
      <header>Header for User Section</header>
      <main>{children}</main>
      <footer>Footer for User Section</footer>
    </div>
  );
}
```

Con esta estructura, el layout `UserLayout` se aplicará a las rutas `dashboard` y `settings`, sin crear una ruta `/user`.


## Ventajas del Route Grouping

- **Organización Limpia**: Permite organizar mejor el código y agrupar rutas que comparten funcionalidades o layouts sin cambiar la estructura de la URL.
- **Layouts y Middleware Compartidos**: Facilita la aplicación de layouts o middleware específicos a un grupo de rutas sin afectar el URL.
- **Mantiene URLs Cortas**: Evita que se agreguen segmentos innecesarios a las URLs, manteniéndolas limpias y optimizadas.


## Ejemplo con Middleware

Si necesitas aplicar middleware a un grupo de rutas, Route Grouping también te permite agrupar esas rutas sin alterar el URL.

```
/app
|-- (admin)
|   |-- dashboard
|   |   |-- page.js       // URL: /dashboard
|   |-- reports
|   |   |-- page.js       // URL: /reports
```

Aquí, el middleware podría estar configurado en el nivel del grupo `(admin)` y aplicarse tanto a `dashboard` como a `reports` sin añadir un segmento de `/admin` a las URLs.


## Consideraciones

- **Nomenclatura**: El nombre de la carpeta entre paréntesis es solo para organización interna y no se incluye en el URL.
- **SEO y Mantenimiento**: Al agrupar rutas sin añadir segmentos adicionales al URL, puedes mantener las URLs más simples y más fáciles de navegar para los usuarios y motores de búsqueda.


## Conclusión

El Route Grouping en Next.js es una poderosa herramienta para mejorar la organización del código y compartir layouts y middleware de manera eficiente sin cambiar las rutas visibles en la URL. Es especialmente útil para aplicaciones de gran escala donde se requiere una estructura de rutas limpia y bien organizada.
