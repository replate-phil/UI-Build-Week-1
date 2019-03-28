//const dropdown = document.querySelector(".dropdown");
const signcontain = document.querySelector(".signcontain");
//const toggle =
const signIn = document.querySelector(".signin");

signIn.addEventListener("click", () => {
  console.log(signcontain);
  signcontain.classList.toggle("hidden");
});

// signIn.addEventListener("click", () => {
//   if ((dropdown.style.display = "none")) {
//     dropdown.style.display = "block";
//     console.log(dropdown);
//   } else {
//     dropdown.style.display = "none";
//     console.log(dropdown);
//   }

//   false;
// });
