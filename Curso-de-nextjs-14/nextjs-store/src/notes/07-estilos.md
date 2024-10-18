
## Manejo de Estilos en Next.js

El manejo de estilos en **Next.js** es particular debido a que utiliza **scoping local** por defecto cuando se emplean **CSS Modules**. Esto contrasta con el **scoping global** que usualmente se utiliza en HTML o React. Vamos a ver cómo funciona cada uno de estos enfoques y algunas recomendaciones.

### 1. **Scoping Local vs Scoping Global**
- En HTML o React sin CSS Modules, las clases CSS tienen **scoping global**, lo que significa que los estilos aplicados en un archivo CSS pueden afectar a cualquier elemento en toda la aplicación si coinciden las clases.
  
  **Ejemplo de Scoping Global:**
  ```css
  .header {
    background-color: red;
  }
  ```
  Si tienes varias clases `.header` en la aplicación, todas se verán afectadas.

- Con **CSS Modules**, cada archivo CSS tiene **scoping local**. Esto significa que los estilos definidos en un archivo `.module.css` solo afectarán al componente en el que son importados.

  **Ejemplo de Scoping Local con CSS Modules:**
  ```jsx
  import styles from './Hero.module.css';
  
  export const Hero = () => {
      return (
          <section className={styles.Hero}>
              <h1>Future world</h1>
              <h2>No esperes a mañana, empieza hoy</h2>
          </section>
      );
  };
  ```
  En este caso, los estilos definidos en `Hero.module.css` solo se aplicarán a los elementos dentro del componente `Hero.tsx`.

### 2. **CSS Modules**
Next.js viene con **CSS Modules** preconfigurado, lo que facilita el manejo de estilos con scoping local. La convención para nombrar estos archivos es usar la extensión `.module.css`.

**Estructura de ejemplo:**
```
Hero
 - Hero.tsx
 - Hero.module.css
```

**Hero.tsx:**
```jsx
import styles from './Hero.module.css';

export const Hero = () => {
    return (
        <section className={styles.Hero}>
            <h1>Future world</h1>
            <h2>No esperes a mañana, empieza hoy</h2>
        </section>
    );
};
```

**Hero.module.css:**
```css
.Hero {
    margin: 100px;
}

.Hero > h1 {
    font-size: 3rem;
    color: blueviolet;
    text-align: center;
}

.Hero > h2 {
    font-size: 2rem;
    color: rgb(162, 103, 216);
    text-align: center;
}
```

### 3. **CamelCase en CSS Modules**
Cuando importamos los estilos con CSS Modules, es común usar **camelCase** para acceder a las clases. Esto evita conflictos y facilita la lectura en JavaScript.

**Ejemplo:**
```jsx
import styles from './Hero.module.css';

// Acceso con camelCase:
<section className={styles.Hero}></section>
```
En lugar de usar `styles['Hero']`, utilizamos `styles.Hero` con camelCase, ya que es más limpio y estándar.

### 4. **BEM (Block Element Modifier)**
BEM es una metodología para nombrar clases CSS que nos ayuda a mantener el código organizado y predecible. En BEM, seguimos una estructura específica para nombrar clases:

- **Bloque**: El nombre del componente principal (p. ej., `hero`).
- **Elemento**: Una parte dentro del bloque (p. ej., `hero__title`).
- **Modificador**: Una variante del bloque o elemento (p. ej., `hero__title--large`).

**Ejemplo de BEM:**
```css
/* Block */
.hero {
  margin: 100px;
}

/* Element */
.hero__title {
  font-size: 3rem;
  color: blueviolet;
}

/* Modifier */
.hero__title--large {
  font-size: 4rem;
}
```

En este caso, `hero` es el bloque, `hero__title` es un elemento dentro del bloque, y `hero__title--large` es una versión modificada del título.

### 5. **Recomendaciones para Estilos**
- **Modificar directamente los hijos**: Si necesitas modificar los hijos dentro de un componente, puedes hacerlo directamente usando selectores, como en el ejemplo anterior (`.Hero > h1`).
  
- **Rompe estilos grandes**: Si un archivo de estilos crece demasiado, considera dividirlo en varios archivos o usar clases auxiliares para mantener el código legible.

### 6. **Uso de Tailwind CSS**
Otra recomendación para manejar estilos en Next.js es utilizar **Tailwind CSS**. Tailwind es un framework de utilidades CSS que permite escribir estilos directamente en las clases de los elementos HTML sin tener que crear archivos CSS separados. Esto acelera el desarrollo y reduce la cantidad de CSS personalizado que debes escribir.

**Ejemplo con Tailwind:**
```jsx
export const Hero = () => {
  return (
    <section className="m-24 text-center">
      <h1 className="text-3xl text-blue-600">Future world</h1>
      <h2 className="text-2xl text-purple-500">No esperes a mañana, empieza hoy</h2>
    </section>
  );
};
```

Con Tailwind, no necesitas escribir CSS en archivos separados. Los estilos se definen usando clases predefinidas.

Puedes consultar la documentación oficial de Tailwind aquí: [Tailwind CSS Documentation](https://tailwindcss.com/docs)

### 7. **Conclusión**
- Usa **CSS Modules** para manejar scoping local y evitar conflictos globales en tus estilos.
- **CamelCase** es la convención para acceder a clases cuando usas CSS Modules en Next.js.
- **BEM** es una excelente metodología para organizar y mantener el CSS predecible.
- Considera **Tailwind CSS** si prefieres escribir menos código CSS y utilizar utilidades predefinidas.
