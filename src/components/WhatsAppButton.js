import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappNumber = '+2348114580007';
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=Hi!%20I%20would%20like%20to%20connect%20with%20you.`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 sm:bottom-8 right-6 sm:right-8 z-40 p-3 sm:p-4 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      aria-label="Contact via WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle size={24} className="sm:w-7 sm:h-7" />
    </motion.a>
  );
}
