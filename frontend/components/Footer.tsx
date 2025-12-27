import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        company: [
            { label: "About Us", href: "/about" },
            { label: "Our Team", href: "/about#team" },
            { label: "Careers", href: "/careers" },
            { label: "Contact", href: "/contact" },
        ],
        services: [
            { label: "Custom Development", href: "/services#development" },
            { label: "Cloud Solutions", href: "/services#cloud" },
            { label: "Cybersecurity", href: "/services#security" },
            { label: "AI & ML", href: "/services#ai" },
        ],
        resources: [
            { label: "Projects", href: "/projects" },
            { label: "Blog", href: "/blog" },
            { label: "Case Studies", href: "/projects#case-studies" },
            { label: "Testimonials", href: "/about#testimonials" },
        ],
    };

    return (
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">
                                    C
                                </span>
                            </div>
                            <span className="text-2xl font-bold">Cynaris</span>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Empowering businesses with innovative technology
                            solutions. We transform ideas into reality through
                            cutting-edge development and strategic digital
                            transformation.
                        </p>
                        {/* Social Links */}
                        <div className="flex space-x-4">
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-400 transition-colors duration-300"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-300"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Services
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Resources
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="border-t border-gray-800 pt-8 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex items-start space-x-3">
                            <Mail className="w-5 h-5 text-blue-400 mt-1" />
                            <div>
                                <p className="text-sm text-gray-400">
                                    Email Us
                                </p>
                                <a
                                    href="mailto:info@cynaris.com"
                                    className="text-white hover:text-blue-400 transition-colors"
                                >
                                    info@cynaris.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <Phone className="w-5 h-5 text-blue-400 mt-1" />
                            <div>
                                <p className="text-sm text-gray-400">
                                    Call Us
                                </p>
                                <a
                                    href="tel:+15551234567"
                                    className="text-white hover:text-blue-400 transition-colors"
                                >
                                    +1 (555) 123-4567
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                            <div>
                                <p className="text-sm text-gray-400">
                                    Visit Us
                                </p>
                                <p className="text-white">
                                    123 Tech Street, San Francisco, CA 94103
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        &copy; {currentYear} Cynaris. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link
                            href="/privacy"
                            className="text-gray-400 hover:text-white text-sm transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms"
                            className="text-gray-400 hover:text-white text-sm transition-colors"
                        >
                            Terms of Service
                        </Link>
                        <Link
                            href="/cookies"
                            className="text-gray-400 hover:text-white text-sm transition-colors"
                        >
                            Cookie Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
