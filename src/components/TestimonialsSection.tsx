import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    country: "Kenya",
    text: "After struggling with low energy for years, InspireAfrica recommended a personalized Nutrika plan that completely transformed my daily life. I feel more vibrant than ever!",
    goal: "Energy & Vitality",
  },
  {
    name: "James O.",
    country: "Nigeria",
    text: "The personalized consultation was eye-opening. The team genuinely cares about your health journey. My digestive issues have improved significantly within weeks.",
    goal: "Digestive Wellness",
  },
  {
    name: "Amina K.",
    country: "Uganda",
    text: "I was skeptical at first, but the results speak for themselves. My immune health has never been better. Thank you InspireAfrica for the incredible support!",
    goal: "Immune Health",
  },
  {
    name: "David L.",
    country: "South Africa",
    text: "The global shipping was seamless. I received my products on time and the quality is outstanding. InspireAfrica is truly a world-class operation.",
    goal: "General Wellness",
  },
  {
    name: "Grace T.",
    country: "Tanzania",
    text: "What sets InspireAfrica apart is their follow-up care. They don't just sell products — they walk with you through your entire health journey.",
    goal: "Preventive Care",
  },
  {
    name: "Michael R.",
    country: "United Kingdom",
    text: "I discovered InspireAfrica online and took a chance. Best decision of my health journey. The Nutrika products are premium quality and the team is incredibly knowledgeable.",
    goal: "Energy & Vitality",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-muted/40">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary mb-4 tracking-wide uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Hundreds of Lives Transformed Globally
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Don't just take our word for it — hear from our growing community of satisfied clients
            across multiple countries and continents.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl bg-card p-8 shadow-elevated relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.country}</p>
                </div>
                <span className="text-xs rounded-full bg-primary/10 px-3 py-1 text-primary font-medium">
                  {t.goal}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
