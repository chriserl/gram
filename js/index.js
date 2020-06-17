const aside = document.querySelector("aside");
const hamBtn = document.querySelector(".hamBtn");
const closeHamBtn = document.querySelector(".close-ham");
const sideLinks = document.querySelectorAll(".menu-item");

const toggleAside = () => {
  aside.classList.contains("profile-inactive")
    ? aside.classList.remove("profile-inactive")
    : aside.classList.add("profile-inactive");
};

const rmActiveLink = () => {
  sideLinks.forEach((sideLink) => {
    sideLink.classList.contains("item-active") &&
      sideLink.classList.remove("item-active");
  });
};

const addActiveLink = (linkItem) => {
  linkItem.classList.add("item-active");
};

hamBtn.addEventListener("click", toggleAside);
closeHamBtn.addEventListener("click", toggleAside);
sideLinks.forEach((link) => {
  link.addEventListener("click", () => {
    rmActiveLink();
    addActiveLink(link);
  });
});
