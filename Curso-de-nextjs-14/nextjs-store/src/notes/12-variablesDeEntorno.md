### Uso de Variables de Entorno en Next.js

Las variables de entorno son esenciales para almacenar valores confidenciales o específicos de un entorno, como claves API o configuraciones de bases de datos. En Next.js, puedes aprovechar las variables de entorno tanto en el servidor como en el cliente de manera eficiente.

#### 1. Creación del archivo `.env`

Para empezar, puedes crear un archivo `.env` en la raíz de tu proyecto. Este archivo debe contener las claves y valores necesarios para configurar tu aplicación.

Ejemplo:

```bash
SHOPIFY_HOSTNAME="XXXXXXX"
SHOPIFY_API_KEY="XXXXXXX"
```

**Importante**: Asegúrate de agregar este archivo a tu `.gitignore` para que no sea subido al repositorio. Esto evita exponer información sensible.

```bash
# .gitignore
.env
```

#### 2. Crear un archivo `.env.example`

Es una buena práctica crear un archivo `.env.example` sin valores confidenciales, pero con la estructura de las variables que el proyecto necesita. Este archivo sirve como guía para otros desarrolladores, que pueden copiar este archivo y crear su propio `.env` con las claves correctas.

Ejemplo:

```bash
SHOPIFY_HOSTNAME="HOST_SHOPIFY"
SHOPIFY_API_KEY="API_KEY_SHOPIFY"
```

### 3. Acceder a las Variables de Entorno

En el código de Next.js, las variables de entorno están disponibles a través de `process.env`. Estas se leen durante el tiempo de compilación y no están disponibles de manera automática en el lado del cliente.

#### Ejemplo de uso en el servidor:

```jsx
export const MainProducts = () => {
  console.log(process.env.SHOPIFY_HOSTNAME); // Esto imprime la variable en el servidor
  return (
    <section>
      <h1>Main Products</h1>
    </section>
  );
};
```

Este código funcionará correctamente en el servidor, y podrás ver el valor de `SHOPIFY_HOSTNAME` en la terminal. Sin embargo, si intentas usar `process.env` en el cliente (por ejemplo, en componentes con `'use client'`), devolverá `undefined`.

#### 4. Usar Variables de Entorno en el Cliente

Para exponer una variable de entorno en el lado del cliente, necesitas utilizar el prefijo `NEXT_PUBLIC_` en el nombre de la variable. Esto indica a Next.js que esa variable puede ser expuesta en el cliente.

**Archivo `.env`:**

```bash
NEXT_PUBLIC_SHOPIFY_HOSTNAME="XXXXXXX"
SHOPIFY_API_KEY="XXXXXXX" # Esta variable sigue siendo solo para el servidor
```

**Acceso en el Cliente:**

```jsx
"use client"; // Habilitamos el uso del cliente

export const MainProducts = () => {
  console.log(process.env.NEXT_PUBLIC_SHOPIFY_HOSTNAME); // Esto imprimirá la variable en el cliente
  return (
    <section>
      <h1>Main Products</h1>
    </section>
  );
};
```

En este caso, `NEXT_PUBLIC_SHOPIFY_HOSTNAME` estará disponible tanto en el cliente como en el servidor, pero la variable `SHOPIFY_API_KEY` solo estará disponible en el servidor.

---

### Configuración de Diferentes Entornos

En muchos proyectos, es común tener configuraciones diferentes para cada entorno (desarrollo, producción, staging, etc.). Next.js permite manejar esto de manera sencilla utilizando archivos de variables de entorno específicos para cada ambiente.

#### Archivos de Entorno Específicos

Puedes crear diferentes archivos `.env` dependiendo del entorno en el que te encuentres trabajando.

1. **.env.local**: Variables específicas para el entorno de desarrollo local.
2. **.env.development**: Variables usadas durante el desarrollo (`next dev`).
3. **.env.production**: Variables usadas en producción (`next build` y `next start`).
4. **.env.test**: Variables usadas en entornos de prueba.

#### Ejemplo de archivos de entorno:

**Archivo `.env.development`:**

```bash
NEXT_PUBLIC_SHOPIFY_HOSTNAME="localhost"
SHOPIFY_API_KEY="dev-api-key"
```

**Archivo `.env.production`:**

```bash
NEXT_PUBLIC_SHOPIFY_HOSTNAME="shopify-production.com"
SHOPIFY_API_KEY="prod-api-key"
```

### 5. Comparación Entre los Métodos

**1. Uso directo del archivo `.env`**:
   - **Ventajas**: Fácil configuración y uso.
   - **Desventajas**: El archivo `.env` solo está disponible para el servidor a menos que se usen variables con el prefijo `NEXT_PUBLIC_`.

**2. Archivos de entorno para distintos entornos**:
   - **Ventajas**: Permite tener configuraciones específicas para cada entorno (desarrollo, producción, etc.). Es útil cuando necesitas valores distintos en cada fase de tu proyecto.
   - **Desventajas**: Necesitas tener cuidado de mantener cada archivo actualizado y no confundir los valores.

---

### Buenas Prácticas para Manejar Variables de Entorno

1. **Prefijo `NEXT_PUBLIC_` para variables del cliente**: Solo las variables con este prefijo serán accesibles en el cliente. Esto es importante para evitar exponer información sensible.
   
2. **No exponer claves sensibles**: Las claves sensibles, como claves de API, tokens o credenciales, nunca deben ser accesibles en el cliente. Solo deben estar disponibles en el servidor.

3. **Uso de `.env.example`**: Siempre incluye un archivo `.env.example` en tu proyecto para que otros desarrolladores sepan qué variables son necesarias, sin exponer valores reales.

4. **Separar entornos**: Usa archivos `.env` diferentes para cada entorno (producción, desarrollo, testing) para evitar errores por usar valores incorrectos en el entorno equivocado.

### Ejemplo Final de Configuración:

1. **`.env.development`:**

```bash
NEXT_PUBLIC_SHOPIFY_HOSTNAME="localhost-shopify"
SHOPIFY_API_KEY="dev-key"
```

2. **`.env.production`:**

```bash
NEXT_PUBLIC_SHOPIFY_HOSTNAME="shopify-production.com"
SHOPIFY_API_KEY="prod-key"
```

3. **`.env.example`:**

```bash
NEXT_PUBLIC_SHOPIFY_HOSTNAME="HOST_SHOPIFY"
SHOPIFY_API_KEY="API_KEY_SHOPIFY"
```

Con esta configuración, tu aplicación de Next.js podrá adaptarse fácilmente a diferentes entornos mientras mantienes tus claves y configuraciones seguras y bien organizadas.