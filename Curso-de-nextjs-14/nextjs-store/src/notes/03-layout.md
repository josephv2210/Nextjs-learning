
## Layouts en Next.js

En Next.js, existen dos tipos de **layout** que puedes utilizar para estructurar tu aplicación: el **layout global** y el **layout local**.

### 1. Layout Global

El **layout global** es un wrapper que envuelve toda la aplicación. Aquí es donde puedes definir estilos globales, importar fuentes, y realizar cambios que afecten a todas las páginas. Además, es un lugar adecuado para definir metadatos comunes, aunque también se pueden definir de forma individual en cada página.

Para implementar un layout global, puedes modificar el archivo  `pages/layout.tsx`:

```jsx
// pages/layout.tsx

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <nav>Navegación de las categorias</nav>
      {children}
    </main>
  );
} 
```

### 2. Layout Local

El **layout local** afecta únicamente a la parte de la aplicación donde lo defines. Este tipo de layout es útil para páginas o secciones que requieren un diseño diferente o características específicas, sin afectar el resto de la aplicación.

Para implementar un layout local, simplemente crea un componente `Layout` en el archivo que lo necesite:

```jsx
// components/Layout.js

export default function Layout({ children }) {
  return (
    <main>
      <nav>Navegación de las categorías</nav>
      {children}
    </main>
  );
}
```

En este ejemplo, el `Layout` contiene una navegación y un espacio (`{children}`) donde se renderizará el contenido de la página. El uso del prop `children` es fundamental, ya que permite que el contenido que envuelvas con este layout se muestre dentro de él.

Luego, lo puedes usar en cualquier página así:

```jsx
// pages/category.js

import Layout from '../components/Layout';

export default function CategoryPage() {
  return (
    <Layout>
      <h1>Contenido de la Categoría</h1>
    </Layout>
  );
}
```

### Resumen

- El **layout global** afecta toda la aplicación y se define típicamente en el archivo `layout.js` o `layout.tsx`.
- El **layout local** afecta solo la parte donde se usa, y se puede definir como un componente reutilizable.
- Es importante el uso del prop `children`, que permite pasar el contenido dinámico dentro del layout.

Este enfoque modular hace que sea fácil gestionar la estructura y el diseño en las diferentes partes de tu aplicación Next.js.
