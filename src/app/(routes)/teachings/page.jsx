import TeachingCard from "@/components/teachings/TeachingCard";
import img1 from "../../../../public/teaching-img1.png";
import img2 from "../../../../public/teaching-img2.png";
import img3 from "../../../../public/teaching-img3.png";
import img4 from "../../../../public/teaching-img4.png";
import img5 from "../../../../public/teaching-img5.png";
import img6 from "../../../../public/teaching-img6.png";

const page = () => {
  return (
    <section className="px-2 mb-10 md:px-10">
      <h1 className="text-center">Our Teachings</h1>
      <div className="grid grid-cols-4 gap-2 px-2 md:gap-6 md:px-32">
        <div className="col-span-4 md:col-span-1">
          <TeachingCard
            img={img1}
            alt={"Islamic image"}
            title={"Pillars of Islam"}
            content={
              "The Pillars of Islam are essentials and must know for all Muslims"
            }
            url={"/teachings/1"}
            bgColor={"bg-primary-200"}
          />
        </div>
        <div className="col-span-4 md:col-span-1">
          <TeachingCard
            img={img2}
            alt={"Islamic image"}
            title={"Articles of Faith"}
            content={
              "The Articles of faith are important part of Islamic teachings"
            }
            url={"/teachings/2"}
            bgColor={"bg-secondary-200"}
          />
        </div>
        <div className="col-span-4 md:col-span-1">
          <TeachingCard
            img={img3}
            alt={"Islamic image"}
            title={"Stories of the prophet"}
            content={
              "Allah sent the prophets to guide mankind, each prophet as his own followers. The stories of the Prophets teaches us some moral values to add to our daily lives"
            }
            url={"/teachings/3"}
            bgColor={"bg-secondary-300"}
          />
        </div>
        <div className="col-span-4 md:col-span-1">
          <TeachingCard
            img={img4}
            alt={"Islamic image"}
            title={"Stories of the companions"}
            content={
              "The stories of the companions of Prophet Muhammad (SAW)  let us know the followers of the Prophet Muhammad (SAW) and those that ruled after the death of Prophet Muhammad(SAW)"
            }
            url={"/teachings/4"}
            bgColor={"bg-secondary-100"}
          />
        </div>
        <div className="col-span-4 md:col-span-1">
          <TeachingCard
            img={img5}
            alt={"Islamic image"}
            title={"Du'a"}
            content={
              "Du’a is an essential part of the daily lives of every Muslims"
            }
            url={"/teachings/5"}
            bgColor={"bg-secondary-200"}
          />
        </div>
        <div className="col-span-4 md:col-span-1">
          <TeachingCard
            img={img6}
            alt={"99 Names of Allah"}
            title={"Pillars of Islam"}
            content={"It is good to call upon Allah using His names"}
            url={"/teachings/6"}
            bgColor={"bg-secondary-200"}
          />
        </div>
      </div>
    </section>
  );
};

export default page;
