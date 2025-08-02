function populateCourseDetails() {
    const params = new URLSearchParams(window.location.search);
    const mentorCode = params.get("mentor");
    const mentors = mentorData.find(m => m.mentor === mentorCode);
    if (!mentors) {
        alert("Mentor not found.");
        return;
    }
    // Set image src
    document.getElementById("profileImg").src = "assets/mentors/" + mentors.img;
    document.getElementById("mentor_Name").textContent = mentors.name;
    document.getElementById("student_id").textContent = mentors.student_id;
    document.getElementById("trimester").textContent = mentors.trimester;
    document.getElementById("phone").textContent = mentors.phone;
    document.getElementById("email").textContent = mentors.email;
    document.getElementById("per_email").textContent = mentors.per_email;
    document.getElementById("rating").textContent = mentors.rating;
    document.getElementById("profileAbout").textContent = mentors.about;
    document.getElementById("profileFb").href = mentors.fb_link;
    document.getElementById("profileLinkedin").href = mentors.linkedin_link;
    document.getElementById("proposed").textContent = mentors.proposed;
}

populateCourseDetails();

function initParticles() {
    particlesJS("particles-js", {
        particles: {
            number: { value: 40, density: { enable: true, value_area: 700 } },
            color: { value: "#000" },
            shape: { type: "polygon", stroke: { width: 0, color: "#000" }, polygon: { nb_sides: 5 } },
            opacity: { value: 0.08, random: false, anim: { enable: false } },
            size: { value: 4, random: true, anim: { enable: false } },
            line_linked: { enable: true, distance: 120, color: "#000", opacity: 0.15, width: 1 },
            move: { enable: true, speed: 0.4, direction: "none", random: false, straight: false, out_mode: "out", attract: { enable: false } }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "grab" },
                onclick: { enable: true, mode: "push" },
                resize: true
            },
            modes: {
                grab: { distance: 130, line_linked: { opacity: 0.4 } },
                bubble: { distance: 350, size: 30, duration: 2, opacity: 8, speed: 3 },
                repulse: { distance: 150 },
                push: { particles_nb: 3 },
                remove: { particles_nb: 2 }
            }
        },
        retina_detect: true,
        config_demo: {
            hide_card: false,
            background_color: "#b61924",
            background_image: "",
            background_position: "50% 50%",
            background_repeat: "no-repeat",
            background_size: "cover"
        }
    });
}
if ('requestIdleCallback' in window) {
    requestIdleCallback(initParticles);
} else {
    window.addEventListener('load', initParticles);
}