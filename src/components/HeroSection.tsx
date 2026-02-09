import { motion } from "framer-motion";
import { Globe, ShieldCheck, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import productImg from "@/assets/nutrika-product.jpg";

const trustBadges = [
  { icon: Globe, label: "Serving Clients Worldwide" },
  { icon: Star, label: "Hundreds of Verified Testimonials" },
  { icon: ShieldCheck, label: "Trusted Nutrika Partner" },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40" />
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center py-16">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary mb-6 tracking-wide uppercase">
            Global Wellness Solutions
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6">
            Delivering Personalized{" "}
            <span className="text-gradient">Nutrition Solutions</span>{" "}
            Worldwide
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
            InspireAfrica Health Solutions partners with Nutrika to bring science-backed,
            personalized health products to individuals across the globe — empowering
            healthier lives, one person at a time.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="https://wa.me/256740313736?text=Hello%2C%20I%20would%20like%20to%20get%20personalized%20wellness%20support"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
            >
              Get Personalized Wellness Support
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-7 py-3.5 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Start Your Health Journey
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6">
            {trustBadges.map((badge, i) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.15 }}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <badge.icon className="w-5 h-5 text-primary" />
                <span>{badge.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Product image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl hero-gradient opacity-20 blur-2xl" />
            <img
              src={productImg}
              alt="Nutrika Health Products"
              className="relative rounded-2xl shadow-elevated max-w-md w-full animate-float"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
