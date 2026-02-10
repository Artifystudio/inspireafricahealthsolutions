import { motion } from "framer-motion";
import { FlaskConical, Sparkles, ShieldCheck, MessageCircle } from "lucide-react";
import nutrikaProduct from "@/assets/nutrika-product.jpg";

const technologies = [
  {
    icon: ShieldCheck,
    name: "Mangoselect™",
    origin: "France",
    benefit: "Joint Support",
    desc: "A premium extract from France designed to support joint health, flexibility, and mobility — helping you move freely and live actively.",
  },
  {
    icon: FlaskConical,
    name: "Cerepron F™",
    origin: "Japan",
    benefit: "Organ & System Cleansing",
    desc: "Advanced Japanese technology formulated to support deep organ and system detoxification, promoting internal balance and renewal.",
  },
  {
    icon: Sparkles,
    name: "L-Arabinose",
    origin: "Patented Blend",
    benefit: "Sugar, Metabolism & Cholesterol Control",
    desc: "A scientifically backed compound that helps regulate sugar absorption, boost metabolism, and maintain healthy cholesterol levels.",
  },
];

const NutrikaSection = () => {
  const handlePurchaseRequest = () => {
    const text =
      "Hello InspireAfrica!%0A%0AI'm interested in purchasing Nutrika. Please share more details including pricing and delivery options.";
    window.open(`https://wa.me/256740313736?text=${text}`, "_blank");
  };

  return (
    <section id="nutrika" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary mb-4 tracking-wide uppercase">
            Our Flagship Product
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Discover Nutrika — The Science of Total Wellness
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Nutrika is a powerful nutritional solution built on 3 breakthrough food technologies
            from France and Japan, combined with 15 additional high-value ingredients to deliver
            comprehensive health support for your entire body.
          </p>
        </motion.div>

        {/* Product image + technologies */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl hero-gradient opacity-20 blur-2xl" />
              <img
                src={nutrikaProduct}
                alt="Nutrika Health Product"
                className="relative rounded-2xl shadow-elevated max-w-sm w-full object-cover"
              />
            </div>
          </motion.div>

          <div className="space-y-6">
            {technologies.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group flex gap-5 rounded-2xl bg-card p-6 shadow-sm border border-border/50 hover:shadow-elevated transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl hero-gradient flex items-center justify-center text-primary-foreground shrink-0 group-hover:scale-110 transition-transform">
                  <tech.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h4 className="font-bold text-foreground">{tech.name}</h4>
                    <span className="text-xs rounded-full bg-accent px-2.5 py-0.5 text-accent-foreground font-medium">
                      {tech.origin}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-primary mb-1">{tech.benefit}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tech.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-bold text-foreground text-center mb-6">
            Learn More About Nutrika
          </h3>
          <div className="rounded-2xl overflow-hidden shadow-elevated">
            <video
              controls
              className="w-full"
              poster="/placeholder.png"
              preload="metadata"
            >
              <source src="/videos/Nutrika_Vid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>

        {/* Extra ingredients + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-card p-8 md:p-12 shadow-elevated text-center max-w-3xl mx-auto"
        >
          <p className="text-muted-foreground leading-relaxed mb-6">
            Beyond the 3 core technologies, Nutrika is enriched with <strong className="text-foreground">15 additional
            high-nutrition ingredients</strong> carefully selected for their proven health benefits —
            supporting immunity, energy, digestion, and overall body balance in one powerful formula.
          </p>
          <button
            onClick={handlePurchaseRequest}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            Request to Purchase Nutrika
          </button>
          <p className="text-xs text-muted-foreground mt-4">
            Tap the button to connect with us on WhatsApp — we'll share pricing, delivery options,
            and help you get started.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NutrikaSection;
