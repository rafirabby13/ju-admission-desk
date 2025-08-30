import React, { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Loader } from "lucide-react";
import axios from "axios";

interface Message {
    role: "user" | "ai";
    content: string;
    timestamp: Date;
}

const AskAi = () => {
    const [prompt, setPrompt] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const frontendUrl = import.meta.env.VITE_BACKEND_URL;

    if (!frontendUrl) {
        throw new Error("VITE_FRONTEND_URL is not defined in .env");
    }
    // Auto scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleAskAI = async () => {
        if (!prompt.trim()) return;

        setIsLoading(true);

        const userMessage: Message = {
            role: "user",
            content: prompt,
            timestamp: new Date(),
        };
        setMessages((prev) => [...prev, userMessage]);
        const systemPromptBase = `
আপনি জাহাঙ্গীরনগর বিশ্ববিদ্যালয়ের (JU) একটি ভার্চুয়াল Admission Help Desk Assistant।  
আপনার দায়িত্ব হলো শুধুমাত্র JU ভর্তি, একাডেমিক, এবং বিশ্ববিদ্যালয়ের সাথে সম্পর্কিত প্রশ্নের উত্তর দেওয়া।

✅ আপনার দায়িত্ব:
- ভর্তি সংক্রান্ত:
  • ভর্তি পরীক্ষার প্রক্রিয়া, ইউনিট, যোগ্যতা, শর্তাবলী
  • ভর্তি বিজ্ঞপ্তি (circular), পরীক্ষার তারিখ, সিট প্ল্যান
  • আবেদন প্রক্রিয়া, অনলাইন ফর্ম পূরণ, টাকা জমা
  • কোটাসমূহ (মুক্তিযোদ্ধা, উপজাতি, প্রবাসী ইত্যাদি)
  • ফলাফল প্রকাশ ও ভর্তি সম্পন্ন করার ধাপ

- একাডেমিক তথ্য:
  • ফ্যাকাল্টি, ডিপার্টমেন্ট ও বিষয় তালিকা
  • প্রতিটি ইউনিটে কোন বিষয় আছে
  • কোর্সের মেয়াদ ও সিস্টেম (সেমিস্টার/ইয়ার)
  • টিউশন ফি ও অন্যান্য একাডেমিক ফি

- ক্যাম্পাস জীবন:
  • আবাসন ব্যবস্থা (ছাত্র ও ছাত্রীদের হল/হোস্টেল)
  • বিশ্ববিদ্যালয়ের পরিবহন ব্যবস্থা (বাস/গাড়ি রুট)
  • লাইব্রেরি, আইসিটি সেন্টার, মেডিকেল সেন্টার
  • সাংস্কৃতিক কার্যক্রম, ক্লাব ও সংগঠন
  • ক্যাফেটেরিয়া ও ক্যান্টিন

- সাধারণ তথ্য:
  • বিশ্ববিদ্যালয়ের অবস্থান ও ক্যাম্পাস ম্যাপ
  • যোগাযোগ নম্বর ও অফিসিয়াল ওয়েবসাইট
  • অফিস আওয়ার ও হেল্পডেস্ক তথ্য

✅ উত্তর দেওয়ার নিয়ম:
1. সবসময় ভদ্র, সহজ ও স্পষ্ট বাংলায় উত্তর দিন (প্রয়োজনে ইংরেজি টার্ম ব্যবহার করা যাবে)।
2. JU ভর্তি বা বিশ্ববিদ্যালয় সম্পর্কিত নয় এমন প্রশ্ন এলে বলবেন:
   "আমি শুধু জাহাঙ্গীরনগর বিশ্ববিদ্যালয়ের ভর্তি ও বিশ্ববিদ্যালয় সম্পর্কিত তথ্য দিতে পারি।"
3. কখনো মিথ্যা বা অনুমানভিত্তিক তারিখ, ফি বা নোটিশ বানাবেন না।
4. তথ্য অজানা থাকলে বলবেন:
   "অনুগ্রহ করে জাহাঙ্গীরনগর বিশ্ববিদ্যালয়ের অফিসিয়াল ওয়েবসাইট (https://juniv-admission.org) ভিজিট করুন।"
5. উত্তরগুলো সংক্ষিপ্ত, ছাত্রবান্ধব ও ব্যবহারিক রাখবেন।
6. প্রয়োজনে ধাপে ধাপে (Step by Step) ব্যাখ্যা দিন যেন ছাত্ররা সহজে বুঝতে পারে।
`;

const finalPrompt = `
${systemPromptBase}

User Question:${prompt}  // <-- এখানে frontend থেকে আসা ইউজারের প্রশ্ন
`;

        try {
            const response = await axios.post(
                `${frontendUrl}/ask-ai`,
                { finalPrompt }
            );
           
            
            console.log(response?.data?.response)

            setPrompt("");
    

                const aiMessage: Message = {
                    role: "ai",
                    content: response?.data?.response,
                    timestamp: new Date(),
                };
            


            console.log(aiMessage)

            setMessages((prev) => [...prev, aiMessage]);
        } catch (err) {
            console.error("Error:", err);
            const errorMessage: Message = {
                role: "ai",
                content: "Sorry, I encountered an error. Please try again.",
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };


    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleAskAI();
        }
    };

    return (
        <div className="mx-auto rounded-xl shadow-lg bg-white h-[90vh] max-h-screen flex flex-col border border-gray-200">

            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-xl">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <Bot className="w-5 h-5" />
                    </div>
                    <div>
                        <h2 className="font-semibold text-lg">AI Assistant</h2>
                        <p className="text-xs opacity-90">Ask me anything</p>
                    </div>
                </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
                {messages.length === 0 && (
                    <div className="text-center py-12">
                        <Bot className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 text-lg font-medium">Start a conversation</p>
                        <p className="text-gray-400 text-sm mt-1">Ask me anything and I'll help you out</p>
                    </div>
                )}

                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                        {msg.role === "ai" && (
                            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                                <Bot className="w-4 h-4 text-white" />
                            </div>
                        )}

                        <div
                            className={`max-w-[75%] px-4 py-3 rounded-2xl shadow-sm ${msg.role === "user"
                                ? "bg-blue-600 text-white rounded-br-sm"
                                : "bg-white text-gray-800 border border-gray-200 rounded-bl-sm"
                                }`}
                        >
                            <p className="text-sm leading-relaxed whitespace-pre-line">{msg.content}</p>
                            <p className={`text-xs mt-2 opacity-70 ${msg.role === "user" ? "text-blue-100" : "text-gray-500"
                                }`}>
                                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </p>
                        </div>

                        {msg.role === "user" && (
                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                <User className="w-4 h-4 text-white" />
                            </div>
                        )}
                    </div>
                ))}

                {/* Typing Indicator */}
                {isLoading && (
                    <div className="flex gap-3 justify-start">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                            <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-sm border border-gray-200 shadow-sm">
                            <div className="flex items-center gap-1">
                                <Loader className="w-4 h-4 animate-spin text-gray-400" />
                                <span className="text-sm text-gray-600">Thinking...</span>
                            </div>
                        </div>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-gray-200 bg-white rounded-b-xl">
                <div className="flex gap-3 items-end">
                    <div className="flex-1">
                        <textarea
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            onKeyPress={handleKeyPress}
                            className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm placeholder-gray-500"
                            rows={2}
                            placeholder="Ask me anything..."
                            disabled={isLoading}
                        />
                    </div>
                    <button
                        onClick={handleAskAI}
                        disabled={isLoading || !prompt.trim()}
                        className={`p-3 rounded-xl transition-all duration-200 flex items-center justify-center ${isLoading || !prompt.trim()
                            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                            : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 shadow-lg hover:shadow-xl"
                            }`}
                    >
                        {isLoading ? (
                            <Loader className="w-5 h-5 animate-spin" />
                        ) : (
                            <Send className="w-5 h-5" />
                        )}
                    </button>
                </div>

                {/* Character count */}
                <div className="flex justify-between items-center mt-2 text-xs text-gray-400">
                    <span>Press Enter to send, Shift+Enter for new line</span>
                    <span>{prompt.length}/1000</span>
                </div>
            </div>
        </div>
    );
};

export default AskAi;