// Portfolio Configuration Data
const portfolioConfig = {
    // Personal Information
    personalInfo: {
        name: "Prasnn Gohel",
        email: "gohelprasnn@gmail.com",
        phone: "+91 9737159091",
        location: "Vallbhipur, Bhavnagar, Gujarat, India - 364310,",
        experience: "Jan 15, 2024 – Present",
        freelanceStatus: "Available",
        workingHours: "Mon-Fri: 9AM - 6PM",
        aboutText: "I'm a passionate Flutter developer crafting high-performance Android & iOS apps that deliver seamless user experiences."
    },

    // Hero Section
    hero: {
        title: "I'm a",
        // typedText: ["Flutter Developer","Android App Developer","IOS App Developer"],
        subtitle: "Specializing in Flutter app development with real-world impact",
        backgroundImage: "https://i.pinimg.com/736x/bf/b9/6f/bfb96f612ae8729f5ef4ab999faec2f6.jpg"
        //https://i.pinimg.com/736x/43/14/0d/43140df9773f02f7bc6294bd99317de3.jpg
    },

    // Timeline/Experience
    timeline: [
        // {
        //     period: "2018 - Present",
        //     title: "Senior UI/UX Designer",
        //     description: "Leading design teams to create innovative digital products for global clients."
        // },
        {
            period: "2025 - Present",
            title: "JDK Group Bhavnagar - Flutter Developer",
            description: "Built responsive Mobile applications using Flutter frameworks."
        },
        {
            period: "2022 - 2024",
            title: "BPTI-Information Technology Bhavnagar",
            description: "Started my IT journey in college with a focus on learning programming languages."
        },
         {
            period: "2020 - 2021",
            title: "Shree Gambhirsinhji High School, Vallbhipur",
            description: "Completed my 10th standard with dedication, building a strong foundation in academics and personal growth."
        },
    ],

    // Skills
    skills: [
        { name: "Flutter & Dart", percentage: 95 },
        { name: "UI/UX Design", percentage: 85 },
        { name: "Responsive Design", percentage: 90 },
        { name: "GetX (State Management)", percentage: 95 },
        
    ],

    // Services
    services: [
         {
            title: "Mobile App Development",
            icon: "fas fa-code",
            description: "Creating high-performance, responsive mobile applications with Flutter using clean architecture and best practices.",
            features: ["Cross-Platform", "Fast Performance", "Responsive Design", "Modern Architecture","Clean UI",

]
        },
        {
            title: "Backend Integration",
            icon: "fas fa-database",
            description: "Connecting mobile apps to powerful backends using Firebase and RESTful APIs for real-time data and seamless user experiences.",
            features: ["Firebase", "REST APIs", "Authentication", "Real-time Database"],
        },
       
       {
            title: "App Maintenance",
            icon: "fas fa-tools",
            description: "Ensuring long-term success of mobile apps with regular updates, performance optimization, and bug fixing.",
            features: ["Performance Tuning", "Bug Fixing", "Version Upgrades", "Security Updates"],
           //backgroundImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        }

    ],

    // Portfolio Projects
    portfolio: [
        {
            title: "Live Chat Application using Firebase",
            category: "App",
            description: "Live chatting Application",
            tags: ["Flutter", "Firebase", "Cloudinary"],
            imageUrl: "https://ik.imagekit.io/0sgryl9yu/Untitled%20design%20(2).jpg?updatedAt=1750586960557",
            badge: "MOBILE APP"
        },
        {
            title: "COVID-19 Live Tracker",
            category: "App",
            description: "displaying real-time global COVID-19 cases",
            tags: ["Flutter", "REST API"],
            imageUrl: "https://ik.imagekit.io/0sgryl9yu/Untitled%20design%20(1).jpg?updatedAt=1750585323564",
            badge: "app"
        },
        {
            title: "Food Delivery App",
            category: "App",
            description: "Frontend of Food oreder and Delivery App",
            tags: ["Flutter","Figma"],
            imageUrl: "https://ik.imagekit.io/0sgryl9yu/Untitled%20design.jpg?updatedAt=1750585130899",
            badge: "app"
        },
        {
            title: "TO-DO App",
            category: "App",
            description: "Add Task and get Notification",
            tags: ["Flutter","REST API",],
            imageUrl: "https://ik.imagekit.io/0sgryl9yu/Untitled%20design%20(3).jpg?updatedAt=1750586237008",
            badge: "app"
        },
        {
            title: "MineCraft Mods App Design",
            category: "App",
            description: "Mine craft Mods App design",
            tags: ["Flutter","Figma"],
            imageUrl: "https://ik.imagekit.io/0sgryl9yu/Untitled%20design%20(4).jpg?updatedAt=1750586280869",
            badge: "app"
        },
        // {
        //     title: "Task Manager",
        //     category: "web",
        //     description: "Productivity web application",
        //     tags: ["Vue.js", "Express", "PostgreSQL"],
        //     imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
        //     badge: "Web"
        // },
        // {
        //     title: "Travel App",
        //     category: "design",
        //     description: "Mobile travel planning experience",
        //     tags: ["Figma", "Prototyping"],
        //     imageUrl: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1136&q=80",
        //     badge: "UI/UX"
        // }
    ],

    // Contact Information
    contact: {
        backgroundImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
        form: {
            accessKey: "a2710f77-4610-4beb-9ae9-893489bf6c56",
            subject: "New Contact Form Submission",
            redirectUrl: "https://yourdomain.com/thank-you"
        }
    },

    // Social Links
    socialLinks: [
        // { name: "Facebook", icon: "fab fa-facebook-f", url: "#" },
        // { name: "Twitter", icon: "fab fa-twitter", url: "#" },
        { name: "Instagram", icon: "fab fa-instagram", url: "https://www.instagram.com/go4hell_/" },
        { name: "LinkedIn", icon: "fab fa-linkedin-in", url: "https://www.linkedin.com/in/prasnn-gohel-a80a58308/"},
        //{ name: "Dribbble", icon: "fab fa-dribbble", url: "#" }
    ],

    // Footer
    footer: {
        copyrightYear: new Date().getFullYear(),
        legalLinks: [
            { text: "Privacy Policy", url: "#" },
            { text: "Terms of Service", url: "#" },
            { text: "Cookie Policy", url: "#" }
        ]
    }
};

// Initialize the portfolio when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load personal information
    // document.getElementById('info-name').textContent = portfolioConfig.personalInfo.name;
    // document.getElementById('info-email').textContent = portfolioConfig.personalInfo.email;
    // document.getElementById('info-experience').textContent = portfolioConfig.personalInfo.experience;
    // document.getElementById('info-freelance').textContent = portfolioConfig.personalInfo.freelanceStatus;
    
    // Load contact information
    document.getElementById('contact-location').textContent = portfolioConfig.personalInfo.location;
    document.getElementById('contact-email').textContent = portfolioConfig.personalInfo.email;
    document.getElementById('contact-phone').textContent = portfolioConfig.personalInfo.phone;
    document.getElementById('contact-hours').textContent = portfolioConfig.personalInfo.workingHours;
    
    // Load footer information
    document.getElementById('footer-email').textContent = portfolioConfig.personalInfo.email;
    document.getElementById('footer-phone').textContent = portfolioConfig.personalInfo.phone;
    document.getElementById('current-year').textContent = portfolioConfig.footer.copyrightYear;
    
    // Initialize Typed.js if the element exists
    // if (document.querySelector('.typed-text')) {
    //     new Typed('.typed-text', {
    //         strings: portfolioConfig.hero.typedText,
    //         typeSpeed: 100,
    //         backSpeed: 60,
    //         loop: true
    //     });
    // }
    
    // Load skills
    const skillsContainer = document.getElementById('skills-container');
    if (skillsContainer) {
        portfolioConfig.skills.forEach(skill => {
            skillsContainer.innerHTML += `
                <div class="skill-item">
                    <div class="skill-header">
                        <h4>${skill.name}</h4>
                        <span>${skill.percentage}%</span>
                    </div>
                    <div class="progress-bar">
                        <span class="progress-fill" style="width: 0" data-width="${skill.percentage}"></span>
                    </div>
                </div>
            `;
        });
    }
    
    // Load timeline
    const timelineContainer = document.getElementById('timeline-container');
    if (timelineContainer) {
        portfolioConfig.timeline.forEach(item => {
            timelineContainer.innerHTML += `
                <div class="timeline-item">
                    <div class="timeline-date">${item.period}</div>
                    <div class="timeline-content">
                        <h4>${item.title}</h4>
                        <p>${item.description}</p>
                    </div>
                </div>
            `;
        });
    }
    
    // Load services
    const servicesContainer = document.getElementById('services-container');
    if (servicesContainer) {
        portfolioConfig.services.forEach((service, index) => {
            servicesContainer.innerHTML += `
                <div class="service-card" data-aos="fade-up" data-aos-delay="${(index + 1) * 100}">
                    <div class="service-icon">
                        <i class="${service.icon}"></i>
                        <div class="icon-shape"></div>
                    </div>
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                    <ul class="service-features">
                        ${service.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                    <a href="#" class="service-link">Learn More <i class="fas fa-arrow-right"></i></a>
                </div>
            `;
        });
    }
    
    // Load portfolio items
    const portfolioContainer = document.getElementById('portfolio-container');
    if (portfolioContainer) {
        portfolioConfig.portfolio.forEach((project, index) => {
            portfolioContainer.innerHTML += `
                <div class="portfolio-item" data-category="${project.category}" data-aos="zoom-in" data-aos-delay="${200 + (index * 50)}">
                    <div class="portfolio-img-container">
                        <img src="${project.imageUrl}" alt="${project.title}">
                        <div class="portfolio-badge">${project.badge}</div>
                    </div>
                    <div class="portfolio-overlay">
                        <div class="overlay-content">
                            <h3>${project.title}</h3>
                            <p>${project.description}</p>
                            <div class="portfolio-tags">
                                ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                            </div>
                            <div class="portfolio-links">
                                <a href="#" class="portfolio-link" aria-label="View project">
                                    <i class="fas fa-expand"></i>
                                </a>
                                <a href="#" class="portfolio-link" aria-label="Visit website">
                                    <i class="fas fa-link"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    
    // Load social links
    const socialLinksContainers = document.querySelectorAll('#social-links-container, #footer-social-links');
    socialLinksContainers.forEach(container => {
        portfolioConfig.socialLinks.forEach(link => {
            container.innerHTML += `
                <a href="${link.url}" class="social-link" aria-label="${link.name}">
                    <i class="${link.icon}"></i>
                </a>
            `;
        });
    });
    
    // Load footer services
    const footerServicesContainer = document.getElementById('footer-services');
    if (footerServicesContainer) {
        portfolioConfig.services.forEach(service => {
            footerServicesContainer.innerHTML += `
                <li><a href="#"><i class="fas fa-chevron-right"></i> ${service.title}</a></li>
            `;
        });
        // Add additional services if needed
        footerServicesContainer.innerHTML += `
            <li><a href="#"><i class="fas fa-chevron-right"></i> Brand Identity</a></li>
            <li><a href="#"><i class="fas fa-chevron-right"></i> Digital Marketing</a></li>
        `;
    }
    
    // Animate skill bars
    setTimeout(() => {
        const skillBars = document.querySelectorAll('.progress-fill');
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width + '%';
        });
    }, 500);
});

// Make config available globally
window.portfolioConfig = portfolioConfig;