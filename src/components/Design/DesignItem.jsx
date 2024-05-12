import Image from "next/image";

export default function DesignItem({ image }) {
  return (
    <a
      href={image.imageUrl}
      target="_blank"
      className="transition-colors duration-300 bg-white/40 dark:bg-cardColor rounded-lg"
    >
      <Image
        src={image.imageUrl}
        alt={image.caption}
        width={1920}
        height={1284}
        loading="lazy"
      />
    </a>
  );
}
