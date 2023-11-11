const mountainSelect = document.querySelector("#mountainSelect");
const mountainData = document.querySelector("#mountainData");

function displayMountainsInSelect() {
  for (const mountain of mountainsArray) {
    let mountainOption = new Option(mountain.name);
    mountainOption.value = mountain.name;
    mountainSelect.appendChild(mountainOption);
  }
}

function displayMountainData() {
  let selectedMountainName = mountainSelect.value;
  let mountain = mountainsArray.find(
    (mountain) => mountain.name === selectedMountainName
  );

  if (mountain) {
    mountainData.innerHTML = ""; // clear previous mountain data
    let mountainName = document.createElement("h1"); // create h1
    mountainName.innerText = mountain.name; // appends selected mountains name to inner text
    mountainName.style = "display: inline; padding-inline-end: 0.3rem";
    mountainData.appendChild(mountainName);

    let mountainElev = document.createElement("span");
    mountainElev.innerText = `- Elevation: ${mountain.elevation}`;
    mountainElev.style = "rgba(255, 255, 255, 0.3)";
    mountainData.appendChild(mountainElev);
    let mountainEffort = document.createElement("h3");
    mountainEffort.innerText = `Effort Level: ${mountain.effort}`;
    mountainEffort.style = "rgba(255, 255, 255, 0.7)";
    mountainData.appendChild(mountainEffort);
    let mountainDescribe = document.createElement("div");
    mountainDescribe.style = "display: flex; justify-content: space-between";
    mountainData.appendChild(mountainDescribe);
    let imgAndCoords = document.createElement("span");
    imgAndCoords.style = "display: inherit; flex-direction: column";
    mountainDescribe.appendChild(imgAndCoords);
    let mountainImg = document.createElement("img");
    mountainImg.src = `images/${mountain.img}`;
    mountainImg.alt = mountain.name;
    imgAndCoords.appendChild(mountainImg);
    let mountainCoords = document.createElement("span");
    mountainCoords.innerText = mountain.coords;
    mountainCoords.style = "text-align: center";
    imgAndCoords.appendChild(mountainCoords);
    let mountainDescription = document.createElement("span");
    mountainDescription.innerText = mountain.desc;
    mountainDescription.style = "font-size: 1.5rem";
    mountainDescribe.appendChild(mountainDescription);
  }
}

window.onload = displayMountainsInSelect;
mountainSelect.onchange = displayMountainData;
