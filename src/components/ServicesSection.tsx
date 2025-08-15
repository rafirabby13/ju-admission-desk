import { useState } from 'react';
import { 
  BookOpen, 
  Calendar, 
  FileText, 
  Users, 
  Brain, 
  Target,
  CheckCircle,
  ArrowRight,
  GraduationCap,
  ClipboardCheck,
  MessageSquare,
  Lightbulb
} from 'lucide-react';

const ServicesSection = () => {
  const [, setActiveService] = useState(0);

  const services = [
    {
      icon: Brain,
      title: "AI-Powered Admission Guidance",
      description: "Get personalized recommendations and step-by-step guidance through JU's admission process with our advanced AI system.",
      features: [
        "Personalized admission roadmap",
        "Department-specific requirements",
        "Real-time query resolution",
        "Multi-language support"
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: BookOpen,
      title: "Comprehensive Information Hub",
      description: "Access complete and up-to-date information about all JU departments, requirements, and procedures in one place.",
      features: [
        "All department details",
        "Updated admission requirements",
        "Fee structure information", 
        "Academic program overviews"
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      icon: Calendar,
      title: "Timeline & Deadline Management",
      description: "Never miss important dates with our smart calendar system that tracks all admission deadlines and schedules.",
      features: [
        "Personalized deadline reminders",
        "Application timeline tracking",
        "Exam schedule updates",
        "Important date notifications"
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      icon: FileText,
      title: "Document & Application Support",
      description: "Get help with document preparation, application forms, and submission processes for seamless admission applications.",
      features: [
        "Document checklist generation",
        "Application form assistance",
        "Submission guidelines",
        "Required certificate verification"
      ],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      icon: Target,
      title: "Preparation Strategy Planning",
      description: "Develop personalized study plans and preparation strategies based on your target department and current academic status.",
      features: [
        "Custom study schedules",
        "Subject-wise preparation tips",
        "Mock test recommendations",
        "Performance tracking"
      ],
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200"
    },
    {
      icon: MessageSquare,
      title: "24/7 Support & Consultation",
      description: "Round-the-clock support through our AI chatbot and access to expert consultations for complex queries.",
      features: [
        "Instant AI responses",
        "Expert consultation booking",
        "Priority support queue",
        "Multi-channel assistance"
      ],
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Assessment",
      description: "Tell us about your academic background, interests, and goals",
      icon: Users
    },
    {
      step: "02", 
      title: "Personalized Plan",
      description: "Receive a customized admission strategy tailored to your profile",
      icon: Target
    },
    {
      step: "03",
      title: "Guided Preparation",
      description: "Follow our step-by-step guidance with AI-powered support",
      icon: Lightbulb
    },
    {
      step: "04",
      title: "Application Success",
      description: "Submit your application with confidence and track your progress",
      icon: GraduationCap
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-40"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 text-sm font-medium mb-4">
            <ClipboardCheck className="w-4 h-4 mr-2" />
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need for{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              JU Admission Success
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive support and guidance through every step of your Jahangirnagar University 
            admission journey, powered by cutting-edge AI technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl border-2 ${service.borderColor} ${service.bgColor} hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105`}
                onClick={() => setActiveService(index)}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <button className="group/btn inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              How Our Process Works
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A simple, streamlined approach to guide you from initial inquiry to successful JU admission.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <div key={index} className="relative text-center">
                  {/* Connection Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 z-0"></div>
                  )}
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                      <div className="text-sm font-bold text-blue-600 mb-2">STEP {step.step}</div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Begin Your JU Journey?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful students who have achieved their admission goals with our comprehensive support system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <MessageSquare className="w-5 h-5 mr-2" />
              Start Free Consultation
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="inline-flex items-center border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300">
              View All Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;