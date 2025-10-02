import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Fish, Globe2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Leaf,
    title: "Sesongbasert",
    description:
      "Vår meny følger naturens rytme. Vi serverer det beste av norske årstider.",
  },
  {
    icon: Fish,
    title: "Fersk Sjømat",
    description:
      "Direkte fra norske fiskere til ditt bord. Ferske råvarer hver dag.",
  },
  {
    icon: Globe2,
    title: "Global Inspirasjon",
    description:
      "Norske ingredienser møter kulinariske teknikker fra hele verden.",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
            Vår Filosofi
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto">
            Hos Deladela handler det om å hedre naturens gaver. Menyen vår endres basert på
            hva bøndene høster og fiskerne fanger. Vi kombinerer norske tradisjoner med
            kulinarisk innovasjon fra hele verden.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="p-8 h-full border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6 p-4 rounded-full bg-primary/10">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-playfair text-2xl font-semibold text-card-foreground mb-4">
                      {feature.title}
                    </h3>
                    <p className="font-inter text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
