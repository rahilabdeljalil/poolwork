

  // Product data
        const products = {
            1: {
                title: "ناقورة مثلثة (دفق نقطي عمودي)",
                image: "https://images.unsplash.com/photo-1571624436279-b272aff752b5?w=800&h=600&fit=crop",
                price: "يبدأ من ₪ 27",
                description: "ناقورة مثلثة الشكل مصممة بدقة عالية لتوفير دفق نقطي عمودي مثالي. تتميز بالمتانة والأداء الفائق مع ضمان الجودة الأوروبية. مناسبة للاستخدام في النوافير الصغيرة والمتوسطة.",
                features: [
                    "تصميم مثلثي مبتكر",
                    "دفق نقطي عمودي منتظم",
                    "مصنوعة من مواد عالية الجودة",
                    "مقاومة للتآكل والصدأ",
                    "سهولة التركيب والصيانة",
                    "ضمان لمدة سنتين"
                ]
            },
            2: {
                title: "ناقورة مستطيلة (دفق نقطي عمودي)",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
                price: "يبدأ من ₪ 27",
                description: "ناقورة مستطيلة الشكل تضمن توزيع متوازن للمياه مع دفق نقطي عمودي مثالي. تناسب التصاميم الهندسية الحديثة وتوفر أداءً استثنائياً في كافة الظروف الجوية.",
                features: [
                    "تصميم مستطيل عملي",
                    "توزيع متوازن للمياه",
                    "أداء عالي في جميع الأحوال الجوية",
                    "مواد متطورة مقاومة للعوامل الخارجية",
                    "تصميم يناسب النوافير العصرية",
                    "صيانة قليلة ومتانة عالية"
                ]
            },
            3: {
                title: "ناقورة مربعة (دفق نقطي عمودي)",
                image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop",
                price: "يبدأ من ₪ 26",
                description: "تصميم مربع أنيق يوفر توزيع مثالي للمياه في كافة الاتجاهات. هذه الناقورة تجمع بين الجمال والوظيفة، مما يجعلها الخيار الأمثل للنوافير الديكورية.",
                features: [
                    "شكل مربع متناسق",
                    "توزيع 360 درجة للمياه",
                    "مثالية للنوافير الديكورية",
                    "تقنية دفق متقدمة",
                    "تصميم يناسب المساحات المفتوحة",
                    "كفاءة عالية في استهلاك المياه"
                ]
            },
            4: {
                title: "ناقورة طويلة",
                image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
                price: "يبدأ من ₪ 54",
                description: "ناقورة بتصميم طولي مميز تناسب المساحات الواسعة والأحواض الكبيرة. تتميز بقدرتها على إنتاج تدفق مائي قوي ومنتظم، مما يجعلها مثالية للمشاريع الكبرى والنوافير التجارية.",
                features: [
                    "تصميم طولي مميز",
                    "مناسبة للمساحات الواسعة",
                    "تدفق قوي ومنتظم",
                    "جودة تجارية عالية",
                    "تحمل ضغوط مائية عالية",
                    "مثالية للمشاريع الكبرى"
                ]
            },
            5: {
                title: "ناقورة نجمة (دفق نقطي عمودي)",
                image: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?w=800&h=600&fit=crop",
                price: "يبدأ من ₪ 27",
                description: "تصميم نجمي فريد يضفي لمسة جمالية رائعة على النوافير. هذه الناقورة تجمع بين الأناقة والأداء، حيث تخلق أنماط مائية مذهلة تجذب الأنظار وتضيف بُعداً جمالياً استثنائياً.",
                features: [
                    "تصميم نجمي مبتكر",
                    "أنماط مائية جذابة",
                    "إضافة جمالية استثنائية",
                    "تأثيرات بصرية مميزة",
                    "مناسبة للحدائق الراقية",
                    "سهولة التحكم والتشغيل"
                ]
            },
            6: {
                title: "ناقورة دائرية (دفق نقطي عمودي)",
                image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&h=600&fit=crop",
                price: "يبدأ من ₪ 27",
                description: "تصميم دائري كلاسيكي يوفر تدفق مائي متوازن ومنتظم. هذه الناقورة تمثل الاختيار الأمثل للذين يفضلون التصاميم التقليدية مع الأداء العصري المتطور.",
                features: [
                    "تصميم دائري كلاسيكي",
                    "تدفق متوازن ومنتظم",
                    "أداء عصري متطور",
                    "مناسبة لجميع أنواع النوافير",
                    "سهولة الدمج مع التصاميم الموجودة",
                    "استهلاك مثالي للطاقة"
                ]
            }
        };

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  menuToggle.classList.toggle("active");
});

menuToggle.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    navMenu.classList.toggle("show");
    menuToggle.classList.toggle("active");
  }
});

// Close menu when clicking on a link
navMenu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navMenu.classList.remove("show");
    menuToggle.classList.remove("active");
  }
});

// Slideshow functionality
const slides = document.querySelectorAll(".slide");
const indicators = document.querySelectorAll(".indicator");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
let currentSlide = 0;
let slideInterval;
let isTransitioning = false;

function showSlide(index) {
  if (isTransitioning) return;
  isTransitioning = true;

  slides.forEach((slide) => slide.classList.remove("active"));
  indicators.forEach((indicator) => indicator.classList.remove("active"));

  currentSlide = index;

  slides[currentSlide].classList.add("active");
  indicators[currentSlide].classList.add("active");

  setTimeout(() => {
    isTransitioning = false;
  }, 1500);
}

function nextSlide() {
  if (isTransitioning) return;
  const nextIndex = (currentSlide + 1) % slides.length;
  showSlide(nextIndex);
}

function prevSlide() {
  if (isTransitioning) return;
  const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(prevIndex);
}

function startSlideshow() {
  slideInterval = setInterval(() => {
    if (!isTransitioning) {
      nextSlide();
    }
  }, 6000);
}

function resetSlideshow() {
  clearInterval(slideInterval);
  setTimeout(startSlideshow, 100);
}

// Event listeners
nextBtn.addEventListener("click", () => {
  nextSlide();
  resetSlideshow();
});

prevBtn.addEventListener("click", () => {
  prevSlide();
  resetSlideshow();
});

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    if (!isTransitioning && index !== currentSlide) {
      showSlide(index);
      resetSlideshow();
    }
  });
});

// Initialize slideshow
startSlideshow();

// Floating particles
const maxParticles = 20;
let particleCount = 0;

function createParticle() {
  if (particleCount >= maxParticles) return;

  const particle = document.createElement("div");
  particle.className = "particle";
  particle.setAttribute("aria-hidden", "true");

  const size = Math.random() * 4 + 2;
  particle.style.width = size + "px";
  particle.style.height = size + "px";
  particle.style.left = Math.random() * 100 + "%";
  particle.style.animationDuration = Math.random() * 3 + 4 + "s";
  particle.style.animationDelay = Math.random() * 2 + "s";

  document.getElementById("particles").appendChild(particle);
  particleCount++;

  setTimeout(() => {
    particle.remove();
    particleCount--;
  }, 8000);
}

setInterval(createParticle, 1200);

// Scroll to next section
function scrollToNext() {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth",
  });
}

document.querySelector(".scroll-indicator").addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    scrollToNext();
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Pause slideshow when user hovers over controls
document.querySelector(".slide-controls").addEventListener("mouseenter", () => {
  clearInterval(slideInterval);
});

document.querySelector(".slide-controls").addEventListener("mouseleave", () => {
  startSlideshow();
});

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
    if (e.key === "ArrowRight") {
      prevSlide();
    } else {
      nextSlide();
    }
    resetSlideshow();
  }
});

// Scroll reveal animation with Intersection Observer
function setupScrollReveal() {
  if ("IntersectionObserver" in window) {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll(".reveal").forEach((element) => {
      observer.observe(element);
    });
  } else {
    document.querySelectorAll(".reveal").forEach((element) => {
      element.classList.add("active");
    });
  }
}

// Initialize scroll reveal
document.addEventListener("DOMContentLoaded", () => {
  setupScrollReveal();
  const cards = document.querySelectorAll(".product-card");
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.15 + 0.3}s`;
  });
});

if (
  document.readyState === "complete" ||
  document.readyState === "interactive"
) {
  setupScrollReveal();
  const cards = document.querySelectorAll(".product-card");
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.15 + 0.3}s`;
  });
}

// Enhanced card interactions
const cards = document.querySelectorAll(".product-card");
const isTouchDevice = window.matchMedia(
  "(hover: none) and (pointer: coarse)"
).matches;

if (!isTouchDevice) {
  cards.forEach((card) => {
    let timeout;
    card.addEventListener("mouseenter", () => {
      clearTimeout(timeout);
      card.style.transform = "translateY(-15px) scale(1.02)";
    });

    card.addEventListener("mouseleave", () => {
      timeout = setTimeout(() => {
        card.style.transform = "translateY(0) scale(1)";
      }, 50);
    });
  });
}

// Optimized parallax effect
let lastScrollY = 0;
let ticking = false;

function updateParallax() {
  const scrolled = window.pageYOffset;
  const rate = scrolled * -0.5;

  document.querySelectorAll(".floating-element").forEach((element, index) => {
    const speed = (index + 1) * 0.3;
    const yPos = rate * speed;
    const rotation = scrolled * 0.1;
    element.style.transform = `translate3d(0, ${yPos}px, 0) rotate(${rotation}deg)`;
  });

  ticking = false;
}

function requestParallaxTick() {
  if (!ticking && Math.abs(window.pageYOffset - lastScrollY) > 10) {
    lastScrollY = window.pageYOffset;
    requestAnimationFrame(updateParallax);
    ticking = true;
  }
}

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  window.addEventListener("scroll", requestParallaxTick);
}

// Improved resize handling
let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    console.log("Resize completed");
    document.querySelectorAll(".product-card").forEach((card, index) => {
      card.style.animation = "none";
      card.offsetHeight;
      card.style.animation = `slideInUp 0.8s ease-out forwards ${
        index * 0.15 + 0.3
      }s`;
    });
  }, 250);
});

// Enhanced error handling for images
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("error", function () {
    console.warn("Image failed to load:", this.src);
  });
});




//////////////////////////////////////////////


        // Modal functions
        function openModal(productId) {
            const product = products[productId];
            if (!product) return;

            const modal = document.getElementById('productModal');
            const modalImage = document.getElementById('modalImage');
            const modalTitle = document.getElementById('modalTitle');
            const modalDescription = document.getElementById('modalDescription');
            const modalFeatures = document.getElementById('modalFeatures');
            const modalPrice = document.getElementById('modalPrice');

            // Set content
            modalImage.src = product.image;
            modalImage.alt = product.title;
            modalTitle.textContent = product.title;
            modalDescription.textContent = product.description;
            modalPrice.textContent = product.price;

            // Clear and populate features
            modalFeatures.innerHTML = '';
            product.features.forEach(feature => {
                const li = document.createElement('li');
                li.textContent = feature;
                modalFeatures.appendChild(li);
            });

            // Show modal with animation
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            const modal = document.getElementById('productModal');
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        function addToCart() {
            // Add to cart functionality
            alert('تم إضافة المنتج إلى السلة بنجاح!');
            // Here you would typically integrate with your cart system
        }

        function contactUs() {
            // Contact functionality
            window.open('mailto:info@poolsfountains.com?subject=استفسار عن المنتج', '_blank');
        }

        // Close modal when clicking outside
        document.getElementById('productModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });

        // Optimize product card animations
        function observeProductCards() {
            if ('IntersectionObserver' in window) {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.style.animationPlayState = 'running';
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.1 });

                document.querySelectorAll('.product-card').forEach(card => {
                    card.style.animationPlayState = 'paused';
                    observer.observe(card);
                });
            }
        }

        // Initialize when DOM is ready
        document.addEventListener('DOMContentLoaded', function() {
            observeProductCards();
            
            // Add loading animation to images
            const images = document.querySelectorAll('.product-image');
            images.forEach(img => {
                img.addEventListener('load', function() {
                    this.style.opacity = '1';
                });
                
                img.addEventListener('error', function() {
                    console.warn('Image failed to load:', this.src);
                    this.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                });
            });

            // Enhanced hover effects for touch devices
            if ('ontouchstart' in window) {
                document.querySelectorAll('.product-card').forEach(card => {
                    card.addEventListener('touchstart', function() {
                        this.style.transform = 'translateY(-5px) scale(1.01)';
                    });
                    
                    card.addEventListener('touchend', function() {
                        setTimeout(() => {
                            this.style.transform = 'translateY(0) scale(1)';
                        }, 150);
                    });
                });
            }
        });

        // Lazy loading for modal images
        function lazyLoadModalImage(src) {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = () => resolve(img);
                img.onerror = reject;
                img.src = src;
            });
        }

        // Performance optimization
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(function() {
                // Recalculate layouts if needed
                const modal = document.getElementById('productModal');
                if (modal.classList.contains('active')) {
                    // Adjust modal position for new screen size
                    const modalContent = modal.querySelector('.modal-content');
                    modalContent.style.maxHeight = '90vh';
                }
            }, 250);
        });

        // Add smooth scrolling to showcase when called from navigation
        function scrollToProducts() {
            document.querySelector('.product-showcase').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

        // Export functions for external use
        window.openModal = openModal;
        window.closeModal = closeModal;
        window.addToCart = addToCart;
        window.contactUs = contactUs;
        window.scrollToProducts = scrollToProducts;