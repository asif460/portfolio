import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <a className="text-xl font-bold">Asif Karim</a>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/">
              <a className={location === "/" ? "text-primary" : "text-foreground"}>Home</a>
            </Link>
            <Link href="/blog">
              <a className={location === "/blog" ? "text-primary" : "text-foreground"}>Blog</a>
            </Link>
            <Button variant="outline" size="sm" asChild>
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}