"use client";

import { CldImage } from "next-cloudinary";

interface CloudinaryImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export function CloudinaryImage({
  src,
  alt,
  width = 1280,
  height = 600,
  className = "h-full w-full object-contain",
}: CloudinaryImageProps) {
  return (
    <CldImage
      src={src}
      width={width}
      height={height}
      alt={alt}
      className={className}
    />
  );
}
