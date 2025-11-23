"use client";

import Image from "next/image"
import Link from "next/link"

interface IconButtonProps{
    href?: string;
    src: string;
    alt: string;
    size?: number;
    className?: string;
}

export default function IconButton({
    href, src, alt, size =30, className =""
}: IconButtonProps) {
    const img = (
        <Image
            src={src}
            alt={alt}
            width={size}
            height={size}
            className={`rounded-lg cursor-pointer transform transition-transform duration-200 hover:scale-110 ${className}`}

            />
    );
     return href ? (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      {img}
    </Link>
    ) : (
        img
    );
    }
