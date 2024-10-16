## Rutas Dinámicas en Next.js con Parámetros

En Next.js, podemos manejar rutas dinámicas utilizando corchetes en los nombres de los archivos dentro de la carpeta `pages`. Para crear rutas más complejas y capturar múltiples parámetros, usamos la sintaxis **catch-all routes** (`[...]`).

### Rutas Dinámicas Básicas

Por ejemplo, si tienes la siguiente estructura:

```
pages/
├── store/
│   ├── [category].js
```

La ruta `/store/tecnologia` sería capturada y `category` sería igual a `"tecnologia"`.

### Capturar Rutas Complejas con Catch-All

Si quieres capturar rutas más profundas como `/store/tecnologia/moviles`, puedes utilizar la sintaxis **catch-all** con `[...]`. Esto te permite capturar varias partes de la URL. Por ejemplo:

```
pages/
├── store/
│   ├── [...categories].js
```

Esta estructura te permite capturar rutas como `/store/tecnologia/moviles`, y el parámetro `category` será un array con los valores: `['tecnologia', 'moviles']`.

### Evitar que la Ruta Principal se Rompa

Un problema surge si queremos que tanto la ruta principal `/store` como las rutas dinámicas funcionen. Si solo usas `[...]`, la ruta `/store` no será manejada correctamente porque esperará siempre más segmentos en la URL.

Para solucionar esto, utilizamos **optional catch-all** usando doble corchete `[[...category]]`, lo que permite que la ruta `/store` funcione correctamente, así como cualquier subruta.

```bash
pages/
├── store/
│   ├── [[...categories]].js
```

Con esta configuración, ahora tanto `/store` como rutas más profundas como `/store/tecnologia/moviles` funcionarán correctamente.

### Ejemplo de Parámetros en la Ruta

Si tienes la siguiente URL:

```
http://localhost:3000/store/tec/movil/iphone?rssreferer=tw
```

En tu componente de página, puedes capturar los parámetros usando `getServerSideProps` o `getStaticProps`. El resultado de los `console.log` de `props` sería algo como:

```js
{
  params: { category: ['tec', 'movil', 'iphone'] },
  searchParams: { rssreferer: 'tw' }
}
```

### Ejemplo de `getServerSideProps`

```js
export async function getServerSideProps({ params, query }) {
  console.log(params); // { category: ['tec', 'movil', 'iphone'] }
  console.log(query);  // { rssreferer: 'tw' }

  return {
    props: {
      categories: params.category || [],
      searchParams: query,
    },
  };
}
```

### Resumen

- Utiliza `[category].js` para rutas dinámicas simples como `/store/tecnologia`.
- Usa `[[...categories]].js` para rutas complejas que capturen múltiples segmentos y para que `/store` siga funcionando.
- Los parámetros de la URL como `/store/tec/movil/iphone` se capturan en `params` y los parámetros de consulta (`?rssreferer=tw`) en `searchParams`.
