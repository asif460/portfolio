import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Getting Started with Web Development",
    date: "March 8, 2024",
    summary: "My journey into web development and the key lessons I've learned along the way.",
    readTime: "5 min read",
    slug: "getting-started-web-dev"
  },
  {
    title: "Building Modern React Applications",
    date: "March 5, 2024",
    summary: "Best practices and tips for creating scalable React applications.",
    readTime: "7 min read",
    slug: "modern-react-apps"
  },
  {
    title: "The Power of JavaScript",
    date: "March 1, 2024",
    summary: "Exploring JavaScript features that make it a powerful language for web development.",
    readTime: "6 min read",
    slug: "power-of-javascript"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Blog & Insights
          </h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-sm text-muted-foreground">{post.date}</span>
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground mb-4">{post.summary}</p>
                    <Button variant="outline" className="w-full" asChild>
                      <a href={`/blog/${post.slug}`}>
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
