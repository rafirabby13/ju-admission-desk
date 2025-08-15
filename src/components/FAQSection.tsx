/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  MessageSquare, 
  BookOpen, 
  Clock,
  Users,
  Shield,
  Zap,
  Search
} from 'lucide-react';

// Define the FAQ type interface
interface FAQ {
  question: string;
  answer: string;
}

// Define the category type interface
interface Category {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
}

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [expandedFAQ, setExpandedFAQ] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const categories: Category[] = [
    { id: 'general', label: 'General', icon: HelpCircle },
    { id: 'admission', label: 'Admission Process', icon: BookOpen },
    { id: 'ai', label: 'AI Assistant', icon: MessageSquare },
    { id: 'technical', label: 'Technical', icon: Zap },
    { id: 'support', label: 'Support', icon: Users }
  ];

  const faqs: Record<string, FAQ[]> = {
    general: [
      {
        question: "What is JU Admission AI Assistant?",
        answer: "JU Admission AI Assistant is an intelligent chatbot system designed specifically to help students navigate the admission process of Jahangirnagar University. It provides 24/7 support, personalized guidance, and comprehensive information about all aspects of JU admissions."
      },
      {
        question: "Is this service free to use?",
        answer: "Yes, our basic AI assistance is completely free. We also offer premium consultation services for personalized guidance and expert support, but the core features are available to all students at no cost."
      },
      {
        question: "How accurate is the information provided?",
        answer: "Our AI system is trained on the most up-to-date official JU admission data and guidelines. We maintain 99.8% accuracy by regularly updating our knowledge base with the latest information from official university sources."
      },
      {
        question: "Can I use this service in Bengali?",
        answer: "Yes, our AI assistant supports both English and Bengali languages. You can ask questions and receive responses in your preferred language for better understanding."
      }
    ],
    admission: [
      {
        question: "What are the general admission requirements for JU?",
        answer: "General requirements include: HSC/equivalent with minimum GPA requirements (varies by department), age limits (usually maximum 22-23 years), specific subject requirements for each department, and passing the admission test. Detailed requirements vary by department and are provided by our AI assistant."
      },
      {
        question: "When do JU admissions usually open?",
        answer: "JU admissions typically open in September-October each year, with tests conducted in October-November. However, exact dates vary annually. Our AI assistant provides real-time updates on current admission schedules and important dates."
      },
      {
        question: "How can I prepare for JU admission tests?",
        answer: "Our AI system provides personalized study plans based on your target department, current academic level, and available preparation time. It includes subject-wise preparation strategies, recommended resources, mock test suggestions, and timeline management."
      },
      {
        question: "What documents do I need for JU admission?",
        answer: "Common documents include: HSC/equivalent certificates and transcripts, SSC certificates, birth certificate, passport-size photographs, and department-specific documents. Our AI assistant provides a complete checklist based on your chosen department."
      }
    ],
    ai: [
      {
        question: "How does the AI assistant work?",
        answer: "Our AI assistant uses advanced natural language processing to understand your questions and provide relevant, accurate responses. It's trained specifically on JU admission data and can handle complex queries about requirements, processes, and deadlines."
      },
      {
        question: "Can the AI assistant help with application forms?",
        answer: "Yes, the AI can guide you through application form completion, explain each section, help with document requirements, and provide tips for successful submission. However, you'll need to complete and submit the actual forms yourself."
      },
      {
        question: "What if the AI doesn't understand my question?",
        answer: "If the AI can't provide a satisfactory answer, it will offer to connect you with human experts, suggest alternative questions, or provide relevant resources. You can also rephrase your question for better understanding."
      },
      {
        question: "Is my conversation with the AI private?",
        answer: "Yes, all conversations are encrypted and kept confidential. We follow strict privacy policies and never share your personal information with third parties. Your data is used only to improve your experience and provide better assistance."
      }
    ],
    technical: [
      {
        question: "What devices can I use to access the AI assistant?",
        answer: "The AI assistant is accessible on all devices including smartphones, tablets, laptops, and desktop computers. It works on any modern web browser and doesn't require any special software installation."
      },
      {
        question: "Do I need to create an account?",
        answer: "No account creation is required for basic AI assistance. However, creating a free account allows you to save conversations, track your progress, set reminders, and access personalized features."
      },
      {
        question: "What if the website is slow or not loading?",
        answer: "If you experience technical issues, try refreshing the page, clearing your browser cache, or using a different browser. Our system is designed for 99.9% uptime, but if problems persist, contact our technical support team."
      },
      {
        question: "Can I use the service offline?",
        answer: "The AI assistant requires internet connection to function. However, you can download important information and guides for offline reference. We're working on offline capabilities for future updates."
      }
    ],
    support: [
      {
        question: "How can I contact human support?",
        answer: "You can reach human support through the 'Contact Expert' button in the chat interface, email us at support@juadmissionai.com, or call our helpline during business hours. Premium users get priority support access."
      },
      {
        question: "What are your support hours?",
        answer: "The AI assistant is available 24/7. Human support is available Sunday to Thursday, 9 AM to 6 PM (Bangladesh time). Emergency support is available for urgent admission-related queries during admission seasons."
      },
      {
        question: "Can I get personalized consultation?",
        answer: "Yes, we offer one-on-one consultation sessions with admission experts. These can be booked through the AI assistant or our website. Sessions include personalized admission strategy, document review, and interview preparation."
      },
      {
        question: "How do I report a problem or bug?",
        answer: "You can report issues directly through the chat interface using the 'Report Issue' option, email our technical team, or use the feedback form on our website. We typically respond to bug reports within 24 hours."
      }
    ]
  };

  const filteredFAQs = faqs[activeCategory].filter((faq: FAQ) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-4 py-2 text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4 mr-2" />
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Got{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Questions?
            </span>{' '}
            We Have Answers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to the most common questions about JU admissions and our AI assistant. 
            Can't find what you're looking for? Our AI is ready to help!
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-2xl p-6 sticky top-8">
              <h3 className="font-bold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => {
                        setActiveCategory(category.id);
                        setExpandedFAQ(0);
                      }}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                        activeCategory === category.id
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{category.label}</span>
                    </button>
                  );
                })}
              </div>
              
              {/* Quick Stats */}
              <div className="mt-8 p-4 bg-white rounded-xl shadow-sm">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">Quick Support</span>
                </div>
                <p className="text-xs text-gray-600 mb-3">
                  Average response time: 2 seconds
                </p>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-shadow">
                  Ask AI Now
                </button>
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map((faq: FAQ, index: number) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <button
                      onClick={() => setExpandedFAQ(expandedFAQ === index ? -1 : index)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 rounded-2xl transition-colors"
                    >
                      <h3 className="font-semibold text-gray-900 text-lg pr-4">
                        {faq.question}
                      </h3>
                      {expandedFAQ === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      )}
                    </button>
                    
                    {expandedFAQ === index && (
                      <div className="px-6 pb-5">
                        <div className="border-t border-gray-100 pt-4">
                          <p className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-500 mb-2">No results found</h3>
                  <p className="text-gray-400 mb-6">
                    Try adjusting your search terms or browse different categories.
                  </p>
                  <button 
                    onClick={() => setSearchTerm('')}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Clear search
                  </button>
                </div>
              )}
            </div>

            {/* Still Have Questions */}
            {filteredFAQs.length > 0 && (
              <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Still Have Questions?
                  </h3>
                  <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    Our AI assistant is here to help with any specific questions about JU admissions. 
                    Get instant, personalized answers tailored to your situation.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      <MessageSquare className="w-5 h-5 mr-2" />
                      Chat with AI Assistant
                    </button>
                    <button className="inline-flex items-center border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300">
                      <Users className="w-5 h-5 mr-2" />
                      Contact Human Expert
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Additional Help Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Data Security</h4>
            <p className="text-gray-600 text-sm">
              Your conversations and personal information are encrypted and kept completely confidential.
            </p>
          </div>
          
          <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
            <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">24/7 Availability</h4>
            <p className="text-gray-600 text-sm">
              Get instant answers anytime, anywhere. Our AI never sleeps and is always ready to help.
            </p>
          </div>
          
          <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
            <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Instant Responses</h4>
            <p className="text-gray-600 text-sm">
              No waiting time. Get immediate, accurate answers to your JU admission questions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;