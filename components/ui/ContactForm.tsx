'use client';

import { useState, FormEvent } from 'react';
import { useTranslations } from 'next-intl';

export default function ContactForm() {
  const t = useTranslations('contact.form');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClasses = "w-full px-4 py-3 bg-dark-900 border border-gold-900/50 rounded font-body text-dark-100 placeholder-dark-500 focus:outline-none focus:border-gold-500 transition-colors";
  const labelClasses = "block font-display text-sm text-gold-400 tracking-wider mb-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className={labelClasses}>{t('name')} *</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="email" className={labelClasses}>{t('email')} *</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="phone" className={labelClasses}>{t('phone')}</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="subject" className={labelClasses}>{t('subject')} *</label>
        <select
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className={inputClasses}
        >
          <option value="">Select...</option>
          <option value="consultation">Ifa Consultation</option>
          <option value="spiritual">Spiritual Guidance</option>
          <option value="herbal">Herbal Remedies</option>
          <option value="advisory">Life Advisory</option>
          <option value="general">General Inquiry</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>{t('message')} *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className={`${inputClasses} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full btn-gold disabled:opacity-50"
      >
        {status === 'loading' ? 'Sending...' : t('submit')}
      </button>

      {status === 'success' && (
        <p className="text-green-400 font-body text-center">Message sent successfully!</p>
      )}
      {status === 'error' && (
        <p className="text-red-400 font-body text-center">Error sending message. Please try WhatsApp.</p>
      )}
    </form>
  );
}
