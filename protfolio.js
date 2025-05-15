// Responsive menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Dynamic projects data
const projects = [
    {
        title: 'Personal Website',
        description: 'A modern, responsive personal website built with HTML, CSS, and JavaScript.',
        link: 'https://github.com/HAREESSHP/protfolio-hareesh.git'
    },
    {
        title: 'Weather App',
        description: 'A weather forecast app using OpenWeatherMap API and vanilla JS.',
        link: '#'
    },
    {
        title: 'Number Base Converter',
        description: 'Converts numbers from one base to another (Decimal, Binary, Hexadecimal)',
        link: 'https://github.com/HAREESSHP/number-base-converter.git'
    },
    {
        title: 'Voice Assistant Object Detection',
        description: 'A Python project using YOLOv5, OpenCV, and pyttsx3 to detect objects via webcam and announce them using text-to-speech.',
        link: 'https://github.com/HAREESSHP/object-detection.git'
    },
    {
        title: 'Comparision Chatbox',
        description: 'A chatbox project for comparing different items or data, built as part of my portfolio projects.',
        link: 'https://github.com/HAREESSHP/comparision-chatbot.git'
    }
];

// Render projects dynamically
const projectsContainer = document.getElementById('projects-container');
if (projectsContainer) {
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;
        projectsContainer.appendChild(card);
    });
}

// Contact form submission (demo only)
const contactForm = document.getElementById('contact-form');
const contactSuccess = document.getElementById('contact-success');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        if (contactSuccess) {
            contactSuccess.style.display = 'block';
            setTimeout(() => {
                contactSuccess.style.display = 'none';
            }, 4000);
        }
        contactForm.reset();
    });
}

// Add Project Form - Dynamically add projects
const addProjectForm = document.getElementById('add-project-form');
if (addProjectForm) {
    addProjectForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const title = document.getElementById('project-title').value.trim();
        const desc = document.getElementById('project-desc').value.trim();
        const link = document.getElementById('project-link').value.trim();
        if (title && desc && link) {
            const newProject = { title, description: desc, link };
            projects.push(newProject);
            renderProjects();
            addProjectForm.reset();
        }
    });
}

// Render projects function (refactored for reusability)
function renderProjects() {
    if (projectsContainer) {
        projectsContainer.innerHTML = '';
        projects.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank">View Project</a>
            `;
            projectsContainer.appendChild(card);
        });
    }
}
// Initial render
renderProjects();
