// ========================================
// MOBILE MENU
// ========================================

const menuBtn = document.getElementById("menuBtn");

const mobileMenu = document.getElementById("mobileMenu");


menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("hidden");

});


// Close menu when clicking a link

const mobileLinks =
    document.querySelectorAll("#mobileMenu a");


mobileLinks.forEach((link) => {

    link.addEventListener("click", () => {

        mobileMenu.classList.add("hidden");

    });

});



// ========================================
// SCROLL PROGRESS
// ========================================

const progressBar =
    document.getElementById("progressBar");


window.addEventListener("scroll", () => {

    const scrollTop =
        window.scrollY;


    const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;


    const progress =
        (scrollTop / documentHeight) * 100;


    progressBar.style.width =
        progress + "%";

});



// ========================================
// SCROLL REVEAL ANIMATION
// ========================================

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});



// ========================================
// COUNTER ANIMATION
// ========================================

const counters =
    document.querySelectorAll(".counter");


let counterStarted = false;


function startCounters() {

    if (counterStarted) {
        return;
    }


    counterStarted = true;


    counters.forEach((counter) => {

        const target =
            Number(counter.dataset.target);


        let current = 0;


        const increment =
            target / 50;


        function updateCounter() {

            current += increment;


            if (current < target) {

                counter.textContent =
                    Math.ceil(current);


                requestAnimationFrame(
                    updateCounter
                );

            } else {

                counter.textContent =
                    target;

            }

        }


        updateCounter();

    });

}



// Start counters when visible

if (counters.length > 0) {

    const counterObserver =
        new IntersectionObserver(
            (entries) => {

                if (
                    entries[0].isIntersecting
                ) {

                    startCounters();

                }

            },
            {
                threshold: 0.5
            }
        );


    counterObserver.observe(
        counters[0]
    );

}



// ========================================
// COMPARISON TABS
// ========================================

const comparisonButtons =
    document.querySelectorAll(
        ".comparison-btn"
    );


const comparisonContents =
    document.querySelectorAll(
        ".comparison-content"
    );


comparisonButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const target =
            button.dataset.target;


        // Hide all content

        comparisonContents.forEach(
            (content) => {

                content.classList.remove(
                    "active"
                );

            }
        );


        // Show selected content

        const selectedContent =
            document.getElementById(target);


        selectedContent.classList.add(
            "active"
        );


        // Remove active from buttons

        comparisonButtons.forEach(
            (btn) => {

                btn.classList.remove(
                    "active"
                );

            }
        );


        // Add active to clicked button

        button.classList.add(
            "active"
        );

    });

});