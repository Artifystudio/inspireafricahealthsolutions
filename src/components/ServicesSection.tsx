import { motion } from "framer-motion";
import { Truck, UserCheck, Shield, Zap, Leaf, HeartPulse } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Global Nutrika Distribution",
    desc: "We ship authentic Nutrika health products to clients worldwide with reliable, trackable delivery.",
  },
  {
    icon: UserCheck,
    title: "Personalized Consultations",
    desc: "Remote wellness consultations tailored to your unique health goals and lifestyle conditions.",
  },
  {
    icon: Shield,
    title: "Immune Health Support",
    desc: "Targeted nutritional support designed to strengthen your body's natural defense systems.",
  },
  {
    icon: Zap,
    title: "Energy & Vitality",
    desc: "Science-backed formulations to boost energy levels, mental clarity, and overall vitality.",
  },
  {
    icon: Leaf,
    title: "Digestive Wellness",
    desc: "Comprehensive digestive health solutions for gut balance, absorption, and comfort.",
  },
  {
    icon: HeartPulse,
    title: "Preventive Care",
    desc: "Proactive wellness strategies and lifestyle-based recommendations for long-term health.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary mb-4 tracking-wide uppercase">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Comprehensive Wellness Solutions for Every Need
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            From product distribution to personalized health consultations, we provide end-to-end
            wellness support backed by science and driven by care.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl bg-card p-8 shadow-elevated hover:shadow-2xl transition-all border border-border/50"
            >
              <div className="w-14 h-14 rounded-2xl hero-gradient flex items-center justify-center text-primary-foreground mb-5 group-hover:scale-110 transition-transform">
                <s.icon className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-3">{s.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Medical disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-muted-foreground mt-12 max-w-2xl mx-auto"
        >
          <em>
            Nutrika products are powerful, scientifically formulated nutritional solutions that deliver real results. While our products have transformed the lives of hundreds of clients worldwide, individual results may vary. For specific medical conditions, we recommend consulting with your healthcare professional to complement your wellness journey.
          </em>
        </motion.p>
      </div>
    </section>
  );
};

export default ServicesSection;
