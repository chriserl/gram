const aside = document.querySelector("aside"); //aside element
const hamBtn = document.querySelector(".hamBtn"); //hamburger icon
const closeHamBtn = document.querySelector(".close-ham"); //close aside button
const sideLinks = document.querySelectorAll(".menu-item"); //links in aside

//toggle aside
const toggleAside = () => {
  aside.classList.contains("profile-inactive")
    ? aside.classList.remove("profile-inactive")
    : aside.classList.add("profile-inactive");
};

//remove active link in aside
const rmActiveLink = () => {
  sideLinks.forEach((sideLink) => {
    sideLink.classList.contains("item-active") &&
      sideLink.classList.remove("item-active");
  });
};

//add active link class to aside link
const addActiveLink = (linkItem) => {
  linkItem.classList.add("item-active");
};

//Event listeners
hamBtn.addEventListener("click", toggleAside); //toggle aside listener
closeHamBtn.addEventListener("click", toggleAside); //close aside listener

//aside links listener
sideLinks.forEach((link) => {
  link.addEventListener("click", () => {
    rmActiveLink();
    addActiveLink(link);
  });
});
