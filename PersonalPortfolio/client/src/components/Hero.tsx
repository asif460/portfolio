import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SocialLinks from "./SocialLinks";

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-4">
            Hi, I'm Asif Karim
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            Full Stack Developer & UI/UX Enthusiast
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" onClick={scrollToContact}>
              Get in Touch
            </Button>
            <SocialLinks />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Replace this image with your profile photo by placing it in the assets folder */}
          <img
            src="/src/assets/profile.jpg" /* Add your photo with the name 'profile.jpg' */
            alt="Profile Photo"
            className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover mx-auto shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}