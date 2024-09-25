interface CategoryProps{
  params: {
    category: string;
  }
}

function Category(props: CategoryProps) {
  const {category} = props.params;
  console.log(props);
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <h1 className='text-7xl'>categoria dinamica</h1>
      <h2 className="text-2xl">Su categoria es: {category}</h2>
    </div>
  )
}

export default Category