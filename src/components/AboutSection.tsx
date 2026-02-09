import { motion } from "framer-motion";
import { Heart, Target, Eye } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Ethical Distribution",
    desc: "We operate with the highest standards of integrity, ensuring every product reaches you safely and authentically.",
  },
  {
    icon: Target,
    title: "Personalized Guidance",
    desc: "Every client receives tailored wellness recommendations based on their unique health needs and lifestyle.",
  },
  {
    icon: Eye,
    title: "Long-term Outcomes",
    desc: "We focus on sustainable health improvements, not quick fixes — building wellness habits that last a lifetime.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-muted/40">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary mb-4 tracking-wide uppercase">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Improving Lives Through Accessible, Science-Backed Nutrition
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            InspireAfrica Health Solutions was founded with a singular mission: to make world-class
            nutritional products accessible to everyone, everywhere. As a trusted Nutrika
            distribution partner, we bridge the gap between cutting-edge health science and the
            people who need it most.
          </p>
        </motion.div>

        {/* Mission / Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-card p-8 shadow-elevated"
          >
            <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full hero-gradient flex items-center justify-center text-primary-foreground">
                <Target className="w-5 h-5" />
              </span>
              Our Mission
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To improve lives through accessible, science-backed nutrition by providing
              personalized wellness solutions that empower individuals to take control of their
              health, no matter where they are in the world.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-card p-8 shadow-elevated"
          >
            <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full hero-gradient flex items-center justify-center text-primary-foreground">
                <Eye className="w-5 h-5" />
              </span>
              Our Vision
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To become the leading global wellness distribution partner, trusted by millions for
              delivering transformative health products with compassion, integrity, and proven
              results.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl bg-card p-8 text-center shadow-elevated hover:shadow-2xl transition-shadow"
            >
              <div className="w-14 h-14 mx-auto rounded-full hero-gradient flex items-center justify-center text-primary-foreground mb-5">
                <v.icon className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-3">{v.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
