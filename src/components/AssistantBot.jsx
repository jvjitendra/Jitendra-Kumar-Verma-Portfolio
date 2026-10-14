import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles, Bot, ArrowRight } from 'lucide-react';
import { BOT_KNOWLEDGE } from '../data/portfolioData';

export default function AssistantBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hi! I'm Jitendra's portfolio assistant. What would you like to know about his projects, skills, or background?"
    }
  ]);
  const [input, setInput] = useState('');

  const quickPrompts = [
    { label: "🚀 Top Projects", key: "projects" },
    { label: "⚡ Tech Stack", key: "stack" },
    { label: "🎓 Education", key: "education" },
    { label: "📬 Contact Info", key: "contact" }
  ];

  const handleSend = (textToSend) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    // Add user message
    const newMessages = [...messages, { sender: 'user', text: query }];
    setMessages(newMessages);
    setInput('');

    // Determine smart answer
    setTimeout(() => {
      const lower = query.toLowerCase();
      let botReply = BOT_KNOWLEDGE.default;

      if (lower.includes('project') || lower.includes('devpilot') || lower.includes('vaani') || lower.includes('taskflow') || lower.includes('work') || lower.includes('portfolio')) {
        botReply = BOT_KNOWLEDGE.projects;
      } else if (lower.includes('skill') || lower.includes('stack') || lower.includes('tech') || lower.includes('language') || lower.includes('python') || lower.includes('react')) {
        botReply = BOT_KNOWLEDGE.stack;
      } else if (lower.includes('education') || lower.includes('college') || lower.includes('chandigarh') || lower.includes('degree') || lower.includes('school') || lower.includes('leet')) {
        botReply = BOT_KNOWLEDGE.education;
      } else if (lower.includes('contact') || lower.includes('email') || lower.includes('hire') || lower.includes('reach') || lower.includes('phone') || lower.includes('message')) {
        botReply = BOT_KNOWLEDGE.contact;
      } else if (lower.includes('hi') || lower.includes('hello') || lower.includes('hey')) {
        botReply = BOT_KNOWLEDGE.greetings;
      }

      setMessages([...newMessages, { sender: 'bot', text: botReply }]);
    }, 400);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="btn-primary flex items-center gap-2 px-4 py-3 rounded-full shadow-2xl hover:scale-105 transition-all text-xs font-mono font-bold"
          aria-label="Open Portfolio Bot"
        >
          <Bot className="w-4 h-4 text-black" />
          <span>Ask Jitendra's Bot</span>
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        </button>
      )}

      {/* Interactive Chat Window */}
      {isOpen && (
        <div className="w-80 sm:w-96 rounded-2xl glass-panel shadow-2xl flex flex-col overflow-hidden border border-white/[0.12] bg-black/95 backdrop-blur-2xl animate-in fade-in slide-in-from-bottom-4 duration-200">
          
          {/* Header */}
          <div className="p-4 border-b border-white/[0.08] flex items-center justify-between bg-white/[0.02]">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-[#E5C378]/15 border border-[#E5C378]/30 flex items-center justify-center">
                <Bot className="w-4 h-4 text-[#E5C378]" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Jitendra's Assistant</p>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Online • Instant replies</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.05]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Stream */}
          <div className="p-4 h-72 overflow-y-auto space-y-3 text-xs leading-relaxed">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`p-3 rounded-xl max-w-[85%] whitespace-pre-line ${
                    m.sender === 'user'
                      ? 'bg-[#E5C378] text-black font-medium'
                      : 'bg-white/[0.05] text-zinc-200 border border-white/[0.06]'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Prompts */}
          <div className="p-2.5 border-t border-white/[0.06] bg-white/[0.01] flex flex-wrap gap-1.5">
            {quickPrompts.map((p) => (
              <button
                key={p.key}
                type="button"
                onClick={() => handleSend(p.label)}
                className="px-2.5 py-1 rounded-lg text-[10px] font-mono bg-white/[0.04] text-zinc-300 hover:text-white hover:bg-white/[0.08] border border-white/[0.06] transition-colors"
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 border-t border-white/[0.08] flex items-center gap-2 bg-black"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about Jitendra..."
              className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded-xl px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#E5C378]/50"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-[#E5C378] text-black hover:bg-[#F0D08A] transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>
      )}
    </div>
  );
}
