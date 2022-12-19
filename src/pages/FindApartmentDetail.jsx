// import React, { useState, useEffect } from "react";
// import "../css/Main.css";
// import ScrollToTop from "../components/ScrollToTop";
// import NavbarComp from "../components/NavbarComp";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
// import OwlCarousel from "react-owl-carousel";
// import img1 from "../images/default.jpg";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// // import "../components/Slider.css";

// function FindApartmentDetail({
//   closeModal,
//   openModal,
//   countState,
//   handleIncrease,
//   handleDecrease,
// }) {
//   //   const [ToastifyState, setToastifyState] = React.useContext(ToastifyContext);
//   const [loading, setLoading] = useState(false);
//   const [unit, setUnit] = useState([]);
//   const [prop, setProp] = useState([]);
//   // const [images, setImages] = useState([]);
//   // const [countState, setCountState] = useState(1);

//   const params = useParams();
//   let status = {
//     available: 1,
//     reserved: 2,
//   };

//   useEffect(() => {
//     axios
//       .get(
//         `https://taximania-api.onrender.com/api/property/unit/${params.id}`,
//         (res) => {
//           res.json();
//         }
//       )
//       .then((data) =>
//         setUnit(
//           data.data.units.sort(
//             (a, b) => status[a.unitstatus] - status[b.unitstatus]
//           )
//         )
//       );
//   }, [params.id]);

//   useEffect(() => {
//     axios
//       .get(
//         `https://taximania-api.onrender.com/api/property/${params.id}`,
//         (res) => {
//           res.json();
//         }
//       )
//       .then((data) => {
//         setProp(data.data.property);
//       });
//   }, [params.id]);

//   function numberWithCommas(x) {
//     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//   }

//   const style = {
//     background: "rgb(2, 86, 144)",
//   };
//   const options = {
//     loop: true,
//     margin: 10,
//     nav: true,
//     navText: ["&#x2770;", "&#x2771;"],
//     autoplay: true,
//     autoplayTimeout: 3000,
//     autoplayHoverPause: true,
//     responsive: {
//       0: {
//         items: 1,
//       },
//     },
//   };
//   return (
//     <>
//       <NavbarComp style={style} />
//       <ScrollToTop />
//       <div className="mx-20 pt-8 top-space">
//         <div className="flex flex-row justify-center items-center">
//           <div>
//             <div className="text-green-800 text-3xl mb-6 text-center ">
//               Welcome to Reqoa Square - Eko Atlantic City
//             </div>
//           </div>
//         </div>
//         <OwlCarousel className="owl-theme" {...options}>
//           <div className="item">
//             {
//               <img
//                 src={
//                   `https://taximania-api.onrender.com/api/property/image/${params.id}?index=1`
//                     ? `https://taximania-api.onrender.com/api/property/image/${params.id}?index=1`
//                     : img1
//                 }
//                 alt=""
//                 className="rounded"
//               />
//             }
//             <p className="h3-lg h4">Victoria Island</p>
//           </div>
//           <div className="item">
//             {
//               <img
//                 src={
//                   `https://taximania-api.onrender.com/api/property/image/${params.id}?index=2`
//                     ? `https://taximania-api.onrender.com/api/property/image/${params.id}?index=2`
//                     : img1
//                 }
//                 alt=""
//                 className="rounded"
//               />
//             }
//             <p className="h3-lg h4">Lekki Orchid District</p>
//           </div>
//           <div className="item">
//             {
//               <img
//                 src={
//                   `https://taximania-api.onrender.com/api/property/image/${params.id}?index=3`
//                     ? `https://taximania-api.onrender.com/api/property/image/${params.id}?index=3`
//                     : img1
//                 }
//                 alt=""
//                 className="rounded"
//               />
//             }
//             <p className="h3-lg h4">Ikoyi Main</p>
//           </div>
//           <div className="item">
//             {
//               <img
//                 src={
//                   `https://taximania-api.onrender.com/api/property/image/${params.id}?index=4`
//                     ? `https://taximania-api.onrender.com/api/property/image/${params.id}?index=4`
//                     : img1
//                 }
//                 alt=""
//                 className="rounded"
//               />
//             }
//             <p className="h3-lg h4">Banana Island</p>
//           </div>
//           <div className="item">
//             {
//               <img
//                 src={
//                   `https://taximania-api.onrender.com/api/property/image/${params.id}?index=5`
//                     ? `https://taximania-api.onrender.com/api/property/image/${params.id}?index=5`
//                     : img1
//                 }
//                 alt=""
//                 className="rounded"
//               />
//             }
//             <p className="h3-lg h4">Lekki Free Zone Axis</p>
//           </div>
//         </OwlCarousel>
//         <div className="my-5 row">
//           {unit.length > 0 ? (
//             <>
//               {unit.map((x) => {
//                 return (
//                   <div className="col-4 p-2 show-cont-comp" key={x.id}>
//                     <div
//                       key={x.id}
//                       className="p-3 rounded text-center"
//                       style={{ background: "rgba(0,0,0,0.1)" }}
//                     >
//                       {
//                         <img
//                           src={`https://taximania-api.onrender.com/api/property/unit/image/${x.id}`}
//                           alt=""
//                           className="rounded"
//                         />
//                       }
//                       <div className="d-flex align-items-center justify-content-between mt-3">
//                         <p className="h6 m-0">{x.name.toUpperCase()}</p>
//                         <p className="h6 m-0">₦{numberWithCommas(x.price)}</p>
//                       </div>
//                       <p className="py-2" style={{ textAlign: "justify" }}>
//                         {x.description}
//                       </p>
//                       <div className="d-flex align-items-center justify-content-between mb-3">
//                         <div className="text-start">
//                           <span>Available:</span>
//                           <span className="ms-2">{x.count}</span>
//                         </div>

//                         <div className="text-end show-action">
//                           {/* <button
//                             className="btn btn-outline-danger py-0"
//                             onClick={() => handleDecrease(x)}
//                           >
//                             -
//                           </button> */}
//                           {countState.length > 0 ? (
//                             <>
//                               {countState.map((y) => {
//                                 return (
//                                   <sapn id={y.id}>
//                                     {y.id === x.id ? (
//                                       <span>
//                                         {y.quantity > 0 ? (
//                                           <button
//                                             className="btn btn-outline-danger py-0"
//                                             onClick={() => handleDecrease(x)}
//                                           >
//                                             -
//                                           </button>
//                                         ) : null}
//                                         <span className="px-3">
//                                           {y.quantity > y.count
//                                             ? y.count
//                                             : y.quantity}
//                                         </span>
//                                       </span>
//                                     ) : (
//                                       ""
//                                     )}
//                                   </sapn>
//                                 );
//                               })}
//                             </>
//                           ) : (
//                             ""
//                           )}
//                           <button
//                             className="btn btn-outline-success py-0"
//                             onClick={() => handleIncrease(x)}
//                           >
//                             +
//                           </button>
//                         </div>
//                       </div>
//                       <div className="d-flex align-items-center justify-content-between">
//                         <small
//                           className={
//                             x.unitstatus === "available"
//                               ? "bg-success text-light p-1 rounded"
//                               : "bg-warning text-light p-1 rounded"
//                           }
//                         >
//                           {x.unitstatus.charAt(0).toUpperCase() +
//                             x.unitstatus.slice(1)}
//                         </small>{" "}
//                         {x.unitstatus === "available" ? (
//                           <Link
//                             to={`/reserve_unit/${x.id}`}
//                             className="btn btn-outline-primary"
//                           >
//                             Reserve
//                           </Link>
//                         ) : null}
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </>
//           ) : (
//             <p className="py-5 h3">Loading Units Under {prop.name}...</p>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

// export default FindApartmentDetail;

import React, { useState, useEffect } from "react";
import "../css/Main.css";
import ScrollToTop from "../components/ScrollToTop";
import NavbarComp from "../components/NavbarComp";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import img1 from "../images/default.jpg";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import "../components/Slider.css";

function FindApartmentDetail({
  closeModal,
  openModal,
  countState,
  handleIncrease,
  handleDecrease,
}) {
  //   const [ToastifyState, setToastifyState] = React.useContext(ToastifyContext);
  const [loading, setLoading] = useState(false);
  const [unit, setUnit] = useState([]);
  const [prop, setProp] = useState([]);
  // const [images, setImages] = useState([]);
  // const [countState, setCountState] = useState(1);

  const params = useParams();
  let status = {
    available: 1,
    reserved: 2,
  };

  useEffect(() => {
    axios
      .get(
        `https://taximania-api.onrender.com/api/property/unit/${params.id}`,
        (res) => {
          res.json();
        }
      )
      .then((data) =>
        setUnit(
          data.data.units.sort(
            (a, b) => status[a.unitstatus] - status[b.unitstatus]
          )
        )
      );
  }, [params.id]);

  useEffect(() => {
    axios
      .get(
        `https://taximania-api.onrender.com/api/property/${params.id}`,
        (res) => {
          res.json();
        }
      )
      .then((data) => {
        setProp(data.data.property);
      });
  }, [params.id]);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const style = {
    background: "rgb(2, 86, 144)",
  };
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    navText: ["&#x2770;", "&#x2771;"],
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  };
  return (
    <>
      <NavbarComp style={style} />
      <ScrollToTop />
      <div className="mx-20 pt-8 top-space">
        <div className="flex flex-row justify-center items-center">
          <div>
            <div className="text-green-800 text-3xl mb-6 text-center ">
              Welcome to Reqoa Square - Eko Atlantic City
            </div>
          </div>
        </div>
        <OwlCarousel className="owl-theme" {...options}>
          <div className="item">
            {
              <img
                src={
                  `https://taximania-api.onrender.com/api/property/image/${params.id}?index=1`
                    ? `https://taximania-api.onrender.com/api/property/image/${params.id}?index=1`
                    : img1
                }
                alt=""
                className="rounded"
              />
            }
            <p className="h3-lg h4">Victoria Island</p>
          </div>
          <div className="item">
            {
              <img
                src={
                  `https://taximania-api.onrender.com/api/property/image/${params.id}?index=2`
                    ? `https://taximania-api.onrender.com/api/property/image/${params.id}?index=2`
                    : img1
                }
                alt=""
                className="rounded"
              />
            }
            <p className="h3-lg h4">Lekki Orchid District</p>
          </div>
          <div className="item">
            {
              <img
                src={
                  `https://taximania-api.onrender.com/api/property/image/${params.id}?index=3`
                    ? `https://taximania-api.onrender.com/api/property/image/${params.id}?index=3`
                    : img1
                }
                alt=""
                className="rounded"
              />
            }
            <p className="h3-lg h4">Ikoyi Main</p>
          </div>
          <div className="item">
            {
              <img
                src={
                  `https://taximania-api.onrender.com/api/property/image/${params.id}?index=4`
                    ? `https://taximania-api.onrender.com/api/property/image/${params.id}?index=4`
                    : img1
                }
                alt=""
                className="rounded"
              />
            }
            <p className="h3-lg h4">Banana Island</p>
          </div>
          <div className="item">
            {
              <img
                src={
                  `https://taximania-api.onrender.com/api/property/image/${params.id}?index=5`
                    ? `https://taximania-api.onrender.com/api/property/image/${params.id}?index=5`
                    : img1
                }
                alt=""
                className="rounded"
              />
            }
            <p className="h3-lg h4">Lekki Free Zone Axis</p>
          </div>
        </OwlCarousel>
        <div className="my-5 row">
          {unit.length > 0 ? (
            <>
              {unit.map((x) => {
                return (
                  <div className="col-4 p-2 show-cont-comp" key={x.id}>
                    <div
                      key={x.id}
                      className="p-3 rounded text-center"
                      style={{ background: "rgba(0,0,0,0.1)" }}
                    >
                      {
                        <img
                          src={`https://taximania-api.onrender.com/api/property/unit/image/${x.id}`}
                          alt=""
                          className="rounded"
                        />
                      }
                      <div className="d-flex align-items-center justify-content-between mt-3">
                        <p className="h6 m-0">{x.name.toUpperCase()}</p>
                        <p className="h6 m-0">₦{numberWithCommas(x.price)}</p>
                      </div>
                      <p className="py-2" style={{ textAlign: "justify" }}>
                        {x.description}
                      </p>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="text-start">
                          <span>Available:</span>
                          <span className="ms-2">{x.count}</span>
                        </div>

                        <div className="text-end show-action">
                          {/* <button
                            className="btn btn-outline-danger py-0"
                            onClick={() => handleDecrease(x)}
                          >
                            -
                          </button> */}
                          {countState.length > 0 ? (
                            <>
                              {countState.map((y) => {
                                return (
                                  <sapn id={y.id}>
                                    {y.id === x.id ? (
                                      <span>
                                        {y.quantity > 0 ? (
                                          <button
                                            className="btn btn-outline-danger py-0"
                                            onClick={() => handleDecrease(x)}
                                          >
                                            -
                                          </button>
                                        ) : null}
                                        <span className="px-3">
                                          {y.quantity > y.count
                                            ? y.count
                                            : y.quantity}
                                        </span>
                                        {/* {x.unitstatus === "available" ? (
                                          <Link
                                            to={`/reserve_unit/${x.id}`}
                                            className="btn btn-outline-primary"
                                          >
                                            Reserve
                                          </Link>
                                        ) : null} */}
                                      </span>
                                    ) : (
                                      ""
                                    )}
                                  </sapn>
                                );
                              })}
                            </>
                          ) : (
                            ""
                          )}
                          <button
                            className="btn btn-outline-success py-0"
                            onClick={() => handleIncrease(x)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <small
                          className={
                            x.unitstatus === "available"
                              ? "bg-success text-light p-1 rounded"
                              : "bg-warning text-light p-1 rounded"
                          }
                        >
                          {x.unitstatus.charAt(0).toUpperCase() +
                            x.unitstatus.slice(1)}
                        </small>{" "}
                        {x.unitstatus === "available" ? (
                          <Link
                            to={`/reserve_unit/${x.id}`}
                            className="btn btn-outline-primary"
                          >
                            Reserve
                          </Link>
                        ) : null}
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <p className="py-5 h3">Loading Units Under {prop.name}...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default FindApartmentDetail;
