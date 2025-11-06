import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, User, Sun, Wind, Droplets } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [chatStage, setChatStage] = useState('initial');
  const [userDetails, setUserDetails] = useState({ name: '', email: '', interest: '' });
  const { toast } = useToast();
  const chatBodyRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setMessages([{
        id: Date.now(),
        sender: 'bot',
        text: "Hey there! 👋 I'm Sparky, your friendly energy-saving assistant. What's your name?"
      }]);
      setChatStage('ask_name');
    } else {
      setMessages([]);
      setChatStage('initial');
      setUserDetails({ name: '', email: '', interest: '' });
    }
  }, [isOpen]);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const addMessage = (sender, text, options = null) => {
    setMessages(prev => [...prev, { id: Date.now(), sender, text, options }]);
  };

  const handleOptionClick = (option) => {
    addMessage('user', option);
    setUserDetails(prev => ({ ...prev, interest: option }));
    addMessage('bot', `Great choice! ${option} is a fantastic way to save. To get you a personalized quote, could I get your email address?`);
    setChatStage('ask_email');
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue;
    addMessage('user', userMessage);
    setInputValue('');

    setTimeout(() => {
      if (chatStage === 'ask_name') {
        setUserDetails(prev => ({ ...prev, name: userMessage }));
        addMessage('bot', `Nice to meet you, ${userMessage}! What are you interested in today?`, [
          { text: 'Solar', icon: <Sun className="w-4 h-4 mr-2" /> },
          { text: 'Air Conditioning', icon: <Wind className="w-4 h-4 mr-2" /> },
          { text: 'Hot Water', icon: <Droplets className="w-4 h-4 mr-2" /> },
        ]);
        setChatStage('ask_interest');
      } else if (chatStage === 'ask_email') {
        if (/\S+@\S+\.\S+/.test(userMessage)) {
          setUserDetails(prev => ({ ...prev, email: userMessage }));
          addMessage('bot', `Perfect! Thanks, ${userDetails.name}. Our team will email you at ${userMessage} shortly with a free quote for ${userDetails.interest}. Is there anything else I can help with?`);
          setChatStage('final');
          toast({
            title: 'Lead Captured! 🚀',
            description: `Details for ${userDetails.name} (${userMessage}) have been recorded.`,
          });
        } else {
          addMessage('bot', "Oops! That doesn't look like a valid email. Could you please try again?");
        }
      } else if (chatStage === 'final') {
        addMessage('bot', "You're all set for now! If you have more questions, feel free to ask or contact our team directly. Have a great day!");
      }
    }, 800);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-96 md:w-[420px] h-[400px] sm:h-[450px] md:h-[500px] bg-gray-900 border border-lime-500/30 rounded-2xl shadow-glow flex flex-col z-50 max-w-md"
          >
            <header className="flex items-center justify-between p-4 bg-gray-800/50 rounded-t-2xl border-b border-lime-500/20">
              <div className="flex items-center">
                <Bot className="w-8 h-8 text-lime-400 mr-3" />
                <div>
                  <p className="font-bold text-white">Sparky</p>
                  <p className="text-xs text-gray-400">Your Energy Assistant</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </header>

            <div ref={chatBodyRef} className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((msg, index) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-end gap-2 ${msg.sender === 'bot' ? 'justify-start' : 'justify-end'}`}
                >
                  {msg.sender === 'bot' && <Bot className="w-6 h-6 text-lime-400 flex-shrink-0" />}
                  <div className={`max-w-[80%] p-3 rounded-2xl ${msg.sender === 'bot' ? 'bg-gray-800 text-gray-200 rounded-bl-none' : 'bg-lime-500 text-black rounded-br-none'}`}>
                    <p className="text-sm">{msg.text}</p>
                    {msg.options && (
                      <div className="mt-3 space-y-2">
                        {msg.options.map(opt => (
                          <button key={opt.text} onClick={() => handleOptionClick(opt.text)} className="w-full flex items-center text-left bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-3 rounded-lg transition-colors duration-200">
                            {opt.icon} {opt.text}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  {msg.sender === 'user' && <User className="w-6 h-6 text-gray-400 flex-shrink-0" />}
                </motion.div>
              ))}
            </div>

            <div className="p-4 border-t border-lime-500/20">
              <div className="flex items-center bg-gray-800 rounded-full px-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 bg-transparent text-white placeholder-gray-500 focus:outline-none px-3 py-2"
                  disabled={chatStage === 'ask_interest' || chatStage === 'final'}
                />
                <button onClick={handleSend} className="p-2 text-lime-400 hover:text-lime-300 disabled:text-gray-600" disabled={!inputValue.trim() || chatStage === 'ask_interest' || chatStage === 'final'}>
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 bg-gradient-to-r from-lime-500 to-teal-500 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg z-50"
        aria-label="Open Chatbot"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: isOpen ? 0 : 1, opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.3, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Bot className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
      </motion.button>
    </>
  );
};

export default Chatbot;