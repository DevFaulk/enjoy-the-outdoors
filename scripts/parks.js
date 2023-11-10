"use strict";

const byLocationRadioFilter = document.querySelector("#byLocationRadioFilter");
const byTypeRadioFilter = document.querySelector("#byTypeRadioFilter");
const locationSelector = document.querySelector("#locationSelector");
const locationTable = document.querySelector("#locationTable");
const locationTableBody = document.querySelector("#locationTableBody");

function loadLocationInDropdown() {
  document.querySelector("select>option").innerText = "Select by state...";
  for (const state of locationsArray) {
    let option = new Option(state);
    locationSelector.appendChild(option);
  }
}
function loadTypeInDropdown() {
  document.querySelector("select>option").innerText = "Select by type...";
  for (const type of parkTypesArray) {
    let option = new Option(type);
    locationSelector.appendChild(option);
  }
}

function createLocationData() {
  for (const park of nationalParksArray) {
    let row = locationTableBody.insertRow();
    let nameCell = row.insertCell(0);
    nameCell.innerText = park.LocationName;
    let addrCell = row.insertCell(1);
    addrCell.innerText = park.Address;
    let cityStateCell = row.insertCell(2);
    cityStateCell.innerText = park.City + park.State;
    let zipCell = row.insertCell(3);
    zipCell.innerText = park.ZipCode;
    let phoneCell = row.insertCell(4);
    phoneCell.innerText = park.Phone;
    let websiteCell = row.innerCell(5);
    websiteCell.innerCell = park.Visit;
  }
}
byTypeRadioFilter.onclick = function () {
  loadTypeInDropdown();
};

byLocationRadioFilter.onclick = function name() {
  loadLocationInDropdown();
};

locationSelector.onchange = createLocationData;
