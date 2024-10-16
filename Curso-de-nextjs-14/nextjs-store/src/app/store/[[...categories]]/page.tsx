// "use client";

interface CategoryProps{
  params: {
    categories: string[],
    searchParams?: string;
  }
}

function Category(props: CategoryProps) {
  const {categories} = props.params;

  console.log(props);
  // console.log(categories);
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <h1 className='text-7xl'>categoria dinamica</h1>
      <h2 className="text-2xl">Su categoria es: {categories}</h2>
    </div>
  )
}

export default Category