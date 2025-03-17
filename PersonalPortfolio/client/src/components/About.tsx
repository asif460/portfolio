import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          About Me
        </h2>
        <Card>
          <CardContent className="p-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Full Stack Developer with 1 year of experience
              building modern web applications. I specialize in React, Node.js, and
              cloud technologies. My approach combines technical expertise with a
              keen eye for design, creating solutions that are both powerful and
              user-friendly.
            </p>
            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <h3 className="font-bold text-xl mb-2">1+</h3>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-xl mb-2">10+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-xl mb-2">5+</h3>
                <p className="text-muted-foreground">Happy Clients</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}