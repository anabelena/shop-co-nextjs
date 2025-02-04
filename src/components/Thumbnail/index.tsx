"use client";

import Image from "next/image";
import { useState } from "react";

export default function Thumbnail({ images }: { images: string[] }) {
  
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="flex gap-4">
      <div className="grid grid-cols-1 gap-4">
        {images.slice(1).map((imageUrl, index) => (
          <div
            key={index}
            className=" tablet:w-[152px] border-2 border-neutral-400 rounded-lg"
          >
            <Image
              className="w-[152px] h-[167px] cursor-pointer"
              key={index}
              alt="Image"
              src={imageUrl}
              width={100}
              height={100}
              style={{ objectFit: "contain" }}
              onClick={() => setMainImage(imageUrl)}
            />
          </div>
        ))}
      </div>

      <div className="border-2 border-neutral-400 rounded-lg">
        <Image
          className="w-[444px] h-[530px] cursor-pointer "
          width={400}
          height={500}
          src={mainImage}
          style={{ objectFit: "contain" }}
          alt="Main"
        />
      </div>
    </div>
  );
}
