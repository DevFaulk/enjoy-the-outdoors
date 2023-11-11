"use strict";

const byLocationRadioFilter = document.querySelector("#byLocationRadioFilter");
const byTypeRadioFilter = document.querySelector("#byTypeRadioFilter");
const locationSelector = document.querySelector("#locationSelector");
const locationTable = document.querySelector("#locationTable");
const locationTableBody = document.querySelector("#locationTableBody");

function loadLocationInDropdown() {
  // Clear previous options
  locationSelector.innerHTML = "";

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
  locationSelector.innerHTML = "";

  let defaultOption = new Option("Select by type...");
  locationSelector.appendChild(defaultOption);

  for (const type of parkTypesArray) {
    let option = new Option(type);
    option.value = type;
    locationSelector.appendChild(option);
  }
}

function createLocationData() {
  // Clear previous rows
  locationTableBody.innerHTML = "";

  for (const park of nationalParksArray) {
    if (park.State == locationSelector.value) {
      let row = locationTableBody.insertRow();
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
      return;
    }
  }
}
byTypeRadioFilter.onclick = function () {
  loadTypeInDropdown();
};

byLocationRadioFilter.onclick = function name() {
  loadLocationInDropdown();
};

locationSelector.onchange = createLocationData;
