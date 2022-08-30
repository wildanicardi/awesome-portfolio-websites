AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "HewanQ",
    cardImage: "assets/images/project-page/hewanq.png",
    description: "A marketplace pet care built using Laravel.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Combo App",
    cardImage: "assets/images/project-page/combo.png",
    description: "A application that helps you find cargo and goods delivery services in Surabaya quickly and efficiently, using web and android platforms.",
    tagimg: "https://image.flaticon.com/icons/png/512/643/643350.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Surabaya Dev",
    cardImage: "assets/images/project-page/sbydev.png",
    description: "Surabayadev.org is a web profile of the Surabaya dev community, which contains info on technology events around Surabaya, which are organized by the Surabaya dev community or other communities.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Bluanddis",
    cardImage: "assets/images/project-page/bluanddis.png",
    description: "bluanddis is a web profile company that provides custom Acrylic Ads with various designs according to customer requests.",
    tagimg: "https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Learning Management System ETHOL",
    cardImage: "assets/images/project-page/ethol.png",
    description: "Learning Management System (LMS) is a platform used to support online teaching and learning.",
    tagimg:"",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "SIMTARU",
    cardImage: "assets/images/project-page/simtaru.png",
    description: "SIMTARU is a spatial information system for Singkawang City, West Kalimantan Province, this web contains spatial information, news and question and answer forms for residents of Singkawang City.",
    tagimg: "https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png",
    Previewlink: "https://simtarusingkawanghebat.com/",
    Githublink: "",
  },
  {
    title: "BERITA DUKA Indonesia",
    cardImage: "assets/images/project-page/berita_duka1.png",
    description:
      "Berita Duka Indonesia is a condolence news information website, there are several features including displaying mourning news, funeral service information, flower arrangement services, catering services, funeral news invitation features, sending messages and donations features.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Override Validation Tracing CPP Gundih",
    cardImage: "assets/images/project-page/pertamina1.png",
    description: "Override Validation Tracing CPP Gundih is a web development, and Override validation by PT Pertamina CPP Gundih.",
    tagimg:"",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Gubernuran",
    cardImage: "assets/images/project-page/gubernuran.png",
    description:
      "web correspondence office of education east java.",
    tagimg:
      "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Tutor teknik",
    cardImage: "assets/images/project-page/tutor.png",
    description: "Tutor Teknik is an e-commerce website that provides online training, webinars and courses on technical skills.",
    tagimg:
      "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    Previewlink: "https://tutorteknik.com/",
    Githublink: "",
  },
  {
    title: "SIFADU",
    cardImage: "assets/images/project-page/sifadu.png",
    description: "SIFADU is an integrated village information system web, which helps the administrative process and village information, including area, population, planning, letter management systems and population charts.",
    tagimg:
      "https://cdn-images-1.medium.com/max/1200/1*iDQvKoz7gGHc6YXqvqWWZQ.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Homeclub",
    cardImage: "assets/images/project-page/homeclub.png",
    description: "Built using Python.",
    tagimg:
      "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    Previewlink: "https://homeclub.id/",
    Githublink: "",
  },
  {
    title: "OREON",
    cardImage: "assets/images/project-page/oreon.jpeg",
    description: "Oreon is a digital content platform that maximizes creativity.",
    tagimg:
      "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "FOODADVISOR",
    cardImage: "assets/images/project-page/foodadvisor.jpeg",
    description: "Foodadvisor is an app helping people know what they want to eat. We guide them to the best restaurants or cafes to visit in their area of choice.",
    tagimg:
      "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    Previewlink: "https://www.foodadvisor.my/",
    Githublink: "",
  },
  {
    title: "Petcentric",
    cardImage: "assets/images/project-page/petcentric.png",
    description: "PetCentric is the first and most comprehensive digital pet care platform in Indonesia. Providing solutions to meet all your pet's needs.",
    tagimg:
      "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    Previewlink: "https://petcentric.id/",
    Githublink: "",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
