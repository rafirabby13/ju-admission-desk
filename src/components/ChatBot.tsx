/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, MessageCircle, X, Maximize2, Minimize2, Mic, MicOff } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  options?: string[];
}

interface QAPair {
  _id: string;
  question: string;
  answer: string;
  category: string;
  keywords: string[];
  priority: number;
  isActive: boolean;
}

const JUChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [, setUserName] = useState('');
  const [isListening, setListening] = useState(false);
  
  // Data state
  const [qaPairs, setQaPairs] = useState<QAPair[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>('');
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  // Load data on component mount
  useEffect(() => {
    const loadData = async () => {
      try {
        console.log('Fetching Q&A data from backend...');
        const response = await fetch('http://localhost:5000/admin/qa-pairs');
        const data = await response.json();
        
        console.log('Backend response:', data);
        
        if (data.success && Array.isArray(data.qaPairs)) {
          setQaPairs(data.qaPairs);
          console.log(`✅ Loaded ${data.qaPairs.length} Q&A pairs`);
          
          // Show sample data structure
          if (data.qaPairs.length > 0) {
            console.log('Sample Q&A:', data.qaPairs[0]);
          }
        } else {
          throw new Error('Invalid response format');
        }
      } catch (err) {
        console.error('❌ Failed to load data:', err);
        setError('Failed to connect to backend');
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  // Add welcome message after data loads
  useEffect(() => {
    if (!isLoading && qaPairs.length > 0 && messages.length === 0) {
      setMessages([{
        id: 'welcome',
        text: `Welcome! I have ${qaPairs.length} answers about JU admission. Ask me anything about:\n\n• Admission requirements\n• Fees and payment\n• Required documents\n• Campus facilities\n• Contact information`,
        sender: 'bot',
        timestamp: new Date(),
        options: ['Admission requirements', 'Fees', 'Documents', 'Campus info']
      }]);
    }
  }, [isLoading, qaPairs.length, messages.length]);

  // Initialize speech recognition
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';
        recognition.onresult = (event: any) => {
          setInputText(event.results[0][0].transcript);
          setListening(false);
        };
        recognition.onerror = () => setListening(false);
        recognition.onend = () => setListening(false);
        recognitionRef.current = recognition;
      }
    }
  }, []);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Fixed search - find BEST match, not first match
  const searchQA = (userInput: string): QAPair | null => {
    const input = userInput.toLowerCase();
    console.log(`\n🔍 SEARCHING FOR: "${input}"`);
    console.log(`📊 Available Q&A pairs: ${qaPairs.length}`);
    
    if (qaPairs.length === 0) return null;

    let bestMatch: QAPair | null = null;
    let bestScore = 0;

    // Score ALL Q&A pairs, don't return first match
    for (const qa of qaPairs) {
      if (!qa.isActive) continue;
      
      let score = 0;
      const question = qa.question.toLowerCase();
      
      // Check for important words (avoid common words)
      const inputWords = input.split(' ').filter(w => w.length > 2 && !['are', 'the', 'for', 'and', 'can'].includes(w));
      
      for (const word of inputWords) {
        if (question.includes(word)) {
          score += 1;
        }
      }

      // Specific category bonuses for exact matches
      if (input.includes('hostel') && qa.category === 'hostel') score += 10;
      if (input.includes('room') && qa.category === 'hostel') score += 5;
      if (input.includes('shared') && question.includes('shared')) score += 8;
      
      if (input.includes('fee') && qa.category === 'fees') score += 10;
      if (input.includes('cost') && qa.category === 'fees') score += 8;
      if (input.includes('tuition') && question.includes('tuition')) score += 10;
      
      if (input.includes('document') && qa.category === 'documents') score += 10;
      if (input.includes('requirement') && qa.category === 'admissionRequirements') score += 10;
      
      // Exact question match bonus
      if (question.includes(input) || input.includes(question.replace(/\?/g, ''))) {
        score += 20;
      }

      console.log(`Q: "${question.substring(0, 50)}..." Score: ${score}`);

      // Keep track of best match
      if (score > bestScore) {
        bestScore = score;
        bestMatch = qa;
      }
    }

    console.log(`🎯 BEST MATCH: ${bestMatch ? bestMatch.question.substring(0, 60) + '...' : 'None'} (Score: ${bestScore})`);
    
    return bestScore >= 3 ? bestMatch : null;
  };

  // Generate response
  const generateResponse = (userInput: string): Message => {
    const input = userInput.toLowerCase();

    // Name handling
    if (input.includes('i am') || input.includes('my name')) {
      const name = userInput.match(/(?:i am |my name is )([^.!?]+)/i)?.[1]?.trim();
      if (name) {
        setUserName(name);
        return {
          id: Date.now().toString(),
          text: `Hello ${name}! How can I help with JU admission?`,
          sender: 'bot',
          timestamp: new Date(),
          options: ['Requirements', 'Fees', 'Documents', 'Campus']
        };
      }
    }

    // Greetings
    if (['hi', 'hello', 'hey'].some(g => input.includes(g))) {
      return {
        id: Date.now().toString(),
        text: 'Hello! I can help with JU admission questions. What do you want to know?',
        sender: 'bot',
        timestamp: new Date(),
        options: ['Admission requirements', 'Fees', 'Documents', 'Campus facilities']
      };
    }

    // Search Q&A
    const match = searchQA(userInput);
    
    if (match) {
      // Track usage
      fetch('http://localhost:5000/chatbot/qa-usage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ qaId: match._id }),
      }).catch(console.error);

      return {
        id: Date.now().toString(),
        text: `${match.answer}\n\nPhone: +880-2-7791040\nEmail: admission@juniv.edu`,
        sender: 'bot',
        timestamp: new Date(),
        options: ['Ask another question', 'Contact office']
      };
    }

    // No match found
    return {
      id: Date.now().toString(),
      text: `Sorry, I couldn't find information about "${userInput}".\n\nI can help with:\n• Admission requirements\n• Fees and payment\n• Required documents\n• Campus facilities\n\nTry asking about these topics.`,
      sender: 'bot',
      timestamp: new Date(),
      options: ['Admission requirements', 'Fees', 'Documents', 'Campus info']
    };
  };

  const handleSend = (messageText?: string) => {
    const text = (messageText || inputText).trim();
    if (!text) return;

    // Add user message
    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    }]);
    setInputText('');

    // Generate bot response
    setTimeout(() => {
      const response = generateResponse(text);
      setMessages(prev => [...prev, response]);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  const toggleSpeech = () => {
    if (!recognitionRef.current) return;
    if (isListening) {
      recognitionRef.current.stop();
    } else {
      recognitionRef.current.start();
      setListening(true);
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all hover:scale-105"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all ${isMinimized ? 'w-80 h-16' : 'w-96 h-[600px]'}`}>
      <div className="bg-white rounded-lg shadow-xl border h-full flex flex-col">
        
        {/* Header */}
        <div className="bg-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Bot className="w-5 h-5" />
            <div>
              <h3 className="font-semibold">JU Assistant</h3>
              <p className="text-xs opacity-80">
                {isLoading ? 'Loading...' : error ? 'Offline' : `${qaPairs.length} answers ready`}
              </p>
            </div>
          </div>
          <div className="flex gap-1">
            <button onClick={() => setIsMinimized(!isMinimized)} className="p-1 hover:bg-white/20 rounded">
              {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
            </button>
            <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/20 rounded">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Loading */}
            {isLoading && (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <div className="animate-spin w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full mx-auto mb-2"></div>
                  <p className="text-sm text-gray-600">Loading...</p>
                </div>
              </div>
            )}

            {/* Messages */}
            {!isLoading && (
              <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
                {messages.map(message => (
                  <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] flex gap-2 ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center ${
                        message.sender === 'user' ? 'bg-blue-600' : 'bg-green-600'
                      }`}>
                        {message.sender === 'user' ? <User className="w-3 h-3 text-white" /> : <Bot className="w-3 h-3 text-white" />}
                      </div>
                      <div className={`rounded-lg p-3 ${
                        message.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-white border'
                      }`}>
                        <p className="text-sm whitespace-pre-line">{message.text}</p>
                        {message.options && (
                          <div className="mt-2 space-y-1">
                            {message.options.map((option, i) => (
                              <button
                                key={i}
                                onClick={() => handleSend(option)}
                                className="block w-full text-left px-2 py-1 text-xs bg-gray-100 hover:bg-blue-50 rounded border text-gray-700 hover:text-blue-700"
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            )}

            {/* Input */}
            {!isLoading && (
              <div className="p-4 bg-white border-t">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputText}
                    onChange={e => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about JU admission..."
                    className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                  
                  {recognitionRef.current && (
                    <button
                      onClick={toggleSpeech}
                      className={`p-2 rounded-lg ${isListening ? 'bg-red-500' : 'bg-gray-500'} text-white`}
                    >
                      {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                    </button>
                  )}
                  
                  <button
                    onClick={() => handleSend()}
                    disabled={!inputText.trim()}
                    className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-300"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default JUChatbot;