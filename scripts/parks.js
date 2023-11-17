'use strict';

const byLocationRadioFilter = document.querySelector('#byLocationRadioFilter');
const byTypeRadioFilter = document.querySelector('#byTypeRadioFilter');
const locationSelector = document.querySelector('#locationSelector');
const parkTable = document.querySelector('#parkTable');
const parkTableBody = document.querySelector('#parkTableBody');
const parkTableHead = document.querySelector('#parkTableHead');
const byAllRadioFilter = document.querySelector('#byAllRadioFilter');

function loadLocationInDropdown() {
  locationSelector.style.display = 'block'; // Show selector
  locationSelector.innerHTML = ''; // Clear previous options
  parkTableBody.innerHTML = '';
  byLocationRadioFilter.checked = true;

  let defaultOption = new Option('Select by state...');
  locationSelector.appendChild(defaultOption);

  for (const state of locationsArray) {
    let option = new Option(state);
    option.value = state;
    locationSelector.appendChild(option);
  }
}

function loadTypeInDropdown() {
  // Clear previous options
  locationSelector.style.display = 'block';
  locationSelector.innerHTML = '';
  parkTableBody.innerHTML = '';

  let defaultOption = new Option('Select by type...');
  locationSelector.appendChild(defaultOption);

  for (const type of parkTypesArray) {
    let option = new Option(type);
    option.value = type;
    locationSelector.appendChild(option);
  }
}

function loadAllInDropdown() {
  locationSelector.style.display = 'none';
  parkTableBody.innerHTML = '';

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
    if (park.Visit) {
      var link = document.createElement('a');
      let websiteCell = row.insertCell(5);
      link.href = park.Visit;
      link.innerText = park.LocationName;
      websiteCell.appendChild(link);
    }
  }
}

function createLocationData() {
  // Clear previous rows
  parkTableBody.innerHTML = '';

  const selectedState = locationSelector.value;
  const selectedType = parkTypesArray.find((type) =>
    selectedState.includes(type)
  );

  for (const park of nationalParksArray) {
    const islandState =
      selectedState === 'Rhode Island' || selectedState === 'Virgin Islands';

    if (
      park.State === selectedState ||
      (park.LocationName.includes(selectedType) && !islandState)
    ) {
      appendParkToTable(park);
    }
  }
}

function appendParkToTable(park) {
  // --------------- box
  if (!park.Visit) {
    var box = document.createElement('article');
    box.className = 'card-box';
    parkTableBody.appendChild(box);
  }
  if (park.Visit) {
    let boxLink = document.createElement('a');
    boxLink.href = park.Visit;
    boxLink.target = '_blank';
    parkTableBody.appendChild(boxLink);
    var box = document.createElement('article');
    box.className = 'card-box';
    boxLink.appendChild(box);
  }
  // --------------- cell
  let nameCell = document.createElement('h4');
  nameCell.innerText = `Name: ${park.LocationName}`;
  box.appendChild(nameCell);
  // --------------- cell
  if (park.Address) {
    let addrCell = document.createElement('p');
    addrCell.innerText = `Address: ${park.Address}`;
    box.appendChild(addrCell);
  }
  // --------------- cell
  let cityStateCell = document.createElement('p');
  cityStateCell.innerText = `State: ${park.City}, ${park.State}`;
  box.appendChild(cityStateCell);
  // --------------- cell
  if (park.ZipCode) {
    let zipCell = document.createElement('p');
    zipCell.innerText = `Zipcode: ${park.ZipCode}`;
    box.appendChild(zipCell);
  }
  // --------------- cell
  if (park.Phone) {
    let phoneCell = document.createElement('p');
    phoneCell.innerText = `Phone Number: ${park.Phone}`;
    box.appendChild(phoneCell);
  }
}

byTypeRadioFilter.onclick = function () {
  loadTypeInDropdown();
};

byLocationRadioFilter.onclick = function () {
  loadLocationInDropdown();
};

byAllRadioFilter.onclick = function () {
  locationSelector.style.display = 'none'; // Hide selector
  loadAllInDropdown();
};

locationSelector.onchange = function () {
  parkTable.style.display = 'inline';
  createLocationData();
};

// Initial load
loadLocationInDropdown();
