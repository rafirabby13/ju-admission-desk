
import './App.css'
import ChatbotFeaturesSection from './components/ChatbotFeaturesSection'
import FAQSection from './components/FAQSection'
import FooterSection from './components/FooterSection'
import HeroSection from './components/HeroSection'
import JUAdmissionChatbot from './components/JUAdmissionChatbot'
import ServicesSection from './components/ServicesSection'
import SimpleNavbar from './components/SimpleNavbar'
import TestimonialsSection from './components/TestimonialsSection'

function App() {

  return (
    <>
      <SimpleNavbar />
      <HeroSection />
      <TestimonialsSection />
      <ChatbotFeaturesSection />
      <ServicesSection />
      <FAQSection />
      <FooterSection />
      <JUAdmissionChatbot />

    </>
  )
}

export default App
