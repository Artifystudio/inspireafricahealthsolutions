import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <img src={logo} alt="InspireAfrica" className="h-14 mb-4 brightness-200" />
            <p className="text-sm leading-relaxed opacity-70">
              Your trusted global partner for Nutrika health products and personalized wellness
              solutions.
            </p>
          </div>
          <div>
            <h5 className="font-bold mb-4 text-background">Quick Links</h5>
            <ul className="space-y-2 text-sm opacity-70">
              {["Home", "About", "Services", "Testimonials", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="hover:opacity-100 transition-opacity">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4 text-background">Connect With Us</h5>
            <div className="space-y-2 text-sm opacity-70">
              <a
                href="https://wa.me/256740313736"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-100 transition-opacity"
              >
                WhatsApp: +256 740 313736
              </a>
              <a
                href="https://wa.me/256777368231"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-100 transition-opacity"
              >
                WhatsApp: +256 777 368231
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-background/10 mt-10 pt-6 text-center text-xs opacity-50">
          © {new Date().getFullYear()} InspireAfrica Health Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
