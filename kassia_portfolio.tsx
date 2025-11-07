import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Menu, X, Briefcase, GraduationCap, Award, Code, Folder, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm shadow-lg z-50 border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              KW
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors ${
                    activeSection === item
                      ? 'text-cyan-400'
                      : 'text-slate-300 hover:text-cyan-400'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-slate-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-4 py-4 space-y-3">
              {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left capitalize text-slate-300 hover:text-cyan-400 py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl shadow-cyan-400/20">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
                alt="Kassia Ware"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Kassia Ware
              </h1>
              <h2 className="text-2xl md:text-3xl text-cyan-400 mb-6">
                Technical Solutions Architect
              </h2>
              <p className="text-lg text-slate-300 mb-8 max-w-2xl">
                Extensive experience in enterprise MDM, IT automation, and infrastructure management. 
                Proven ability to optimize workflows, enhance security, and drive efficiency in large-scale IT environments.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href="tel:7814797400"
                  className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors"
                >
                  <Phone size={20} />
                  (781) 479-7400
                </a>
                <a
                  href="mailto:kassia.ware@gmail.com"
                  className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
                >
                  <Mail size={20} />
                  Email
                </a>
                <a
                  href="https://linkedin.com/in/kassiaware"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-3">
            <div className="w-12 h-1 bg-cyan-400"></div>
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-700/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Professional Background</h3>
              <p className="text-slate-300 leading-relaxed">
                Currently serving as a Technical Solutions Architect at IBM's Mobile@IBM division, 
                managing enterprise MDM solutions for over 150,000 devices. My expertise spans across 
                endpoint management, automation, and infrastructure optimization.
              </p>
            </div>
            <div className="bg-slate-700/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Expertise</h3>
              <p className="text-slate-300 leading-relaxed">
                Specialized in developing automated testing procedures, technical documentation, 
                and cross-platform solutions for iOS and Android. Proven track record in improving 
                IT processes and driving strategic initiatives across healthcare and tech sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-3">
            <div className="w-12 h-1 bg-cyan-400"></div>
            Experience
          </h2>
          
          <div className="space-y-8">
            {/* IBM */}
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-400/50 transition-colors">
              <div className="flex items-start gap-4">
                <Briefcase className="text-cyan-400 mt-1 flex-shrink-0" size={24} />
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h3 className="text-xl font-bold text-white">Technical Solutions Architect</h3>
                    <span className="text-slate-400 text-sm">12/2021 – Present</span>
                  </div>
                  <p className="text-cyan-400 mb-3">IBM, Cambridge, MA</p>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex gap-2"><span className="text-cyan-400">•</span> Developed and automated testing procedures for MaaS360</li>
                    <li className="flex gap-2"><span className="text-cyan-400">•</span> Manage enterprise MDM solutions for 150,000+ devices</li>
                    <li className="flex gap-2"><span className="text-cyan-400">•</span> Author technical blogs and documentation for Android and iOS</li>
                    <li className="flex gap-2"><span className="text-cyan-400">•</span> Serve as QA focal for IBM internal applications</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* KAYAK */}
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-400/50 transition-colors">
              <div className="flex items-start gap-4">
                <Briefcase className="text-cyan-400 mt-1 flex-shrink-0" size={24} />
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h3 className="text-xl font-bold text-white">IT Engineer</h3>
                    <span className="text-slate-400 text-sm">12/2019 – 12/2021</span>
                  </div>
                  <p className="text-cyan-400 mb-3">KAYAK, Cambridge, MA</p>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex gap-2"><span className="text-cyan-400">•</span> Primary SME for Jamf, managing macOS environments</li>
                    <li className="flex gap-2"><span className="text-cyan-400">•</span> Google Workspace administration</li>
                    <li className="flex gap-2"><span className="text-cyan-400">•</span> Led employee onboarding/offboarding processes</li>
                    <li className="flex gap-2"><span className="text-cyan-400">•</span> Utilized Git for version control and automation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* The Broad Institute */}
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-400/50 transition-colors">
              <div className="flex items-start gap-4">
                <Briefcase className="text-cyan-400 mt-1 flex-shrink-0" size={24} />
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h3 className="text-xl font-bold text-white">Desktop Support Specialist</h3>
                    <span className="text-slate-400 text-sm">2019</span>
                  </div>
                  <p className="text-cyan-400 mb-3">The Broad Institute of MIT and Harvard, Cambridge, MA</p>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex gap-2"><span className="text-cyan-400">•</span> Hardware/software support at BITSTOP walk-up kiosks</li>
                    <li className="flex gap-2"><span className="text-cyan-400">•</span> Managed IT tickets via ServiceNow</li>
                    <li className="flex gap-2"><span className="text-cyan-400">•</span> Imaged macOS devices using Jamf</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Hartford Healthcare */}
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-400/50 transition-colors">
              <div className="flex items-start gap-4">
                <Briefcase className="text-cyan-400 mt-1 flex-shrink-0" size={24} />
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h3 className="text-xl font-bold text-white">IT Field Support Specialist</h3>
                    <span className="text-slate-400 text-sm">09/2012 – 08/2017</span>
                  </div>
                  <p className="text-cyan-400 mb-3">Hartford Healthcare, Hartford, CT</p>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex gap-2"><span className="text-cyan-400">•</span> High-volume phone support for 100+ healthcare applications</li>
                    <li className="flex gap-2"><span className="text-cyan-400">•</span> Deskside support for hospital units</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-3">
            <div className="w-12 h-1 bg-cyan-400"></div>
            Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Ejector App */}
            <div className="bg-gradient-to-br from-slate-700/80 to-slate-800/80 p-8 rounded-lg border border-slate-600 hover:border-cyan-400/50 transition-all hover:shadow-xl hover:shadow-cyan-400/10">
              <div className="flex items-start justify-between mb-4">
                <Folder className="text-cyan-400" size={40} />
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">Ejector</h3>
              
              <p className="text-slate-300 mb-4 leading-relaxed">
                A macOS application written in Swift that automatically ejects external drives 
                when unplugging from power, preventing data corruption and ensuring safe drive removal.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-slate-900/50 text-cyan-400 rounded text-sm border border-slate-600">
                  Swift
                </span>
                <span className="px-3 py-1 bg-slate-900/50 text-cyan-400 rounded text-sm border border-slate-600">
                  macOS
                </span>
                <span className="px-3 py-1 bg-slate-900/50 text-cyan-400 rounded text-sm border border-slate-600">
                  Automation
                </span>
              </div>
              
              <div className="flex gap-4">
                <a
                  href="#"
                  className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <ExternalLink size={18} />
                  View Project
                </a>
              </div>
            </div>

            {/* Portfolio Website */}
            <div className="bg-gradient-to-br from-slate-700/80 to-slate-800/80 p-8 rounded-lg border border-slate-600 hover:border-cyan-400/50 transition-all hover:shadow-xl hover:shadow-cyan-400/10">
              <div className="flex items-start justify-between mb-4">
                <Folder className="text-cyan-400" size={40} />
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">Personal Portfolio Website</h3>
              
              <p className="text-slate-300 mb-4 leading-relaxed">
                A modern, responsive portfolio website built with Ruby on Rails, showcasing 
                professional experience, technical skills, and projects with a clean, contemporary design.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-slate-900/50 text-cyan-400 rounded text-sm border border-slate-600">
                  Ruby on Rails
                </span>
                <span className="px-3 py-1 bg-slate-900/50 text-cyan-400 rounded text-sm border border-slate-600">
                  React
                </span>
                <span className="px-3 py-1 bg-slate-900/50 text-cyan-400 rounded text-sm border border-slate-600">
                  Responsive Design
                </span>
              </div>
              
              <div className="flex gap-4">
                <a
                  href="#home"
                  className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <ExternalLink size={18} />
                  You're Here!
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-3">
            <div className="w-12 h-1 bg-cyan-400"></div>
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-700/50 p-6 rounded-lg">
              <Code className="text-cyan-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-white mb-3">MDM & Endpoint Management</h3>
              <p className="text-slate-300">Jamf, MaaS360, Ivanti, SCCM</p>
            </div>
            
            <div className="bg-slate-700/50 p-6 rounded-lg">
              <Code className="text-cyan-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-white mb-3">IT Support & Automation</h3>
              <p className="text-slate-300">ServiceNow, Jira, Git, ITSM, PowerShell</p>
            </div>
            
            <div className="bg-slate-700/50 p-6 rounded-lg">
              <Code className="text-cyan-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-white mb-3">Operating Systems</h3>
              <p className="text-slate-300">macOS, Windows, iOS, Android</p>
            </div>
            
            <div className="bg-slate-700/50 p-6 rounded-lg">
              <Code className="text-cyan-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-white mb-3">Collaboration & Documentation</h3>
              <p className="text-slate-300">Confluence, Technical Writing, Training & Onboarding</p>
            </div>
            
            <div className="bg-slate-700/50 p-6 rounded-lg">
              <Code className="text-cyan-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-white mb-3">Enterprise IT Tools</h3>
              <p className="text-slate-300">Microsoft Teams, Cisco Webex, Office 365, Google Workspace</p>
            </div>
            
            <div className="bg-slate-700/50 p-6 rounded-lg">
              <GraduationCap className="text-cyan-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-white mb-3">Education & Certifications</h3>
              <p className="text-slate-300">B.A., Simmons College<br/>Jamf Certified Technician</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Let's Connect</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities and technical challenges.
          </p>
          
          <div className="flex flex-wrap gap-6 justify-center">
            <a
              href="tel:7814797400"
              className="flex items-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors text-lg"
            >
              <Phone size={24} />
              (781) 479-7400
            </a>
            <a
              href="mailto:kassia.ware@gmail.com"
              className="flex items-center gap-2 px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors text-lg"
            >
              <Mail size={24} />
              kassia.ware@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/kassiaware"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-lg"
            >
              <Linkedin size={24} />
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>© 2025 Kassia Ware. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}