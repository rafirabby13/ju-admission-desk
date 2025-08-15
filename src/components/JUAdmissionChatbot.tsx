import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, MessageCircle, X, Minimize2, Maximize2, School, DollarSign, FileText, Building } from 'lucide-react';

const juAdmissionFaqData = {
  admissionRequirements: {
    general: {
      "What are the general admission requirements for JU undergraduate programs?": "To apply for undergraduate programs at JU, you must have successfully completed your Higher Secondary Certificate (HSC) or equivalent exams. Your GPA should meet the minimum requirement set by the specific faculty.",
      "Do I need to pass an admission test?": "Yes, JU requires eligible candidates to pass the university admission test for most undergraduate programs. Some programs may also consider SSC and HSC results for initial screening.",
      "Can students from other boards apply?": "Absolutely! Students from all recognized boards in Bangladesh can apply, provided they meet the GPA and subject requirements.",
      "Are there special requirements for Science faculty?": "Yes, Science faculty applicants must have Mathematics and Physics at HSC level, and Chemistry or Biology depending on the department.",
      "Are Arts faculty applicants required to have specific subjects?": "Yes, Arts faculty applicants need relevant humanities subjects at HSC level, such as History, English, or Bangla.",
      "Can students with vocational education apply?": "Some programs may allow vocational students if they meet the GPA and subject criteria. Check the faculty-specific rules.",
      "Is prior admission experience necessary?": "No, first-time applicants can apply without prior experience.",
      "Can transfer students apply?": "Transfer students may apply, but they need to provide transcripts and approval from their current institution.",
      "Are there any age limits?": "Generally, there is no strict age limit for undergraduate admissions.",
      "Can international students apply?": "Currently, this guide focuses on Bangladeshi students. International admissions are handled separately."
    }
  },
  
  eligibilityDetails: {
    gpaRequirements: {
      "What is the minimum GPA required for JU admission?": "Typically, JU requires a minimum combined GPA of 7.0 in SSC and HSC, but this varies by faculty.",
      "Is there a minimum GPA per subject?": "Some departments require minimum grades in key subjects like Math, Physics, or Chemistry.",
      "Are students from all recognized Bangladeshi boards eligible?": "Yes, all recognized boards are eligible as long as GPA requirements are met.",
      "Can students apply if they have retaken exams?": "Yes, JU considers the latest official results.",
      "Are vocational students considered?": "Vocational students may apply to specific programs that accept them.",
      "Do students need English proficiency?": "For most programs, HSC English is sufficient. Some faculties may require additional English skills.",
      "Can students with disabilities apply?": "Yes, JU encourages applications from students with disabilities.",
      "Is work experience required?": "No work experience is required for undergraduate programs.",
      "Can students apply for multiple faculties?": "Students may apply to multiple faculties if eligible for each.",
      "Are there reserved seats for specific groups?": "JU may have quota systems; check official notices for details."
    }
  },
  
  admissionTest: {
    testDetails: {
      "When does the application period usually start?": "Applications generally open in June; exact dates are posted on the JU website.",
      "When is the admission test conducted?": "Typically in July; check the official notice for specific dates.",
      "What is the format of the admission test?": "It usually consists of multiple-choice and written questions based on HSC subjects.",
      "How long is the test?": "The test duration varies by faculty, usually 1.5–2 hours.",
      "Can I retake the test if I fail?": "No, you must apply again next year.",
      "Is there a negative marking?": "Some faculties apply negative marking; refer to the official admission notice.",
      "Are admit cards required?": "Yes, candidates must download and bring their admit cards.",
      "Can I take the test in another city?": "Admission tests are held at JU; remote tests are not available.",
      "What happens if I miss the test?": "You will have to wait for the next admission cycle.",
      "Can I check my result online?": "Yes, results are posted on the JU official website."
    }
  },
  
  fees: {
    tuitionFees: {
      "How much is the tuition fee for undergraduate programs?": "Fees range from BDT 10,000 to 30,000 per year depending on faculty.",
      "Are there additional charges?": "Yes, for registration, ID cards, library, lab, and hostel facilities.",
      "How can I pay the tuition fee?": "Fees can be paid online or at designated banks; follow the official instructions.",
      "Are there semester-wise payments?": "Yes, most faculties allow semester-wise fee payments.",
      "Are tuition waivers available?": "Merit-based waivers are available for top-performing students.",
      "Can I pay by installments?": "Some faculties allow installment payments; check official guidance.",
      "Is there a late payment penalty?": "Yes, late payments may incur fines.",
      "Are lab fees included in tuition?": "Lab fees are often separate.",
      "Does tuition cover textbooks?": "No, textbooks are generally the student's responsibility.",
      "Are there scholarships for low-income students?": "Yes, need-based scholarships are available."
    }
  },
  
  scholarships: {
    financialAid: {
      "Are scholarships offered?": "Yes, merit-based and need-based scholarships.",
      "How to apply for scholarships?": "Applications are usually submitted with admission or separately online.",
      "Are there government scholarships?": "Yes, eligible students can apply.",
      "Can I receive multiple scholarships?": "Some scholarships can be combined; check eligibility.",
      "Is financial aid based on family income?": "Yes, need-based aid considers family income.",
      "Are fee waivers available for top performers?": "Yes, top-ranking students may get partial fee waivers.",
      "Are book allowances included?": "Some scholarships provide extra funds for books.",
      "How long is a scholarship valid?": "Usually one academic year; renewals depend on performance.",
      "Can scholarships be deferred?": "Typically no; check scholarship rules."
    }
  },
  
  hostel: {
    accommodation: {
      "Does JU provide hostel facilities?": "Yes, for both male and female students.",
      "How much is hostel rent?": "Typically BDT 2,000–5,000 per semester.",
      "Can I apply for hostel after admission?": "Yes, application is separate after admission.",
      "Are meals provided?": "Some hostels provide canteens; meals are usually separate.",
      "Can I stay off-campus?": "Yes, students may arrange private accommodations.",
      "Are hostel rooms shared?": "Usually 2–4 students per room.",
      "Is electricity and water available?": "Yes, hostels provide basic utilities.",
      "Are there security measures?": "Yes, campus and hostels have security personnel.",
      "Can parents visit?": "Visitors are allowed during specific hours.",
      "How to apply for hostel transfer?": "Requests can be submitted to the hostel office with valid reasons."
    }
  },
  
  documents: {
    requiredDocuments: {
      "What documents are required for admission?": "SSC/HSC mark sheets, certificates, recent photos, birth certificate, and printed application form.",
      "Are originals needed?": "Originals must be shown at the time of admission confirmation.",
      "Can I submit scanned copies online?": "Online application may accept scanned copies; check instructions.",
      "Are character certificates needed?": "Some faculties may request them.",
      "Do I need a medical certificate?": "Certain programs may require a health certificate.",
      "Can I submit extra documents?": "Yes, if requested or beneficial for application.",
      "Are passport copies required?": "Not for Bangladeshi students, only for international applicants.",
      "Are recommendation letters required?": "Generally not for undergraduate programs.",
      "How many photos are needed?": "Usually 2–4 recent passport-sized photographs.",
      "Do I need to submit HSC and SSC transcripts?": "Yes, both mark sheets and certificates are required."
    }
  },
  
  transportation: {
    campusAccess: {
      "How do I reach JU from Dhaka?": "By bus, private vehicle, taxi, or auto-rickshaw. Travel time approx. 1–1.5 hours.",
      "Are there direct buses to JU?": "Yes, multiple buses run daily to Savar.",
      "Is there parking on campus?": "Yes, limited parking is available for students and staff.",
      "Can I cycle to JU?": "Yes, the campus has bicycle paths.",
      "Is there a shuttle service?": "Not officially; private transport is common.",
      "How to get from bus stop to main gate?": "Auto-rickshaws and local transport are available.",
      "Are there nearby train stations?": "No train directly to JU; buses are preferred.",
      "Is ride-sharing available?": "Yes, apps like Pathao and Uber operate near Savar.",
      "Can I walk from nearby areas?": "Some local areas are within walking distance.",
      "How to reach from airport?": "Taxi or ride-share is recommended; approx. 1 hour from Dhaka Airport."
    }
  },
  
  campusFacilities: {
    facilities: {
      "Does JU have a central library?": "Yes, with books, journals, and digital resources.",
      "Are sports facilities available?": "Yes, including cricket, football, basketball, and indoor games.",
      "Is there Wi-Fi on campus?": "Yes, in hostels, libraries, and academic buildings.",
      "Are cafeterias available?": "Yes, multiple food outlets are on campus.",
      "Is there a medical center?": "Yes, a campus health center is available.",
      "Are labs well-equipped?": "Science and engineering labs have modern equipment.",
      "Can I access computer labs?": "Yes, for academic purposes.",
      "Are there auditoriums?": "Yes, for seminars, lectures, and events.",
      "Are cultural centers available?": "Yes, including Selim Al Deen Muktamanch for performances.",
      "Are there student clubs?": "Yes, various clubs for cultural, academic, and sports activities."
    }
  },
  
  contact: {
    helpdesk: {
      "How to contact the admission office?": "Official website, phone +880-2-7791040, email admission@juniv.edu.",
      "Is online support available?": "Yes, during the admission period.",
      "Can I get help for hostel queries?": "Yes, the hostel office provides assistance.",
      "Who can help with transport questions?": "The transport office and helpdesk provide guidance.",
      "Can I visit the admission office in person?": "Yes, during office hours.",
      "Are social media channels used?": "Official JU Facebook and website updates provide info.",
      "Can I contact faculty for program-specific queries?": "Yes, emails and department contact details are available online.",
      "Are there helpline numbers for urgent queries?": "Yes, listed on the official website during admission period.",
      "Is there an FAQ page on the JU website?": "Yes, for common admission questions.",
      "Can I subscribe to JU updates?": "Yes, via the official website newsletter and social media channels."
    }
  }
};

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  options?: string[];
}

const stripEmojis = (s: string) =>
  s.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27FF}]/gu, '');

const normalize = (s: string) =>
  stripEmojis(s)
    .toLowerCase()
    .replace(/[^\w\s]|_/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

type Intent =
  | 'admissionRequirements'
  | 'eligibilityDetails'
  | 'admissionTest'
  | 'fees'
  | 'scholarships'
  | 'hostel'
  | 'documents'
  | 'transportation'
  | 'campusFacilities'
  | 'contact'
  | 'help';

const INTENT_SYNONYMS: Record<Intent, string[]> = {
  admissionRequirements: [
    'admission requirements',
    'requirements',
    'eligibility requirements',
    'application requirements',
    'what do i need',
    'how to apply'
  ],
  eligibilityDetails: [
    'eligibility',
    'eligible',
    'gpa requirement',
    'minimum gpa',
    'qualification',
    'who can apply'
  ],
  admissionTest: [
    'admission test',
    'test',
    'exam',
    'test date',
    'test format',
    'when is test',
    'test duration'
  ],
  fees: [
    'fees',
    'tuition',
    'cost',
    'payment',
    'how much',
    'tuition fee',
    'fee structure'
  ],
  scholarships: [
    'scholarship',
    'financial aid',
    'waiver',
    'financial help',
    'scholarship available'
  ],
  hostel: [
    'hostel',
    'accommodation',
    'residence',
    'dormitory',
    'room',
    'stay',
    'housing'
  ],
  documents: [
    'documents',
    'papers',
    'certificates',
    'what documents',
    'required documents',
    'papers needed'
  ],
  transportation: [
    'transportation',
    'transport',
    'how to reach',
    'travel',
    'bus',
    'location',
    'campus location'
  ],
  campusFacilities: [
    'facilities',
    'campus facilities',
    'library',
    'lab',
    'sports',
    'wifi',
    'cafeteria'
  ],
  contact: [
    'contact',
    'phone',
    'email',
    'helpdesk',
    'support',
    'admission office'
  ],
  help: ['help', 'support', 'assist', 'how to use', 'guide']
};

const INTENT_ORDER: Intent[] = [
  'admissionRequirements',
  'eligibilityDetails',
  'admissionTest',
  'fees',
  'scholarships',
  'hostel',
  'documents',
  'transportation',
  'campusFacilities',
  'contact',
  'help'
];

const getIntentFromInput = (raw: string): Intent | null => {
  const input = normalize(raw);
  for (const intent of INTENT_ORDER) {
    const patterns = INTENT_SYNONYMS[intent];
    for (const p of patterns) {
      if (input.includes(normalize(p))) return intent;
    }
  }
  return null;
};

const findBestMatch = (userInput: string): string => {
  const normInput = normalize(userInput);
  const inputTokens = normInput.split(' ').filter(Boolean);

  let bestAnswer = '';
  let bestScore = 0;

  const overlapScore = (question: string) => {
    const q = normalize(question);
    const qTokens = q.split(' ').filter(Boolean);
    let overlap = 0;
    for (const t of qTokens) if (inputTokens.includes(t)) overlap++;
    const phraseBoost = normInput.includes(q) ? 2 : 0;
    return overlap + phraseBoost;
  };

  for (const category of Object.values(juAdmissionFaqData as any)) {
    for (const subcategory of Object.values(category as any)) {
      for (const [question, answer] of Object.entries(subcategory as Record<string, string>)) {
        const score = overlapScore(question);
        if (score > bestScore) {
          bestScore = score;
          bestAnswer = answer as string;
        }
      }
    }
  }

  return bestScore >= 2 ? bestAnswer : '';
};

const JUAdmissionChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Welcome to Jahangirnagar University Admission Assistant. I can help you with admission requirements, eligibility, fees, scholarships, documents, and campus information. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date(),
      options: ['🎓 Admission Requirements', '💰 Fees & Scholarships', '📄 Documents Needed', '🏫 Campus Info']
    }
  ]);

  const [inputText, setInputText] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [userName, setUserName] = useState('');
  const [isIdentified, setIsIdentified] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userInput: string): Message => {
    const input = userInput.toLowerCase();
    let responseText = '';
    let options: string[] = [];

    if (!isIdentified && (input.includes('i am') || input.includes('my name is'))) {
      const name = userInput.split(/i am |my name is /i)[1]?.trim();
      if (name) {
        setUserName(name);
        setIsIdentified(true);
        responseText = `Nice to meet you, ${name}! I'm your JU admission assistant. I can help you with admission requirements, fees, scholarships, documents, and campus information. What would you like to know?`;
        options = ['🎓 Admission Requirements', '💰 Fees & Scholarships', '📄 Documents Needed', '🏫 Campus Info'];
      }
    } else {
      const intent = getIntentFromInput(userInput);

      if (intent === 'admissionRequirements') {
        responseText = '**JU Admission Requirements:**\n\n• Complete HSC or equivalent\n• Meet minimum GPA requirements\n• Pass university admission test\n• Subject-specific requirements vary by faculty\n\nFor detailed information, contact: **+880-2-7791040** or **admission@juniv.edu**';
        options = ['GPA requirements', 'Subject requirements', 'Application process', 'Test details', 'Contact admission office'];
      } else if (intent === 'eligibilityDetails') {
        responseText = '**Eligibility Details:**\n\n• Minimum combined GPA of 7.0 in SSC and HSC\n• All recognized Bangladeshi boards accepted\n• Science faculty: Math, Physics required\n• Arts faculty: Humanities subjects required\n\nNeed help? Call **+880-2-7791040** or email **admission@juniv.edu**';
        options = ['Check GPA requirement', 'Board eligibility', 'Faculty requirements', 'Retake exam policy', 'Disability support'];
      } else if (intent === 'admissionTest') {
        responseText = '**Admission Test Information:**\n\n• Applications open: June\n• Test conducted: July\n• Format: MCQ + Written\n• Duration: 1.5-2 hours\n• Results online on JU website\n\nContact: **+880-2-7791040** | **admission@juniv.edu**';
        options = ['Test format', 'Test dates', 'Admit card', 'Result checking', 'Retake policy'];
      } else if (intent === 'fees') {
        responseText = '**Fee Structure:**\n\n• Tuition: BDT 10,000-30,000/year\n• Additional: Registration, ID, Library, Lab fees\n• Payment: Online or designated banks\n• Semester-wise payment available\n\nFor payment queries: **+880-2-7791040** | **admission@juniv.edu**';
        options = ['Fee details', 'Payment methods', 'Late payment', 'Fee waiver', 'Contact office'];
      } else if (intent === 'scholarships') {
        responseText = '**Scholarships & Financial Aid:**\n\n• Merit-based scholarships available\n• Need-based financial aid\n• Government scholarships\n• Fee waivers for top performers\n• Book allowances included\n\nApply at: **+880-2-7791040** | **admission@juniv.edu**';
        options = ['Merit scholarships', 'Need-based aid', 'Government scholarships', 'Fee waivers', 'Application process'];
      } else if (intent === 'hostel') {
        responseText = '**Hostel & Accommodation:**\n\n• Available for male and female students\n• Rent: BDT 2,000-5,000/semester\n• 2-4 students per room\n• Basic utilities provided\n• Security measures in place\n\nHostel queries: **+880-2-7791040** | **admission@juniv.edu**';
        options = ['Hostel application', 'Room details', 'Hostel fees', 'Off-campus housing', 'Visitor policy'];
      } else if (intent === 'documents') {
        responseText = '**Required Documents:**\n\n• SSC/HSC mark sheets & certificates\n• Recent passport-size photos (2-4)\n• Birth certificate\n• Printed application form\n• Character certificates (if required)\n\nDocument queries: **+880-2-7791040** | **admission@juniv.edu**';
        options = ['Document list', 'Original documents', 'Online submission', 'Medical certificate', 'Photo requirements'];
      } else if (intent === 'transportation') {
        responseText = '**Transportation to JU:**\n\n• From Dhaka: Bus, taxi, auto-rickshaw (1-1.5 hours)\n• Direct buses to Savar available\n• Campus parking available\n• Ride-sharing apps operate nearby\n• Bicycle paths on campus\n\nTravel help: **+880-2-7791040** | **admission@juniv.edu**';
        options = ['Bus routes', 'Campus parking', 'From airport', 'Local transport', 'Campus cycling'];
      } else if (intent === 'campusFacilities') {
        responseText = '**Campus Facilities:**\n\n• Central library with digital resources\n• Sports facilities (cricket, football, basketball)\n• Wi-Fi in hostels, libraries, academic buildings\n• Multiple cafeterias\n• Medical center\n• Well-equipped labs\n\nFacility info: **+880-2-7791040** | **admission@juniv.edu**';
        options = ['Library services', 'Sports facilities', 'Wi-Fi access', 'Medical center', 'Student clubs'];
      } else if (intent === 'contact') {
        responseText = '**Contact JU Admission Office:**\n\n📞 **Phone:** +880-2-7791040\n📧 **Email:** admission@juniv.edu\n🌐 **Website:** Official JU website\n📍 **Visit:** During office hours\n📱 **Social:** Official JU Facebook page\n\n**Office Hours:** Check official website for current timings.';
        options = ['Call office', 'Send email', 'Visit campus', 'Online support', 'Social media'];
      } else {
        const faqMatch = findBestMatch(userInput);
        if (faqMatch) {
          responseText = faqMatch + '\n\n📞 **Need more help?** Call +880-2-7791040 or email admission@juniv.edu';
          
          if (faqMatch.includes('fee') || faqMatch.includes('tuition') || faqMatch.includes('scholarship')) {
            options = ['Fee details', 'Scholarships', 'Payment methods', 'Contact office'];
          } else if (faqMatch.includes('document') || faqMatch.includes('certificate') || faqMatch.includes('photo')) {
            options = ['Document checklist', 'Original documents', 'Submission process', 'Contact office'];
          } else if (faqMatch.includes('hostel') || faqMatch.includes('accommodation')) {
            options = ['Hostel details', 'Room booking', 'Facilities', 'Contact office'];
          } else if (faqMatch.includes('test') || faqMatch.includes('exam') || faqMatch.includes('admission')) {
            options = ['Test information', 'Exam dates', 'Results', 'Contact office'];
          }
        } else if (input.includes('hello') || input.includes('hi') || input.includes('hey') || input.includes('নমস্কার')) {
          responseText = `Hello${userName ? ` ${userName}` : ''}! Welcome to JU Admission Assistant. I can help you with:`;
          options = ['🎓 Admission Requirements', '💰 Fees & Scholarships', '📄 Documents Needed', '🏫 Campus Info'];
        } else if (input.includes('help') || input.includes('support')) {
          responseText = "I'm here to help with JU admissions! I can assist you with:\n\n• **Admission Requirements:** GPA, subjects, eligibility\n• **Fees & Scholarships:** Costs, payment, financial aid\n• **Documents:** Required papers, submission process\n• **Campus Info:** Facilities, hostels, transportation\n\n📞 **Direct Help:** +880-2-7791040 | **Email:** admission@juniv.edu";
          options = ['Admission requirements', 'Fee information', 'Document help', 'Campus facilities', 'Contact office'];
        } else {
          responseText = `I understand you're asking about: "${userInput}"\n\nI can help you with JU admission information. Here are some areas I can assist with:\n\n📞 **For immediate help:** +880-2-7791040\n📧 **Email:** admission@juniv.edu`;
          options = ['🎓 Admission Requirements', '💰 Fees & Scholarships', '📄 Documents Needed', '🏫 Campus Info', '📞 Contact Office', '❓ Ask something else'];
        }
      }
    }

    return {
      id: Date.now().toString(),
      text: responseText,
      sender: 'bot',
      timestamp: new Date(),
      options: options.length ? options : undefined
    };
  };

  const handleSendMessage = (messageText?: string) => {
    const text = messageText || inputText.trim();
    if (!text) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    setTimeout(() => {
      const botResponse = generateBotResponse(text);
      setMessages(prev => [...prev, botResponse]);
    }, 800);
  };

  const handleOptionClick = (option: string) => handleSendMessage(option);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-600 hover:bg-green-700 text-white rounded-full p-4 transition-all duration-300 hover:scale-110 relative cursor-pointer shadow-xl"
        >
          <MessageCircle className="w-6 h-6" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full border-2 border-white"></div>
        </button>
      </div>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isMinimized ? 'w-80 h-16' : 'w-96 h-[600px]'}`}>
      <div className="bg-blue-600 rounded-lg shadow-2xl border border-blue-700 h-full flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Bot className="w-6 h-6" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-orange-400 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h3 className="font-semibold">JU Admission Assistant</h3>
              <p className="text-xs text-green-100">Jahangirnagar University</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setIsMinimized(!isMinimized)} className="text-green-100 hover:text-white transition-colors p-1">
              {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
            </button>
            <button onClick={() => setIsOpen(false)} className="text-green-100 hover:text-white transition-colors p-1">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map(message => (
                <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] ${message.sender === 'user' ? 'order-2' : 'order-1'}`}>
                    <div className={`flex items-start gap-3 ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.sender === 'user' ? 'bg-blue-600' : 'bg-gradient-to-br from-green-500 to-green-600'
                        }`}
                      >
                        {message.sender === 'user' ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-white" />}
                      </div>
                      <div
                        className={`rounded-2xl p-3 shadow-sm ${
                          message.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800 border border-gray-200'
                        }`}
                      >
                        <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                        {message.options && (
                          <div className="mt-3 space-y-2">
                            {message.options.map((option, index) => (
                              <button
                                key={index}
                                onClick={() => handleOptionClick(option)}
                                className="block w-full text-left px-3 py-2 text-xs bg-gray-50 text-gray-700 border border-gray-200 rounded-lg hover:bg-green-50 hover:border-green-200 hover:text-green-700 transition-all duration-200"
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    <p className={`text-xs text-gray-400 mt-1 ${message.sender === 'user' ? 'text-right mr-11' : 'text-left ml-11'}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div className="px-1 py-2 border-t bg-white border-gray-100">
              <div className="flex justify-center gap-1 overflow-x-auto">
                {[
                  { icon: School, label: 'Requirements', action: '🎓 Admission Requirements' },
                  { icon: DollarSign, label: 'Fees', action: '💰 Fees & Scholarships' },
                  { icon: FileText, label: 'Documents', action: '📄 Documents Needed' },
                  { icon: Building, label: 'Campus', action: '🏫 Campus Info' }
                ].map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleSendMessage(item.action)}
                    className="flex items-center justify-between gap-[2px] px-2 py-1 text-xs bg-[#0a65cd] text-white hover:bg-[#008053] rounded-full transition-colors whitespace-nowrap"
                  >
                    <item.icon className="w-3 h-3" />
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={e => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={`Ask me about JU admission...${!isIdentified ? ' (Tell me your name!)' : ''}`}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputText.trim()}
                  className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default JUAdmissionChatbot;