// DROP DOWN SIGN IN

//const dropdown = document.querySelector(".dropdown");
const signcontain = document.querySelector(".signcontain");
//const toggle =
const signIn = document.querySelector(".signin");

signIn.addEventListener("click", () => {
  console.log(signcontain);
  signcontain.classList.toggle("hidden");
});

// CAROUSEL
class Carousel {
  constructor(images) {
    this.images = images;
    this.imgs = images.querySelectorAll("img");
    this.leftBtn = images.querySelector(".leftbtn");
    this.rightBtn = images.querySelector(".rightbtn");
    this.rightBtn.addEventListener("click", () => {
      this.rightClick();
    });
    this.leftBtn.addEventListener("click", () => {
      this.leftClick();
    });
    this.currentIndex = 0;
    this.imgs[0].style.display = "block";
  }

  rightClick() {
    this.imgs[this.currentIndex].style.display = "none";
    if (this.currentIndex === this.imgs.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex = this.currentIndex + 1;
    }
    this.imgs[this.currentIndex].style.display = "block";
  }
  leftClick() {
    this.imgs[this.currentIndex].style.display = "none";
    if (this.currentIndex === 0) {
      this.currentIndex = this.imgs.length - 1;
    } else {
      this.currentIndex = this.currentIndex - 1;
    }
    this.imgs[this.currentIndex].style.display = "block";
  }
}
// console.log("hello")
let carousel = document.querySelector(".carousel");
carousel = new Carousel(carousel);
