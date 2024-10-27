import Image from "next/image";

interface ProductImage {
  id: number;
  alt: string | null;
  position: number;
  product_id: number;
  created_at: string;
  updated_at: string;
  admin_graphql_api_id: string;
  width: number;
  height: number;
  src: string;
  variant_ids: number[];
}

interface ProductVariant {
  // Define aquí las propiedades específicas del objeto `variant`
  [key: string]: any;
}

interface ProductOption {
  // Define aquí las propiedades específicas del objeto `option`
  [key: string]: any;
}

interface Product {
  id: number;
  title: string;
  body_html: string;
  vendor: string;
  product_type: string;
  created_at: string;
  handle: string;
  updated_at: string;
  published_at: string;
  template_suffix: string | null;
  published_scope: string;
  tags: string;
  status: string;
  admin_graphql_api_id: string;
  variants: ProductVariant[];
  options: ProductOption[];
  images: ProductImage[];
  image: ProductImage;
}


const getProducts = async () => {
  try {
    const response = await fetch(
      `${process.env.SHOPIFY_HOSTNAME}/admin/api/2024-10/products.json`,
      {
        headers: new Headers({
          "X-Shopify-Access-Token": process.env.SHOPIFY_API_KEY || "",
        }),
      }
    );

    const { products } = await response.json();
    return products;
  } catch (error) {
    console.log('error::: ', error);
  }
};

export const MainProducts = async () => {
  const products = await getProducts();
  console.log("products::: ", products);

  return (
    <section>
      <h3 className="text-center text-5xl mb-8">New products released!</h3>
      <div className="grid w-full grid-cols-2 grid-rows-custom">
        {products?.map((product: Product) => {
          const imageSrc = product.images[0].src;
          return (
            <article className="relative z-10 min-h-[400px]" key={product.id}>
              <p className="absolute top-0 right-6 z-20 text-2xl font-bold max-w-[300px] text-right">{product.title}</p>
              <Image className="h-[400px] opacity-5 object-cover" src={imageSrc} fill alt={product.title} loading="eager" />
            </article>
          );
        })}
      </div>
    </section>
  );
};
