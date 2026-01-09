'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    privacy: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const subjects = [
    { value: '', label: 'Select a subject' },
    { value: 'guest', label: 'Guest Inquiry' },
    { value: 'sponsorship', label: 'Sponsorship' },
    { value: 'feedback', label: 'Feedback' },
    { value: 'other', label: 'Other' },
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.subject) newErrors.subject = 'Please select a subject';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (!formData.privacy) newErrors.privacy = 'You must agree to the privacy policy';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-12"
      >
        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Send className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-light mb-4">Message Sent</h3>
        <p className="text-gray-400 mb-8">
          Thank you for reaching out. We&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', subject: '', message: '', privacy: false });
          }}
          className="btn-primary"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div className="floating-label-input">
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          placeholder=" "
          className={errors.name ? 'border-red-500' : ''}
        />
        <label htmlFor="name">Name *</label>
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      {/* Email */}
      <div className="floating-label-input">
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder=" "
          className={errors.email ? 'border-red-500' : ''}
        />
        <label htmlFor="email">Email *</label>
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm text-gray-400 mb-2">
          Subject *
        </label>
        <select
          name="subject"
          id="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`w-full px-4 py-4 bg-transparent border ${errors.subject ? 'border-red-500' : 'border-[#333]'} focus:border-white focus:outline-none transition-colors appearance-none`}
          required
        >
          {subjects.map((s) => (
            <option key={s.value} value={s.value} className="bg-[#1a1a1a]">
              {s.label}
            </option>
          ))}
        </select>
        {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
      </div>

      {/* Message */}
      <div className="floating-label-input">
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          placeholder=" "
          rows={5}
          className={errors.message ? 'border-red-500' : ''}
        />
        <label htmlFor="message">Message *</label>
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
      </div>

      {/* Privacy Checkbox */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          name="privacy"
          id="privacy"
          checked={formData.privacy}
          onChange={handleChange}
          className="mt-1 w-4 h-4 accent-white"
        />
        <label htmlFor="privacy" className="text-sm text-gray-400">
          I agree to the privacy policy and consent to having my data stored for the purpose of
          responding to my inquiry. *
        </label>
      </div>
      {errors.privacy && <p className="text-red-500 text-sm">{errors.privacy}</p>}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
