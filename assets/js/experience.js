AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Backend Developer",
    cardImage: "assets/images/experience-page/vs.jpeg",
    place: "VirtualSpirit",
    time: "(Aug, 2021 - present)",
    desp: "<li>Handle the foodadvisor application server process</li> <li>Create API for foodadvisor mobile app</li><li>Create a foodadvisor admin dashboard</li><li>Shopee API integration with web aston.my</li><li>Upgrading shopee API v2 web aston.my</li>",
  },
  {
    title: "Backend Developer",
    cardImage: "assets/images/experience-page/oreon.jpeg",
    place: "OREON",
    time: "(Dec - Sep, 2021)",
    desp: "<li>Build API for Oreon Apps using Express Js, And Postgre Db</li><li>Handle the oreon application server process</li>",
  },
  {
    title: "Backend Developer Freelance",
    cardImage: "assets/images/experience-page/tutor_teknik.jpeg",
    place: "Tutor Teknik",
    time: "(Aug - Oct, 2021)",
    desp: "<li>Made additional features and maintenance of technical tutor web</li>",
  },
  {
    title: "Fullstack Developer Part Time",
    cardImage: "assets/images/experience-page/sibiti.jpeg",
    place: "Sibiti",
    time: "(Dec, 2020 - Feb, 2021)",
    desp: "<li>Made additional features and maintenance of sibiti web</li>",
  },
  {
    title: "Backend Developer Freelance",
    cardImage: "assets/images/experience-page/hjs.png",
    place: "PT HJS",
    time: "(Oct - Dec, 2019)",
    desp: "<li>Work in team, create cargo delivery service applications</li><li>Creat API for cargo Apps</li>",
  },
  {
    title: "Web Developer Freelance",
    cardImage: "assets/images/experience-page/isocorp.jpeg",
    place: "Isocorp Technology",
    time: "(Apr - May, 2019)",
    desp: "<li>Made a web marketplace</li>",
  },
  {
    title: "Front End Developer Intern",
    cardImage: "assets/images/experience-page/lanius.jpeg",
    place: "Lanius Innovation Labs",
    time: "(Jan - Feb, 2019)",
    desp: "<li>Made a HMI OEE(Overall Equipment Effectiveness),human machine Interface Realtime monitoring performance machine in factory using vue js and electron js for dekstop platform </li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Surabay Dev Volunteer",
    cardImage: "assets/images/experience-page/sby_dev.jpeg",
    description:
      "Responsible for handling the surabaya dev website profile and surabaya dev event",
  }
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "KMIPN 2018",
    subtitle: "First Champions",
    image: "assets/images/experience-page/kmipn_2018.jpeg",
    desp: "First winner in the hackathon category, with hewanq marketplaceq",
  },

];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
