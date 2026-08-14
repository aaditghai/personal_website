import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download,
  ExternalLink,
  MapPin,
  Calendar,

} from "lucide-react";
import { Link } from "react-router";
import { useState, useEffect } from "react";

export default function Landing() {
  // Typewriter effect for the main heading
  const [displayText, setDisplayText] = useState("");
  const fullText = "Hey, I'm Aadi!";
  
  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  // Languages & tech from resume
  const languages = [
    "Python", "C++", "Go", "TypeScript/JavaScript", "Ruby", "Java", "SQL"
  ];

  const additionalTech = [
    "Docker", "Kubernetes", "PostgreSQL", "Redis", "AWS", "FastAPI",
    "PyTorch", "Pandas", "NumPy", "Ruby on Rails", "CI/CD", "Git", "React", "Next.js"
  ];

  // Sample projects data
  const featuredProjects = [
    {
      title: "Atlas",
      description: "Distributed sports analytics platform that ingests live and historical NBA play-by-play events for real-time game analytics and prediction workflows.",
      image: "/images/atlas.png",
      tags: ["Go", "Redis", "PostgreSQL", "Docker"],
      link: "/projects"
    },
    {
      title: "Mercury",
      description: "Crypto asset exchange with a Rust matching engine, in-memory order book, and pre-trade risk checks sustaining 100K+ orders/sec.",
      image: "/images/mercury.png",
      tags: ["Rust", "Matching Engine", "Order Book", "Concurrency"],
      link: "/projects"
    },
    {
      title: "SnapCode",
      description: "Converts UI screenshots into HTML/CSS/JS code",
      image: "/images/snapcode.png",
      tags: ["React", "Hugging Face", "RESTful APIs", "Python"],
      link: "/projects"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="fixed top-0 w-full bg-background/90 backdrop-blur-sm border-b z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">Aadi Ghai</div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-foreground hover:text-muted-foreground transition-colors">Home</a>
            <Link to="/about" className="text-foreground hover:text-muted-foreground transition-colors">About</Link>
            <Link to="/projects" className="text-foreground hover:text-muted-foreground transition-colors">Projects</Link>
            <Link to="/contact" className="text-foreground hover:text-muted-foreground transition-colors">Contact</Link>
          </nav>
          <Button size="sm" className="bg-black hover:bg-gray-800 text-white border border-black">
            <a href="https://drive.google.com/file/d/1pIHGd8fzktt_W_mntWld7yjnt_C8estt/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center text-white">
              <Download className="w-4 h-4 mr-2" />
              Resume
            </a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl font-bold mb-6">
                <span className="text-muted-foreground">{displayText}</span>
                <span className="animate-pulse">|</span>
              </h1>
              <h2 className="text-3xl font-semibold mb-4 text-foreground">
                Computer Science & Economics Student
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                University of Michigan student passionate about using data to solve complex problems. 
                Currently working as a Backend Software Engineer Intern at PrizePicks, where I'm building 
                real-time systems for millions of users.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-black hover:bg-gray-800 text-white border border-black">
                  <Link to="/projects" className="flex items-center text-white">
                    View My Work
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" className="bg-black hover:bg-gray-800 text-white border border-black">
                  <a href="https://drive.google.com/file/d/1pIHGd8fzktt_W_mntWld7yjnt_C8estt/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center text-white">
                    <Download className="w-4 h-4 mr-2" />
                    Resume
                  </a>
                </Button>
              </div>


            </motion.div>

            {/* Right side - Profile image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <img
                  src="/images/landingpic.png"
                  alt="Aadi Ghai"
                  className="w-80 h-80 rounded-full object-cover shadow-2xl"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-muted/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
            <p className="text-lg text-muted-foreground">
              Backend, distributed systems, and full-stack technologies I use most
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Programming Languages */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6">Programming Languages</h3>
              <div className="flex flex-wrap gap-3">
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="inline-block bg-gray-100 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 text-sm">
                      {lang}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Additional Technologies */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6">Frameworks, Tools, and Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {additionalTech.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="inline-block bg-gray-100 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 text-sm">
                      {tech}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Education & Experience */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-muted-foreground" />
                  <span>University of Michigan, Ann Arbor</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-muted-foreground" />
                  <span>Graduating May 2028</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground">
              A showcase of my work
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="ghost" size="sm" className="w-full" asChild>
                      <Link to={project.link}>
                        Learn More
                        <ExternalLink className="w-3 h-3 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white border border-black" asChild>
              <Link to="/projects" className="text-white">
                View All Projects
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
            <p className="text-lg text-muted-foreground mb-8">
              I'm always interested in new opportunities and collaborations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-muted-foreground" />
                  <a href="mailto:aaditylerghai@gmail.com" className="hover:text-muted-foreground transition-colors">
                    aaditylerghai@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Github className="w-5 h-5 text-muted-foreground" />
                  <a href="https://github.com/aaditghai" target="_blank" rel="noopener noreferrer" className="hover:text-muted-foreground transition-colors">
                    github.com/aaditghai
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="w-5 h-5 text-muted-foreground" />
                  <a href="https://linkedin.com/in/aadighai" target="_blank" rel="noopener noreferrer" className="hover:text-muted-foreground transition-colors">
                    linkedin.com/in/aadighai
                  </a>
                </div>
              </div>
              
              <div className="mt-8">
                <Button size="lg" className="bg-black hover:bg-gray-800 text-white border border-black" asChild>
                  <a href="https://drive.google.com/file/d/1pIHGd8fzktt_W_mntWld7yjnt_C8estt/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center text-white">
                    <Download className="w-4 h-4 mr-2" />
                    Resume
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Quick Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Interested in collaborating or have questions about my work? 
                    Feel free to reach out through any of the channels listed, 
                    or visit my contact page for a detailed form.
                  </p>
                  <Button className="w-full bg-black hover:bg-gray-800 text-white border border-black" asChild>
                    <Link to="/contact" className="text-white">
                      Send Detailed Message
                      <Mail className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}