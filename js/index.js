const aside = document.querySelector("aside");
const hamBtn = document.querySelector(".hamBtn");

const toggleAside = () => {
  aside.classList.contains("profile-inactive")
    ? aside.classList.remove("profile-inactive")
    : aside.classList.add("profile-inactive");
};

hamBtn.addEventListener("click", () => toggleAside());
