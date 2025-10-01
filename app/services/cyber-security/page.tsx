"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  ArrowRight,
  CheckCircle,
  Lock,
  Eye,
  AlertTriangle,
  FileSearch,
  Network,
  UserCheck,
  Award,
  Target,
  Zap,
  Star,
} from "lucide-react"
import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/Landing_page/Footer"

export default function CyberSecurityPage() {
  const services = [
    {
      name: "Security Audits & Assessments",
      description: "Comprehensive security evaluations to identify vulnerabilities",
      features: ["Vulnerability Scanning", "Risk Assessment", "Compliance Review", "Security Posture Analysis"],
      icon: <FileSearch className="w-10 h-10 text-[#3db1a2] hover:text-[#2e8f7f]" />,
    },
    {
      name: "Penetration Testing",
      description: "Ethical hacking to test your systems' security defenses",
      features: ["Network Penetration", "Web App Testing", "Social Engineering", "Wireless Security"],
      icon: <Target className="w-10 h-10 text-[#3db1a2] hover:text-[#2e8f7f]" />,
    },
    {
      name: "Security Implementation",
      description: "Deploy robust security measures and best practices",
      features: ["Firewall Configuration", "Encryption Setup", "Access Controls", "Security Monitoring"],
      icon: <Lock className="w-10 h-10 text-[#3db1a2] hover:text-[#2e8f7f]" />,
    },
    {
      name: "Incident Response",
      description: "24/7 security monitoring and incident response services",
      features: ["Threat Detection", "Incident Analysis", "Recovery Planning", "Forensic Investigation"],
      icon: <AlertTriangle className="w-10 h-10 text-[#3db1a2] hover:text-[#2e8f7f]" />,
    },
  ]

  const certifications = [
    { name: "CISSP", description: "Certified Information Systems Security Professional", level: "Expert" },
    { name: "CEH", description: "Certified Ethical Hacker", level: "Advanced" },
    { name: "CISM", description: "Certified Information Security Manager", level: "Expert" },
    { name: "GSEC", description: "GIAC Security Essentials", level: "Professional" },
    { name: "OSCP", description: "Offensive Security Certified Professional", level: "Advanced" },
    { name: "CISA", description: "Certified Information Systems Auditor", level: "Expert" },
  ]

  const process = [
    {
      step: "01",
      title: "Security Assessment & Risk Analysis",
      description:
        "We conduct a thorough evaluation of your current security posture, identify potential vulnerabilities, and assess risks to your business operations and data.",
      deliverables: ["Security Assessment Report", "Risk Matrix", "Vulnerability Inventory", "Compliance Gap Analysis"],
    },
    {
      step: "02",
      title: "Vulnerability Testing & Identification",
      description:
        "Our certified ethical hackers perform comprehensive penetration testing to identify security weaknesses before malicious actors can exploit them.",
      deliverables: [
        "Penetration Test Report",
        "Vulnerability Details",
        "Exploit Demonstrations",
        "Risk Prioritization",
      ],
    },
    {
      step: "03",
      title: "Security Implementation & Hardening",
      description:
        "We implement robust security controls, configure defensive systems, and harden your infrastructure to protect against identified threats.",
      deliverables: ["Security Controls", "System Hardening", "Policy Implementation", "Access Control Setup"],
    },
    {
      step: "04",
      title: "Ongoing Monitoring & Compliance",
      description:
        "Continuous security monitoring, regular assessments, and compliance management to ensure your security posture remains strong over time.",
      deliverables: ["Monitoring Setup", "Compliance Reports", "Regular Assessments", "Incident Response Plan"],
    },
  ]

  const features = [
    {
      icon: <Award className="w-6 h-6 text-[#3db1a2] hover:text-[#2e8f7f]" />,
      title: "Certified Experts",
      description: "Team with advanced security certifications",
    },
    {
      icon: <Eye className="w-6 h-6 text-[#3db1a2] hover:text-[#2e8f7f]" />,
      title: "24/7 Monitoring",
      description: "Round-the-clock security surveillance",
    },
    {
      icon: <Zap className="w-6 h-6 text-[#3db1a2] hover:text-[#2e8f7f]" />,
      title: "Rapid Response",
      description: "Quick incident response and remediation",
    },
    {
      icon: <Network className="w-6 h-6 text-[#3db1a2] hover:text-[#2e8f7f]" />,
      title: "Comprehensive Coverage",
      description: "End-to-end security solutions",
    },
    {
      icon: <UserCheck className="w-6 h-6 text-[#3db1a2] hover:text-[#2e8f7f]" />,
      title: "Compliance Ready",
      description: "Meet industry standards and regulations",
    },
    {
      icon: <Shield className="w-6 h-6 text-[#3db1a2] hover:text-[#2e8f7f]" />,
      title: "Proactive Defense",
      description: "Prevent threats before they impact you",
    },
  ]

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Fixed Navbar */}
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-white text-gray-900">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <Shield className="w-16 h-16 text-[#3db1a2] hover:text-[#2e8f7f]" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Cyber Security Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Protect your business with advanced cybersecurity solutions from our certified security experts
              </p>
              <a
                href="https://wa.me/923405542097?text=Hello%20I%20want%20to%20start%20a%20security%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#3db1a2] hover:bg-[#2e8f7f] text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-md transition-all duration-300"
              >
                Secure Your Business
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Team's Advanced Certifications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our cybersecurity experts hold industry-leading certifications, ensuring you receive the highest level of
                security expertise
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="bg-[#e6f4f2] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-[#3db1a2] hover:text-[#2e8f7f]" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{cert.name}</h3>
                    <p className="text-gray-600 mb-3">{cert.description}</p>
                    <Badge
                      variant={cert.level === "Expert" ? "default" : cert.level === "Advanced" ? "secondary" : "outline"}
                      className="bg-[#3db1a2] text-white hover:bg-[#2e8f7f]"
                    >
                      {cert.level}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Security Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive cybersecurity solutions to protect your business from evolving threats
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.name}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-[#3db1a2] hover:text-[#2e8f7f] mr-3" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Security Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A systematic approach to identifying, addressing, and preventing security threats
              </p>
            </div>

            <div className="space-y-12">
              {process.map((step, index) => (
                <div key={index} className="flex flex-col lg:flex-row items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-r from-[#3db1a2] to-[#2e8f7f] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 mb-6 text-lg">{step.description}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {step.deliverables.map((deliverable, deliverableIndex) => (
                        <div key={deliverableIndex} className="flex items-center">
                          <Star className="w-4 h-4 text-[#3db1a2] hover:text-[#2e8f7f] mr-2" />
                          <span className="text-gray-700">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Security Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Advanced expertise and comprehensive solutions to keep your business secure
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-[#e6f4f2] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-[#3db1a2] hover:text-[#2e8f7f]">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#3db1a2] to-[#2e8f7f] text-white">
          <div className="container mx-auto px-6 text-center">
            <a
              href="https://wa.me/923405542097"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="text-4xl font-bold mb-4">
                Ready to Secure Your Business?
              </h2>
            </a>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss your security needs and create a robust protection strategy for your business
            </p>
            <a
              href="https://wa.me/923405542097"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-white text-[#3db1a2] hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-md transition-all duration-300"
              >
                Get Security Assessment <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}