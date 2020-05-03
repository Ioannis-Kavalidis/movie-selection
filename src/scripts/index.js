function openFilm(evt, filmName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(filmName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// const items = document.querySelectorAll("li");

// function changeBackground() {
//   this.style.backgroundColor = "#ffd369";
// }
// function backToDefault() {
//   this.style.backgroundColor = "#ffffff";
//   this.style.color = "#263f44";
// }

// function displayDescr(event) {
//   this.style.backgroundColor = "#015668";
//   this.style.color = "#ffd369";
//   filmDescriptions.classList.add("displayText");
//   for (let i = 0; i <= 7; i++) {
//     if (event.target == items[i]) {
//       let randomSource = "photo" + (i + 1) + ".jpg";
//       // console.log(randomSource);
//       images.style.backgroundImage = `url('./img/${randomSource}')`;
//     }

//     if (event.target == items[1]) {
//       movieDetails.textContent =
//         "In the deep south during the 1930s, three escaped convicts search for hidden treasure while a relentless lawman pursues them.";
//     } else if (event.target == items[2]) {
//       movieDetails.textContent =
//         "One prisoner tells to another that he hid a very large amount of money before the arrest. Together they manage to escape, but this is where their adventures are just beginning.";
//     } else if (event.target == items[3]) {
//       movieDetails.textContent =
//         "A woman who must steal a statue from a Paris museum to help conceal her father's art forgeries is assisted by a man.";
//     } else if (event.target == items[4]) {
//       movieDetails.textContent =
//         "Maria Altmann, an octogenarian Jewish refugee, takes on the Austrian government to recover artwork she believes rightfully belongs to her family.";
//     }
//   }
// }
// //hide the description box
// const filmDescriptions = document.querySelector(".film-descriptions");
// filmDescriptions.classList.add("hideText");
// const images = document.querySelector(".image");
// const movieDetails = document.querySelector("p");

// //Event Listeners
// items.forEach((item) => {
//   item.addEventListener("mouseover", changeBackground);
//   item.addEventListener("click", displayDescr);
//   item.addEventListener("mouseout", backToDefault);
// });
