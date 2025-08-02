
function populateCourseDetails() {
    const params = new URLSearchParams(window.location.search);
    const batchCode = params.get("batch");
    const course = courseData.find(c => c.batch === batchCode);
    if (!course) {
        alert("Course not found.");
        return;
    }
    document.getElementById("course_titlee").textContent = course.title;
    document.getElementById("instructor_name").textContent = course.instructor;
    document.getElementById("batch_code").textContent = course.batch;
    document.getElementById("starting_from").textContent = course.starting;
    document.getElementById("duration").textContent = course.duration;
    document.getElementById("class_time").textContent = course.class_time;
    document.getElementById("is_reg_open").textContent = course.is_reg_open ? "On Going" : "Closed";
    document.getElementById("course_fee").textContent = course.course_fee;
    document.getElementById("offer_fee").textContent = course.offer_fee;
    document.getElementById("registerBtn").href = course.registration_link;
    document.getElementById("course_overview").textContent = course.course_overview;
    const mainUl = document.getElementById("main_learnings");
    const passiveUl = document.getElementById("passive_learnings");
    mainUl.innerHTML = "";
    passiveUl.innerHTML = "";
    course.main_learnings.split(" - ").forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.trim();
        mainUl.appendChild(li);
    });
    course.passive_learnings.split(" - ").forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.trim();
        passiveUl.appendChild(li);
    });
    toggleSupportIcon("mentor_support", course.supports.mentorship);
    toggleSupportIcon("assignment_support", course.supports.assignments);
    toggleSupportIcon("exam_support", course.supports.exams);
    toggleSupportIcon("question_solving", course.supports.qna);
}
function toggleSupportIcon(idPrefix, isSupported) {
    const yesIcon = document.getElementById(`${idPrefix}-yes`);
    const noIcon = document.getElementById(`${idPrefix}-no`);
    if (yesIcon) yesIcon.style.display = isSupported ? "none" : "block";
    if (noIcon) noIcon.style.display = isSupported ? "block" : "none";
}
populateCourseDetails();
function initParticles() {
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 40,
                density: {
                    enable: true,
                    value_area: 700
                }
            },
            color: { value: "#000" },
            shape: {
                type: "polygon",
                stroke: { width: 0, color: "#000" },
                polygon: { nb_sides: 5 }
            },
            opacity: {
                value: 0.08,
                random: false,
                anim: {
                    enable: false
                }
            },
            size: {
                value: 4,
                random: true,
                anim: {
                    enable: false
                }
            },
            line_linked: {
                enable: true,
                distance: 120,
                color: "#000",
                opacity: 0.15,
                width: 1
            },
            move: {
                enable: true,
                speed: 0.4,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                attract: {
                    enable: false
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "grab"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 130,
                    line_linked: {
                        opacity: 0.4
                    }
                },
                bubble: {
                    distance: 350,
                    size: 30,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 150
                },
                push: {
                    particles_nb: 3
                },
                remove: {
                    particles_nb: 2
                }
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