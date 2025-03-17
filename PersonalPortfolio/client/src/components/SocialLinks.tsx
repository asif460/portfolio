import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="flex gap-2">
      <Button variant="outline" size="icon" asChild>
        <a
          href="https://github.com/asif460"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github className="h-4 w-4" />
        </a>
      </Button>
      <Button variant="outline" size="icon" asChild>
        <a
          href="https://www.linkedin.com/in/asif-karim-14b69b242/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-4 w-4" />
        </a>
      </Button>
      <Button variant="outline" size="icon" asChild>
        <a
          href="mailto:asifkarim360@gmail.com"
          aria-label="Email"
        >
          <Mail className="h-4 w-4" />
        </a>
      </Button>
    </div>
  );
}