"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ExternalLink,
  Download,
  Server,
  Bot,
  Cloud,
  TestTube,
  Briefcase,
  GraduationCap,
  Award,
  ArrowRight,
  Code,
  Zap,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Component() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const skills = {
    "DevOps & Cloud": [
      "AWS",
      "Azure",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "GitLab CI/CD",
      "Terraform",
      "Ansible",
    ],
    "QA & Automation": [
      "Selenium",
      "Cypress",
      "Jest",
      "Playwright",
      "TestNG",
      "Postman",
      "API Testing",
      "Performance Testing",
    ],
    "AI & Machine Learning": [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "OpenAI API",
      "LangChain",
      "MLOps",
      "Data Analysis",
    ],
    Programming: ["Python", "JavaScript", "TypeScript", "Java", "Go", "Bash", "PowerShell", "SQL", "NoSQL"],
  }

  const experience = [
    {
      title: "Senior DevOps Engineer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description:
        "Led cloud infrastructure automation and CI/CD pipeline optimization, reducing deployment time by 60%.",
      achievements: [
        "Implemented Kubernetes-based microservices architecture",
        "Automated testing pipelines with 95% code coverage",
        "Managed AWS infrastructure serving 1M+ users",
      ],
    },
    {
      title: "QA Automation Lead",
      company: "Digital Innovations Ltd.",
      period: "2020 - 2022",
      description:
        "Spearheaded test automation initiatives and quality assurance processes across multiple product teams.",
      achievements: [
        "Built comprehensive test automation framework",
        "Reduced manual testing effort by 80%",
        "Mentored team of 5 QA engineers",
      ],
    },
    {
      title: "Software Engineer",
      company: "StartupTech",
      period: "2018 - 2020",
      description: "Developed scalable web applications and implemented DevOps practices from ground up.",
      achievements: [
        "Built CI/CD pipelines from scratch",
        "Implemented monitoring and alerting systems",
        "Optimized application performance by 40%",
      ],
    },
  ]

  const projects = [
    {
      title: "AI-Powered Test Generation",
      description: "Developed an AI system that automatically generates test cases from user stories and requirements.",
      tech: ["Python", "OpenAI API", "Selenium", "Docker"],
      link: "#",
      color: "from-orange-400 to-red-500",
    },
    {
      title: "Cloud Infrastructure Automation",
      description: "Built a comprehensive Infrastructure as Code solution for multi-cloud deployments.",
      tech: ["Terraform", "AWS", "Azure", "Kubernetes"],
      link: "#",
      color: "from-sky-400 to-blue-500",
    },
    {
      title: "Performance Monitoring Dashboard",
      description: "Created a real-time monitoring solution for microservices with predictive analytics.",
      tech: ["Grafana", "Prometheus", "Python", "Machine Learning"],
      link: "#",
      color: "from-red-400 to-orange-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl bg-gradient-to-r from-sky-400 to-white bg-clip-text text-transparent">
            VJ
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#about"
              className="text-sm font-medium hover:text-sky-400 transition-all duration-300 hover:scale-105"
            >
              About
            </Link>
            <Link
              href="#experience"
              className="text-sm font-medium hover:text-sky-400 transition-all duration-300 hover:scale-105"
            >
              Experience
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium hover:text-sky-400 transition-all duration-300 hover:scale-105"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium hover:text-sky-400 transition-all duration-300 hover:scale-105"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-sky-400 transition-all duration-300 hover:scale-105"
            >
              Contact
            </Link>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-none hover:from-orange-600 hover:to-red-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Download className="w-4 h-4 mr-2" />
            GET IN TOUCH
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-orange-500/20 animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div className="container max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="space-y-4">
              <p className="text-sky-400 font-medium tracking-wider uppercase text-sm animate-fade-in">
                HI, I'M VIKAS, I DEVELOP
              </p>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white to-sky-400 bg-clip-text text-transparent">
                  The Perfect
                </span>
                <br />
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              <p className="text-sky-200 text-lg tracking-wide uppercase font-medium">FOR YOUR BUSINESS</p>
            </div>
            <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
              Experienced DevOps Engineer & QA Automation Expert specializing in cloud technologies, AI integration, and
              scalable infrastructure solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white border-none transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
                <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Let's Connect
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-slate-900 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
                <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                View Projects
              </Button>
            </div>
          </div>
          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div
              className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <div className="relative">
                {/* Dynamic highlight effect based on scroll */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-sky-400 via-orange-500 to-red-500 rounded-full blur-3xl opacity-30 animate-pulse transition-all duration-500"
                  style={{
                    opacity: Math.min(0.6, 0.2 + scrollY * 0.001),
                    transform: `scale(${1 + scrollY * 0.0005})`,
                  }}
                />

                {/* Rotating border effect on scroll */}
                <div
                  className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-sky-400 via-orange-500 to-red-500 p-1 transition-all duration-300"
                  style={{
                    transform: `rotate(${scrollY * 0.1}deg)`,
                    opacity: Math.min(1, 0.5 + scrollY * 0.002),
                  }}
                >
                  <div className="w-full h-full rounded-full bg-slate-900" />
                </div>

                <Image
                  src="/images/vikas-profile.jpeg"
                  alt="Vikas Jha - DevOps Engineer"
                  width={400}
                  height={400}
                  className="rounded-full mx-auto relative z-10 hover:scale-105 transition-transform duration-500 border-4 border-white/20"
                  style={{
                    filter: `brightness(${1 + scrollY * 0.0005}) contrast(${1 + scrollY * 0.0003})`,
                    transform: `scale(${1 + Math.sin(scrollY * 0.01) * 0.02})`,
                  }}
                />

                {/* Animated floating elements that respond to scroll */}
                <div
                  className="absolute top-10 right-10 bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-full transition-all duration-300"
                  style={{
                    transform: `translateY(${Math.sin(scrollY * 0.01) * 10}px) rotate(${scrollY * 0.05}deg)`,
                    opacity: Math.min(1, 0.7 + scrollY * 0.001),
                  }}
                >
                  <Code className="w-6 h-6 text-white" />
                </div>

                <div
                  className="absolute bottom-10 left-10 bg-gradient-to-r from-sky-500 to-blue-600 p-3 rounded-full transition-all duration-300"
                  style={{
                    transform: `translateY(${Math.cos(scrollY * 0.01) * 10}px) rotate(${-scrollY * 0.05}deg)`,
                    opacity: Math.min(1, 0.7 + scrollY * 0.001),
                  }}
                >
                  <Zap className="w-6 h-6 text-white" />
                </div>

                {/* Additional scroll-triggered particles */}
                <div
                  className="absolute top-1/2 left-0 w-2 h-2 bg-sky-400 rounded-full animate-pulse"
                  style={{
                    transform: `translateX(${scrollY * 0.1}px) translateY(${Math.sin(scrollY * 0.02) * 20}px)`,
                    opacity: scrollY > 100 ? 1 : 0,
                  }}
                />
                <div
                  className="absolute top-1/4 right-0 w-3 h-3 bg-orange-500 rounded-full animate-pulse"
                  style={{
                    transform: `translateX(${-scrollY * 0.08}px) translateY(${Math.cos(scrollY * 0.015) * 15}px)`,
                    opacity: scrollY > 150 ? 1 : 0,
                  }}
                />
                <div
                  className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-red-400 rounded-full animate-pulse"
                  style={{
                    transform: `translateX(${scrollY * 0.12}px) translateY(${Math.sin(scrollY * 0.025) * 25}px)`,
                    opacity: scrollY > 200 ? 1 : 0,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-sky-900/50 backdrop-blur-sm">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-sky-400 to-white bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                With over 6 years of experience in software engineering, I specialize in creating robust, scalable
                solutions that bridge the gap between development and operations. My expertise spans across DevOps
                practices, quality assurance automation, AI integration, and cloud technologies.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm passionate about leveraging cutting-edge technologies to solve complex problems and drive
                innovation. My approach combines technical excellence with strategic thinking to deliver solutions that
                not only meet current needs but scale for future growth.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-none px-4 py-2 hover:scale-105 transition-transform">
                  <Award className="w-4 h-4 mr-2" />
                  AWS Certified
                </Badge>
                <Badge className="bg-gradient-to-r from-sky-500 to-blue-600 text-white border-none px-4 py-2 hover:scale-105 transition-transform">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  B.Tech Computer Science
                </Badge>
                <Badge className="bg-gradient-to-r from-orange-500 to-red-600 text-white border-none px-4 py-2 hover:scale-105 transition-transform">
                  <Briefcase className="w-4 h-4 mr-2" />
                  6+ Years Experience
                </Badge>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="relative mb-8 lg:mb-0">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-sky-400/20 to-orange-500/20 rounded-2xl blur-2xl transition-all duration-500"
                  style={{
                    opacity: Math.min(0.4, 0.1 + scrollY * 0.0008),
                  }}
                />
                <Image
                  src="/images/vikas-profile.jpeg"
                  alt="Vikas Jha"
                  width={300}
                  height={300}
                  className="rounded-2xl mx-auto border-4 border-sky-400/30 relative z-10 hover:scale-105 transition-all duration-500 hover:border-orange-500/50"
                  style={{
                    filter: `saturate(${1 + scrollY * 0.0003})`,
                  }}
                />
              </div>
              {[
                {
                  icon: Server,
                  title: "DevOps",
                  desc: "Infrastructure & Automation",
                  color: "from-sky-500 to-blue-600",
                },
                {
                  icon: TestTube,
                  title: "QA Automation",
                  desc: "Testing & Quality",
                  color: "from-orange-500 to-red-600",
                },
                { icon: Bot, title: "AI Integration", desc: "Machine Learning", color: "from-purple-500 to-pink-600" },
                {
                  icon: Cloud,
                  title: "Cloud Technologies",
                  desc: "AWS, Azure, GCP",
                  color: "from-green-500 to-emerald-600",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-md border-white/20 text-center p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                >
                  <div
                    className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center group-hover:animate-pulse`}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card
                key={category}
                className="bg-white/10 backdrop-blur-md border-white/20 p-6 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-xl group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-xl text-white group-hover:text-sky-400 transition-colors">
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                      <Badge
                        key={skill}
                        className="bg-gradient-to-r from-sky-500/20 to-orange-500/20 text-white border border-sky-400/30 hover:from-sky-500 hover:to-orange-500 hover:text-white transition-all duration-300 hover:scale-110"
                        style={{ animationDelay: `${skillIndex * 50}ms` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-sky-900/50 backdrop-blur-sm">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-sky-400 to-white bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-md border-white/20 p-8 hover:bg-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl group"
              >
                <CardHeader className="p-0 mb-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-2xl mb-2 text-white group-hover:text-sky-400 transition-colors">
                        {job.title}
                      </CardTitle>
                      <CardDescription className="text-lg font-medium bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                        {job.company}
                      </CardDescription>
                    </div>
                    <Badge className="bg-gradient-to-r from-sky-500 to-blue-600 text-white border-none w-fit mt-2 md:mt-0 px-4 py-2">
                      {job.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-gray-300 mb-6 text-lg">{job.description}</p>
                  <ul className="space-y-3">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start group/item">
                        <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mt-3 mr-4 flex-shrink-0 group-hover/item:animate-pulse" />
                        <span className="text-gray-300 group-hover/item:text-white transition-colors">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-md border-white/20 p-6 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl group overflow-hidden relative"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                <CardHeader className="p-0 mb-4 relative z-10">
                  <CardTitle className="text-xl mb-3 text-white group-hover:text-sky-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 group-hover:text-white transition-colors">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 relative z-10">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        className="bg-gradient-to-r from-sky-500/20 to-orange-500/20 text-white border border-sky-400/30 text-xs hover:from-sky-500 hover:to-orange-500 transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white border-none transition-all duration-300 hover:scale-105 group/btn">
                    <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                    View Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-sky-900/50 backdrop-blur-sm">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-sky-400 to-white bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm always interested in discussing new opportunities and innovative projects. Let's connect and explore how
            we can work together to build something amazing.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Mail, title: "Email", info: "vikas.jha@email.com", color: "from-sky-500 to-blue-600" },
              { icon: Phone, title: "Phone", info: "+91 98765 43210", color: "from-orange-500 to-red-600" },
              { icon: MapPin, title: "Location", info: "Bangalore, India", color: "from-green-500 to-emerald-600" },
            ].map((contact, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-md border-white/20 p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${contact.color} flex items-center justify-center group-hover:animate-pulse`}
                >
                  <contact.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-3 text-white text-lg">{contact.title}</h3>
                <p className="text-gray-300 group-hover:text-white transition-colors">{contact.info}</p>
              </Card>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <Button
              size="lg"
              className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white border-none transition-all duration-300 hover:scale-105 hover:shadow-xl group"
            >
              <Linkedin className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              LinkedIn
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white border-none transition-all duration-300 hover:scale-105 hover:shadow-xl group"
            >
              <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              GitHub
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white border-none transition-all duration-300 hover:scale-105 hover:shadow-xl group"
            >
              <Mail className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Send Message
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/20">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Vikas Jha. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
