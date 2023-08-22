const masonry = Macy({
	container: ".img-grid",
	mobileFirst: true,
	columns: 3,
	margin: {
		x: 10,
		y: 10,
	},
	breakAt: {
		992: {
			margin: {
				x: 30,
				y: 30,
			},
		},
		768: {
			margin: {
				x: 20,
				y: 20,
			},
		},
	},
})

const sections = [...document.querySelectorAll('section')]
const menuIcon = document.querySelector("#menu-icon")
const nav = document.querySelector(".nav")
const navLinks = document.querySelectorAll('header nav a')
const subLinkBox = document.querySelector('.sub-link-box')
const navLinkDropdownIcon = document.querySelector('.nav-link-dropdown-icon')
const searchInput = document.querySelector(".search-box input")
const searchIcon = document.querySelector(".search-icon")
const realizationsSection = document.querySelector("#realizations")
const gradient = document.querySelector(".gradient")
const expandCollapseBtn = document.querySelector("#expand-collapse")
const carouselContainer = document.querySelector(".carousel-container")
const popupCloseIcon = document.querySelector("#popup-close")
const gridImages = [...document.querySelectorAll(".img-grid img")]
const carouselImages = [...document.querySelectorAll(".carousel-inner img")]


//animations and scrollspy

window.onscroll = () => {
  sections.forEach((section) => {
    const top = window.scrollY
    const offset = section.offsetTop - 200
    const height = section.offsetHeight
    const id = section.getAttribute('id')
    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove('active')
        document
          .querySelector(`header nav a[href*=${id}]`)
          .classList.add('active')
      })
      section.classList.add('show-animate')
    }
		// two way animations
		//  else {
    //   section.classList.remove('show-animate')
    // }
  })
}

//nav logic

navLinkDropdownIcon.addEventListener("click", () => {
	subLinkBox.classList.toggle('show')
})

menuIcon.addEventListener("click", () => {
	nav.classList.toggle("show")
	menuIcon.classList.toggle("bx-x")
})

searchIcon.addEventListener("click", () => {
	searchInput.classList.toggle("show")
})

navLinks.forEach(navLink => {
	navLink.addEventListener("click", () => {
		nav.classList.remove('show')
	})
})

//gallery expand/collapse logic

expandCollapseBtn.addEventListener("click", () => {
	realizationsSection.classList.add("show")
	gradient.classList.add("hide")
	expandCollapseBtn.classList.add("hide")
})

//carousel logic

gridImages.forEach(gridImage => {
	gridImage.addEventListener("click", () => {
		carouselImages.forEach(carouselImage => {
			if (carouselImage.attributes.src.nodeValue === gridImage.attributes.src.nodeValue) {
				carouselImage.parentElement.classList.add("active")
			}
		})
		carouselContainer.classList.add("show")
	})
})

function closeCarouselPopup() {
	if (carouselContainer.classList.contains("show")) {
		carouselContainer.classList.remove("show")
		carouselImages.forEach(carouselImage => {
			carouselImage.parentElement.classList.remove("active")
		})
	}
}

window.addEventListener("keydown", e => {
	if (e.key === "Escape") {
		closeCarouselPopup()
	}
})

popupCloseIcon.addEventListener("click", () => {
	closeCarouselPopup()
})
