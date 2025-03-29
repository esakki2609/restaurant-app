import { useState } from "react";
import { IoClose } from "react-icons/io5";
import "../app/globals.css";
import geminiHAndler from "@/app/api/geminiAI";

const Chatbot = ({ onClose }) => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const sendMessage = async () => {
        if (!input.trim()) return;

        const geminiResponse = await geminiHAndler(input);
        console.log("geminiResponse", geminiResponse);

        setMessages((prev) => [
            ...prev,
            { userMessage: input, aiMessage: geminiResponse }
        ]);
        setInput("");
    };

    return (
        <div className="flex flex-col justify-between bg-gray-50 shadow-lg rounded-lg w-100 p-4 h-120 overflow-auto">
            {/* ....Close Button.... */}
            <div className="h-50 flex flex-row justify-end p-3">
                <IoClose onClick={onClose} style={{ cursor: "pointer" }} />
            </div>

            {/* ....Messages Section.... */}
            <div className="flex flex-col w-full gap-3 overflow-y-auto">
                {messages.map((item, index) => (
                    <div key={index} className="flex flex-col w-full">
                        {/* ....User Message.... */}
                        <div className="flex justify-end">
                            <p className="text-white bg-gray-500 p-2 rounded-lg max-w-[75%] break-words">
                                {item.userMessage}
                            </p>
                        </div>

                        {/* ....AI Response.... */}
                        <div className="flex justify-start">
                            <p className="text-gray-700 bg-gray-200 p-2 rounded-lg max-w-[75%] break-words">
                                {item.aiMessage}
                            </p>
                        </div>
                    </div>
                ))}
            </div>


            <div className="flex flex-col w-full justify-center gap-3 mt-3">

                {/* ....Text Box.... */}
                <textarea
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask something..."
                    rows={3}
                />
                {/* ....Button.... */}
                <button onClick={sendMessage} className="w-full h-10 bg-cyan-900 text-white rounded-lg cursor-pointer">
                    Suggest me
                </button>
            </div>
        </div>
    );
};

export default Chatbot;
