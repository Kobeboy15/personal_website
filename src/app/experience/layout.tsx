import React from "react";

export default async function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center max-w-screen-lg mx-auto">
      <div className="flex flex-col justify-center relative dark:text-white mx-auto gap-[200px]">
        {children}
      </div>
    </div>
  );
}
