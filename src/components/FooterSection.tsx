import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  ArrowRight,
  MessageSquare,
  BookOpen,
  Users,
  Shield,
  Heart,
  ExternalLink
} from 'lucide-react';

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About JU', href: '#about' },
    { name: 'Admission Requirements', href: '#requirements' },
    { name: 'Department List', href: '#departments' },
    { name: 'Application Process', href: '#process' },
    { name: 'Important Dates', href: '#dates' },
    { name: 'Fee Structure', href: '#fees' }
  ];

  const services = [
    { name: 'AI Chat Assistant', href: '#chat', icon: MessageSquare },
    { name: 'Document Guidance', href: '#documents', icon: BookOpen },
    { name: 'Personal Consultation', href: '#consultation', icon: Users },
    { name: 'Preparation Planning', href: '#preparation', icon: BookOpen },
    { name: 'Timeline Management', href: '#timeline', icon: Clock },
    { name: 'Expert Support', href: '#support', icon: Users }
  ];

  const resources = [
    { name: 'Admission Guide 2025', href: '#guide' },
    { name: 'Sample Questions', href: '#questions' },
    { name: 'Success Stories', href: '#testimonials' },
    { name: 'FAQ Database', href: '#faq' },
    { name: 'Video Tutorials', href: '#tutorials' },
    { name: 'Download Center', href: '#downloads' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-700' },
    { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-red-600' }
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  JU Admission AI
                </h2>
                <p className="text-blue-100 text-lg font-medium mb-4">
                  Your Intelligent Path to Jahangirnagar University
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Empowering students with AI-driven guidance for successful admission to 
                  Jahangirnagar University. Get personalized support, instant answers, 
                  and expert guidance 24/7.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300">+880 1XXX-XXXXXX</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300">info@juadmissionai.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300">Dhaka, Bangladesh</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300">24/7 AI Support Available</span>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-white mb-4">Follow Us</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 transition-all duration-300 hover:bg-gray-700 transform hover:scale-110 ${social.color}`}
                        aria-label={social.name}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bold text-white mb-6">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <li key={service.name}>
                      <a
                        href={service.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                      >
                        <Icon className="w-4 h-4 mr-2 text-blue-400" />
                        {service.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-bold text-white mb-6">Resources</h3>
              <ul className="space-y-3">
                {resources.map((resource) => (
                  <li key={resource.name}>
                    <a
                      href={resource.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <ExternalLink className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {resource.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Newsletter Signup */}
              <div className="mt-8 p-4 bg-gray-800 rounded-xl">
                <h4 className="font-semibold text-white mb-3">Stay Updated</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Get admission updates and tips directly to your inbox.
                </p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="py-8 border-t border-gray-800">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your JU Journey?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of successful students who got admission to JU with our AI-powered guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                <MessageSquare className="w-5 h-5 mr-2" />
                Start Free Consultation
              </button>
              <button className="inline-flex items-center border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors">
                <BookOpen className="w-5 h-5 mr-2" />
                Download Admission Guide
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="flex items-center space-x-2">
              <p className="text-gray-400 text-sm">
                © {currentYear} JU Admission AI. All rights reserved.
              </p>
              <Heart className="w-4 h-4 text-red-500" />
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6">
              <a href="#privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>

            {/* Badges */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-gray-800 px-3 py-1 rounded-lg">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-xs text-gray-300">SSL Secured</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-800 px-3 py-1 rounded-lg">
                <Clock className="w-4 h-4 text-blue-400" />
                <span className="text-xs text-gray-300">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Research Attribution */}
        <div className="py-4 border-t border-gray-800">
          <div className="text-center">
            <p className="text-gray-500 text-xs">
              This project is part of MSc Research in Computer Science & Engineering, 2025
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Developed for academic research purposes - Jahangirnagar University
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;