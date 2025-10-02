import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

const menuData = {
  lunch: [
    {
      name: "Gravlaks Smorrebrod",
      description: "Hjemmelaget gravlaks, urtekrem, syltet rødløk",
      price: "185,-",
    },
    {
      name: "Sopp Risotto",
      description: "Ville norske sopp, parmesan, trøffelolje",
      price: "195,-",
    },
    {
      name: "Torsk med Rotgrønnsaker",
      description: "Bakt torsk, sesongrotgrønnsaker, sitronsmør",
      price: "245,-",
    },
  ],
  dinner: [
    {
      name: "Kamskjell Tartare",
      description: "Ferske kamskjell, eple, dill, kaviar",
      price: "295,-",
    },
    {
      name: "Reinsdyr Entrecôte",
      description: "Rosa stekt reinsdyr, bringebærsaus, ertepuré",
      price: "395,-",
    },
    {
      name: "Helstekt Kveite",
      description: "Hel kveite for to, grillet grønnsaker, skalldyrsaus",
      price: "895,-",
    },
  ],
  evening: [
    {
      name: "Ost & Charkuteri",
      description: "Kuratert utvalg av norske oster og spekemat",
      price: "185,-",
    },
    {
      name: "Sjøkreps Paella",
      description: "Norske sjøkreps, safran, aioli",
      price: "245,-",
    },
    {
      name: "Bringebær Panna Cotta",
      description: "Kremet panna cotta, ferske bringebær, mandel",
      price: "125,-",
    },
  ],
};

const Menu = () => {
  const [activeTab, setActiveTab] = useState("lunch");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="menu" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
            Vår Meny
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Menyen endres med sesongene. Her er et utvalg av dagens retter.
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-12 bg-card">
            <TabsTrigger value="lunch" className="font-inter data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Lunsj
            </TabsTrigger>
            <TabsTrigger value="dinner" className="font-inter data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Middag
            </TabsTrigger>
            <TabsTrigger value="evening" className="font-inter data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Kveld
            </TabsTrigger>
          </TabsList>

          {Object.entries(menuData).map(([key, items]) => (
            <TabsContent key={key} value={key}>
              <div className="grid gap-6">
                {items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="font-playfair text-2xl font-semibold text-card-foreground mb-2">
                            {item.name}
                          </h3>
                          <p className="font-inter text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                        <div className="ml-4">
                          <span className="font-inter text-xl font-semibold text-accent">
                            {item.price}
                          </span>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Menu;
