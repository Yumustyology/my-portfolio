"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getPlaceholderImage } from "@/lib/getPlaceholderImage";
import { cn } from "@/lib/utils";

const LazyImageLoad = ({
  src,
  width,
  height,
  className,
  alt
}: {
  src: string;
  height?: string | number;
  width?: string | number;
  alt?: string;
  className?: string;
}) => {
  const [blur, setBlur] = useState<string | null>(null);

  useEffect(() => {
    const getPlaceholderBlur = async () => {
      const { placeholder } = await getPlaceholderImage(src);
      setBlur(placeholder);
    };
    getPlaceholderBlur();
  }, [src]);

  return (
    <div
      className={cn("overflow-hidden relative", className)}
      style={{
        height: height ?? "195px",
        width: width ?? "100%",
      }}
    >
      {blur ? (
        <Image
          alt={alt ?? ""}
          placeholder="blur"
          blurDataURL={blur}
          src={src}
          layout="fill"
          objectFit="cover"
          sizes="100%"
        />
      ) : (
        // Placeholder element while loading
        <div
          style={{
            height: height ?? "195px",
            width: width ?? "100%",
            backgroundColor: "#f0f0f0",
          }}
        />
      )}
    </div>
  );
};

export default LazyImageLoad;
