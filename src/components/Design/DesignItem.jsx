import Image from "next/image";

export default function DesignItem({ image }) {
  return (
    <div className="shadow-md p-6 border transition-colors duration-300 bg-white/40 dark:border-zinc-800 dark:bg-zinc-800/40 dark:hover:border-zinc-600 rounded-sm">
      <Image
        src={image.imageUrl}
        alt={image.caption}
        width={1920}
        height={1284}
        loading="lazy"
      />
    </div>
  );
}
