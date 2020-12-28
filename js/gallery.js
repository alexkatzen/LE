function activateGallery() {
  // alert("Hello from the gallery file!");
  // let thumbnails = document.querySelector("#gallery-thumbs").querySelectorAll("img");
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage = document.querySelector("#gallery-photo > img");

  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function() {
      let newImageSrc  = thumbnail.dataset.largeVersion;
      let newImageAlt  = thumbnail.alt;
      let currentClass = "current";

      let galleryInfo  = document.querySelector("#gallery-info");
      let title        = galleryInfo.querySelector(".title");
      let description  = galleryInfo.querySelector(".description");

      mainImage.setAttribute("src", newImageSrc);
      mainImage.setAttribute("alt", newImageAlt);

      title.innerHTML = thumbnail.dataset.title;
      description.innerHTML = thumbnail.dataset.description;


      document.querySelector(".current").classList.remove(currentClass);
      thumbnail.parentNode.classList.add(currentClass);

    });
  });
};
