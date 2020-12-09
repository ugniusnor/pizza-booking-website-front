export default function Header() {
  const upperHeader = document.querySelector("header");
  const subHeader = document.querySelector(".sub-header");
  const navElement = document.querySelector(".menu-nav");
  addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      upperHeader.style.height = 0;
      subHeader.style.position = "fixed";
      subHeader.classList.add("sticky");
      subHeader.style.boxs
      navElement.style.transform = "translateX(0px)";
    } else {
      upperHeader.style.height = 15 + "vh";

      subHeader.style.position = "static";
      console.log("show it");
      navElement.style.transform = "translateX(-44px)";
      subHeader.classList.remove("sticky");
    }
  });
}
