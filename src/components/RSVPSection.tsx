import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Sparkles, Send, Users, HeartHandshake } from 'lucide-react';
import { weddingConfig } from '../config/wedding';

interface RSVPFormData {
  guestName: string;
  guestCount: number;
  attendance: 'accept' | 'decline' | '';
  wishes: string;
}

interface ValidationErrors {
  guestName?: string;
  attendance?: string;
  guestCount?: string;
}

export const RSVPSection: React.FC = () => {
  const { bride, groom } = weddingConfig;

  const [formData, setFormData] = useState<RSVPFormData>({
    guestName: '',
    guestCount: 2,
    attendance: 'accept',
    wishes: '',
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const validate = (): boolean => {
    const newErrors: ValidationErrors = {};

    if (!formData.guestName.trim()) {
      newErrors.guestName = 'Please enter your full name';
    } else if (formData.guestName.trim().length < 2) {
      newErrors.guestName = 'Name must be at least 2 characters';
    }

    if (!formData.attendance) {
      newErrors.attendance = 'Please let us know if you can make it';
    }

    if (formData.guestCount < 1 || formData.guestCount > 10) {
      newErrors.guestCount = 'Number of guests must be between 1 and 10';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    // Simulate brief smooth response without sending to external server
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      guestName: '',
      guestCount: 2,
      attendance: 'accept',
      wishes: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section
      id="rsvp"
      aria-label="RSVP Form"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAF5EE] via-[#FFF8F4] to-[#FAF6F0] overflow-hidden"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#F2D5D0]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-[#D4A853]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-px w-10 bg-[#D4A853]/60" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#9A3412] font-medium font-sans">
              Kindly Respond
            </span>
            <span className="h-px w-10 bg-[#D4A853]/60" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2B1810] font-normal tracking-tight mb-4">
            RSVP
          </h2>

          {/* Ornamental Divider */}
          <div className="flex items-center justify-center gap-4 my-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#D4A853] to-transparent" />
            <svg
              className="w-4 h-4 text-[#D4A853]"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2 L14.5 9.5 L22 12 L14.5 14.5 L12 22 L9.5 14.5 L2 12 L9.5 9.5 Z" />
            </svg>
            <div className="h-px w-16 bg-gradient-to-l from-transparent via-[#D4A853] to-transparent" />
          </div>

          <p className="text-[#6E584E] text-base font-light max-w-md mx-auto leading-relaxed">
            Please let us know if you will be celebrating with us by 1st November 2026.
          </p>
        </motion.div>

        {/* Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.15 }}
          className="relative rounded-3xl p-7 sm:p-12 bg-white/85 backdrop-blur-md border border-[#EBDCD3] shadow-[0_15px_40px_-15px_rgba(180,140,120,0.2)]"
        >
          {/* Subtle ornate inner border */}
          <div className="absolute inset-3 rounded-2xl border border-[#D4A853]/20 pointer-events-none" />

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              /* RSVP Form */
              <motion.form
                key="rsvp-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                onSubmit={handleSubmit}
                noValidate
                className="space-y-8 relative z-10"
              >
                {/* Guest Name */}
                <div>
                  <label
                    htmlFor="guestName"
                    className="block text-xs uppercase tracking-[0.18em] font-medium text-[#7D5A4C] mb-2"
                  >
                    Guest Name <span className="text-[#B91C1C]">*</span>
                  </label>
                  <input
                    type="text"
                    id="guestName"
                    name="guestName"
                    value={formData.guestName}
                    onChange={(e) => {
                      setFormData({ ...formData, guestName: e.target.value });
                      if (errors.guestName) {
                        setErrors({ ...errors, guestName: undefined });
                      }
                    }}
                    placeholder="e.g. Ramesh & Sunita Verma"
                    aria-required="true"
                    aria-invalid={!!errors.guestName}
                    aria-describedby={errors.guestName ? 'guestName-error' : undefined}
                    className={`w-full px-1 py-3 bg-transparent border-b-2 text-base sm:text-lg text-[#2B1810] placeholder-[#B5A59E] transition-all duration-200 outline-none
                      ${
                        errors.guestName
                          ? 'border-[#DC2626] focus:border-[#DC2626]'
                          : 'border-[#E2CFC5] focus:border-[#C4847A]'
                      }`}
                  />
                  {errors.guestName && (
                    <motion.p
                      id="guestName-error"
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1.5 text-xs text-[#DC2626]"
                    >
                      {errors.guestName}
                    </motion.p>
                  )}
                </div>

                {/* Attendance Radio */}
                <fieldset>
                  <legend className="block text-xs uppercase tracking-[0.18em] font-medium text-[#7D5A4C] mb-3">
                    Attendance <span className="text-[#B91C1C]">*</span>
                  </legend>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Joyfully Accept */}
                    <label
                      htmlFor="attendance-accept"
                      className={`relative flex items-center gap-3.5 p-4 rounded-2xl border cursor-pointer transition-all duration-200 ${
                        formData.attendance === 'accept'
                          ? 'bg-[#FFF3EF] border-[#C4847A] shadow-sm'
                          : 'bg-[#FCFAF8] border-[#EADFD8] hover:border-[#D8C7BC]'
                      }`}
                    >
                      <input
                        type="radio"
                        id="attendance-accept"
                        name="attendance"
                        value="accept"
                        checked={formData.attendance === 'accept'}
                        onChange={() => {
                          setFormData({ ...formData, attendance: 'accept' });
                          if (errors.attendance) {
                            setErrors({ ...errors, attendance: undefined });
                          }
                        }}
                        className="sr-only"
                      />
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                          formData.attendance === 'accept'
                            ? 'border-[#C4847A] bg-[#C4847A]'
                            : 'border-[#CBB9AF] bg-white'
                        }`}
                      >
                        {formData.attendance === 'accept' && (
                          <div className="w-2 h-2 rounded-full bg-white" />
                        )}
                      </div>
                      <div className="text-left">
                        <span className="block text-sm font-medium text-[#2B1810]">
                          Joyfully Accept
                        </span>
                        <span className="block text-xs text-[#8C6D62]">
                          Can't wait to celebrate!
                        </span>
                      </div>
                    </label>

                    {/* Regretfully Decline */}
                    <label
                      htmlFor="attendance-decline"
                      className={`relative flex items-center gap-3.5 p-4 rounded-2xl border cursor-pointer transition-all duration-200 ${
                        formData.attendance === 'decline'
                          ? 'bg-[#FAF5EE] border-[#C67B5C] shadow-sm'
                          : 'bg-[#FCFAF8] border-[#EADFD8] hover:border-[#D8C7BC]'
                      }`}
                    >
                      <input
                        type="radio"
                        id="attendance-decline"
                        name="attendance"
                        value="decline"
                        checked={formData.attendance === 'decline'}
                        onChange={() => {
                          setFormData({ ...formData, attendance: 'decline' });
                          if (errors.attendance) {
                            setErrors({ ...errors, attendance: undefined });
                          }
                        }}
                        className="sr-only"
                      />
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                          formData.attendance === 'decline'
                            ? 'border-[#C67B5C] bg-[#C67B5C]'
                            : 'border-[#CBB9AF] bg-white'
                        }`}
                      >
                        {formData.attendance === 'decline' && (
                          <div className="w-2 h-2 rounded-full bg-white" />
                        )}
                      </div>
                      <div className="text-left">
                        <span className="block text-sm font-medium text-[#2B1810]">
                          Regretfully Decline
                        </span>
                        <span className="block text-xs text-[#8C6D62]">
                          Will celebrate in spirit
                        </span>
                      </div>
                    </label>
                  </div>
                  {errors.attendance && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1.5 text-xs text-[#DC2626]"
                    >
                      {errors.attendance}
                    </motion.p>
                  )}
                </fieldset>

                {/* Number of Guests */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label
                      htmlFor="guestCount"
                      className="text-xs uppercase tracking-[0.18em] font-medium text-[#7D5A4C] flex items-center gap-1.5"
                    >
                      <Users className="w-3.5 h-3.5 text-[#D4A853]" />
                      <span>Number of Guests (1–10)</span>
                    </label>
                    <span className="text-xs font-medium text-[#A66F3E]">
                      {formData.guestCount} {formData.guestCount === 1 ? 'Guest' : 'Guests'}
                    </span>
                  </div>
                  <input
                    type="number"
                    id="guestCount"
                    name="guestCount"
                    min={1}
                    max={10}
                    value={formData.guestCount}
                    onChange={(e) => {
                      const val = parseInt(e.target.value, 10);
                      setFormData({
                        ...formData,
                        guestCount: isNaN(val) ? 1 : Math.min(10, Math.max(1, val)),
                      });
                    }}
                    className="w-full px-1 py-3 bg-transparent border-b-2 border-[#E2CFC5] text-base sm:text-lg text-[#2B1810] focus:border-[#C4847A] transition-all duration-200 outline-none"
                  />
                  {errors.guestCount && (
                    <p className="mt-1.5 text-xs text-[#DC2626]">{errors.guestCount}</p>
                  )}
                </div>

                {/* Wishes / Blessings (Optional) */}
                <div>
                  <label
                    htmlFor="wishes"
                    className="block text-xs uppercase tracking-[0.18em] font-medium text-[#7D5A4C] mb-2 flex items-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#D4A853]" />
                    <span>Wishes & Blessings (Optional)</span>
                  </label>
                  <textarea
                    id="wishes"
                    name="wishes"
                    rows={3}
                    value={formData.wishes}
                    onChange={(e) => setFormData({ ...formData, wishes: e.target.value })}
                    placeholder={`Write a sweet blessing for ${bride.name} & ${groom.name}...`}
                    className="w-full px-3 py-3 rounded-xl bg-[#FAF6F2]/70 border border-[#E2CFC5] text-sm sm:text-base text-[#2B1810] placeholder-[#B5A59E] focus:border-[#C4847A] focus:bg-white transition-all duration-200 outline-none resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4 flex justify-center">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto min-w-[220px] px-8 py-4 rounded-full bg-gradient-to-r from-[#C4847A] via-[#D4A853] to-[#C67B5C] text-white font-medium text-base tracking-wider uppercase shadow-md shadow-[#C4847A]/30 hover:shadow-lg hover:shadow-[#C4847A]/40 transition-all duration-200 flex items-center justify-center gap-2.5 disabled:opacity-75 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send RSVP</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </motion.form>
            ) : (
              /* Confirmation Success Card */
              <motion.div
                key="rsvp-confirmation"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="py-6 px-4 text-center relative z-10"
              >
                {/* Animated checkmark emblem */}
                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.15 }}
                  className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-[#16A34A] to-[#4ADE80] text-white flex items-center justify-center shadow-lg shadow-green-600/25 mb-6"
                >
                  <Check className="w-10 h-10 stroke-[3]" />
                </motion.div>

                <h3 className="font-serif text-3xl sm:text-4xl text-[#2B1810] font-medium mb-3">
                  Thank You, {formData.guestName}!
                </h3>

                <div className="flex items-center justify-center gap-3 my-4">
                  <div className="h-px w-12 bg-[#D4A853]/60" />
                  <HeartHandshake className="w-4 h-4 text-[#D4A853]" />
                  <div className="h-px w-12 bg-[#D4A853]/60" />
                </div>

                <p className="text-[#6E584E] text-base sm:text-lg max-w-md mx-auto leading-relaxed mb-6 font-light">
                  {formData.attendance === 'accept'
                    ? `Your RSVP for ${formData.guestCount} ${
                        formData.guestCount === 1 ? 'guest has' : 'guests have'
                      } been joyfully noted. We cannot wait to celebrate with you!`
                    : `We are truly touched by your warm wishes. You will be missed in person, but in our hearts as we begin this new journey.`}
                </p>

                {formData.wishes.trim() && (
                  <div className="max-w-md mx-auto p-4 rounded-2xl bg-[#FFF9F5] border border-[#E8D4C8] text-sm text-[#7D5A4C] italic mb-8">
                    "{formData.wishes}"
                  </div>
                )}

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#A66F3E] hover:text-[#78350F] underline underline-offset-4 cursor-pointer transition-colors"
                  >
                    Submit another response
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default RSVPSection;
