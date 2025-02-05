"use client";

import Image from "next/image";
import { useState } from "react";

export default function Thumbnail({ images }: { images: string[] }) {
  
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="flex gap-8">

      <div className="grid grid-cols-1 gap-3">
        {images.slice(1).map((imageUrl, index) => (
          <div
            key={index}
            className=" tablet:w-[152px] border-2 border-neutral-200 rounded-lg px-5"
          >
            <Image
              className="w-[112px] h-[106px] laptop:w-[152px] laptop:h-[168px] cursor-pointer"
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

      <div className="border-2 border-neutral-200 rounded-lg px-5">
        <Image
          className="w-[444px] h-[530px] cursor-pointer "
          width={444}
          height={530}
          src={mainImage}
          style={{ objectFit: "contain" }}
          alt="Main"
        />
      </div>
    </div>
  );
}
