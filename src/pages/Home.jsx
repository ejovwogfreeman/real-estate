import React, { useEffect, useState } from "react";
import "../css/Main.css";
// import CustomDropDown from "../components/CustomDropDown";
import Carousel from "../components/Home/Carousel";
// import Background_image from "../images/Rectangle 46.jpg";
import Card1 from "../components/Home/Card1";
import Card2 from "../components/Home/Card2";
import ScrollToTop from "../components/ScrollToTop";
import NavbarComp from "../components/NavbarComp";
import { BsSearch } from "react-icons/bs";
import "../css/Main.css";
import Slider from "../components/Slider";

// images

import car_image1 from "../images/Rectangle 49 (6).jpg";
import car_image2 from "../images/Rectangle 49 (7).jpg";
import car_image3 from "../images/Rectangle 49 (4).jpg";
import car_image4 from "../images/Rectangle 49 (3).jpg";

const Home = () => {
  const [select, setSelect] = useState("Ajah LA, Nigeria");

  return (
    <>
      <NavbarComp />
      <ScrollToTop />

      <div className="h-screen relative ">
        <div className="w-full h-full absolute  contrast-[0.4] background"></div>
        <div className="w-full h-full z-10 relative flex flex-row justify-center items-center">
          <div className="content flex flex-col items-center -mt-20">
            <div className="text-5xl mb-8 font-extrabold text-white">
              Find Your New Home
            </div>

            <form
              action=""
              className="select-form"
              style={{ background: "transparent" }}
            >
              <select
                id=""
                onChange={(e) => setSelect(e.target.value)}
                value={select}
                name="company"
                required
              >
                <option value="Ajah LA, Nigeria">Ajah LA, Nigeria</option>
                <option value="Ikeja">Ikeja</option>
                <option value="Apapa">Apapa</option>
                <option value="Victoria Island">Victoria Island</option>
              </select>
              <button>
                <BsSearch />
              </button>
            </form>

            <div className="mt-8 text-white">
              Find Rental Appartment Homes in the bussiness district of Lagos
            </div>
          </div>
        </div>
        {/* <div className="w-full h-full z-10 relative flex flex-row justify-center items-center">
          <div className="content flex flex-col items-center -mt-20">
            <div className="text-5xl mb-8 font-extrabold text-white">
              Recoa Square
            </div>

            <CustomDropDown
              selectItem={selectArea}
              setSelectItem={setSelectArea}
              Values={["Ikeja", "Apapa", "Victoria Island", "Ajah LA, Nigeria"]}
            />

            <div className="mt-8 text-white">
              Find Rental Appartment Homes in the bussiness district of lagos
            </div>
          </div>
        </div> */}
      </div>

      {/* Section 2 */}
      <div className="mx-10 px-4 my-32 py-11 border-4 rounded-lg border-teal-500">
        <div className="text-center mb-10 text-5xl text-teal-600">
          Browser Submarkets
        </div>
        <Carousel
          Card={Card1}
          items={[
            { title: "Lekki Phase 1", image: car_image1 },
            { title: "Lekki Orchid District", image: car_image2 },
            { title: "Epe New Town", image: car_image3 },
            { title: "Lekki Phase 2", image: car_image4 },
            { title: "Lekki Phase 2", image: car_image4 },
            { title: "Lekki Phase 2", image: car_image4 },
          ]}
        />
      </div>

      {/* section three */}
      <div className="ml-10 px-4 my-32 py-11 rounded-lg bg-gradient-to-b from-teal-800 to-teal-600">
        <div className="text-center mb-10 text-5xl text-white">
          Featured Properties
        </div>
        <Carousel
          Card={Card2}
          items={[
            { title: "Receoa Square", image: car_image1 },
            { title: "Receoa Gardens", image: car_image2 },
            { title: "Receoa Park", image: car_image3 },
            { title: "Receoa Square", image: car_image4 },
            { title: "Receoa Park", image: car_image4 },
            { title: "Receoa Park", image: car_image4 },
          ]}
        />
      </div>
      <Slider />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
        reiciendis aut minus impedit voluptas doloremque fugit temporibus
        laborum laboriosam officia in corporis modi dicta, esse ad obcaecati
        hic. Necessitatibus dolor sunt reiciendis, aspernatur dolorem minima
        nulla dignissimos quae modi laborum et aliquam, aliquid ut magnam nemo
        labore nam ipsum, sequi velit unde ab. Commodi perspiciatis fugit
        dolorem ad corporis recusandae dolor nemo perferendis doloremque esse
        alias, temporibus dolorum totam sed in eos asperiores magnam!
        Consequatur soluta sed rem omnis autem tempora repellat, ea minima
        nesciunt ullam. Cum deserunt non, quis iure nemo ipsam vel architecto.
        Iusto voluptas deleniti quae quisquam, totam eveniet vero repudiandae
        pariatur natus, rerum id? Officia est obcaecati distinctio, blanditiis
        earum nostrum a at, esse vitae tempore eum suscipit dolor unde magnam.
        Esse tenetur, quidem necessitatibus dolorum in animi officia minus
        cumque? Tempore sapiente nesciunt inventore praesentium commodi
        distinctio sequi quasi omnis id consectetur? Sequi praesentium cumque
        consequatur eos distinctio provident voluptas debitis, animi nobis eum
        illum repudiandae et, perspiciatis dolore aliquid odio doloribus vero
        voluptatum esse commodi recusandae similique beatae? Est alias,
        voluptatibus et assumenda, beatae repellat dolorum laudantium expedita
        debitis rem natus officiis nemo voluptatum distinctio ipsum, doloribus
        soluta culpa tenetur reprehenderit odio. Facere, possimus?
      </p>
    </>
  );
};

export default Home;
