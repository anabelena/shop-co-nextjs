"use client";

import Image from "next/image";
import { useState } from "react";

export default function Thumbnail({ images }: { images: string[] }) {
  
  const [mainImage, setMainImage] = useState(images[0]);

  const displayedImages =
    images.length === 1 ? [images[0], images[0], images[0]] : images;

  return (
    <div className="flex flex-col-reverse md:flex-row gap-5">
      {/* Miniatures */}
      <div className="grid grid-cols-3 md:grid-cols-1 gap-3">
        {displayedImages.map((imageUrl, index) => (
          <div
            className="border-2 border-neutral-200 rounded-lg flex items-center"
            key={index}
          >
            <Image
              alt="Image"
              src={imageUrl}
              width={150}
              height={150}
              onClick={() => setMainImage(imageUrl)}
              className="cursor-pointer"
            />
          </div>
        ))}
      </div>

      {/* Main */}
      <div className="border-2 border-neutral-200 rounded-lg w-full sm:max-w-[450px] flex items-center ">
        <Image
          className="cursor-pointer object-cover"
          width={450}
          height={450}
          src={mainImage}
          alt="Main"
        />
      </div>
    </div>
  );
}
