import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import Button from './Button';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the message to your backend
    console.log('Message sent:', message);
    setMessage('');
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all z-40 ${
          isOpen ? 'hidden' : 'flex'
        }`}
        aria-label="Abrir chat"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-4 right-4 w-[350px] bg-white rounded-lg shadow-xl z-50 transition-all transform ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
          <h3 className="font-semibold">Chat con nosotros</h3>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-blue-100 transition-colors"
            aria-label="Cerrar chat"
          >
            <X size={20} />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="h-[300px] p-4 overflow-y-auto">
          <div className="bg-blue-100 text-blue-800 p-3 rounded-lg mb-4 max-w-[80%]">
            ¡Hola! ¿En qué podemos ayudarte?
          </div>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="p-4 border-t">
          <div className="flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Escribe tu mensaje..."
              className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button type="submit" variant="primary" className="!px-3">
              <Send size={18} />
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChatWidget;