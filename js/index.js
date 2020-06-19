const aside = document.querySelector("aside"); //aside element
const hamBtn = document.querySelector(".hamBtn"); //hamburger icon
const closeHamBtn = document.querySelector(".close-ham"); //close aside button
const sideLinks = document.querySelectorAll(".menu-item"); //links in aside
const postlinks = document.querySelectorAll(".post-user-link");
const postLinkChars = 9; //maximum characters for post links

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

//Slice link character length
(function () {
  postlinks.forEach((postLink) => {
    let link = postLink.innerHTML;
    const linkLength = link.length;
    linkLength > postLinkChars && (link = link.slice(0, postLinkChars) + "...");
    postLink.innerHTML = link;
  });
})();

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
