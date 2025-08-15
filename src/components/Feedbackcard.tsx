export interface FeedbackCardProps {
  feedback: {
    _id?: string;
    name?: string;
    email?: string;
    category: string;
    message: string;
    time: string;
  };
}

export default function FeedbackCard({ feedback }: FeedbackCardProps) {
  const { name, email, category, message, time } = feedback;

    return (
        <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100 hover:shadow-lg transition-all duration-300">
            {/* Header */}
            <div className="flex justify-between items-center mb-3">
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">{name || "Anonymous"}</h3>
                    {email && <p className="text-sm text-gray-500">{email}</p>}
                </div>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-100 text-blue-800">
                    {category}
                </span>
            </div>

            {/* Message */}
            <p className="text-gray-700 mb-3">{message}</p>

            {/* Footer */}
            <p className="text-xs text-gray-400">{new Date(time).toLocaleString()}</p>
        </div>
    );
}
