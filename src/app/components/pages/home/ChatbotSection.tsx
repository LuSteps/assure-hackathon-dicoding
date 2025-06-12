"use client";
import React, { useState, useRef, useEffect } from "react";
import { Box } from "@mui/material";
import ChatInput from "./ChatInput";
import ReactMarkdown from 'react-markdown';

type Message = {
  id: number;
  sender: "user" | "ai";
  text: string;
};

export default function ChatbotSection() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = messagesEndRef.current?.parentElement;
    if (container) {
      container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
    }
  }, [messages]);

  const simulateAIResponse = async (userMessage: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_AZURE_OPENAI_ENDPOINT}?api-version=${process.env.NEXT_PUBLIC_AZURE_OPENAI_API_VERSION}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'api-key': process.env.NEXT_PUBLIC_AZURE_OPENAI_API_KEY || '',
          },
          body: JSON.stringify({
            messages: [
              {
                role: "system",
                content: "You are a compassionate and supportive psychologist assistant bot. Your role is to assist volunteer counselors to get overview of client mental health data,  calmly and empathetically engage with users who may be experiencing emotional distress, anxiety, or frustration. Always respond with warmth, understanding, and reassurance. Use the tone and techniques provided in the knowledge base to guide your interactions. Your goal is to help the user feel heard, validated, and gently guided toward a calmer, more grounded state of mind."
              },
              {
                role: "user",
                content: userMessage
              }
            ],
            model: "gpt-4o-mini"
          }),
        }
      );

      const data = await response.json();
      const aiResponse = data.choices[0]?.message?.content || "I didn't get a response.";

      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          sender: "ai",
          text: aiResponse
        }
      ]);
    } catch (error) {
      console.error("API Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          sender: "ai",
          text: "Sorry, I'm having trouble responding right now."
        }
      ]);
    }
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
            Need Someone to talk to? A-Lisa is Here to Help! - powered by Azure OpenAI
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
                <ReactMarkdown 
                  components={{
                    strong: ({node, ...props}) => <strong className="font-bold" {...props} />
                  }}
                >
                  {message.text}
                </ReactMarkdown>
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