import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    const { name, email, message } = formData;
    const subject = encodeURIComponent(`Portfolio Message from ${name}`);
    const body = encodeURIComponent(
      `Hello Tanishk,\n\n${message}\n\nBest regards,\n${name}\nEmail: ${email}`
    );

    // Open user's default email client pre-filled
    window.location.href = `mailto:tanishkss@gmail.com?subject=${subject}&body=${body}`;

    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', message: '' });
    
    // Auto close toast after 5s
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute right-0 top-1/4 w-80 h-80 bg-accent-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary">
            Get In <span className="text-accent-primary">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-accent-primary mx-auto mt-4 rounded-full"></div>
          <p className="text-text-secondary mt-6 text-base sm:text-lg">
            Have a question, hackathon opportunity, or placement role? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Contact Details Column */}
          <motion.div 
            className="lg:col-span-5 flex flex-col justify-between space-y-8 text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-text-primary font-display">
                Contact Information
              </h3>
              <p className="text-text-secondary leading-relaxed">
                I am actively seeking software development and cloud practitioner opportunities. 
                Use the form or connect through the following handles:
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4 p-4 rounded-2xl glass border border-glass-border">
                  <div className="p-3 bg-accent-primary/10 text-accent-primary rounded-xl">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary uppercase tracking-wider font-semibold">Email Me</p>
                    <a href="mailto:tanishkss@gmail.com" className="text-sm sm:text-base font-bold text-text-primary hover:text-accent-primary transition-colors">
                      tanishkss@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl glass border border-glass-border">
                  <div className="p-3 bg-accent-secondary/10 text-accent-secondary rounded-xl">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary uppercase tracking-wider font-semibold">Call Me</p>
                    <a href="tel:+917904657138" className="text-sm sm:text-base font-bold text-text-primary hover:text-accent-secondary transition-colors">
                      +91 79046 57138
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl glass border border-glass-border">
                  <div className="p-3 bg-purple-500/10 text-purple-400 rounded-xl">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary uppercase tracking-wider font-semibold">Location</p>
                    <p className="text-sm sm:text-base font-bold text-text-primary">
                      Karnataka, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Connect Widgets */}
            <div className="space-y-3 pt-6 border-t border-border-color/60">
              <p className="text-sm font-semibold text-text-secondary">Follow My Journey</p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/tanishkss"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl glass border border-glass-border hover:border-accent-primary text-text-secondary hover:text-accent-primary transition-all duration-300"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/tanishk-ss-34b935374"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl glass border border-glass-border hover:border-accent-primary text-text-secondary hover:text-accent-primary transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form Interactive Column */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-6 sm:p-8 rounded-3xl glass border border-glass-border relative h-full flex flex-col justify-center">
              
              {/* Form success/error notifications */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-start gap-3 text-left"
                  >
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Message Sent Successfully!</p>
                      <p className="text-xs opacity-90 mt-0.5">Thank you for writing! Tanishk S S will respond to your inquiry soon.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-text-primary mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-bg-secondary/50 border ${
                      errors.name ? 'border-rose-500/60 focus:border-rose-500' : 'border-border-color focus:border-accent-primary'
                    } text-text-primary focus:outline-none transition-colors duration-300`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-500 font-semibold mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-text-primary mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-bg-secondary/50 border ${
                      errors.email ? 'border-rose-500/60 focus:border-rose-500' : 'border-border-color focus:border-accent-primary'
                    } text-text-primary focus:outline-none transition-colors duration-300`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-500 font-semibold mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-text-primary mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-bg-secondary/50 border ${
                      errors.message ? 'border-rose-500/60 focus:border-rose-500' : 'border-border-color focus:border-accent-primary'
                    } text-text-primary focus:outline-none transition-colors duration-300 resize-none`}
                    placeholder="Hi Tanishk, I would like to discuss a project..."
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-500 font-semibold mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold shadow-lg hover:shadow-accent-primary/20 hover:opacity-90 disabled:opacity-50 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
