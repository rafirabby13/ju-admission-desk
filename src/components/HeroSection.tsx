import { useState } from 'react';
import {  ArrowRight, Users, Clock, Award, CheckCircle, MessageCircle } from 'lucide-react';

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          
          {/* Left Column - Text Content */}
          <div className="text-white space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center bg-blue-600/30 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 text-sm font-medium">
              <Award className="w-4 h-4 mr-2" />
              MSc Research Project 2025
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Your{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  JU Admission
                </span>{' '}
                Journey Starts Here
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                AI-powered guidance for{' '}
                <span className="font-semibold text-white">Jahangirnagar University</span>{' '}
                admissions. Get instant answers, personalized support, and expert guidance 24/7.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-blue-100">24/7 AI Support</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-blue-100">Instant Answers</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-blue-100">Expert Guidance</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Start Chat with AI Assistant
                <ArrowRight className={`w-5 h-5 ml-2 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
              </button>
              
              <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-400 border-2 border-blue-400/50 rounded-xl hover:bg-blue-400/10 hover:border-blue-400 transition-all duration-300">
                Learn More About Services
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-blue-400/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-blue-200">Students Helped</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-sm text-blue-200">AI Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">95%</div>
                <div className="text-sm text-blue-200">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual/Interactive Element */}
          <div className="relative">
            {/* Main Visual Container */}
            <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
              {/* Mock Chat Interface */}
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">JU Admission Bot</h3>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-xs text-green-400">Online</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sample Chat Messages */}
                <div className="space-y-3">
                  <div className="bg-blue-600/30 rounded-2xl rounded-bl-sm p-4">
                    <p className="text-white text-sm">
                      Hello! I'm here to help you with JU admissions. What would you like to know?
                    </p>
                  </div>
                  
                  <div className="bg-white/20 rounded-2xl rounded-br-sm p-4 ml-8">
                    <p className="text-white text-sm">
                      What are the admission requirements for CSE department?
                    </p>
                  </div>
                  
                  <div className="bg-blue-600/30 rounded-2xl rounded-bl-sm p-4">
                    <p className="text-white text-sm">
                      For CSE admission at JU, you need: HSC with minimum GPA 4.0 in Science, Mathematics and Physics...
                    </p>
                  </div>
                </div>

                {/* Quick Action Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-4">
                  <button className="bg-white/10 hover:bg-white/20 text-white text-xs py-2 px-3 rounded-lg transition-colors">
                    📚 Admission Requirements
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 text-white text-xs py-2 px-3 rounded-lg transition-colors">
                    📅 Important Dates
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 text-white text-xs py-2 px-3 rounded-lg transition-colors">
                    📝 Application Process
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 text-white text-xs py-2 px-3 rounded-lg transition-colors">
                    💰 Fee Structure
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <Users className="w-8 h-8 text-white" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
              <Clock className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-white/60 text-sm">Scroll to explore</span>
          <div className="w-1 h-8 bg-white/30 rounded-full relative overflow-hidden">
            <div className="w-full h-2 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;