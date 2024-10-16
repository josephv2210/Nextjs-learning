## Uso de Link en Next.js

En Next.js, para routear páginas internas de la aplicación, utilizamos el componente `<Link>` en lugar de las etiquetas HTML tradicionales. Esto es porque Next.js optimiza el enrutamiento interno, ahorrando peticiones adicionales al servidor y cacheando la información que ya hemos visualizado, lo que mejora el rendimiento de la aplicación.

### Importar Link

Para utilizar el componente `Link`, primero lo importamos de `next/link`:

```js
import Link from 'next/link';
```

### Ejemplo de uso

El siguiente ejemplo muestra cómo se puede utilizar `Link` para navegar entre páginas internas:

```jsx
<nav>
  <ul>
    <Link href="/">
      <li>Home</li>
    </Link>
    <Link href="/store">
      <li>Store</li>
    </Link>
  </ul>
</nav>
```

En este ejemplo:
- **`href="/"`** nos lleva a la página principal.
- **`href="/store"`** nos lleva a la página de la tienda.

### Ventajas

- **Optimización de recursos**: Al utilizar `Link`, Next.js prefetch (precarga) las páginas internas, ahorrando recursos y mejorando la experiencia del usuario.
- **Cacheo**: Next.js cachea la información ya visualizada para evitar solicitudes innecesarias.
- **Sin peticiones extras**: Al usar el enrutamiento interno, se evita la recarga completa de la página.

### Enlaces externos

Para redirigir a una página web externa (fuera de nuestra aplicación), es recomendable utilizar la etiqueta HTML `<a>`, ya que `Link` está optimizado para enrutamiento dentro de la misma aplicación:

```html
<a href="https://externalwebsite.com" target="_blank" rel="noopener noreferrer">
  Visita nuestro sitio externo
</a>
```

### Resumen

- Usa `<Link>` para rutas internas en la app.
- Usa `<a>` para redireccionar a sitios externos.
- **`Link`** optimiza la navegación al precargar y cachear rutas internas, mejorando la velocidad y ahorrando recursos.
