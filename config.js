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
        typedText: ["Flutter Developer", "Android App Developer", "IOS App Developer"],
        subtitle: "Specializing in Flutter app development with real-world impact",
        backgroundImage: "https://i.pinimg.com/736x/bf/b9/6f/bfb96f612ae8729f5ef4ab999faec2f6.jpg"
    },

    // Timeline/Experience
    timeline: [
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
            features: ["Cross-Platform", "Fast Performance", "Responsive Design", "Modern Architecture", "Clean UI"]
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
            badge: "app"
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
            tags: ["Flutter", "Figma"],
            imageUrl: "https://ik.imagekit.io/0sgryl9yu/Untitled%20design.jpg?updatedAt=1750585130899",
            badge: "app"
        },
        {
            title: "TO-DO App",
            category: "App",
            description: "Add Task and get Notification",
            tags: ["Flutter", "REST API"],
            imageUrl: "https://ik.imagekit.io/0sgryl9yu/Untitled%20design%20(3).jpg?updatedAt=1750586237008",
            badge: "app"
        },
        {
            title: "MineCraft Mods App Design",
            category: "App",
            description: "Mine craft Mods App design",
            tags: ["Flutter", "Figma"],
            imageUrl: "https://ik.imagekit.io/0sgryl9yu/Untitled%20design%20(4).jpg?updatedAt=1750586280869",
            badge: "app"
        },
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
        { name: "Instagram", icon: "fab fa-instagram", url: "https://www.instagram.com/go4hell_/" },
        { name: "LinkedIn", icon: "fab fa-linkedin-in", url: "https://www.linkedin.com/in/prasnn-gohel-a80a58308/" },
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
document.addEventListener('DOMContentLoaded', function () {
    // Load contact information
    document.getElementById('contact-location').textContent = portfolioConfig.personalInfo.location;
    document.getElementById('contact-email').textContent = portfolioConfig.personalInfo.email;
    document.getElementById('contact-phone').textContent = portfolioConfig.personalInfo.phone;
    document.getElementById('contact-hours').textContent = portfolioConfig.personalInfo.workingHours;

    // Load footer information
    document.getElementById('footer-email').textContent = portfolioConfig.personalInfo.email;
    document.getElementById('footer-phone').textContent = portfolioConfig.personalInfo.phone;
    document.getElementById('current-year').textContent = portfolioConfig.footer.copyrightYear;

    // Load skills
    const skillsContainer = document.getElementById('skills-container');
    if (skillsContainer) {
        portfolioConfig.skills.forEach(skill => {
            skillsContainer.innerHTML += `
                <div class="skill-item mb-6">
                    <div class="skill-header flex justify-between mb-2">
                        <h4 class="text-base font-semibold text-white">${skill.name}</h4>
                        <span class="text-[#6c63ff] font-semibold">${skill.percentage}%</span>
                    </div>
                    <div className="progress-bar h-2 bg-[#ffffff1a] rounded-full overflow-hidden">
                        <span className="progress-fill block h-full bg-gradient-to-r from-[#6c63ff] to-[#9d95ff] rounded-full" style="width: 0" data-width="${skill.percentage}"></span>
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
                <div class="timeline-item relative mb-8">
                    <div class="timeline-date absolute -left-20 top-0 w-16 text-center bg-[#6c63ff] text-white rounded-full text-xs font-semibold py-1">${item.period}</div>
                    <div class="timeline-content p-4 bg-[#ffffff0d] rounded-lg border-l-2 border-[#6c63ff] hover:transform hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(108,99,255,0.1)] transition-all duration-300">
                        <h4 class="text-lg font-semibold text-white mb-2">${item.title}</h4>
                        <p class="text-gray-400 text-sm">${item.description}</p>
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
                <div class="service-card bg-[#ffffff1a] p-8 rounded-lg backdrop-blur-md border border-[#ffffff1a] text-center hover:transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-500">
                    <div class="service-icon w-20 h-20 bg-[#6c63ff33] rounded-full flex items-center justify-center mx-auto mb-4 text-[#6c63ff] text-3xl hover:bg-[#6c63ff] hover:text-white transition-all duration-300">
                        <i class="${service.icon}"></i>
                        <div class="icon-shape absolute w-full h-full border-2 border-dashed border-[#6c63ff4d] rounded-full animate-[rotate_20s_linear_infinite] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <h3 class="text-xl font-semibold mb-3 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 after:w-10 after:h-0.5 after:bg-[#6c63ff] after:transition-all after:duration-300 hover:after:w-20">${service.title}</h3>
                    <p class="text-gray-400 mb-4">${service.description}</p>
                    <ul class="service-features text-left pl-5">
                        ${service.features.map(feature => `<li class="text-gray-300 mb-2 relative before:content-['▹'] before:absolute before:-left-5 before:text-[#6c63ff]">${feature}</li>`).join('')}
                    </ul>
                    <a href="#" class="service-link text-[#6c63ff] font-medium mt-4 inline-flex items-center hover:text-white transition-all duration-300">
                        Learn More <i class="fas fa-arrow-right ml-2 group-hover:translate-x-1"></i>
                    </a>
                </div>
            `;
        });
    }

    // Load portfolio items
    const portfolioContainer = document.getElementById('portfolio-container');
    if (portfolioContainer) {
        portfolioConfig.portfolio.forEach((project, index) => {
            portfolioContainer.innerHTML += `
                <div class="portfolio-item relative rounded-lg overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-all duration-500" data-category="${project.category}">
                    <div class="portfolio-img-container relative h-64">
                        <img src="${project.imageUrl}" alt="${project.title}" class="w-full h-full object-cover hover:scale-110 transition-all duration-800"/>
                        <div class="portfolio-badge absolute top-4 right-4 bg-[#6c63ff] text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">${project.badge}</div>
                    </div>
                    <div class="portfolio-overlay absolute inset-0 bg-gradient-to-br from-[#6c63ffcc] to-[#4c3de9cc] flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-500 p-4">
                        <div class="overlay-content text-center translate-y-5 hover:translate-y-0 transition-all duration-500 w-full">
                            <h3 class="text-xl font-bold text-white mb-2">${project.title}</h3>
                            <p class="text-gray-200 mb-4">${project.description}</p>
                            <div class="portfolio-tags flex justify-center flex-wrap gap-2 mb-4">
                                ${project.tags.map(tag => `<span class="bg-[#ffffff26] text-white px-3 py-1 rounded-full text-xs font-medium">${tag}</span>`).join('')}
                            </div>
                            <div class="portfolio-links flex justify-center gap-4">
                                <a href="#" class="portfolio-link w-12 h-12 bg-[#ffffff33] rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#6c63ff] transition-all duration-300" aria-label="View project"><i class="fas fa-expand"></i></a>
                                <a href="#" class="portfolio-link w-12 h-12 bg-[#ffffff33] rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#6c63ff] transition-all duration-300" aria-label="Visit website"><i class="fas fa-link"></i></a>
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
                <a href="${link.url}" class="social-link w-10 h-10 bg-[#ffffff1a] rounded-full flex items-center justify-center text-white hover:bg-[#6c63ff] hover:transform hover:-translate-y-1 transition-all duration-300" aria-label="${link.name}">
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
                <li class="mb-2"><a href="#" class="text-gray-400 hover:text-[#6c63ff] transition-all duration-300 flex items-center"><i class="fas fa-chevron-right mr-2 text-[#6c63ff] text-xs"></i> ${service.title}</a></li>
            `;
        });
        footerServicesContainer.innerHTML += `
            <li class="mb-2"><a href="#" class="text-gray-400 hover:text-[#6c63ff] transition-all duration-300 flex items-center"><i class="fas fa-chevron-right mr-2 text-[#6c63ff] text-xs"></i> Brand Identity</a></li>
            <li><a href="#" class="text-gray-400 hover:text-[#6c63ff] transition-all duration-300 flex items-center"><i class="fas fa-chevron-right mr-2 text-[#6c63ff] text-xs"></i> Digital Marketing</a></li>
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