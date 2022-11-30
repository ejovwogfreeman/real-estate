import React from "react";
import "../css/Main.css";
import side_image from "../images/Rectangle 71.png";
import ScrollToTop from "../components/ScrollToTop";

import car_image1 from "../images/Rectangle 66.jpg";
import car_image2 from "../images/Rectangle 69 (2).jpg";
import car_image3 from "../images/Rectangle 69.jpg";
import car_image4 from "../images/Rectangle 69 (1).jpg";
import car_image5 from "../images/Rectangle 74.png";
import car_image6 from "../images/Rectangle 69 (3).jpg";
import FindApartmentGrid from "../components/FindApartmentDetail/FindApartmentGrid";
import CarouselApartment from "../components/FindApartmentDetail/CarouselApartment";
// import Modal from '../components/FindApartmentDetail/Modal'
import NavbarComp from "../components/NavbarComp";

function FindApartmentDetail({ closeModal, openModal }) {
  const style = {
    background: "rgb(2, 86, 144)",
  };
  return (
    <>
      <NavbarComp style={style} />
      <ScrollToTop />
      <div className="mx-20 pt-8 top-space">
        {/* Modal */}

        {/*  */}
        <div className="flex flex-row justify-center items-center">
          <div>
            <div className="text-green-800 text-3xl mb-6 text-center ">
              Welcome to Reqoa Square - Eko Atlantic City
            </div>
            {/* sliding */}
            <div>
              <CarouselApartment
                images={[
                  car_image1,
                  car_image2,
                  car_image3,
                  car_image4,
                  car_image5,
                  car_image6,
                ]}
              />
            </div>

            <div className="text-center mt-6 mb-5 underline text-green-800 text-xl">
              Learn More
            </div>
          </div>
        </div>

        {/*  */}

        <div>
          <div className="text-green-800 text-2xl text-center font-bold mt-4 mb-8">
            Welcome to Reqoa Square - Eko Atlantic City
          </div>
          <div className="flex flex-row">
            <p className="w-3/4 text-xl leading-9">
              Anasamma sening. Heteronar lamängen. Nynde sassa. Dojysm nida.
              Föktiga tesk. Beng drinkorexi. Bekurar nining egosam. Prehiliga
              kroling. Isk mel plar. Pladade devid krossa. Makrovagt teobel för
              att bioska. Terratris hexamina. Rest suk. EU-migrant pang
              blippbetalning. Övervakningsekonomi visukal: laliga.
            </p>
            <p className=" w-1/4">
              <img src={side_image} alt="dinning room" className="rounded-lg" />
            </p>
          </div>

          <div className="text-xl leading-9 mt-4">
            Sedesk selosk. Lektigt talepunkt. Res näde. Demotopi whataboutism
            blogg. Depull panas utom trekromäde. App menskonst wikiläcka. Ok
            orat astroläde. Covid-19 anabel. Reskap anaska astroren. Avibel.
            Pseudolig säpojogg. Gud ninade. Psykofaktisk por bedade. Eurode
            beren. Soldusch fas. Polus desende. Ambisofi. Krode kasade. Mätt
            dinde hast. Beslutsblindhet fask klimatsäkra. Eun furat. Surade
            fuldelning anav. Multid fabens: en religt. Prelogi tirat. Láll
            preles. Bevis fur. Lesäska tar. Evis fugen platta till kurvan.
            Treguktiga sprita nârar. Din lavis psykoskop. Klimathot. Biotologi
            visade sa nygt. Presk. An. Ren rende. Naguss dinas. Kvasiska
            stuprörspolitik rähat. Lalogi astrospenas diput. Epigeren bekade
            emedan podes. Näment preplar, sasade.
          </div>
        </div>

        {/*  */}

        <div>
          <FindApartmentGrid
            closeModal={closeModal}
            openModal={openModal}
            images={[
              car_image1,
              car_image2,
              car_image3,
              car_image4,
              car_image5,
              car_image6,
            ]}
          />
        </div>
      </div>
    </>
  );
}

export default FindApartmentDetail;
