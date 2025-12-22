"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { services } from "@/lib/data";
import * as Select from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";

const treatmentTypes = services.map((service) => service.title);

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
];

export default function BookPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    treatmentType: "",
    preferredDate: "",
    preferredTime: "",
    concerns: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      treatmentType: "",
      preferredDate: "",
      preferredTime: "",
      concerns: "",
    });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const minDate = new Date().toISOString().split("T")[0];

  const handleWhatsAppBooking = () => {
    const {
      name,
      email,
      phone,
      treatmentType,
      preferredDate,
      preferredTime,
      concerns,
    } = formData;

    if (
      !name ||
      !email ||
      !phone ||
      !treatmentType ||
      !preferredDate ||
      !preferredTime
    ) {
      alert(
        "Please fill in all required fields before confirming your booking."
      );
      return;
    }

    const message = `*Dermacharma Clinic - Appointment Booking Request*

*Personal Information:*
Name: ${name}
Email: ${email}
Phone: ${phone}

*Appointment Details:*
Treatment Type: ${treatmentType}
Preferred Date: ${preferredDate}
Preferred Time: ${preferredTime}

${concerns ? `*Concerns & Goals:*\n${concerns}` : ""}

Please confirm my appointment booking. I look forward to my consultation.`;

    const clinicPhoneNumber = "918005051055";
    const whatsappUrl = `https://wa.me/${clinicPhoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  //   const handleEmailBooking = () => {
  //     const { name, email, phone, treatmentType, preferredDate, preferredTime, concerns } = formData;

  //     if (!name || !email || !phone || !treatmentType || !preferredDate || !preferredTime) {
  //       alert('Please fill in all required fields before confirming your booking.');
  //       return;
  //     }

  //     const emailBody = `Dear Dermacharma Clinic,

  // I would like to book an appointment with your clinic.

  // PERSONAL INFORMATION:
  // Name: ${name}
  // Email: ${email}
  // Phone: ${phone}

  // APPOINTMENT DETAILS:
  // Treatment Type: ${treatmentType}
  // Preferred Date: ${preferredDate}
  // Preferred Time: ${preferredTime}

  // ${concerns ? `CONCERNS & GOALS:\n${concerns}` : ''}

  // Please confirm my appointment booking. I look forward to my consultation.

  // Best regards,
  // ${name}`;

  //     const clinicEmail = 'dermacharmaesthetics@gmail.com';
  //     const subject = 'Appointment Booking Request - Dermacharma Clinic';
  //     const mailtoUrl = `mailto:${clinicEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

  //     window.open(mailtoUrl, '_blank');
  //   };

  const handleEmailBooking = () => {
    const {
      name,
      email,
      phone,
      treatmentType,
      preferredDate,
      preferredTime,
      concerns,
    } = formData;

    if (
      !name ||
      !email ||
      !phone ||
      !treatmentType ||
      !preferredDate ||
      !preferredTime
    ) {
      alert(
        "Please fill in all required fields before confirming your booking."
      );
      return;
    }

    const emailBody = `
Dear Dermacharma Clinic,

I would like to book an appointment with your clinic.

PERSONAL INFORMATION
Name: ${name}
Email: ${email}
Phone: ${phone}

APPOINTMENT DETAILS
Treatment Type: ${treatmentType}
Preferred Date: ${preferredDate}
Preferred Time: ${preferredTime}

${concerns ? `CONCERNS & GOALS:\n${concerns}` : ""}

Please confirm my appointment booking.

Best regards,
${name}
  `.trim();

    const clinicEmail = "dermacharmaesthetics@gmail.com";
    const subject = "Appointment Booking Request - Dermacharma Clinic";

    const mailtoUrl = `mailto:${clinicEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(emailBody)}`;

    window.open(mailtoUrl, "_blank");
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', treatmentType: '', preferredDate: '', preferredTime: '', concerns: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="bg-[#FAFAF8] w-full px-2 xs:px-3 sm:px-4 py-6 xs:py-8 sm:py-10 md:py-12">
      <motion.div
        className="mx-auto max-w-4xl space-y-8 xs:space-y-10 sm:space-y-12 md:space-y-14"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="text-center" variants={itemVariants}>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#C9A961]">
            Schedule Your Visit
          </p>
          <h1 className="mt-2 xs:mt-3 sm:mt-4 text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-[#404040]">
            Book your personalized consultation
          </h1>
          <p className="mt-2 xs:mt-3 sm:mt-4 text-xs xs:text-sm sm:text-base md:text-lg text-[#404040]/70 mx-auto max-w-3xl leading-relaxed">
            Secure your appointment with our board-certified dermatologists. Our
            concierge team will confirm your booking within one business day.
          </p>
        </motion.div>

        <motion.div
          className="rounded-2xl xs:rounded-2xl sm:rounded-3xl border border-[#C9A961]/50 bg-white/90 p-4 xs:p-6 sm:p-8 md:p-10 shadow-lg shadow-[#D4C5B9]/30"
          variants={itemVariants}
        >
          <form
            onSubmit={handleSubmit}
            className="space-y-4 xs:space-y-5 sm:space-y-6"
          >
            <motion.div className="grid gap-4 xs:gap-5 sm:gap-6 md:grid-cols-2" variants={itemVariants}>
              <div>
                <label
                  htmlFor="book-name"
                  className="text-xs xs:text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#404040]"
                >
                  Full Name *
                </label>
                <input
                  id="book-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="mt-1.5 xs:mt-2 sm:mt-3 w-full rounded-lg xs:rounded-xl sm:rounded-2xl border border-[#C9A961]/40 bg-white px-3 xs:px-4 sm:px-4 py-2 xs:py-2.5 sm:py-3 text-xs sm:text-sm text-[#404040] outline-none transition focus:border-[#C9A961] focus:ring-2 focus:ring-[#C9A961]/40"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="book-email"
                  className="text-xs xs:text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#404040]"
                >
                  Email Address *
                </label>
                <input
                  id="book-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="mt-1.5 xs:mt-2 sm:mt-3 w-full rounded-lg xs:rounded-xl sm:rounded-2xl border border-[#C9A961]/40 bg-white px-3 xs:px-4 sm:px-4 py-2 xs:py-2.5 sm:py-3 text-xs sm:text-sm text-[#404040] outline-none transition focus:border-[#C9A961] focus:ring-2 focus:ring-[#C9A961]/40"
                  placeholder="your@email.com"
                />
              </div>
            </motion.div>

            <motion.div className="grid gap-4 xs:gap-5 sm:gap-6 md:grid-cols-2" variants={itemVariants}>
              <div>
                <label
                  htmlFor="book-phone"
                  className="text-xs xs:text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#404040]"
                >
                  Phone Number *
                </label>
                <input
                  id="book-phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="mt-1.5 xs:mt-2 sm:mt-3 w-full rounded-lg xs:rounded-xl sm:rounded-2xl border border-[#C9A961]/40 bg-white px-3 xs:px-4 sm:px-4 py-2 xs:py-2.5 sm:py-3 text-xs sm:text-sm text-[#404040] outline-none transition focus:border-[#C9A961] focus:ring-2 focus:ring-[#C9A961]/40"
                  placeholder="+91 8000 222 111"
                />
              </div>

              <div>
                <label className="text-xs xs:text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#404040]">
                  Treatment Type *
                </label>
                <Select.Root
                  value={formData.treatmentType}
                  onValueChange={(value) =>
                    setFormData({ ...formData, treatmentType: value })
                  }
                >
                  <Select.Trigger
                    className="mt-1.5 xs:mt-2 sm:mt-3 w-full rounded-lg xs:rounded-xl sm:rounded-2xl border border-[#C9A961]/40 bg-white px-3 xs:px-4 sm:px-4 py-2 xs:py-2.5 sm:py-3 text-xs sm:text-sm text-[#404040] outline-none transition focus:border-[#C9A961] focus:ring-2 focus:ring-[#C9A961]/40 flex items-center justify-between cursor-pointer"
                    asChild
                  >
                    <button type="button">
                      <Select.Value placeholder="Select a treatment type" />
                      <Select.Icon asChild>
                        <ChevronDown className="w-4 h-4 opacity-50" />
                      </Select.Icon>
                    </button>
                  </Select.Trigger>
                  <Select.Portal>
                    <Select.Content className="overflow-hidden rounded-lg xs:rounded-xl sm:rounded-2xl border border-[#C9A961]/40 bg-white shadow-lg shadow-[#D4C5B9]/30 z-50">
                      <Select.Viewport className="p-1">
                        {treatmentTypes.map((type) => (
                          <Select.Item
                            key={type}
                            value={type}
                            className="px-3 xs:px-4 sm:px-4 py-2 xs:py-2.5 sm:py-3 text-xs sm:text-sm text-[#404040] cursor-pointer hover:bg-[#C9A961]/10 outline-none focus:bg-[#C9A961]/10"
                          >
                            <Select.ItemText>{type}</Select.ItemText>
                          </Select.Item>
                        ))}
                      </Select.Viewport>
                    </Select.Content>
                  </Select.Portal>
                </Select.Root>
              </div>
            </motion.div>

            <motion.div className="grid gap-4 xs:gap-5 sm:gap-6 md:grid-cols-2" variants={itemVariants}>
              <div>
                <label
                  htmlFor="book-date"
                  className="text-xs xs:text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#404040]"
                >
                  Preferred Date *
                </label>
                <input
                  id="book-date"
                  type="date"
                  required
                  min={minDate}
                  value={formData.preferredDate}
                  onChange={(e) =>
                    setFormData({ ...formData, preferredDate: e.target.value })
                  }
                  className="mt-1.5 xs:mt-2 sm:mt-3 w-full rounded-lg xs:rounded-xl sm:rounded-2xl border border-[#C9A961]/40 bg-white px-3 xs:px-4 sm:px-4 py-2 xs:py-2.5 sm:py-3 text-xs sm:text-sm text-[#404040] outline-none transition focus:border-[#C9A961] focus:ring-2 focus:ring-[#C9A961]/40"
                />
              </div>

              <div>
                <label className="text-xs xs:text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#404040]">
                  Preferred Time *
                </label>
                <Select.Root
                  value={formData.preferredTime}
                  onValueChange={(value) =>
                    setFormData({ ...formData, preferredTime: value })
                  }
                >
                  <Select.Trigger
                    className="mt-1.5 xs:mt-2 sm:mt-3 w-full rounded-lg xs:rounded-xl sm:rounded-2xl border border-[#C9A961]/40 bg-white px-3 xs:px-4 sm:px-4 py-2 xs:py-2.5 sm:py-3 text-xs sm:text-sm text-[#404040] outline-none transition focus:border-[#C9A961] focus:ring-2 focus:ring-[#C9A961]/40 flex items-center justify-between cursor-pointer"
                    asChild
                  >
                    <button type="button">
                      <Select.Value placeholder="Select a time slot" />
                      <Select.Icon asChild>
                        <ChevronDown className="w-4 h-4 opacity-50" />
                      </Select.Icon>
                    </button>
                  </Select.Trigger>
                  <Select.Portal>
                    <Select.Content className="overflow-hidden rounded-lg xs:rounded-xl sm:rounded-2xl border border-[#C9A961]/40 bg-white shadow-lg shadow-[#D4C5B9]/30 z-50">
                      <Select.Viewport className="p-1">
                        {timeSlots.map((slot) => (
                          <Select.Item
                            key={slot}
                            value={slot}
                            className="px-3 xs:px-4 sm:px-4 py-2 xs:py-2.5 sm:py-3 text-xs sm:text-sm text-[#404040] cursor-pointer hover:bg-[#C9A961]/10 outline-none focus:bg-[#C9A961]/10"
                          >
                            <Select.ItemText>{slot}</Select.ItemText>
                          </Select.Item>
                        ))}
                      </Select.Viewport>
                    </Select.Content>
                  </Select.Portal>
                </Select.Root>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <label
                htmlFor="book-concerns"
                className="text-xs xs:text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#404040]"
              >
                Your Concerns & Goals (Optional)
              </label>
              <textarea
                id="book-concerns"
                rows={4}
                value={formData.concerns}
                onChange={(e) =>
                  setFormData({ ...formData, concerns: e.target.value })
                }
                className="mt-1.5 xs:mt-2 sm:mt-3 w-full rounded-lg xs:rounded-xl sm:rounded-2xl border border-[#C9A961]/40 bg-white px-3 xs:px-4 sm:px-4 py-2 xs:py-2.5 sm:py-3 text-xs sm:text-sm text-[#404040] outline-none transition focus:border-[#C9A961] focus:ring-2 focus:ring-[#C9A961]/40 resize-none"
                placeholder="Tell us about your skin/hair concerns and what you hope to achieve..."
              />
            </motion.div>

            <motion.div
              className="space-y-3 xs:space-y-4 sm:space-y-5 pt-2 xs:pt-3 sm:pt-4 flex flex-col items-center"
              variants={itemVariants}
            >
              <div className="flex flex-wrap gap-3 xs:gap-4 sm:gap-5 justify-center">
                <motion.button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="group relative px-6 xs:px-8 lg:px-12 py-3 lg:py-4 rounded-2xl bg-gradient-to-r from-[#C9A961] to-[#E8DCC8] text-white font-semibold uppercase tracking-[0.2em] text-sm lg:text-base overflow-hidden shadow-xl shadow-[#C9A961]/30 hover:shadow-2xl hover:shadow-[#C9A961]/50 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Confirm via WhatsApp
                </motion.button>

                <motion.button
                  type="button"
                  onClick={handleEmailBooking}
                  className="group relative px-6 xs:px-8 lg:px-12 py-3 lg:py-4 rounded-2xl bg-gradient-to-r from-[#C9A961] to-[#E8DCC8] text-white font-semibold uppercase tracking-[0.2em] text-sm lg:text-base overflow-hidden shadow-xl shadow-[#C9A961]/30 hover:shadow-2xl hover:shadow-[#C9A961]/50 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Confirm via Email
                </motion.button>
              </div>

              {submitted && (
                <motion.div
                  className="rounded-lg xs:rounded-xl sm:rounded-2xl bg-[#E8DCC8] px-3 xs:px-4 sm:px-6 py-3 xs:py-4 sm:py-5 text-xs xs:text-xs sm:text-sm font-medium text-[#404040] text-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-semibold">✓ Booking request received!</p>
                  <p className="mt-1 text-[#404040]/70">
                    Our concierge team will confirm your appointment within one
                    business day.
                  </p>
                </motion.div>
              )}
            </motion.div>

            <motion.p
              className="text-xs text-[#404040]/60 text-center pt-2"
              variants={itemVariants}
            >
              * Required fields. We respect your privacy and will never share
              your information.
            </motion.p>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
