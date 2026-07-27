import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft,
  Github,
  ExternalLink
} from "lucide-react";
import { Link } from "react-router";

export default function Projects() {
  const projects = [
    {
      title: "Atlas", 
      description: "Distributed sports analytics platform that ingests live and historical NBA play-by-play events for real-time game analytics and prediction workflows.",
      image: "/images/atlas.png",
      tags: ["Go", "Redis", "PostgreSQL", "Docker"],
      repo: "https://github.com/aaditghai/atlas",
      demo: ""
    },
    {
      title: "Catalyst", 
      description: "Autonomous investment committee coordinating AI agents across fundamentals, valuation, and risk to generate cited investment research memos.",
      image: "/images/catalyst.png",
      tags: ["Python", "FastAPI", "Next.js", "PostgreSQL", "Temporal"],
      repo: "",
      demo: ""
    },
    {
      title: "Watchly", 
      description: "Social platform to post about your favorite movies and get AI movie recommendations based on your mood! ",
      image: "/images/watchly.png",
      tags: ["React", "TypeScript", "Supabase", "PostgreSQL", "Vite"],
      repo: "https://github.com/aaditghai/watchlyweb",
      demo: "https://watchlyweb.netlify.app/"
    },
    {
      title: "AI Referee for Next Play",
      description: "Real-time AI-powered referee system for sports games using computer vision and machine learning to make accurate calls.",
      image: "https://media.licdn.com/dms/image/v2/D4D22AQH7IpNumR0OiA/feedshare-shrink_800/B4DZYW0XgpG8Ak-/0/1744139549094?e=2147483647&v=beta&t=4bUb7jSG5MoTnSSn3UsErzFfwupHJMnkDx-_8M8UAvE",
      tags: ["Python", "Computer Vision", "TensorFlow", "React"],
      repo: "",
      demo: "https://apps.apple.com/us/app/next-play-sports/id6742383037?platform=iphone"
    },
    {
      title: "SnapCode",
      description: "Converts UI screenshots into HTML/CSS/JS code",
      image: "/images/snapcode.png",
      tags: ["React", "Hugging Face", "RESTful APIs", "Python"],
      repo: "https://github.com/aaditghai/snapcode-fullstack",
      demo: "https://snap2code.netlify.app/"
    },
    {
      title: "NBA Fantasy Guide",
      description: "Builds your NBA fantasy team",
      image: "/images/logo.png",
      tags: ["Swift", "CoreData", "MVVM", "Project Management"],
      repo: "https://github.com/aaditghai/NBAFantasyGuide",
      demo: "https://drive.google.com/file/d/1NBNUQa4azEGqfgT28IjggxdNQWJIiVUe/view?usp=sharing"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/90 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-xl font-semibold text-foreground">Projects</h1>
          <div></div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Projects</h2>
          <p className="max-w-xl mx-auto text-muted-foreground">
            A collection of some of my recent projects showcasing different skills and technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="rounded-t-md w-full object-cover h-64" 
                />
              </CardHeader>
              <CardContent>
                <CardTitle>{project.title}</CardTitle>
                <p className="mb-3 text-sm text-muted-foreground">{project.description}</p>
                <div className="mb-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-4">
                <Button
                variant="outline"
                className="flex items-center space-x-2"
                disabled={!project.repo}
                title={project.repo ? "View GitHub" : "GitHub Not Available"}
                onClick={() => {
                  if (project.repo) {
                    window.open(project.repo, "_blank", "noopener,noreferrer");
                  }
                }}
              >
                <Github size={16} />
                <span>GitHub</span>
              </Button>

              <Button
                variant="outline"
                className="flex items-center space-x-2"
                disabled={!project.demo}
                title={project.demo ? "View Demo" : "Demo Not Available"}
                onClick={() => {
                  if (project.demo) {
                    window.open(project.demo, "_blank", "noopener,noreferrer");
                  }
                }}
              >
                <ExternalLink size={16} />
                <span>Demo</span>
              </Button>

            </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
