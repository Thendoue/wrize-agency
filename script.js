// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const mobileNav = document.getElementById("mobileNav")

if (mobileMenuBtn && mobileNav) {
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenuBtn.classList.toggle("active")
    mobileNav.classList.toggle("active")
  })

  // Close mobile menu when clicking on a link
  const mobileLinks = mobileNav.querySelectorAll(".nav-link")
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenuBtn.classList.remove("active")
      mobileNav.classList.remove("active")
    })
  })

  const allNavLinks = document.querySelectorAll(".nav-link")
  allNavLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      // Only scroll to top for page navigation, not anchor links
      const href = link.getAttribute("href")
      if (href && !href.startsWith("#")) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
    })
  })
}

window.addEventListener("beforeunload", () => {
  window.scrollTo(0, 0)
})

// Scroll to top immediately when page loads
if (history.scrollRestoration) {
  history.scrollRestoration = "manual"
}
window.scrollTo(0, 0)

// Scroll Reveal Animation
const revealElements = document.querySelectorAll(".reveal")

const revealOnScroll = () => {
  const windowHeight = window.innerHeight

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top
    const revealPoint = 100

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("reveal-visible")
    }
  })
}

// Initial check
revealOnScroll()

// Check on scroll
window.addEventListener("scroll", revealOnScroll)

// Header scroll effect
const header = document.getElementById("header")
let lastScroll = 0

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 100) {
    header.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)"
  } else {
    header.style.boxShadow = "none"
  }

  lastScroll = currentScroll
})

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href")
    if (href !== "#" && href.length > 1) {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }
  })
})
