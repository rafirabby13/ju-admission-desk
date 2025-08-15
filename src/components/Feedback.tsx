

import { useState, type FormEvent } from "react";
import { MessageSquare, Send, X } from "lucide-react";
import { useGetAlFeedback } from "../hooks/useGetAllFeedback";
import axios from "axios";
import Swal from "sweetalert2";
import SimpleNavbar from "./SimpleNavbar";
import FeedbackCard, { type FeedbackCardProps } from "./Feedbackcard";

interface FeedbackFormData {
    _id?: string,
    name: string;
    email: string;
    category: string;
    message: string;
}


export default function FeedbackModalPage() {
    const [modalOpen, setModalOpen] = useState(false);
    const [formData, setFormData] = useState<FeedbackFormData>({
        name: "",
        email: "",
        category: "General",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [, setStatus] = useState<"success" | "error" | null>(null);

    // Fetch feedback from backend

    const { data: feedbackList, refetch } = useGetAlFeedback();

    console.log(feedbackList)


    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!formData.message.trim()) {
            setStatus("error");
            return;
        }
        console.log(formData)
        setLoading(true);
        setStatus(null);

        try {
            const res = await axios.post("http://localhost:5000/feedback", formData);

            if (res.data.success) {
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your feedback has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });

                setStatus("success");
                setFormData({ name: "", email: "", category: "General", message: "" });

                setModalOpen(false);
            }
        } catch (err) {
            console.error(err);
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <SimpleNavbar />
            <div className="max-w-4xl mx-auto py-12 px-4">
                {/* Heading */}
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center space-x-2">
                        <MessageSquare className="w-6 h-6 text-blue-600" />
                        <h1 className="text-2xl font-bold">Feedback</h1>
                    </div>
                    <button
                        onClick={() => setModalOpen(true)}
                        className="px-5 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-lg shadow-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 ease-in-out"
                    >
                        Give Feedback
                    </button>
                </div>

                {/* Feedback List */}
                <div className="space-y-4">

                    {
                        feedbackList?.map(((feedback) => <FeedbackCard key={feedback._id} feedback={feedback} />))
                    }
                    {feedbackList.length === 0 && (
                        <p className="text-gray-500 text-center">No feedback submitted yet.</p>
                    )}
                </div>

                {/* Modal */}
                {modalOpen && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                        <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 relative">
                            {/* Close Button */}
                            <button
                                onClick={() => setModalOpen(false)}
                                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <h2 className="text-xl font-bold mb-4 flex items-center space-x-2">
                                <MessageSquare className="w-5 h-5 text-blue-600" />
                                Submit Feedback
                            </h2>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name (optional)"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email (optional)"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                                />
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                                >
                                    <option value="General">General</option>
                                    <option value="Admission Process">Admission Process</option>
                                    <option value="Technical Issue">Technical Issue</option>
                                    <option value="Other">Other</option>
                                </select>
                                <textarea
                                    name="message"
                                    placeholder="Your Message..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                                ></textarea>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full flex items-center justify-center px-6 py-3 bg-white text-gray-800 font-medium rounded-lg border border-gray-300 shadow-sm transition-all duration-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
                                >
                                    {loading ? (
                                        "Sending..."
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5 mr-2 text-gray-600" /> Send Feedback
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
