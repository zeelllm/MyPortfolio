// Data
const skills = {
    technical: [
        { name: 'Python', level: 85 },
        { name: 'Django', level: 75 },
        { name: 'HTML/CSS', level: 80 },
        { name: 'UI/UX Design', level: 70 },
        { name: 'Data Analysis', level: 75 },
        { name: 'SQL', level: 65 },
        { name: 'Pandas', level: 70 },
        { name: 'NumPy', level: 65 },
    ],
    soft: [
        { name: 'Teaching', description: '2 years of experience in teaching and mentoring students.' },
        { name: 'Communication', description: 'Excellent ability to explain complex concepts in simple terms.' },
        { name: 'Problem Solving', description: 'Analytical approach to solving data-related challenges.' },
        { name: 'Leadership', description: 'Experience in leading study groups and teaching sessions.' },
        { name: 'Time Management', description: 'Efficient balancing of teaching and learning responsibilities.' },
        { name: 'Adaptability', description: 'Quick to learn and adapt to new technologies and concepts.' },
    ],
    languages: [
        { name: 'English', level: 90 },
        { name: 'Hindi', level: 95 },
        { name: 'Gujarati', level: 100 },
    ]
};

const education = [
    {
        title: 'Bachelor of Computer Science and Engineering',
        period: '2022 - Present',
        description: 'Currently pursuing with focus on Data Science and Machine Learning',
        image: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        title: 'Higher Secondary Education (HSC)',
        period: '2020 - 2022',
        description: 'Successfully completed HSC with focus on Mathematics and Science',
        image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        title: 'Secondary Education (SSC)',
        period: '2020',
        description: 'Completed SSC with distinction, laying strong foundation in mathematics and sciences',
        image: 'https://images.pexels.com/photos/5905710/pexels-photo-5905710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
];

// Initialize Lucide icons
lucide.createIcons();

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

function setTheme(isDark) {
    document.body.classList.toggle('dark', isDark);
    themeToggle.innerHTML = isDark ? 
        '<i data-lucide="sun"></i>' : 
        '<i data-lucide="moon"></i>';
    lucide.createIcons();
}

// Initialize theme
setTheme(prefersDark.matches);

themeToggle.addEventListener('click', () => {
    setTheme(!document.body.classList.contains('dark'));
});

// Mobile Menu
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Skills Section
function renderSkills() {
    // Technical Skills
    const skillBars = document.querySelector('.skill-bars');
    skills.technical.forEach(skill => {
        const skillBar = document.createElement('div');
        skillBar.className = 'skill-bar';
        skillBar.innerHTML = `
            <div class="skill-info">
                <span>${skill.name}</span>
                <span>${skill.level}%</span>
            </div>
            <div class="skill-progress">
                <div class="skill-progress-fill" style="width: 0%"></div>
            </div>
        `;
        skillBars.appendChild(skillBar);
    });

    // Soft Skills
    const softSkillsGrid = document.querySelector('.soft-skills-grid');
    skills.soft.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
        skillCard.innerHTML = `
            <h4>${skill.name}</h4>
            <p>${skill.description}</p>
        `;
        softSkillsGrid.appendChild(skillCard);
    });

    // Languages
    const languagesGrid = document.querySelector('.languages-grid');
    skills.languages.forEach(language => {
        const languageCard = document.createElement('div');
        languageCard.className = 'language-card';
        languageCard.innerHTML = `
            <h4>${language.name}</h4>
            <div class="language-level">${language.level}%</div>
        `;
        languagesGrid.appendChild(languageCard);
    });
}

// Education Section
function renderEducation() {
    const educationGrid = document.querySelector('.education-grid');
    education.forEach(item => {
        const card = document.createElement('div');
        card.className = 'education-card';
        card.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="education-content">
                <h3>${item.title}</h3>
                <p class="period">${item.period}</p>
                <p>${item.description}</p>
            </div>
        `;
        educationGrid.appendChild(card);
    });
}

// Contact Form
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    // Here you would typically send the form data to a server
    alert('Message sent successfully!');
    contactForm.reset();
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            if (entry.target.classList.contains('skill-progress-fill')) {
                const width = entry.target.parentElement.parentElement.querySelector('.skill-info span:last-child').textContent;
                entry.target.style.width = width;
            }
        }
    });
}, observerOptions);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    renderEducation();
    
    // Observe sections for animation
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    
    // Observe skill bars
    document.querySelectorAll('.skill-progress-fill').forEach(bar => {
        observer.observe(bar);
    });
});