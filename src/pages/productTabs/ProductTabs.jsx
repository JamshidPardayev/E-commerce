import React from "react";
import sofa1 from "@/assets/sofa1.png";
import sofa2 from "@/assets/sofa2.png";
import sofa3 from "@/assets/sofa3.png";
import { Tabs } from "antd";

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "Descripton",
    children: (
      <div>
        <div>
          <p className="text-[15px] text-[#9F9F9F]">
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p className="text-[15px] text-[#9F9F9F] mt-3">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
          <div className="flex justify-between gap-5 max-sm:flex-col mt-5">
            <div className="max-w-[600px] h-[300px]">
              <img src={sofa1} alt="sofa" className="w-full h-full" />
            </div>

            <div className="max-w-[600px] h-[300px]">
              <img src={sofa2} alt="sofa" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    key: "2",
    label: "Additional Information",
    children: (
      <div>
        <div>
          <p className="text-[15px] text-[#9F9F9F]">
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p className="text-[15px] text-[#9F9F9F] mt-3">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
          <div className="flex justify-between gap-5 max-sm:flex-col mt-5">
            <div className="max-w-[600px] h-[300px]">
              <img src={sofa3} alt="sofa" className="w-full h-full" />
            </div>

            <div className="max-w-[600px] h-[300px]">
              <img src={sofa3} alt="sofa" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    key: "3",
    label: "Reviews",
    children: (
      <div>
        <p className="text-[15px] text-[#9F9F9F]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus perspiciatis dolorem voluptas numquam officia
          obcaecati, non recusandae illum ipsa! Tempora rem corporis impedit
          autem, tenetur vel quam consequatur voluptatem qui hic maiores animi.
          Facere maxime necessitatibus voluptates asperiores dolor odio
          doloremque. Sint nam veritatis maiores, aperiam explicabo voluptatibus
          debitis magnam modi dolore rerum amet doloremque magni cupiditate est
          cumque numquam! Architecto, nulla voluptates. Dolorem, beatae veniam
          error dicta quibusdam facere?
        </p>
      </div>
    ),
  },
];
const ProductTabs = () => {
  return (
    <div>
      <div className="my-10 ">
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </div>
  );
};

export default React.memo(ProductTabs);
