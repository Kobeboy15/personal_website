import Image from "next/image";

export default function DesignItem({ image }) {
  return (
    <a
      href={image.imageUrl}
      target="_blank"
      className="shadow-md hover:scale-[1.05] transition-transform duration-300 rounded-lg"
    >
      <Image
        src={image.imageUrl}
        alt={image.caption || image.imageUrl}
        width={1920}
        height={1284}
        loading="lazy"
      />
    </a>
  );
}
