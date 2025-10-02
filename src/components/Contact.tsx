import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const contactInfo = [
  {
    icon: MapPin,
    title: "Besøk Oss",
    content: "Storgata 15, 4612 Kristiansand",
  },
  {
    icon: Clock,
    title: "Åpningstider",
    content: "Man-Fre: 11:00-22:00\nLør-Søn: 12:00-23:00",
  },
  {
    icon: Phone,
    title: "Ring Oss",
    content: "+47 123 45 678",
  },
  {
    icon: Mail,
    title: "E-post",
    content: "kontakt@deladela.no",
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
            Kontakt Oss
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Vi gleder oss til å ønske deg velkommen. Bestill bord i dag.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card">
                  <div className="flex flex-col items-center">
                    <div className="mb-4 p-3 rounded-full bg-primary/10">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-inter font-semibold text-card-foreground mb-2">
                      {info.title}
                    </h3>
                    <p className="font-inter text-sm text-muted-foreground whitespace-pre-line">
                      {info.content}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Card className="p-12 max-w-2xl mx-auto bg-gradient-hero">
            <h3 className="font-playfair text-3xl font-bold text-primary-foreground mb-4">
              Bestill Bord
            </h3>
            <p className="font-inter text-primary-foreground/90 mb-8">
              Ring oss eller send en e-post for å reservere ditt bord. Vi anbefaler å bestille i
              god tid, spesielt i helgene.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-inter"
                asChild
              >
                <a href="tel:+4712345678">Ring Nå</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 font-inter backdrop-blur-sm"
                asChild
              >
                <a href="mailto:kontakt@deladela.no">Send E-post</a>
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
