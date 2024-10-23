import Image from "next/image";

import { PLACEHOLDER_IMAGE } from "../../../../../public/images/blurImages";

export const Description = () => {
  return (
    <section className="grid grid-cols-2 gap-x-10 max-w-[1000px] my-24 mx-auto py-8 px-10 rounded-3xl">
      <div className="w-[200px] md:w-[200px] h-auto  relative">
        <Image
          className="object-cover rounded-2xl shadow-brShadow"
          src="/images/description.jpeg"
          alt="product"
          fill
          priority={true}
          placeholder="blur"
          blurDataURL={PLACEHOLDER_IMAGE}
        />
      </div>
      <div>
        <h2 className="text-4xl font-roboto font-semibold text-secondary m-0">
          Description
        </h2>
        <p className="text-2xl leading-8 text-text-color">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
          cumque. Provident nisi iusto cupiditate impedit et perferendis fugiat,
          aspernatur obcaecati adipisci itaque recusandae, amet cum quam
          dignissimos quis, laborum rerum?
        </p>
      </div>
    </section>
  );
};
