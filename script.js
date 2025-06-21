// Scroll-based animations and effects
let scrollY = 0

// Update scroll position
window.addEventListener("scroll", () => {
  scrollY = window.scrollY
  updateScrollEffects()
})

// Initialize animations when page loads
document.addEventListener("DOMContentLoaded", () => {
  initializeAnimations()
  updateScrollEffects()
})

function initializeAnimations() {
  // Add entrance animations to elements
  const heroContent = document.querySelector(".hero-content")
  const heroImage = document.querySelector(".hero-image")

  if (heroContent) {
    heroContent.style.opacity = "0"
    heroContent.style.transform = "translateX(-50px)"

    setTimeout(() => {
      heroContent.style.transition = "all 1s ease-out"
      heroContent.style.opacity = "1"
      heroContent.style.transform = "translateX(0)"
    }, 100)
  }

  if (heroImage) {
    heroImage.style.opacity = "0"
    heroImage.style.transform = "translateX(50px)"

    setTimeout(() => {
      heroImage.style.transition = "all 1s ease-out"
      heroImage.style.opacity = "1"
      heroImage.style.transform = "translateX(0)"
    }, 400)
  }

  // Animate skill cards on scroll
  observeElements()
}

function updateScrollEffects() {
  // Update hero background parallax
  const heroBg = document.querySelector(".hero-bg")
  if (heroBg) {
    heroBg.style.transform = `translateY(${scrollY * 0.5}px)`
  }

  // Update image glow effect based on scroll
  const imageGlow = document.querySelector(".image-glow")
  if (imageGlow) {
    const glowOpacity = Math.min(0.6, 0.2 + scrollY * 0.001)
    const glowScale = 1 + scrollY * 0.0005
    imageGlow.style.opacity = glowOpacity
    imageGlow.style.transform = `scale(${glowScale})`
  }

  // Update rotating border effect
  const imageBorder = document.querySelector(".image-border")
  if (imageBorder) {
    const rotation = scrollY * 0.1
    const borderOpacity = Math.min(1, 0.5 + scrollY * 0.002)
    imageBorder.style.transform = `rotate(${rotation}deg)`
    imageBorder.style.opacity = borderOpacity
  }

  // Update profile image effects
  const profileImage = document.querySelector(".profile-image")
  if (profileImage) {
    const brightness = 1 + scrollY * 0.0005
    const contrast = 1 + scrollY * 0.0003
    const scale = 1 + Math.sin(scrollY * 0.01) * 0.02
    profileImage.style.filter = `brightness(${brightness}) contrast(${contrast})`
    profileImage.style.transform = `scale(${scale})`
  }

  // Update floating icons
  const floatingIcon1 = document.querySelector(".floating-icon-1")
  const floatingIcon2 = document.querySelector(".floating-icon-2")

  if (floatingIcon1) {
    const translateY = Math.sin(scrollY * 0.01) * 10
    const rotation = scrollY * 0.05
    const opacity = Math.min(1, 0.7 + scrollY * 0.001)
    floatingIcon1.style.transform = `translateY(${translateY}px) rotate(${rotation}deg)`
    floatingIcon1.style.opacity = opacity
  }

  if (floatingIcon2) {
    const translateY = Math.cos(scrollY * 0.01) * 10
    const rotation = -scrollY * 0.05
    const opacity = Math.min(1, 0.7 + scrollY * 0.001)
    floatingIcon2.style.transform = `translateY(${translateY}px) rotate(${rotation}deg)`
    floatingIcon2.style.opacity = opacity
  }

  // Update particles
  updateParticles()

  // Update about image glow
  const aboutImageGlow = document.querySelector(".about-image-glow")
  if (aboutImageGlow) {
    const aboutOpacity = Math.min(0.4, 0.1 + scrollY * 0.0008)
    aboutImageGlow.style.opacity = aboutOpacity
  }

  // Update about profile image
  const aboutProfileImage = document.querySelector(".about-profile-image")
  if (aboutProfileImage) {
    const saturation = 1 + scrollY * 0.0003
    aboutProfileImage.style.filter = `saturate(${saturation})`
  }
}

function updateParticles() {
  const particles = document.querySelectorAll(".particle")

  particles.forEach((particle, index) => {
    const threshold = 100 + index * 50
    if (scrollY > threshold) {
      particle.style.opacity = "1"

      switch (index) {
        case 0:
          particle.style.transform = `translateX(${scrollY * 0.1}px) translateY(${Math.sin(scrollY * 0.02) * 20}px)`
          break
        case 1:
          particle.style.transform = `translateX(${-scrollY * 0.08}px) translateY(${Math.cos(scrollY * 0.015) * 15}px)`
          break
        case 2:
          particle.style.transform = `translateX(${scrollY * 0.12}px) translateY(${Math.sin(scrollY * 0.025) * 25}px)`
          break
      }
    } else {
      particle.style.opacity = "0"
    }
  })
}

// Intersection Observer for scroll animations
function observeElements() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe skill cards
  const skillCards = document.querySelectorAll(".skill-card")
  skillCards.forEach((card, index) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(30px)"
    card.style.transition = `all 0.6s ease ${index * 0.1}s`
    observer.observe(card)
  })

  // Observe skill categories
  const skillCategories = document.querySelectorAll(".skill-category")
  skillCategories.forEach((category, index) => {
    category.style.opacity = "0"
    category.style.transform = "translateY(30px)"
    category.style.transition = `all 0.6s ease ${index * 0.1}s`
    observer.observe(category)
  })

  // Observe experience items
  const experienceItems = document.querySelectorAll(".experience-item")
  experienceItems.forEach((item, index) => {
    item.style.opacity = "0"
    item.style.transform = "translateY(30px)"
    item.style.transition = `all 0.6s ease ${index * 0.2}s`
    observer.observe(item)
  })

  // Observe project cards
  const projectCards = document.querySelectorAll(".project-card")
  projectCards.forEach((card, index) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(30px)"
    card.style.transition = `all 0.6s ease ${index * 0.1}s`
    observer.observe(card)
  })

  // Observe contact cards
  const contactCards = document.querySelectorAll(".contact-card")
  contactCards.forEach((card, index) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(30px)"
    card.style.transition = `all 0.6s ease ${index * 0.1}s`
    observer.observe(card)
  })
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Add hover effects to buttons
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.05)"
  })

  button.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1)"
  })
})

// Add click effects to project buttons
document.querySelectorAll(".project-button").forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault()

    // Create ripple effect
    const ripple = document.createElement("span")
    const rect = this.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2

    ripple.style.width = ripple.style.height = size + "px"
    ripple.style.left = x + "px"
    ripple.style.top = y + "px"
    ripple.style.position = "absolute"
    ripple.style.borderRadius = "50%"
    ripple.style.background = "rgba(255, 255, 255, 0.3)"
    ripple.style.transform = "scale(0)"
    ripple.style.animation = "ripple 0.6s linear"
    ripple.style.pointerEvents = "none"

    this.style.position = "relative"
    this.style.overflow = "hidden"
    this.appendChild(ripple)

    setTimeout(() => {
      ripple.remove()
    }, 600)
  })
})

// Add ripple animation CSS
const style = document.createElement("style")
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`
document.head.appendChild(style)

// Add typing effect to hero subtitle (optional enhancement)
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.innerHTML = ""

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}

// Initialize typing effect for hero subtitle
setTimeout(() => {
  const heroSubtitle = document.querySelector(".hero-subtitle")
  if (heroSubtitle) {
    const originalText = heroSubtitle.textContent
    typeWriter(heroSubtitle, originalText, 80)
  }
}, 1000)
