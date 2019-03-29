// SIGN IN - DROP DOWN

//const dropdown = document.querySelector(".dropdown");
const signcontain = document.querySelector(".signcontain");
//const toggle =
const signIn = document.querySelector(".signin");

signIn.addEventListener("click", () => {
  signcontain.classList.toggle("hidden");
});

// SIGN UP - DROP DOWN
// const signcontain2 = document.querySelector(".signcontain2");

// const signUp = document.querySelector(".signup");

// signUp.addEventListener("click", () => {
//   signcontain2.classList.toggle("hidden");
// });

// CAROUSEL
// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs((slideIndex += n));
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   if (n > x.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = x.length;
//   }
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   x[slideIndex - 1].style.display = "block";
// }

//new
// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs((slideIndex += n));
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   if (n > x.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = x.length;
//   }
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   x[slideIndex - 1].style.display = "block";
}
