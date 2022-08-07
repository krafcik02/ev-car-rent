"use strict";
/**
 * Ako user si chcem vytvorit rezervaciu na auto
 * Ako user si chcem pozriet kolko krat som si pozical auto za posledny polrok
 * Ako user si chcem pozicat auto na zaklade mojej polohy
 *
 *
 */
export { currentUser };

class Car {
  constructor(
    brand,
    model,
    color,
    pricePerDay,
    acc,
    topSpeed,
    range,
    peakPower
  ) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.pricePerDay = pricePerDay;
    this.acc = acc;
    this.topSpeed = topSpeed;
    this.range = range;
    this.peakPower = peakPower;
  }

  buildHTML() {
    let modelEdited;
    if (this.brand === "tesla")
      modelEdited = `${this.model[0].toUpperCase()}${this.model.slice(
        1,
        -1
      )} ${this.model.slice(-1)}`;

    return `
    <div class="used-cars-item flex">
      <div class="used-car-box grid grid--3-cols">
        <img class="used-car-img flex" src="img/cars/${
          this.model
        }.png" alt="#" />
        <div class="used-car-description flex flex-dir--column">
          <h3 class="car-description-header">${this.brand[0].toUpperCase()}${this.brand.slice(
      1
    )} ${modelEdited}</h3>
          <div class="car-desciption-items flex">
            <span class="car-description-item flex flex-dir--column"
              >0-100 km/h
              <span class="description-sub-item">${this.acc}sec</span></span
            ><span class="car-description-item flex flex-dir--column"
              >Top Speed
              <span class="description-sub-item">${
                this.topSpeed
              }km/h</span></span
            ><span class="car-description-item flex flex-dir--column"
              >Range(WLTP)
              <span class="description-sub-item">${this.range}km</span></span
            ><span class="car-description-item flex flex-dir--column"
              >Peak Power
              <span class="description-sub-item">${
                this.peakPower
              }kw</span></span
            >
          </div>
        </div>
        <div class="buy-used-car flex flex-dir--column">
          <h3>${this.pricePerDay}€/day</h3>
          <a href="#">Select</a>
        </div>
      </div>
    </div>
    `;
  }

  introduceMe() {
    console.log(
      (this.brand = brand),
      (this.model = model),
      (this.color = color),
      (this.pricePerDay = pricePerDay),
      (this.acc = acc),
      (this.topSpeed = topSpeed),
      (this.range = range),
      (this.peakPower = peakPower)
    );
  }
}

const cars = [
  new Car("tesla", "model3", "white", 150, 3.5, 250, 400, 357),
  new Car("tesla", "modelS", "red", 200, 3.3, 250, 450, 457),
  new Car("tesla", "modelX", "white", 250, 4, 220, 480, 357),
  new Car("tesla", "modelX", "white", 250, 4, 220, 480, 357),
];

///////////////////
// Login check
///////////////////
const inputUsername = document.getElementById("username");
const inputPassword = document.getElementById("password");
const formLogin = document.querySelector(".container--login-inner");
const loginScreen = document.querySelector(".container--login-outer");

const spanUsername = document.querySelector(".box-username span");
const spanCredits = document.querySelector(".box-credits h2 span");
const loggedUsername = document.querySelector(".logged-user-name");

const contentBox = document.querySelector(".content-box-main");
const navRent = document.querySelector(".nav-link-rent");
const navMain = document.querySelector(".nav-link-main");
const navSide = document.querySelector(".side-nav-tabs");

const user = {
  userName: "Kristian_02",
  name: "Kristian",
  login: "user",
  password: "user",
  credits: 5000,
  rides: [10, 50, 10, 20, 10, 20],
};

// loggedUsername.textContent = user.userName;

let currentUser = user;
const hideLogin = function () {
  console.log(`Welcome ${user.name}`);
  loginScreen.classList.add("opacity-zero");
  setTimeout(function () {
    loginScreen.classList.add(".hidden");
  }, 100);
  setTimeout(function () {}, 100);
};

const checkUserLogin = function (e) {
  e.preventDefault();
  console.log(e.target);
  if (!inputUsername.value === user.login) return;
  if (!inputPassword.value === user.password) return;
  currentUser = user;
  //   e.target.submit();
  hideLogin();
};

formLogin.addEventListener("submit", checkUserLogin);

/////////////////////////////////////////////////////////
// Main content area
/////////////////////////////////////////////////////////
/**
 *
 * @param {String} currentUser
 * @returns String for Main content area
 */
const getMainContent = function (currentUser) {
  // Vytvorenie grafu tu!

  return `<div class="box-text box-username flex flex-dir--column">
  <h2>Welcome back <span>${currentUser.name}</span>!</h2>
  <a>Rent EV now!</a>
</div>
<div class="box-text box-credits flex flex-dir--column">
  <h2>You have <span>${currentUser.credits}</span> credits</h2>
  <p>100 credit = 1€</p>
  <a href="#">How to earn credit?</a>
</div>
<div class="box-text chart-rides">
  <canvas id="myChart" ></canvas>
</div>`;
};

navMain.addEventListener("click", function () {});

/**
 *
 * @param {String} currentUser
 * @returns String for Main content area
 */
const getRentContent = function (user) {
  console.log(`Rent`);

  let htmlBegin = `
  <div class="box-cars">
    <div class="used-cars-box">
      <div class="used-cars-inner flex flex-dir--column">
      `;
  let htmlEnd = ` 
      </div>
    </div>
  </div>
`;
  let html = htmlBegin;
  cars.forEach((car) => {
    html = html + car.buildHTML();
  });
  html = html + htmlEnd;
  return html;
};
/**
 *
 * @param {String} currentUser
 * @returns String for Main content area
 */
const getTripsContent = function (user) {
  console.log(`Trip`);
};
/**
 *
 * @param {String} currentUser
 * @returns String for Main content area
 */
const getStatsContent = function (user) {
  console.log(`Stats`);
};
/**
 *
 * @param {String} currentUser
 * @returns String for Main content area
 */
const getPointsContent = function (user) {
  console.log(`Points`);
};

/**
 * Event listener on parent element listening for click event
 * Creating and choosing the content for Main Content Box
 * */
navSide.addEventListener("click", function (e) {
  if (!e.target.dataset.set) return;
  const data = e.target.dataset.set;
  let html;
  if (data === "main") html = getMainContent(currentUser);
  if (data === "rent") html = getRentContent(currentUser);
  if (data === "trips") html = getTripsContent(currentUser);
  if (data === "stats") html = getStatsContent(currentUser);
  if (data === "points") html = getPointsContent(currentUser);
  contentBox.innerHTML = "";

  contentBox.insertAdjacentHTML("beforeend", html);
});

/////////////////////////////////////////////////////////
// Rent content area
/////////////////////////////////////////////////////////

let userLocation;
// const selectLocation = document.getElementById("location");

// selectLocation.addEventListener("change", function (e) {
//   console.log(selectLocation.value);
//   if (selectLocation.value === "empty") return;
//   if (selectLocation.value === "getLocation") return;
//   userLocation = selectLocation.value;
//   console.log(`Choosen location ${userLocation}`);
// });

// import {
//   Chart,
//   ArcElement,
//   LineElement,
//   BarElement,
//   PointElement,
//   BarController,
//   BubbleController,
//   DoughnutController,
//   LineController,
//   PieController,
//   PolarAreaController,
//   RadarController,
//   ScatterController,
//   CategoryScale,
//   LinearScale,
//   LogarithmicScale,
//   RadialLinearScale,
//   TimeScale,
//   TimeSeriesScale,
//   Decimation,
//   Filler,
//   Legend,
//   Title,
//   Tooltip,
//   SubTitle,
// } from "chart.js";

// Chart.register(
//   ArcElement,
//   LineElement,
//   BarElement,
//   PointElement,
//   BarController,
//   BubbleController,
//   DoughnutController,
//   LineController,
//   PieController,
//   PolarAreaController,
//   RadarController,
//   ScatterController,
//   CategoryScale,
//   LinearScale,
//   LogarithmicScale,
//   RadialLinearScale,
//   TimeScale,
//   TimeSeriesScale,
//   Decimation,
//   Filler,
//   Legend,
//   Title,
//   Tooltip,
//   SubTitle
// );

// const ctx = document.getElementById("myChart").getContext("2d");
// const myChart = new Chart(ctx, {
//   type: "bar",
//   data: {
//     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//     datasets: [
//       {
//         label: "Number of rides in month",
//         data: user.rides,
//         backgroundColor: [
//           // "rgba(255, 99, 132, 0.2)",
//           "rgba(54, 162, 235, 0.2)",
//           // "rgba(255, 206, 86, 0.2)",
//           // "rgba(75, 192, 192, 0.2)",
//           // "rgba(153, 102, 255, 0.2)",
//           // "rgba(255, 159, 64, 0.2)",
//         ],
//         borderColor: [
//           // "rgba(255, 99, 132, 1)",
//           "rgba(54, 162, 235, 1)",
//           // "rgba(255, 206, 86, 1)",
//           // "rgba(75, 192, 192, 1)",
//           // "rgba(153, 102, 255, 1)",
//           // "rgba(255, 159, 64, 1)",
//         ],
//         borderWidth: 2,
//       },
//     ],
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   },
// });

/*

                <div class="used-cars-item flex">
                  <div class="used-car-box grid grid--3-cols">
                    <img class="used-car-img" src="./img/cars/model3.png" alt="" />
                    <div class="used-car-description flex flex-dir--column">
                      <h3 class="car-description-header">Model 3 Long Range</h3>
                      <div class="car-desciption-items flex">
                        <span class="car-description-item flex flex-dir--column"
                          >0-100 km/h
                          <span class="description-sub-item">4.4sec</span></span
                        ><span class="car-description-item flex flex-dir--column"
                          >Top Speed
                          <span class="description-sub-item">230km/h</span></span
                        ><span class="car-description-item flex flex-dir--column"
                          >Range(WLTP)
                          <span class="description-sub-item">430km</span></span
                        ><span class="car-description-item flex flex-dir--column"
                          >Peak Power
                          <span class="description-sub-item">324kw</span></span
                        >
                      </div>

                    </div>
                    <div class="buy-used-car flex flex-dir--column">
                      <h3>150€/day</h3>
                      <a href="#">Select</a>
                    </div>
                  </div>
                </div>
                <div class="used-cars-item flex">
                  <div class="used-car-box grid grid--3-cols">
                    <img class="used-car-img" src="./img/cars/modelS.png" alt="" />
                    <div class="used-car-description flex flex-dir--column">
                      <h3 class="car-description-header">Model S PD 75</h3>
                      <div class="car-desciption-items flex">
                        <span class="car-description-item flex flex-dir--column"
                          >0-100 km/h
                          <span class="description-sub-item">4.4sec</span></span
                        ><span class="car-description-item flex flex-dir--column"
                          >Top Speed
                          <span class="description-sub-item">230km/h</span></span
                        ><span class="car-description-item flex flex-dir--column"
                          >Range(WLTP)
                          <span class="description-sub-item">430km</span></span
                        ><span class="car-description-item flex flex-dir--column"
                          >Peak Power
                          <span class="description-sub-item">324kw</span></span
                        >
                      </div>

                    </div>
                    <div class="buy-used-car flex flex-dir--column">
                      <h3>200€/day</h3>
                      <a href="#">Select</a>
                    </div>
                  </div>
                </div>

                <div class="used-cars-item flex">
                  <div class="used-car-box grid grid--3-cols">
                    <img class="used-car-img" src="./img/cars/modelX.png" alt="" />
                    <div class="used-car-description flex flex-dir--column">
                      <h3 class="car-description-header">Model X</h3>
                      <div class="car-desciption-items flex">
                        <span class="car-description-item flex flex-dir--column"
                          >0-100 km/h
                          <span class="description-sub-item">4.4sec</span></span
                        ><span class="car-description-item flex flex-dir--column"
                          >Top Speed
                          <span class="description-sub-item">230km/h</span></span
                        ><span class="car-description-item flex flex-dir--column"
                          >Range(WLTP)
                          <span class="description-sub-item">430km</span></span
                        ><span class="car-description-item flex flex-dir--column"
                          >Peak Power
                          <span class="description-sub-item">324kw</span></span
                        >
                      </div>
                    </div>
                    <div class="buy-used-car flex flex-dir--column">
                      <h3>250€/day</h3>

                      <a href="#">Select</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          */
