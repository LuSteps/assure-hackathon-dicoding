"use client";
import React, { useState, useRef, useEffect } from "react";
import { Box } from "@mui/material";
import ChatInput from "./ChatInput";

type Message = {
  id: number;
  sender: "user" | "ai";
  text: string;
};

export default function ChatbotSection() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom smoothly when messages change, only within the scrollable container
  useEffect(() => {
    const container = messagesEndRef.current?.parentElement;
    if (container) {
      container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
    }
  }, [messages]);

  const simulateAIResponse = (userMessage: string) => {
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          sender: "ai",
          text: `AI response to: "${userMessage}"`,
        },
      ]);
    }, 1000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMessage = input.trim();
    setMessages((prev) => [
      ...prev,
      { id: prev.length + 1, sender: "user", text: userMessage },
    ]);
    setInput("");
    simulateAIResponse(userMessage);
  };

  return (
    <div className="bg-[#D9D9D9] min-h-screen flex items-center justify-center p-4">
      <Box className="flex flex-col w-full max-w-5xl rounded-lg p-6 h-[80vh]">
        {messages.length === 0 && (
          <p className="mx-auto text-black font-bold text-xl mt-10">
            Need Someone to talk to? BW is here
          </p>
        )}

        <div className="flex-1 overflow-y-auto mb-4 px-2">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`mb-3 flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg break-words whitespace-pre-wrap ${
                  message.sender === "user"
                    ? "bg-blue-600 text-white rounded-br-none"
                    : "bg-gray-300 text-gray-900 rounded-bl-none"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <ChatInput
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onSubmit={handleSubmit}
        />
      </Box>
    </div>
  );
}
