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
      title: "AI Referee for Next Play",
      description: "Real-time AI-powered referee system for sports games using computer vision and machine learning to make accurate calls.",
      image: "https://media.licdn.com/dms/image/v2/D4D22AQH7IpNumR0OiA/feedshare-shrink_800/B4DZYW0XgpG8Ak-/0/1744139549094?e=2147483647&v=beta&t=4bUb7jSG5MoTnSSn3UsErzFfwupHJMnkDx-_8M8UAvE",
      tags: ["Python", "Computer Vision", "TensorFlow", "React"],
      repo: "https://www.nextplaygamesus.com/?srsltid=AfmBOopoIXzBys5i8jD2BFTg8k0is14klNk7xPpouYlYwsHURwO4yzjl",
      demo: ""
    },
    {
      title: "NBA Midrange Analysis",
      description: "Statistical analysis of shooting trends in professional basketball",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "Pandas", "Matplotlib", "NBA API"],
      repo: "https://github.com/aadighai/nba-midrange-analysis",
      demo: ""
    },
    {
      title: "Watchly", 
      description: "Social platform to post about your favorite movies and get AI movie recommendations based on your mood! ",
      image: "data:image/png;base64,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",
      tags: ["React", "TypeScript", "Supabase", "PostgreSQL", "Vite"],
      repo: "https://github.com/aaditghai/watchlyweb",
      demo: "https://watchlyweb.netlify.app/"
    },
    {
      title: "Music Recommender",
      description: "Hybrid recommendation system with ML algorithms",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Node.js", "Python", "Machine Learning"],
      repo: "https://github.com/aadighai/music-recommendation-engine",
      demo: ""
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
                  className="rounded-t-md w-full object-cover h-48" 
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
