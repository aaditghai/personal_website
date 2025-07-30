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

  // Tech stack data for the sliders
  const techStack = [
    { name: "Python", level: 95 },
    { name: "C++", level: 90 },
    { name: "SQL", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "Swift", level: 75 },
    { name: "Java", level: 70 },
    { name: "MATLAB", level: 70 }
  ];

  const additionalTech = [
    "TensorFlow", "React.js", "Nods.js", "REST APIs","HTML/CSS", "Computer Vision", "CI/CD", "AWS Lambda", "NLP", "Tableau", "Supabase"
  ];

  // Sample projects data
  const featuredProjects = [
    {
      title: "Watchly",
      description: "Social platform to post about your favorite movies and get AI movie recommendations based on your mood!",
      image: "data:image/png;base64,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",
      tags: ["React", "TypeScript", "Supabase", "PostgreSQL", "Vite"],
      link: "/projects"
    },
    {
      title: "AI Referee",
      description: "Real-time AI-powered referee system for sports games using computer vision and machine learning to make accurate calls.",
      image: "https://media.licdn.com/dms/image/v2/D4D22AQH7IpNumR0OiA/feedshare-shrink_800/B4DZYW0XgpG8Ak-/0/1744139549094?e=2147483647&v=beta&t=4bUb7jSG5MoTnSSn3UsErzFfwupHJMnkDx-_8M8UAvE",
      tags: ["Python", "Computer Vision", "TensorFlow", "React"],
      link: "/projects"
    },
    {
      title: "SnapCode",
      description: "Converts UI screenshots into HTML/CSS/JS code",
      image: "/public/images/download.png",
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
            <a href="https://drive.google.com/file/d/168I6sfAMzEN-HEG04SbQvHYHs6_Kvw_B/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center text-white">
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
                Data Science & Economics Student
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                University of Michigan student passionate about using data to solve complex problems. 
                Currently working as a Software Engineer Intern at Next Play, where I'm building 
                innovative AI-powered solutions.
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
                  <a href="https://drive.google.com/file/d/168I6sfAMzEN-HEG04SbQvHYHs6_Kvw_B/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center text-white">
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
                  src="https://media.licdn.com/dms/image/v2/D5603AQGnhpDRHZIR6g/profile-displayphoto-shrink_400_400/B56ZXUbZPxGcAg-/0/1743025745140?e=1755129600&v=beta&t=RABTmOuJuNFNmNfM2Eglst312DGCNV1bPa2HK77KdA4"
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
              Proficiency in data science, machine learning, and web development technologies
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
              <div className="space-y-4">
                {techStack.map((tech, index) => (
                  <div key={tech.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{tech.name}</span>
                      <span className="text-sm text-muted-foreground">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="bg-green-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
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
                  <span>Graduating May 2027</span>
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
                  <a href="mailto:aadighai@umich.edu" className="hover:text-muted-foreground transition-colors">
                    aadighai@umich.edu
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
                  <a href="https://drive.google.com/file/d/168I6sfAMzEN-HEG04SbQvHYHs6_Kvw_B/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center text-white">
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