import  { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  Clock, 
  Brain,  
  Users,
  BookOpen,
  Calendar,
  FileText,
  CheckCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const ChatbotFeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('chatbot-features');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Clock,
      title: "24/7 Instant Support",
      description: "Get immediate answers to your admission queries anytime, anywhere. No waiting for office hours.",
      color: "from-blue-500 to-cyan-500",
      benefits: ["Always available", "No queue time", "Instant responses", "Multi-language support"]
    },
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Advanced machine learning algorithms trained specifically on JU admission data and procedures.",
      color: "from-purple-500 to-pink-500",
      benefits: ["Smart understanding", "Context awareness", "Learning capability", "Accurate information"]
    },
    {
      icon: BookOpen,
      title: "Comprehensive Knowledge Base",
      description: "Access to complete admission information including requirements, deadlines, and procedures.",
      color: "from-green-500 to-emerald-500",
      benefits: ["All departments covered", "Updated information", "Detailed guidelines", "Process explanations"]
    },
    {
      icon: Users,
      title: "Personalized Guidance",
      description: "Tailored advice based on your background, interests, and academic goals for JU admission.",
      color: "from-orange-500 to-red-500",
      benefits: ["Custom recommendations", "Personal assessment", "Goal-oriented advice", "Step-by-step guidance"]
    }
  ];

  const demoMessages = [
    {
      type: 'user',
      text: "What are the admission requirements for CSE at JU?",
      time: "2:30 PM"
    },
    {
      type: 'bot',
      text: "For Computer Science & Engineering at Jahangirnagar University, you need:\n\n• HSC with minimum GPA 4.0 in Science group\n• Mathematics and Physics are mandatory\n• Age limit: Maximum 22 years\n• Admission test required\n\nWould you like to know about the admission test pattern?",
      time: "2:31 PM"
    },
    {
      type: 'user',
      text: "Yes, tell me about the test pattern",
      time: "2:32 PM"
    },
    {
      type: 'bot',
      text: "The JU CSE admission test includes:\n\n📝 Written Test (100 marks):\n• Mathematics: 40 marks\n• Physics: 30 marks\n• Chemistry: 20 marks\n• English: 10 marks\n\n⏰ Duration: 1 hour\n📅 Usually held in October-November\n\nShall I help you with preparation tips?",
      time: "2:33 PM"
    }
  ];

  return (
    <section id="chatbot-features" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Technology
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Your{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Admission Assistant
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the future of admission guidance with our intelligent chatbot, 
            specifically designed to help you navigate JU's admission process seamlessly.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Features */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Why Choose Our AI Assistant?
            </h3>
            
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = activeFeature === index;
              
              return (
                <div
                  key={index}
                  className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    isActive 
                      ? 'bg-white shadow-xl border-2 border-blue-200 scale-105' 
                      : 'bg-white/60 hover:bg-white hover:shadow-lg'
                  }`}
                  onClick={() => setActiveFeature(index)}
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 mb-4">
                        {feature.description}
                      </p>
                      
                      {isActive && (
                        <div className="grid grid-cols-2 gap-2 animate-fadeIn">
                          {feature.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-orange-500" />
                              <span className="text-sm text-gray-700">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <ArrowRight className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isActive ? 'rotate-90' : ''}`} />
                  </div>
                </div>
              );
            })}
            
            {/* CTA Button */}
            <div className="pt-8">
              <button className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <MessageCircle className="w-5 h-5 mr-2" />
                Try AI Assistant Now
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column - Live Demo */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
              
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">JU Admission AI</h4>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-xs text-white/80">Online • Instant responses</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="h-96 overflow-y-auto p-6 space-y-4 bg-gray-50">
                {demoMessages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-fadeInUp`}
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    <div className={`max-w-xs lg:max-w-sm px-4 py-3 rounded-2xl ${
                      message.type === 'user' 
                        ? 'bg-blue-600 text-white rounded-br-sm' 
                        : 'bg-white text-gray-800 rounded-bl-sm shadow-sm border'
                    }`}>
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                      <span className={`text-xs mt-2 block ${
                        message.type === 'user' ? 'text-blue-100' : 'text-gray-400'
                      }`}>
                        {message.time}
                      </span>
                    </div>
                  </div>
                ))}
                
                {/* Typing Indicator */}
                <div className="flex justify-start">
                  <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm border">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t border-gray-200 bg-white">
                <div className="flex space-x-3">
                  <input
                    type="text"
                    placeholder="Ask about JU admissions..."
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    disabled
                  />
                  <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="p-4 bg-gray-50 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  <button className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium hover:bg-blue-200 transition-colors">
                    <BookOpen className="w-3 h-3 mr-1" />
                    Admission Requirements
                  </button>
                  <button className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium hover:bg-green-200 transition-colors">
                    <Calendar className="w-3 h-3 mr-1" />
                    Important Dates
                  </button>
                  <button className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium hover:bg-purple-200 transition-colors">
                    <FileText className="w-3 h-3 mr-1" />
                    Application Process
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-lg p-4 border">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">99.8%</div>
                <div className="text-xs text-gray-600">Accuracy Rate</div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-4 border">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">&lt;2s</div>
                <div className="text-xs text-gray-600">Response Time</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of students who have successfully navigated JU admissions with our AI assistant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Start Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors">
                Watch Demo Video
              </button>
            </div>
          </div>
        </div>
      </div>

    
    </section>
  );
};

export default ChatbotFeaturesSection;