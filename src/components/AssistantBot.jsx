import React, { useState } from 'react';
import { MessageSquare, X, Send, Bot, ShieldCheck, Check } from 'lucide-react';
import { BOT_CROSS_CHECK } from '../data/portfolioData';

// Helper to format bot responses cleanly without raw markdown asterisks
function formatBotText(rawText) {
  if (!rawText) return null;
  const lines = rawText.split('\n');

  return (
    <div className="space-y-1.5 text-xs">
      {lines.map((line, lIdx) => {
        const trimmed = line.trim();
        if (!trimmed) return <div key={lIdx} className="h-1" />;

        // Check if line is a bullet item or numbered item
        const isBullet = trimmed.startsWith('•') || trimmed.startsWith('-');
        const isNumbered = /^\d+\.\s/.test(trimmed);
        
        let content = trimmed;
        let numMatch = null;
        if (isBullet) {
          content = trimmed.replace(/^[•\-]\s*/, '');
        } else if (isNumbered) {
          numMatch = trimmed.match(/^(\d+)\./);
          content = trimmed.replace(/^\d+\.\s*/, '');
        }

        // Split by **bold** parts and strip asterisks
        const parts = content.split(/(\*\*.*?\*\*)/g);
        const formattedParts = parts.map((part, pIdx) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            const inner = part.slice(2, -2);
            return (
              <strong key={pIdx} className="font-bold text-[#E5C378]">
                {inner}
              </strong>
            );
          }
          return part;
        });

        if (isBullet) {
          return (
            <div key={lIdx} className="flex items-start gap-1.5 pl-1 text-zinc-200">
              <span className="text-[#E5C378] text-[10px] mt-0.5 shrink-0">▹</span>
              <span className="leading-snug">{formattedParts}</span>
            </div>
          );
        }

        if (isNumbered && numMatch) {
          return (
            <div key={lIdx} className="flex items-start gap-2 pl-0.5 text-zinc-200">
              <span className="px-1.5 py-0.5 rounded bg-white/[0.08] text-[#E5C378] font-mono font-bold text-[10px] shrink-0">
                {numMatch[1]}
              </span>
              <span className="leading-snug">{formattedParts}</span>
            </div>
          );
        }

        return (
          <div key={lIdx} className="text-zinc-200 leading-snug">
            {formattedParts}
          </div>
        );
      })}
    </div>
  );
}

export default function AssistantBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hi! I'm Jitendra's verified portfolio assistant. What would you like to know about his software projects, technical skills, academic leadership, or contact info?"
    }
  ]);
  const [input, setInput] = useState('');

  const quickPrompts = [
    { label: "📍 Ranchi (Hometown)", key: "location" },
    { label: "💻 Technical Strengths", key: "roles" },
    { label: "⚡ Core Tech Stack", key: "stack" },
    { label: "🛠️ DevPilot Architecture", key: "devpilot" },
    { label: "🎓 Academics & Leadership", key: "education" },
    { label: "📬 Contact Details", key: "contact" }
  ];

  const handleSend = (textToSend) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    // Append user message
    const newMessages = [...messages, { sender: 'user', text: query }];
    setMessages(newMessages);
    setInput('');

    // Intelligent context-aware matching & cross-checking
    setTimeout(() => {
      const lower = query.toLowerCase();
      let botReply = BOT_CROSS_CHECK.default;

      if (lower.includes('where') || lower.includes('ranchi') || lower.includes('jharkhand') || lower.includes('from') || lower.includes('live') || lower.includes('city') || lower.includes('location') || lower.includes('hometown') || lower.includes('native') || lower.includes('place')) {
        botReply = BOT_CROSS_CHECK.location;
      } else if (lower.includes('role') || lower.includes('sde') || lower.includes('swe') || lower.includes('developer') || lower.includes('suitable') || lower.includes('hire') || lower.includes('job') || lower.includes('full stack')) {
        botReply = BOT_CROSS_CHECK.roles;
      } else if (lower.includes('devpilot') || lower.includes('ast') || lower.includes('pipeline') || lower.includes('security')) {
        botReply = BOT_CROSS_CHECK.devpilot;
      } else if (lower.includes('vaani') || lower.includes('voice') || lower.includes('celestial')) {
        botReply = BOT_CROSS_CHECK.vaani;
      } else if (lower.includes('taskflow') || lower.includes('task') || lower.includes('jwt')) {
        botReply = BOT_CROSS_CHECK.taskflow;
      } else if (lower.includes('flipkart') || lower.includes('sales') || lower.includes('power bi') || lower.includes('dax')) {
        botReply = BOT_CROSS_CHECK.flipkart;
      } else if (lower.includes('api') || lower.includes('user management') || lower.includes('rbac') || lower.includes('backend')) {
        botReply = BOT_CROSS_CHECK.usermgmt;
      } else if (lower.includes('skill') || lower.includes('stack') || lower.includes('tech') || lower.includes('python') || lower.includes('react')) {
        botReply = BOT_CROSS_CHECK.stack;
      } else if (lower.includes('education') || lower.includes('college') || lower.includes('cgpa') || lower.includes('leet') || lower.includes('chandigarh') || lower.includes('diploma') || lower.includes('school')) {
        botReply = BOT_CROSS_CHECK.education;
      } else if (lower.includes('contact') || lower.includes('email') || lower.includes('reach') || lower.includes('message')) {
        botReply = BOT_CROSS_CHECK.contact;
      } else if (lower.includes('hi') || lower.includes('hello') || lower.includes('hey')) {
        botReply = BOT_CROSS_CHECK.greetings;
      }

      setMessages([...newMessages, { sender: 'bot', text: botReply }]);
    }, 350);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Floating Launcher Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="btn-primary flex items-center gap-2.5 px-4 py-3 rounded-full shadow-2xl hover:scale-105 transition-all text-xs font-mono font-bold"
          aria-label="Ask Jitendra's Bot"
        >
          <Bot className="w-4 h-4 text-black" />
          <span>Ask Verified Bot</span>
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        </button>
      )}

      {/* Interactive Modal */}
      {isOpen && (
        <div className="w-[350px] sm:w-[420px] rounded-2xl glass-panel shadow-2xl flex flex-col overflow-hidden border border-white/[0.12] bg-black/95 backdrop-blur-2xl">
          
          {/* Header */}
          <div className="p-4 border-b border-white/[0.08] flex items-center justify-between bg-white/[0.02]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#E5C378]/15 border border-[#E5C378]/30 flex items-center justify-center">
                <Bot className="w-4 h-4 text-[#E5C378]" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Jitendra's Assistant</p>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Verified facts from portfolio</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Stream */}
          <div className="p-4 h-80 overflow-y-auto space-y-3 text-xs leading-relaxed">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`p-3 rounded-xl max-w-[90%] ${
                    m.sender === 'user'
                      ? 'bg-[#E5C378] text-black font-semibold'
                      : 'bg-white/[0.05] text-[#E2E8F0] border border-white/[0.08]'
                  }`}
                >
                  {m.sender === 'user' ? m.text : formatBotText(m.text)}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Verified Chips - Enlarged & High Contrast */}
          <div className="p-3 border-t border-white/[0.06] bg-white/[0.01] flex flex-wrap gap-2">
            {quickPrompts.map((p) => (
              <button
                key={p.key}
                type="button"
                onClick={() => handleSend(p.label)}
                className="px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-white/[0.06] text-zinc-100 hover:text-white hover:bg-[#E5C378]/20 border border-white/[0.1] hover:border-[#E5C378]/40 transition-all shadow-sm flex items-center"
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
              placeholder="Ask about SDE roles, DevPilot, Power BI, CGPA..."
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
