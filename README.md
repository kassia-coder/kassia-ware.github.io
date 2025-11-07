<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kassia Ware - Technical Solutions Architect</title>
    <meta name="description" content="Technical Solutions Architect with extensive experience in enterprise MDM, IT automation, and infrastructure management">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background: linear-gradient(to bottom right, #0f172a, #1e293b, #0f172a);
            color: #cbd5e1;
            line-height: 1.6;
        }

        html {
            scroll-behavior: smooth;
        }

        /* Navigation */
        nav {
            position: fixed;
            top: 0;
            width: 100%;
            background: rgba(15, 23, 42, 0.95);
            backdrop-filter: blur(10px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
            z-index: 50;
            border-bottom: 1px solid #334155;
        }

        .nav-container {
            max-width: 1152px;
            margin: 0 auto;
            padding: 0 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 64px;
        }

        .logo {
            font-size: 1.5rem;
            font-weight: bold;
            background: linear-gradient(to right, #60a5fa, #22d3ee);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .nav-links {
            display: flex;
            gap: 2rem;
            list-style: none;
        }

        .nav-links a {
            color: #cbd5e1;
            text-decoration: none;
            text-transform: capitalize;
            transition: color 0.3s;
        }

        .nav-links a:hover,
        .nav-links a.active {
            color: #22d3ee;
        }

        .mobile-menu-btn {
            display: none;
            background: none;
            border: none;
            color: #cbd5e1;
            font-size: 1.5rem;
            cursor: pointer;
        }

        .mobile-menu {
            display: none;
            background: #1e293b;
            border-top: 1px solid #334155;
            padding: 1rem;
        }

        .mobile-menu.active {
            display: block;
        }

        .mobile-menu a {
            display: block;
            color: #cbd5e1;
            text-decoration: none;
            padding: 0.5rem 0;
            text-transform: capitalize;
        }

        .mobile-menu a:hover {
            color: #22d3ee;
        }

        /* Sections */
        section {
            padding: 5rem 1rem;
        }

        .container {
            max-width: 1152px;
            margin: 0 auto;
        }

        .section-header {
            font-size: 2.5rem;
            font-weight: bold;
            color: white;
            margin-bottom: 3rem;
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }

        .section-header::before {
            content: '';
            width: 48px;
            height: 4px;
            background: #22d3ee;
        }

        /* Hero Section */
        #home {
            padding-top: 8rem;
            padding-bottom: 5rem;
        }

        .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 3rem;
        }

        .profile-image {
            width: 256px;
            height: 256px;
            border-radius: 50%;
            overflow: hidden;
            border: 4px solid #22d3ee;
            box-shadow: 0 0 60px rgba(34, 211, 238, 0.2);
        }

        .profile-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .hero-text {
            text-align: center;
            flex: 1;
        }

        .hero-text h1 {
            font-size: 3rem;
            font-weight: bold;
            color: white;
            margin-bottom: 1rem;
        }

        .hero-text h2 {
            font-size: 1.875rem;
            color: #22d3ee;
            margin-bottom: 1.5rem;
        }

        .hero-text p {
            font-size: 1.125rem;
            color: #cbd5e1;
            margin-bottom: 2rem;
            max-width: 42rem;
        }

        .contact-buttons {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            justify-content: center;
        }

        .btn {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s;
        }

        .btn-primary {
            background: #06b6d4;
            color: white;
        }

        .btn-primary:hover {
            background: #0891b2;
        }

        .btn-secondary {
            background: #334155;
            color: white;
        }

        .btn-secondary:hover {
            background: #475569;
        }

        .btn-blue {
            background: #2563eb;
            color: white;
        }

        .btn-blue:hover {
            background: #1d4ed8;
        }

        /* About Section */
        .about-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .about-card {
            background: rgba(51, 65, 85, 0.5);
            padding: 1.5rem;
            border-radius: 0.5rem;
        }

        .about-card h3 {
            font-size: 1.25rem;
            font-weight: 600;
            color: #22d3ee;
            margin-bottom: 1rem;
        }

        .about-card p {
            color: #cbd5e1;
            line-height: 1.75;
        }

        .bg-alt {
            background: rgba(30, 41, 59, 0.5);
        }

        /* Experience Section */
        .experience-list {
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }

        .experience-card {
            background: rgba(30, 41, 59, 0.5);
            padding: 1.5rem;
            border-radius: 0.5rem;
            border: 1px solid #334155;
            transition: border-color 0.3s;
        }

        .experience-card:hover {
            border-color: rgba(34, 211, 238, 0.5);
        }

        .experience-header {
            display: flex;
            flex-direction: column;
            margin-bottom: 0.5rem;
        }

        .experience-header h3 {
            font-size: 1.25rem;
            font-weight: bold;
            color: white;
        }

        .experience-date {
            color: #94a3b8;
            font-size: 0.875rem;
            margin-top: 0.25rem;
        }

        .experience-company {
            color: #22d3ee;
            margin-bottom: 0.75rem;
        }

        .experience-card ul {
            list-style: none;
            padding: 0;
        }

        .experience-card li {
            display: flex;
            gap: 0.5rem;
            color: #cbd5e1;
            margin-bottom: 0.5rem;
        }

        .experience-card li::before {
            content: '•';
            color: #22d3ee;
        }

        /* Projects Section */
        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .project-card {
            background: linear-gradient(to bottom right, rgba(51, 65, 85, 0.8), rgba(30, 41, 59, 0.8));
            padding: 2rem;
            border-radius: 0.5rem;
            border: 1px solid #475569;
            transition: all 0.3s;
        }

        .project-card:hover {
            border-color: rgba(34, 211, 238, 0.5);
            box-shadow: 0 20px 25px -5px rgba(34, 211, 238, 0.1);
        }

        .project-icon {
            color: #22d3ee;
            margin-bottom: 1rem;
        }

        .project-card h3 {
            font-size: 1.5rem;
            font-weight: bold;
            color: white;
            margin-bottom: 0.75rem;
        }

        .project-card p {
            color: #cbd5e1;
            line-height: 1.75;
            margin-bottom: 1rem;
        }

        .tech-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-bottom: 1.5rem;
        }

        .tech-tag {
            padding: 0.25rem 0.75rem;
            background: rgba(15, 23, 42, 0.5);
            color: #22d3ee;
            border-radius: 0.25rem;
            font-size: 0.875rem;
            border: 1px solid #475569;
        }

        .project-link {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            color: #22d3ee;
            text-decoration: none;
            transition: color 0.3s;
        }

        .project-link:hover {
            color: #67e8f9;
        }

        /* Skills Section */
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
        }

        .skill-card {
            background: rgba(51, 65, 85, 0.5);
            padding: 1.5rem;
            border-radius: 0.5rem;
        }

        .skill-icon {
            color: #22d3ee;
            margin-bottom: 1rem;
        }

        .skill-card h3 {
            font-size: 1.25rem;
            font-weight: 600;
            color: white;
            margin-bottom: 0.75rem;
        }

        .skill-card p {
            color: #cbd5e1;
        }

        /* Contact Section */
        #contact {
            text-align: center;
        }

        #contact h2 {
            font-size: 2.5rem;
            font-weight: bold;
            color: white;
            margin-bottom: 2rem;
        }

        #contact p {
            font-size: 1.25rem;
            color: #cbd5e1;
            margin-bottom: 3rem;
            max-width: 42rem;
            margin-left: auto;
            margin-right: auto;
        }

        .contact-buttons-large {
            display: flex;
            flex-wrap: wrap;
            gap: 1.5rem;
            justify-content: center;
        }

        .btn-large {
            padding: 1rem 2rem;
            font-size: 1.125rem;
        }

        /* Footer */
        footer {
            background: #0f172a;
            border-top: 1px solid #334155;
            padding: 2rem 1rem;
            text-align: center;
            color: #94a3b8;
        }

        /* Icons (using Unicode characters) */
        .icon {
            display: inline-block;
            width: 20px;
            height: 20px;
        }

        .icon-large {
            width: 32px;
            height: 32px;
        }

        /* Responsive */
        @media (min-width: 768px) {
            .hero-content {
                flex-direction: row;
            }

            .hero-text {
                text-align: left;
            }

            .contact-buttons {
                justify-content: flex-start;
            }

            .experience-header {
                flex-direction: row;
                justify-content: space-between;
                align-items: start;
            }

            .experience-date {
                margin-top: 0;
            }
        }

        @media (max-width: 767px) {
            .nav-links {
                display: none;
            }

            .mobile-menu-btn {
                display: block;
            }

            .hero-text h1 {
                font-size: 2rem;
            }

            .hero-text h2 {
                font-size: 1.5rem;
            }

            .section-header {
                font-size: 2rem;
            }
        }
    </style>
</head>
<body>
    <!-- Navigation -->
    <nav>
        <div class="nav-container">
            <div class="logo">KW</div>
            
            <ul class="nav-links">
                <li><a href="#home" class="active">home</a></li>
                <li><a href="#about">about</a></li>
                <li><a href="#experience">experience</a></li>
                <li><a href="#projects">projects</a></li>
                <li><a href="#skills">skills</a></li>
                <li><a href="#contact">contact</a></li>
            </ul>

            <button class="mobile-menu-btn" onclick="toggleMobileMenu()">☰</button>
        </div>

        <div class="mobile-menu" id="mobileMenu">
            <a href="#home" onclick="toggleMobileMenu()">home</a>
            <a href="#about" onclick="toggleMobileMenu()">about</a>
            <a href="#experience" onclick="toggleMobileMenu()">experience</a>
            <a href="#projects" onclick="toggleMobileMenu()">projects</a>
            <a href="#skills" onclick="toggleMobileMenu()">skills</a>
            <a href="#contact" onclick="toggleMobileMenu()">contact</a>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home">
        <div class="container">
            <div class="hero-content">
                <div class="profile-image">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" alt="Kassia Ware">
                </div>
                
                <div class="hero-text">
                    <h1>Kassia Ware</h1>
                    <h2>Technical Solutions Architect</h2>
                    <p>
                        Extensive experience in enterprise MDM, IT automation, and infrastructure management. 
                        Proven ability to optimize workflows, enhance security, and drive efficiency in large-scale IT environments.
                    </p>
                    
                    <div class="contact-buttons">
                        <a href="tel:7814797400" class="btn btn-primary">
                            📞 (781) 479-7400
                        </a>
                        <a href="mailto:kassia.ware@gmail.com" class="btn btn-secondary">
                            ✉️ Email
                        </a>
                        <a href="https://linkedin.com/in/kassiaware" target="_blank" class="btn btn-blue">
                            💼 LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="bg-alt">
        <div class="container">
            <h2 class="section-header">About Me</h2>
            <div class="about-grid">
                <div class="about-card">
                    <h3>Professional Background</h3>
                    <p>
                        Currently serving as a Technical Solutions Architect at IBM's Mobile@IBM division, 
                        managing enterprise MDM solutions for over 150,000 devices. My expertise spans across 
                        endpoint management, automation, and infrastructure optimization.
                    </p>
                </div>
                <div class="about-card">
                    <h3>Expertise</h3>
                    <p>
                        Specialized in developing automated testing procedures, technical documentation, 
                        and cross-platform solutions for iOS and Android. Proven track record in improving 
                        IT processes and driving strategic initiatives across healthcare and tech sectors.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Experience Section -->
    <section id="experience">
        <div class="container">
            <h2 class="section-header">Experience</h2>
            
            <div class="experience-list">
                <!-- IBM -->
                <div class="experience-card">
                    <div class="experience-header">
                        <h3>Technical Solutions Architect</h3>
                        <span class="experience-date">12/2021 – Present</span>
                    </div>
                    <p class="experience-company">IBM, Cambridge, MA</p>
                    <ul>
                        <li>Developed and automated testing procedures for MaaS360</li>
                        <li>Manage enterprise MDM solutions for 150,000+ devices</li>
                        <li>Author technical blogs and documentation for Android and iOS</li>
                        <li>Serve as QA focal for IBM internal applications</li>
                    </ul>
                </div>

                <!-- KAYAK -->
                <div class="experience-card">
                    <div class="experience-header">
                        <h3>IT Engineer</h3>
                        <span class="experience-date">12/2019 – 12/2021</span>
                    </div>
                    <p class="experience-company">KAYAK, Cambridge, MA</p>
                    <ul>
                        <li>Primary SME for Jamf, managing macOS environments</li>
                        <li>Google Workspace administration</li>
                        <li>Led employee onboarding/offboarding processes</li>
                        <li>Utilized Git for version control and automation</li>
                    </ul>
                </div>

                <!-- The Broad Institute -->
                <div class="experience-card">
                    <div class="experience-header">
                        <h3>Desktop Support Specialist</h3>
                        <span class="experience-date">2019</span>
                    </div>
                    <p class="experience-company">The Broad Institute of MIT and Harvard, Cambridge, MA</p>
                    <ul>
                        <li>Hardware/software support at BITSTOP walk-up kiosks</li>
                        <li>Managed IT tickets via ServiceNow</li>
                        <li>Imaged macOS devices using Jamf</li>
                    </ul>
                </div>

                <!-- Hartford Healthcare -->
                <div class="experience-card">
                    <div class="experience-header">
                        <h3>IT Field Support Specialist</h3>
                        <span class="experience-date">09/2012 – 08/2017</span>
                    </div>
                    <p class="experience-company">Hartford Healthcare, Hartford, CT</p>
                    <ul>
                        <li>High-volume phone support for 100+ healthcare applications</li>
                        <li>Deskside support for hospital units</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="bg-alt">
        <div class="container">
            <h2 class="section-header">Projects</h2>
            
            <div class="projects-grid">
                <!-- Ejector -->
                <div class="project-card">
                    <div class="project-icon">📁</div>
                    <h3>Ejector</h3>
                    <p>
                        A macOS application written in Swift that automatically ejects external drives 
                        when unplugging from power, preventing data corruption and ensuring safe drive removal.
                    </p>
                    <div class="tech-tags">
                        <span class="tech-tag">Swift</span>
                        <span class="tech-tag">macOS</span>
                        <span class="tech-tag">Automation</span>
                    </div>
                    <a href="#" class="project-link">
                        🔗 View Project
                    </a>
                </div>

                <!-- Portfolio Website -->
                <div class="project-card">
                    <div class="project-icon">📁</div>
                    <h3>Personal Portfolio Website</h3>
                    <p>
                        A modern, responsive portfolio website built with Ruby on Rails, showcasing 
                        professional experience, technical skills, and projects with a clean, contemporary design.
                    </p>
                    <div class="tech-tags">
                        <span class="tech-tag">Ruby on Rails</span>
                        <span class="tech-tag">HTML/CSS</span>
                        <span class="tech-tag">Responsive Design</span>
                    </div>
                    <a href="#home" class="project-link">
                        🔗 You're Here!
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Skills Section -->
    <section id="skills">
        <div class="container">
            <h2 class="section-header">Technical Skills</h2>
            
            <div class="skills-grid">
                <div class="skill-card">
                    <div class="skill-icon">💻</div>
                    <h3>MDM & Endpoint Management</h3>
                    <p>Jamf, MaaS360, Ivanti, SCCM</p>
                </div>
                
                <div class="skill-card">
                    <div class="skill-icon">⚙️</div>
                    <h3>IT Support & Automation</h3>
                    <p>ServiceNow, Jira, Git, ITSM, PowerShell</p>
                </div>
                
                <div class="skill-card">
                    <div class="skill-icon">🖥️</div>
                    <h3>Operating Systems</h3>
                    <p>macOS, Windows, iOS, Android</p>
                </div>
                
                <div class="skill-card">
                    <div class="skill-icon">📝</div>
                    <h3>Collaboration & Documentation</h3>
                    <p>Confluence, Technical Writing, Training & Onboarding</p>
                </div>
                
                <div class="skill-card">
                    <div class="skill-icon">🔧</div>
                    <h3>Enterprise IT Tools</h3>
                    <p>Microsoft Teams, Cisco Webex, Office 365, Google Workspace</p>
                </div>
                
                <div class="skill-card">
                    <div class="skill-icon">🎓</div>
                    <h3>Education & Certifications</h3>
                    <p>B.A., Simmons College<br>Jamf Certified Technician</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="bg-alt">
        <div class="container">
            <h2>Let's Connect</h2>
            <p>
                I'm always interested in discussing new opportunities and technical challenges.
            </p>
            
            <div class="contact-buttons-large">
                <a href="tel:7814797400" class="btn btn-primary btn-large">
                    📞 (781) 479-7400
                </a>
                <a href="mailto:kassia.ware@gmail.com" class="btn btn-secondary btn-large">
                    ✉️ kassia.ware@gmail.com
                </a>
                <a href="https://linkedin.com/in/kassiaware" target="_blank" class="btn btn-blue btn-large">
                    💼 LinkedIn Profile
                </a>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <p>© 2025 Kassia Ware. All rights reserved.</p>
        </div>
    </footer>

    <script>
        // Mobile menu toggle
        function toggleMobileMenu() {
            const menu = document.getElementById('mobileMenu');
            menu.classList.toggle('active');
        }

        // Active navigation link
        const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');
        const sections = document.querySelectorAll('section[id]');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= (sectionTop - 100)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    </script>
</body>
</html>
