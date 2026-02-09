import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, MapPin, Send } from "lucide-react";

const healthInterests = [
  "Immune Health",
  "Energy & Vitality",
  "Digestive Wellness",
  "Preventive Care",
  "General Wellness",
  "Other",
];

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    country: "",
    interest: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello InspireAfrica!%0A%0AName: ${form.name}%0AEmail: ${form.email}%0ACountry: ${form.country}%0AInterest: ${form.interest}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/256740313736?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary mb-4 tracking-wide uppercase">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Start Your Wellness Journey Today
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Reach out to us and let our team guide you towards the right Nutrika products for your
            health needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl border border-border bg-card px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl border border-border bg-card px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Country / Region"
                value={form.country}
                onChange={(e) => setForm({ ...form, country: e.target.value })}
                className="w-full rounded-xl border border-border bg-card px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <select
                value={form.interest}
                onChange={(e) => setForm({ ...form, interest: e.target.value })}
                className="w-full rounded-xl border border-border bg-card px-5 py-3.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                <option value="">Select Health Interest</option>
                {healthInterests.map((h) => (
                  <option key={h} value={h}>{h}</option>
                ))}
              </select>
            </div>
            <textarea
              placeholder="Tell us about your health goals..."
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-xl border border-border bg-card px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity shadow-lg"
            >
              <Send className="w-4 h-4" />
              Send via WhatsApp
            </button>
          </motion.form>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="rounded-2xl bg-card p-8 shadow-elevated space-y-6">
              <h4 className="font-bold text-foreground text-lg">Quick Contact</h4>

              <a
                href="https://wa.me/256740313736"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="w-10 h-10 rounded-full hero-gradient flex items-center justify-center text-primary-foreground shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </span>
                <div>
                  <p className="font-medium text-foreground">WhatsApp</p>
                  <p>+256 740 313736</p>
                </div>
              </a>

              <a
                href="https://wa.me/256777368231"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="w-10 h-10 rounded-full hero-gradient flex items-center justify-center text-primary-foreground shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </span>
                <div>
                  <p className="font-medium text-foreground">WhatsApp (Alt)</p>
                  <p>+256 777 368231</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="w-10 h-10 rounded-full hero-gradient flex items-center justify-center text-primary-foreground shrink-0">
                  <Mail className="w-5 h-5" />
                </span>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p>info@inspireafricahealth.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="w-10 h-10 rounded-full hero-gradient flex items-center justify-center text-primary-foreground shrink-0">
                  <MapPin className="w-5 h-5" />
                </span>
                <div>
                  <p className="font-medium text-foreground">Global Reach</p>
                  <p>Shipping worldwide from Uganda</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
