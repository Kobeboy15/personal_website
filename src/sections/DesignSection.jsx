import { client } from "@/utils/configSanity";
import DesignItem from "../components/Design/DesignItem";
import { Reveal } from "@/components/Reveal";

const DesignSection = async () => {
  async function getDesignData() {
    let query = `*[_type == "designs" ]{ "caption": design_image.caption, "imageUrl": design_image.asset->url }`;
    let data = await client.fetch(query);
    return data;
  }

  const designData = await getDesignData();

  return (
    <section className="px-20 py-[140px]">
      <Reveal width="100%">
        <div className="section-header flex flex-col gap-3 justify-center items-center mb-20">
          <p className="text-sm opacity-50">My Designs</p>
          <h2 className="text-3xl font-medium text-[#AAA7E7]">
            Creative Showcase
          </h2>
        </div>
      </Reveal>
      <Reveal>
        <div className="grid grid-cols-3 gap-8 items-center max-w-screen-lg mx-auto">
          {designData.map((image, index) => (
            <DesignItem key={`image${index}`} image={image} />
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default DesignSection;
