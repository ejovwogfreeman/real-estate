///////////////////
//////Register/////
///////////////////

// export const registerUser = async (user) => {
//   const res = await fetch("https://taximania-api.onrender.com/api/auth/register", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify(user),
//   });

//   const register = res.json();

//   return register;
// };

///////////////////
///////Verify//////
///////////////////

// export const verifyUser = async (user) => {
//   try {
//     const res = await fetch("https://taximania-api.onrender.com/api/auth/verify", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify(user),
//     });
//     const verify = await res.json();
//     return verify;
//   } catch (err) {
//     console.log(err);
//   }
// };

///////////////////
///////Login///////
///////////////////

// export const loginUser = async (user) => {
//   const res = await fetch("https://taximania-api.onrender.com/api/auth/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify(user),
//   });
//   const login = await res.json();
//   return login;
// };

///////////////////////////////
///////create investor/////////
///////////////////////////////

// export const createInvest = async (token, user) => {
//   token = JSON.parse(localStorage.getItem("user")).AccessToken;
//   console.log(token);
//   const res = await fetch(
//     "https://taximania-api.onrender.com/api/auth/createinvestor",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "applicatioon/json",
//         Authorization: "Bearer " + token,
//       },
//       body: JSON.stringify(user),
//     }
//   );
//   const create = await res.json();
//   return create;
// };
