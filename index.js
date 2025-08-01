function setError(element, message) {
    element.value = "";
    element.placeholder = message;
    element.classList.add("red-placeholder");
}
function clearError(element, placeholder) {
    element.placeholder = placeholder;
    element.classList.remove("red-placeholder");
}
function validateField(field, rules) {
    let value = field.value.trim();
    if (rules.required && !value) {
        setError(field, rules.requiredMsg || "This field is required.");
        return false;
    }
    if (rules.pattern && value && !rules.pattern.test(value)) {
        setError(field, rules.patternMsg || "Invalid format.");
        return false;
    }
    if (rules.minLength && value.length < rules.minLength) {
        setError(field, rules.minLengthMsg || `Minimum ${rules.minLength} characters.`);
        return false;
    }
    if (rules.custom && !rules.custom(value)) {
        setError(field, rules.customMsg || "Invalid value.");
        return false;
    }
    clearError(field, rules.defaultPlaceholder);
    return true;
}
function validateForm(form, config) {
    let isValid = true;
    for (let fieldConfig of config) {
        let field = form.querySelector(fieldConfig.selector);
        if (!validateField(field, fieldConfig)) {
            isValid = false;
        }
    }
    let matchConfig = config.find(c => c.matchWith);
    if (matchConfig) {
        let field = form.querySelector(matchConfig.selector);
        let matchField = form.querySelector(matchConfig.matchWith);
        if (field.value && matchField.value) {
            if (field.value !== matchField.value) {
                setError(matchField, matchConfig.matchMsg || "Passwords do not match.");
                isValid = false;
            } else {
                clearError(matchField, config.find(c => c.selector === matchConfig.matchWith).defaultPlaceholder);
            }
        }
    }
    return isValid;
}
function attachRealtimeValidation(form, config) {
    for (let fieldConfig of config) {
        let field = form.querySelector(fieldConfig.selector);
        field.addEventListener("input", function () {
            (field, fieldConfig.defaultPlaceholder);
        });
    }
}
const allowedPrefixes = ["011", "021", "031", "111", "114", "121", "221", "231", "211", "112", "113"];
const emailPattern = /^[^\s@]+@([a-zA-Z]+)\.uiu\.ac\.bd$/;

const feedbackFormConfig = [
    {
        selector: "#email",
        required: true,
        requiredMsg: "Email is required.",
        pattern: emailPattern,
        patternMsg: "Email must be like @dept.uiu.ac.bd",
        defaultPlaceholder: "Your University Email..."
    },
    {
        selector: "#student_id",
        required: true,
        requiredMsg: "Student ID is required.",
        minLength: 9,
        minLengthMsg: "Invalid ID length",
        custom: value => allowedPrefixes.includes(value.substring(0, 3)),
        customMsg: "Invalid department code.",
        defaultPlaceholder: "Your Student ID..."
    }
];
document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("feedbackForm");
    if (form) {
        attachRealtimeValidation(form, feedbackFormConfig);
        form.addEventListener("submit", async function (e) {
            if (!validateForm(form, feedbackFormConfig)) {
                e.preventDefault();
                return;
            }
            e.preventDefault();
            const data = {
                satisfaction: document.getElementById('satisfaction').value,
                email: document.getElementById('email').value,
                student_id: document.getElementById('student_id').value,
                reasons: document.getElementById('reasons').value
            };
            const response = await fetch('save_feedback.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                alert('Thank you for your feedback!');
                form.reset();
            } else {
                alert('Failed to save feedback.');
            }
        });
    }
});
document.getElementById('year').textContent = new Date().getFullYear();
const quotes = [
    // "CGPA is like Wi-Fi — strong at home, weak in the exam hall.",
    // "I love my faculty… especially when they cancel class.",
    // "CGPA doesn't define me. But I still cry when it drops.",
    // "Three trimesters a year? Even babies get nine months!",
    // "I'm not procrastinating, I'm just prioritizing my relaxation.",
    // "Education is important, but big brain naps are importanter.",
    // "I came. I saw. I Googled.",
    // "Studying: the art of texting, eating, and watching Netflix with an open book nearby.",
    // "Homework: because 7 hours of school wasn't enough.",
    // "Trimester system: Because stress just wasn't frequent enough.",
    // "Why fall in love when you can fall asleep in class?",
    // "Warning: This brain is currently experiencing technical difficulties.",
    // "Teacher: Any questions? Me: About life, or just the test?",
    // "I put the 'pro' in procrastinate."
    "Due to a server issue, we have disabled some features",
    "All features will be back online soon",
    "Course registration is on going",
    "Grab 50% off offer for all course"
];
let quoteIndex = 0;
function showNextQuote() {
    const quoteBox = document.getElementById("quote-box");
    quoteBox.style.animation = 'none';
    void quoteBox.offsetWidth;
    quoteBox.style.animation = 'quoteFade 1s ease';
    quoteBox.textContent = quotes[quoteIndex];
    quoteIndex = (quoteIndex + 1) % quotes.length;
}
setInterval(showNextQuote, 10000);
showNextQuote();

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
