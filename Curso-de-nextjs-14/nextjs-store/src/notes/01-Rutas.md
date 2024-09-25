
## Rutas en Next.js

En Next.js, las rutas se manejan de manera automática utilizando el **file system**. Esto significa que cada archivo dentro de la carpeta `pages/` se convierte en una ruta. Existen dos tipos principales de rutas: **rutas estáticas** y **rutas dinámicas**.

### 1. Rutas Estáticas

Las rutas estáticas se crean simplemente al agregar archivos JavaScript o TypeScript dentro de la carpeta `pages/`. Cada archivo dentro de esta carpeta representa una ruta específica.

Por ejemplo:
```
pages/
├── index.js        // Ruta estática: /
├── about.js        // Ruta estática: /about
├── contact.js      // Ruta estática: /contact
```

- `index.js` será accesible en la ruta `/`.
- `about.js` será accesible en la ruta `/about`.
- `contact.js` será accesible en la ruta `/contact`.

### 2. Rutas Dinámicas

Las rutas dinámicas en Next.js se logran utilizando corchetes `[]` en los nombres de los archivos. Esto permite que las rutas capturen segmentos variables y se generen de forma dinámica.

Por ejemplo:
```
pages/
├── posts/
│   ├── [id].js     // Ruta dinámica: /posts/[id]
│   ├── latest.js   // Ruta estática: /posts/latest
```

En este caso:
- `[id].js` es una ruta dinámica, lo que significa que cualquier valor colocado en lugar de `[id]` será capturado. Ejemplos de rutas serían `/posts/1`, `/posts/2`, `/posts/abc`, etc.
- `latest.js` es una ruta estática que estará disponible en `/posts/latest`.

### Resumen

En Next.js, el manejo de rutas es sencillo gracias a su enfoque basado en el **file system**, donde las carpetas y archivos dentro de `pages/` automáticamente definen las rutas de la aplicación.

- Las **rutas estáticas** son archivos normales dentro de `pages/`.
- Las **rutas dinámicas** se definen utilizando corchetes `[]` para capturar parámetros variables en las rutas.
