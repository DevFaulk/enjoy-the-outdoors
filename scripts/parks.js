"use strict";

const byLocationRadioFilter = document.querySelector("#byLocationRadioFilter");
const byTypeRadioFilter = document.querySelector("#byTypeRadioFilter");
const locationSelector = document.querySelector("#locationSelector");
const parkTable = document.querySelector("#parkTable");
const parkTableBody = document.querySelector("#parkTableBody");
const byAllRadioFilter = document.querySelector("#byAllRadioFilter");

function loadLocationInDropdown() {
  locationSelector.style.display = "block"; // Show selector
  locationSelector.innerHTML = ""; // Clear previous options
  parkTableBody.innerHTML = "";

  let defaultOption = new Option("Select by state...");
  locationSelector.appendChild(defaultOption);

  for (const state of locationsArray) {
    let option = new Option(state);
    option.value = state;
    locationSelector.appendChild(option);
  }
}

function loadTypeInDropdown() {
  // Clear previous options
  locationSelector.style.display = "block";
  locationSelector.innerHTML = "";
  parkTableBody.innerHTML = "";

  let defaultOption = new Option("Select by type...");
  locationSelector.appendChild(defaultOption);

  for (const type of parkTypesArray) {
    let option = new Option(type);
    option.value = type;
    locationSelector.appendChild(option);
  }
}

function loadAllInDropdown() {
  locationSelector.style.display = "none";
  parkTableBody.innerHTML = "";

  for (const park of nationalParksArray) {
    let row = parkTableBody.insertRow();
    let nameCell = row.insertCell(0);
    nameCell.innerText = park.LocationName;
    let addrCell = row.insertCell(1);
    addrCell.innerText = park.Address;
    let cityStateCell = row.insertCell(2);
    cityStateCell.innerText = `${park.City}, ${park.State}`;
    let zipCell = row.insertCell(3);
    zipCell.innerText = park.ZipCode;
    let phoneCell = row.insertCell(4);
    phoneCell.innerText = park.Phone;
    let websiteCell = row.insertCell(5);
    websiteCell.innerCell = park.Visit;
  }
}

function createLocationData() {
  // Clear previous rows
  parkTableBody.innerHTML = "";

  const selectedState = locationSelector.value;
  const selectedType = parkTypesArray.find(type =>
    selectedState.includes(type)
  );

  for (const park of nationalParksArray) {
    if (
      park.State === selectedState ||
      park.LocationName.includes(selectedType)
    ) {
      appendParkToTable(park);
    }
  }
}



function appendParkToTable(park) {
  let row = parkTableBody.insertRow();
  let nameCell = row.insertCell(0);
  nameCell.innerText = park.LocationName;
  let addrCell = row.insertCell(1);
  addrCell.innerText = park.Address;
  let cityStateCell = row.insertCell(2);
  cityStateCell.innerText = `${park.City}, ${park.State}`;
  let zipCell = row.insertCell(3);
  zipCell.innerText = park.ZipCode;
  let phoneCell = row.insertCell(4);
  phoneCell.innerText = park.Phone;
  let websiteCell = row.insertCell(5);
  websiteCell.innerCell = park.Visit;
}

byTypeRadioFilter.onclick = function () {
  loadTypeInDropdown();
};

byLocationRadioFilter.onclick = function () {
  loadLocationInDropdown();
};

byAllRadioFilter.onclick = function () {
  locationSelector.style.display = "none"; // Hide selector
  loadAllInDropdown();
};

locationSelector.onchange = createLocationData;

// Initial load
loadLocationInDropdown();
