import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Floating Gradient Shapes */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        animate={{
          y: [0, -40, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
            Deladela
          </h1>
          <p className="font-inter text-xl md:text-2xl text-primary-foreground/90 mb-4 max-w-2xl mx-auto">
            Naturens rytme møter kulinarisk lidenskap
          </p>
          <p className="font-inter text-lg text-primary-foreground/80 mb-12 max-w-xl mx-auto">
            Opplev sesongbaserte norske ingredienser med global kulinarisk inspirasjon
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("menu")}
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-inter text-lg px-8 py-6"
            >
              Se Menyen
            </Button>
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-2 border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 font-inter text-lg px-8 py-6 backdrop-blur-sm"
            >
              Bestill Bord
            </Button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <button
            onClick={() => scrollToSection("about")}
            className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          >
            <ChevronDown size={40} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
