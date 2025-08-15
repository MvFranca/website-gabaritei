import React, { useState, useEffect, useRef } from "react";
import { Send, Bot, User, Sparkles, MessageCircle, Brain } from "lucide-react";
import { chatMessages } from "./mock";

const ChatSection = () => {
  const [messages, setMessages] = useState(chatMessages);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const firstRender = useRef(true);

  // const scrollToBottom = () => {
  //   messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  // };

  // useEffect(() => {
  //   if (firstRender.current) {
  //     firstRender.current = false;
  //     return;
  //   }
  //   scrollToBottom();
  // }, [messages]);

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      sender: "user",
      message: newMessage,
      timestamp: new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setNewMessage("");
    setIsTyping(true);

    // Simular resposta da IA
    setTimeout(() => {
      const aiMessage = {
        id: messages.length + 2,
        sender: "ai",
        message:
          "Ótima pergunta! Vou te ajudar com isso. Como professor virtual, estou aqui para esclarecer suas dúvidas de forma didática e personalizada. 🎓",
        timestamp: new Date().toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 2000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full px-6 py-3 mb-6">
            <Sparkles size={24} className="text-white" />
            <span className="text-white font-bold">IA Personalizada</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
            Converse com seu Professor IA
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Tire suas dúvidas, receba explicações personalizadas e tenha um
            mentor disponível 24/7 para acelerar seus estudos!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-slate-700 overflow-hidden shadow-2xl">
            {/* Chat header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <Brain size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Professor AI</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-blue-100 text-sm">Online agora</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat messages */}
            <div className="h-96 overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl relative group ${
                      message.sender === "user"
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                        : "bg-slate-700 text-slate-100"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {message.sender === "ai" && (
                        <Bot
                          size={16}
                          className="text-blue-400 mt-1 flex-shrink-0"
                        />
                      )}
                      {message.sender === "user" && (
                        <User
                          size={16}
                          className="text-white mt-1 flex-shrink-0"
                        />
                      )}
                      <div className="flex-1">
                        <p className="text-sm leading-relaxed">
                          {message.message}
                        </p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp}
                        </p>
                      </div>
                    </div>

                    {/* Message hover effect */}
                    <div
                      className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${
                        message.sender === "user" ? "bg-white" : "bg-blue-400"
                      }`}
                    ></div>
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-slate-700 rounded-2xl px-4 py-3 max-w-xs">
                    <div className="flex items-center gap-2">
                      <Bot size={16} className="text-blue-400" />
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Message input */}
            <div className="p-6 border-t border-slate-700">
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
                <div className="flex-1 relative">
                  <textarea
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Digite sua dúvida aqui..."
                    autoFocus={false}
                    className="w-full h-full flex justify-center items-center bg-slate-700 text-white rounded-xl px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    rows="1"
                  />
                  <MessageCircle
                    size={20}
                    className="absolute right-3 top-3 text-slate-400"
                  />
                </div>
                <button
                  onClick={handleSendMessage}
                  disabled={!newMessage.trim()}
                  autoFocus={false}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl px-6 py-3 font-bold transition-all duration-300 hover:scale-105 flex items-center gap-2 justify-center sm:justify-start"
                >
                  <Send size={20} />
                  Enviar
                </button>
              </div>

              {/* Quick suggestions */}
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "Como resolver equação de 2º grau?",
                  "Dicas para redação",
                  "Fórmulas de física",
                ].map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => setNewMessage(suggestion)}
                    className="bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white px-3 py-1 rounded-full text-sm transition-all duration-300"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatSection;
