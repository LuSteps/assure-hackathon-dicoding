"use client";
import React, { useState, useEffect, useRef } from "react";
import { TextField, Button, Paper, Typography, Box } from "@mui/material";
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

  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Simulate AI response with a delay
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
    <div className="bg-[#D9D9D9] ">
      <Box className="flex flex-col h-screen w-1/2 mx-auto p-4 justify-center">
        {messages.length === 0 && (
          <p className="mx-auto text-black font-bold text-xl">
            Need Someone to talk to? BW is here
          </p>
        )}

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

        <ChatInput
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onSubmit={handleSubmit}
        />

        {/* <form onSubmit={handleSubmit} className="flex space-x-2">
        <TextField
          variant="outlined"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          fullWidth
          size="small"
          autoComplete="off"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={!input.trim()}
          className="min-w-[80px]"
        >
          Send
        </Button>
      </form> */}
      </Box>
    </div>
  );
}
