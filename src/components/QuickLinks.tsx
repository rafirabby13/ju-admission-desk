

import { useState, type ReactNode } from "react";
import { ExternalLink, Bell, Phone, Calendar, Book } from "lucide-react";
import { Link } from "react-router";
import SimpleNavbar from "./SimpleNavbar";

// Define FAQ item type
interface FAQItem {
    question: string;
    answer: string;
    link: string;
    icon: ReactNode;
    label: string;
}

const faqs: FAQItem[] = [
    {
        question: "How can I apply for admission to JU?",
        answer: "You can apply online through the official admission portal.",
        link: "https://juniv.edu/admission",
        icon: <ExternalLink className="w-4 h-4" />,
        label: "Go to Admission Portal",
    },
    {
        question: "Where can I check admission notices?",
        answer: "All official admission notices are posted here.",
        link: "https://juniv.edu/admission/notice",
        icon: <Bell className="w-4 h-4" />,
        label: "View Notices",
    },
    {
        question: "How do I contact the JU admission office?",
        answer: "Visit the official contact page for phone numbers and email.",
        link: "https://juniv.edu/contact",
        icon: <Phone className="w-4 h-4" />,
        label: "Contact JU",
    },
    {
        question: "Where can I see the academic calendar?",
        answer: "The academic calendar is available here.",
        link: "https://juniv.edu/academic/calendar",
        icon: <Calendar className="w-4 h-4" />,
        label: "View Calendar",
    },
    {
        question: "Where can I find department details?",
        answer: "Browse all faculties and departments here.",
        link: "https://juniv.edu/department",
        icon: <Book className="w-4 h-4" />,
        label: "Departments List",
    },
];

export default function QuickLinks() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div>
            <SimpleNavbar />
            <div className="max-w-4xl mx-auto px-6 py-12">
                <h1 className="text-3xl font-bold mb-8 text-center">JU Admission FAQs</h1>
                <div className="space-y-4">
                    {faqs?.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-xl shadow-sm overflow-hidden"
                        >
                            <button
                                className="w-full flex justify-between items-center p-4 text-left font-medium hover:bg-gray-50"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                {faq.question}
                                <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
                            </button>
                            {openIndex === index && (
                                <div className="p-4 border-t border-gray-200 bg-gray-50">
                                    <p className="mb-3 text-gray-700">{faq.answer}</p>
                                    <Link
                                        to={faq.link}
                                        target="_blank"
                                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                                    >
                                        {faq.icon}
                                        <span className="ml-2">{faq.label}</span>
                                    </Link>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className=" mt-5 w-fit mx-auto">
                    <Link to={"/"} className=" px-10 py-2 rounded-xl font-bold bg-purple-600 text-white  ">Home</Link>
                </div>
            </div>
        </div>
    );
}
