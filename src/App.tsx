
import { Outlet, useLocation } from 'react-router'
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
  const location = useLocation()
  // console.log(location)

  return (
    <>
      <SimpleNavbar />

      <Outlet />
      {
        location.pathname == "/" &&
        <div>
          <HeroSection />
          <TestimonialsSection />
          <ChatbotFeaturesSection />
          <ServicesSection />
          <FAQSection />
          <FooterSection />
          <JUAdmissionChatbot />
          {/* <Chatbot/> */}
        </div>
      }

    </>
  )
}

export default App
