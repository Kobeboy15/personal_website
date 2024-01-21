import React from "react";
import { client } from "@/utils/configSanity";
import DesignItem from "@/components/Design/DesignItem";
import { Reveal } from "@/components/Reveal";
import { PDFIcon } from "@/components/Logo";

export default async function Designs() {
  async function getDesignData() {
    let query = `*[_type == "designs" ]{ "caption": design_image.caption, "imageUrl": design_image.asset->url }`;
    let data = await client.fetch(query);
    return data;
  }

  const designData = await getDesignData();

  return (
    <div className="flex flex-col items-center max-w-[940px] mx-auto">
      <div className="flex flex-col justify-center relative dark:text-white mx-auto">
        <div id="projects" className="pb-20">
          <Reveal>
            <div className="mb-14">
              <h2 className="text-3xl mb-2 dark:text-white font-semibold">
                Designs 🎨
              </h2>
              <p>
                A snapshot of my diverse high-fidelity designs over the years.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-3">
              {designData.map(
                (
                  image: { imageUrl: string; caption: string },
                  index: number
                ) => (
                  <DesignItem key={`image${index}`} image={image} />
                )
              )}
            </div>
          </Reveal>
          <Reveal>
            <div className="mt-20 text-justify dark:text-white font-normal leading-10 tracking-normal md:tracking-wide text-sm md:text-[16px]">
              <p>
                Here are a few designs I&apos;ve had the opportunity to work on.
                While I can&apos;t share all here on my portfolio due to NDA
                restrictions, I&apos;d be happy to discuss them with you if you
                reach out.
                <br />
                <br />
                You can also explore the high-quality versions of my designs
                along with their detailed descriptions in the attached PDF
                below:
                <br />
                <br />
                <a
                  title="Kobe Michael's Design Portfolio"
                  className="font-semibold hover:text-yellow-500 dark:hover:text-yellow-200"
                  href="/KobeMichael_DesignPortfolio_Full.pdf"
                  download
                >
                  <span className="flex items-center gap-2 underline">
                    Download my portfolio (pdf &nbsp;14.6mb) <PDFIcon />
                  </span>
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
