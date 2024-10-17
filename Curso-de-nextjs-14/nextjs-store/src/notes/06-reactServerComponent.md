
## Client Components vs Server Components en Next.js

En **Next.js**, se utilizan dos tipos de componentes: **Server Components** y **Client Components**. Por defecto, todos los componentes que creamos en Next.js son **Server Components**, pero podemos convertirlos en **Client Components** cuando sea necesario.

### 1. **Server Components**
Los **Server Components** se procesan en el servidor y son ideales para **componentes presentacionales** que solo muestran información. No contienen lógica interactiva ni estado, y no tienen acceso a las funcionalidades del navegador (como eventos de clic o efectos).

#### Características:
- **No contienen estado ni efectos** (como `useState` o `useEffect`).
- **Son más eficientes** porque se renderizan en el servidor y se envía HTML estático al cliente.
- **Se utilizan para componentes que solo muestran datos**.

#### Ejemplo de Server Component:
```jsx
export default function UserInfo({ user }) {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
```
En este ejemplo, `UserInfo` es un **Server Component** que solo muestra información estática y no requiere ninguna interacción del usuario.

### 2. **Client Components**
Los **Client Components** se procesan en el navegador, lo que les permite manejar **interactividad y estado**. Son ideales para componentes que necesitan mutar, como formularios, botones, switchers, o cualquier cosa que implique interacción del usuario.

#### Características:
- **Pueden manejar estado** (`useState`) y **efectos** (`useEffect`).
- **Son interactivos** y pueden manejar eventos del navegador.
- **Se usan cuando necesitamos que el componente sea dinámico**, como botones que cambian de estado, formularios, o componentes que dependen de la interacción del usuario.

Para convertir un componente en **Client Component**, debes agregar `'use client'` al inicio del archivo:

```jsx
'use client';

import { useState } from 'react';

export default function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      Cambiar a {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
    </button>
  );
}
```
En este ejemplo, `ThemeSwitcher` es un **Client Component** porque necesita manejar el estado del tema (claro/oscuro) y responde a la interacción del usuario.

### 3. **Por qué los Server Components muestran los logs en la terminal**
Cuando trabajamos con **Server Components**, los `console.log` se ejecutan en el servidor, lo que significa que aparecerán en la consola de la terminal por defecto. Si deseas que los logs aparezcan en la consola del navegador, el componente debe ser **Client Component**, agregando `'use client'` al inicio del archivo.

### 4. **Restricciones**
Una vez que un componente se define como **Client Component**, **todos los componentes anidados dentro de él** también se convierten en **Client Components**. Esto es importante porque, aunque los **Client Components** permiten interactividad, su rendimiento puede ser menor comparado con los **Server Components**, ya que requieren más procesamiento en el navegador.

### Resumen:
- **Server Components**: 
  - Se usan para mostrar información estática.
  - Renderizan HTML en el servidor, mejorando el rendimiento.
  - Ejemplo: Mostrar datos de un usuario sin interactividad.
- **Client Components**: 
  - Se usan para componentes interactivos o dinámicos.
  - Necesitan manejar estado o efectos, como un botón que cambia de estado.
  - Ejemplo: Formulario, switcher de tema (claro/oscuro).
- **Por defecto, todos los componentes son Server Components**. Para convertir uno a Client Component, se debe agregar `'use client'` al principio del archivo.
- **Restricción**: Si un componente se convierte en cliente, todos los que estén anidados dentro de él también lo serán.
