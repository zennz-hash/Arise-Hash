import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../constants';
import { Phone, Mail, MapPin, Send, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 px-4 flex flex-col items-center justify-center"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

        {/* Text Side */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
              Let's build <br />
              <span className="text-brand-accent">something epic.</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 font-light">
              Ready to elevate your brand? We are currently accepting new projects.
            </p>

            <div className="space-y-8">
              <ContactItem
                icon={<Phone />}
                label="WhatsApp / Call"
                value={CONTACT_INFO.phone}
                href={`https://wa.me/${CONTACT_INFO.phone.replace(/^0/, '62')}`}
              />
              <ContactItem
                icon={<Mail />}
                label="Email Inquiries"
                value={CONTACT_INFO.email}
                href={`mailto:${CONTACT_INFO.email}`}
              />
            </div>
          </motion.div>
        </div>

        {/* Form Side */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-brand-accent/10 blur-[80px] rounded-full pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-50" />

            <form
              className="relative z-10 space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const name = (form.elements.namedItem('name') as HTMLInputElement).value;
                const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

                if (!name || !message) return;

                const phoneNumber = CONTACT_INFO.phone.replace(/^0/, '62');
                const text = `Halo, saya ${name}. ${message}`;
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

                window.open(whatsappUrl, '_blank');
              }}
            >
              <div>
                <label className="text-xs font-bold text-brand-accent uppercase tracking-widest mb-3 block">Your Name</label>
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:outline-none focus:border-brand-accent transition-colors placeholder:text-white/20"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-brand-accent uppercase tracking-widest mb-3 block">Tell us about your project</label>
                <textarea
                  name="message"
                  required
                  rows={3}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:outline-none focus:border-brand-accent transition-colors placeholder:text-white/20 resize-none"
                  placeholder="I need a website for..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-white text-black font-bold py-5 rounded-xl flex justify-center items-center gap-2 hover:bg-brand-accent transition-colors mt-8"
              >
                Send to WhatsApp <ArrowRight size={18} />
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ContactItem = ({ icon, label, value, href }: { icon: React.ReactNode, label: string, value: string, href: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:border-brand-accent group-hover:text-brand-accent transition-colors">
      {icon}
    </div>
    <div>
      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{label}</p>
      <p className="text-xl font-medium text-white group-hover:text-brand-accent transition-colors">{value}</p>
    </div>
  </a>
);

export default Contact;