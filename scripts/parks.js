"use strict";

const byLocationRadioFilter = document.querySelector("#byLocationRadioFilter");
const byTypeRadioFilter = document.querySelector("#byTypeRadioFilter");
const locationSelector = document.querySelector("#locationSelector");
const locationTable = document.querySelector("#locationTable");
const locationTableBody = document.querySelector("#locationTableBody");

function loadLocationInDropdown() {
  document.querySelector('option:value="select"').innerText =
    "Select by state...";
  for (const state of locationsArray) {
    let option = new Option(state);
    locationSelector.appendChild(option);
  }
}

byLocationRadioFilter.onclick = loadLocationInDropdown;

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

locationSelector.onchange = createLocationData;
