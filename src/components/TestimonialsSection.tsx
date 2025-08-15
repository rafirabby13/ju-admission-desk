import { useState, useEffect } from 'react';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  Users, 
  Trophy,
  Heart,
  ArrowRight,
  GraduationCap
} from 'lucide-react';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: "Rashida Ahmed",
      department: "Computer Science & Engineering",
      year: "2024",
      image: "👩🏻‍🎓",
      rating: 5,
      quote: "The AI assistant was incredibly helpful throughout my admission process. It answered all my questions instantly and guided me step-by-step. I couldn't have navigated JU's admission requirements without it!",
      highlight: "Got admission in CSE with 95% confidence",
      stats: { preparation: "3 months", success: "First attempt" }
    },
    {
      name: "Mohammad Karim",
      department: "Business Administration",
      year: "2024", 
      image: "👨🏻‍🎓",
      rating: 5,
      quote: "Amazing support system! The personalized study plan and timeline management helped me stay organized. The 24/7 availability of the AI bot was a game-changer during my preparation.",
      highlight: "Secured admission with merit position",
      stats: { preparation: "4 months", success: "Merit list" }
    },
    {
      name: "Fatima Khan",
      department: "Mathematics",
      year: "2024",
      image: "👩🏻‍💼",
      rating: 5,
      quote: "The document preparation guidance was perfect. I never missed any deadline thanks to the smart reminder system. The AI understood my queries in both English and Bangla, which was really convenient.",
      highlight: "Perfect document submission record",
      stats: { preparation: "2 months", success: "Zero errors" }
    },
    {
      name: "Sakib Hassan",
      department: "Physics",
      year: "2023",
      image: "👨🏻‍🔬",
      rating: 5,
      quote: "As someone from a rural area, accessing admission guidance was always difficult. This platform made it so easy to get expert advice anytime. The preparation strategies were spot-on!",
      highlight: "First in family to get university admission",
      stats: { preparation: "5 months", success: "Top 10%" }
    },
    {
      name: "Nusrat Jahan",
      department: "English Literature",
      year: "2023",
      image: "👩🏻‍📚",
      rating: 5,
      quote: "The comprehensive information hub saved me so much time. Instead of visiting multiple offices and websites, I got all the information I needed in one place. Highly recommended for all JU aspirants!",
      highlight: "Completed application 2 weeks early",
      stats: { preparation: "3 months", success: "Early admission" }
    }
  ];

  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Students Helped",
      color: "text-blue-600"
    },
    {
      icon: Trophy,
      value: "95%",
      label: "Success Rate",
      color: "text-green-600"
    },
    {
      icon: Heart,
      value: "4.9/5",
      label: "User Rating",
      color: "text-red-600"
    },
    {
      icon: GraduationCap,
      value: "30+",
      label: "Departments Covered",
      color: "text-purple-600"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-yellow-100 text-yellow-800 rounded-full px-4 py-2 text-sm font-medium mb-4">
            <Star className="w-4 h-4 mr-2" />
            Student Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Students Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real stories from students who successfully got admission to Jahangirnagar University 
            with our AI-powered guidance system.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className={`w-12 h-12 ${stat.color} bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Testimonial */}
        <div className="relative">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-6 z-10">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 -right-6 z-10">
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Testimonial Content */}
              <div className="space-y-6">
                {/* Quote Icon */}
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Quote className="w-8 h-8 text-white" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                  "{currentTestimonial.quote}"
                </blockquote>

                {/* Highlight */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 border border-green-200">
                  <div className="flex items-center space-x-2">
                    <Trophy className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-green-800">
                      {currentTestimonial.highlight}
                    </span>
                  </div>
                </div>

                {/* Student Info */}
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">
                    {currentTestimonial.image}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-blue-600 font-medium">
                      {currentTestimonial.department}
                    </p>
                    <p className="text-gray-500 text-sm">
                      Admitted in {currentTestimonial.year}
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats Card */}
              <div className="lg:ml-8">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Success Metrics</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-blue-100">Preparation Time:</span>
                      <span className="font-bold text-xl">
                        {currentTestimonial.stats.preparation}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-100">Result:</span>
                      <span className="font-bold text-xl">
                        {currentTestimonial.stats.success}
                      </span>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <p className="text-sm text-blue-100 mb-2">Join the success story</p>
                    <button className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                      Start Your Journey
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveTestimonial(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeTestimonial === index
                    ? 'bg-blue-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-gray-600 mb-6">
              Join hundreds of successful students and get personalized guidance for your JU admission journey.
            </p>
            <button className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <Users className="w-5 h-5 mr-2" />
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;