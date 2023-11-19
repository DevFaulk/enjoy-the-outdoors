<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/DevFaulk/enjoy-the-outdoors">
    <img src="https://avatars.githubusercontent.com/u/129247784?v=4" alt="Logo" width="80" height="80">
  </a>

<h1 align="center">enjoy-the-outdoors</h1>

  <p align="center">
    Capstone 2 - Enjoy The Outdoors
    <br />
    <a href="https://github.com/DevFaulk/enjoy-the-outdoors"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/DevFaulk/enjoy-the-outdoors">View Demo</a>
    ·
    <a href="https://github.com/DevFaulk/enjoy-the-outdoors/issues">Report Bug</a>
    ·
    <a href="https://github.com/DevFaulk/enjoy-the-outdoors/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      </li>
    <li><a href="#Index/Home Page">Index/Home Page</a></li>
    <li><a href="# Parks Page">Parks Page</a></li>
    <li><a href="# Mountains Page">Mountains Page</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

# About The Project

### This page "enjoy-the-outdoors" was a project in my Front-End Bootcamp at the end of our Learn to Code: JavaScript Basics section. We utilized the usual HTML and CSS, but were tasked with making our Parks Page, and Mountains page functional using JS for the first time.

### I plan to continue editing this code in the future to add things I couldn't before.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- INDEX/HOME PAGE -->

# Index/Home Page

![animated home page with mountains in background](/images/index-html.gif)

### My home page welcomes the user with a fade in and up.

## JS

### This script was used to make the header responsive on all of the pages.

<pre><code>
const header = document.querySelector('.header');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let currentScroll = window.scrollY || document.documentElement.scrollTop;

  if (currentScroll >= 50) {
    header.classList.add('header-shrink');
    navLinks.forEach((link) => {
      link.style.fontSize = '14px'; // Set smaller font size for the nav links
    });
  } else {
    header.classList.remove('header-shrink');
    navLinks.forEach((link) => {
      link.style.fontSize = ''; // Reset font size to default
    });
  }
});

</code></pre>

## CSS

### The important code on this page was the background image.

<pre><code>
.background-image {
  background-image: url(/images/mountain-index-wallpaper.jpg);
}
</code></pre>

### This background image blur was used on every page in my "style.css"

<pre><code>
.background-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(30, 30, 30, 0.6);
  filter: blur(6px);
  z-index: -1;
  background-size: cover;
  background-position: center;
}
</code></pre>

### Another bit of important CSS code in my global CSS file "style.css" was my shadow style.

<pre><code>
.shadow {
  filter: drop-shadow(2px 2px 2px black);
}
</code></pre>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- PARKS PAGE -->

# Parks Page

![background image of mountains blurred with text "find the perfect vacation. buttons in card with options by location, by type, and all parks. A dropdown list that displays park or territory in table on click](/images/parks-html.gif)

## JS

### The first important pieces of scripts is taken from the arrays in "nationalParkData.js"

<pre><code>
const nationalParksArray = [
  {
    LocationID: "ABLI",
    LocationName: "Abraham Lincoln Birthplace National Historical Park",
    Address: "2995 Lincoln Farm Road",
    City: "Hodgenville",
    State: "Kentucky",
    ZipCode: 42748,
    Phone: "(270) 358-3137",
    Fax: "(270) 358-3874",
    Latitude: 37.535671,
    Longitude: -85.7340637,
    Location: {
      coordinates: [-85.7340637, 37.535671],
      type: "Point",
    },
  },
  // Rest of Arrays...
</code></pre>

### And two other arrays that gets searched to display data inside of our dropdown by state/territory or all.

<pre><code>
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
</code></pre>

### This code only searches the arrays, but sends the correct data to the "appendParkToTable" function

<pre><code>
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
  // Rest of function...
</code></pre>

## CSS

### My favorite part of this page was creating the animation for the Header "Find the Perfect Vacation"

<pre><code>
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: both;
}

.animatedFadeInUp {
  opacity: 0;
}

.fadeInUp {
  opacity: 0;
  animation-name: fadeInUp;
  -webkit-animation-name: fadeInUp;
}
@keyframes fadeOutUp {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(0, -40px, 0);
    opacity: 0;
  }
}

@-webkit-keyframes fadeOutUp {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(0, -40px, 0);
    opacity: 0;
  }
}
.animatedFadeOutUp {
  opacity: 1;
}

.fadeOutUp {
  opacity: 1;
  animation-name: fadeOutUp;
  -webkit-animation-name: fadeOutUp;
}

</code></pre>
<h2><span style="color: red">
Note. This code is inside of my global CSS file, because it is also used inside of my Mountains.html page.
</span></h2>
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MOUNTAINS PAGE -->

# Mountains Page

![background image of mountains blurred with text "find the perfect journey and dropdown list of mountains to select. on click mountain data is displayed](/images/mountains-html.gif)

## CSS

### This is the page that I was most proud of during this project. The slide up, and slide down animation took a while to figure out, but here's the code for it:

<pre><code>
@keyframes moveUp {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(0, -330px, 0);
  }
}

.cardReplace {
  animation-name: moveUp;
  animation-duration: 1500ms;
  animation-fill-mode: forwards;
}

@keyframes moveDown {
  from {
    transform: translate3d(0, -330px, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

.cardDefault {
  animation-name: moveDown;
  animation-duration: 1500ms;
}

</code></pre>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

# Contact

### Teddy Faulk - Github Profile: https://github.com/DevFaulk [@twitter_handle](https://twitter.com/twitter_handle) - email@email_client.com

### Project Link: [https://github.com/github_username/repo_name](https://github.com/github_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

# Acknowledgments

### Many thanks to my instructor!

### Craig McKeachie - Github: https://github.com/craigmckeachie

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com

<!-- Github Repo -->

[https://github.com/github_username/repo_name]: https://github.com/DevFaulk/enjoy-the-outdoors
