const mountainSelect = document.querySelector("#mountainSelect");
const mountainData = document.querySelector("#mountainData");

async function displayMountainsInSelect() {
  for (const mountain of mountainsArray) {
    let mountainOption = new Option(mountain.name);
    mountainOption.value = mountain.name;
    mountainSelect.appendChild(mountainOption);
  }
}

async function displaySunriseTime(lat, lng) {
  try {
    const data = await getSunriseForMountain(lat, lng);

    // Use Moment to format the time in UTC
    const sunriseTime = moment
      .utc(data.results.sunrise, "HH:mm:ss A")
      .format("hh:mm A");

    return sunriseTime;
  } catch (error) {
    console.error("Error fetching sunrise time:", error);
    return "N/A";
  }
}

async function displaySunsetTime(lat, lng) {
  try {
    const data = await getSunsetForMountain(lat, lng);

    // Use Moment to format the time in UTC
    const sunsetTime = moment
      .utc(data.results.sunset, "HH:mm:ss A")
      .format("hh:mm A");

    return sunsetTime;
  } catch (error) {
    console.error("Error fetching sunset time:", error);
    return "N/A";
  }
}

async function displayMountainData() {
  let selectedMountainName = mountainSelect.value;
  let mountain = mountainsArray.find(
    (mountain) => mountain.name === selectedMountainName
  );

  if (mountain) {
    mountainData.innerHTML = ""; // clear previous mountain data
    let mountainName = document.createElement("h1");
    mountainName.innerText = mountain.name;
    mountainName.style = "display: inline; padding-inline-end: 0.3rem";
    mountainData.appendChild(mountainName);

    let mountainElev = document.createElement("span");
    mountainElev.innerText = `- Elevation: ${mountain.elevation}`;
    mountainElev.style = "color: rgba(255, 255, 255, 0.3)";
    mountainData.appendChild(mountainElev);

    let mountainEffort = document.createElement("h3");
    mountainEffort.innerText = `Effort Level: ${mountain.effort}`;
    mountainEffort.style = "color: rgba(255, 255, 255, 0.7)";
    mountainData.appendChild(mountainEffort);

    let mountainDescribe = document.createElement("div");
    mountainDescribe.style = "display: flex; justify-content: space-between";
    mountainData.appendChild(mountainDescribe);
    let imgAndCoords = document.createElement("span");
    imgAndCoords.style =
      "display: inherit; flex-direction: column; margin-inline-end: 2rem; text-align: center";
    mountainDescribe.appendChild(imgAndCoords);
    let mountainImg = document.createElement("img");
    mountainImg.src = `images/${mountain.img}`;
    mountainImg.style = "height: 400px; width: 100%; padding-bottom: 1rem";
    mountainImg.alt = mountain.name;
    imgAndCoords.appendChild(mountainImg);
    let mountainCoords = document.createElement("span");
    mountainCoords.innerText = `Latitude: ${mountain.coords.lat} Longitude: ${mountain.coords.lng}`;
    mountainCoords.style = "text-align: center";
    imgAndCoords.appendChild(mountainCoords);
    let mountainSunsetSunrise = document.createElement("div");
    imgAndCoords.appendChild(mountainSunsetSunrise);

    let timeZone = "";

    // Mountain Sunrise
    let mountainSunrise = document.createElement("div");
    mountainSunrise.style =
      "display: flex; flex-direction: row; justify-content: center";
    mountainSunsetSunrise.appendChild(mountainSunrise);
    let mountainSunriseIcon = document.createElement("img");
    mountainSunriseIcon.src = "images/sunrise.png";
    mountainSunriseIcon.style = "height: 50px; width: 50px; display: inline";
    mountainSunrise.appendChild(mountainSunriseIcon);
    // Display sunrise timezones with moment
    let mountainSunriseTime = document.createElement("p");
    mountainSunriseTime.className = "y-center";
    mountainSunriseTime.innerText =
      (await displaySunriseTime(
        mountain.coords.lat,
        mountain.coords.lng,
        timeZone
      )) + " (UTC)";
    mountainSunrise.appendChild(mountainSunriseTime);
    // Mountain Sunset
    let mountainSunset = document.createElement("div");
    mountainSunset.style =
      "display: flex; flex-direction: row; justify-content: center";
    mountainSunsetSunrise.appendChild(mountainSunset);
    let mountainSunsetIcon = document.createElement("img");
    mountainSunsetIcon.src = "images/sunset.png";
    mountainSunsetIcon.style = "height: 50px; width: 50px; display: inline";
    mountainSunset.appendChild(mountainSunsetIcon);
    // Display sunset timezones with moment
    let mountainSunsetTime = document.createElement("p");
    mountainSunsetTime.className = "y-center";
    mountainSunsetTime.innerText =
      (await displaySunsetTime(
        mountain.coords.lat,
        mountain.coords.lng,
        timeZone
      )) + " (UTC)";
    mountainSunset.appendChild(mountainSunsetTime);

    let mountainDescription = document.createElement("span");
    mountainDescription.innerText = mountain.desc;
    mountainDescription.style = "font-size: 1.5rem; width: 40%";
    mountainDescribe.appendChild(mountainDescription);
  }
}

// function that can "fetch" the sunrise/sunset times
async function getSunsetForMountain(lat, lng) {
  let response = await fetch(
    `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`
  );
  let data = await response.json();
  return data;
}

async function getSunriseForMountain(lat, lng) {
  let response = await fetch(
    `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`
  );
  let data = await response.json();
  return data;
}

window.onload = async () => {
  await displayMountainsInSelect();
  displayMountainData();
};
mountainSelect.onchange = displayMountainData;
