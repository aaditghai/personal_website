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
      views: "2,847",
      repo: "https://www.nextplaygamesus.com/?srsltid=AfmBOopoIXzBys5i8jD2BFTg8k0is14klNk7xPpouYlYwsHURwO4yzjl"
    },
    {
      title: "NBA Midrange Analysis",
      description: "Statistical analysis of shooting trends in professional basketball",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "Pandas", "Matplotlib", "NBA API"],
      views: "1,847",
      repo: "https://github.com/aadighai/nba-midrange-analysis"
    },
    {
      title: "Stock Price Predictor", 
      description: "LSTM neural network for financial market prediction",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["TensorFlow", "Python", "NumPy", "Yahoo Finance API"],
      views: "2,156",
      repo: "https://github.com/aadighai/stock-price-predictor"
    },
    {
      title: "Music Recommender",
      description: "Hybrid recommendation system with ML algorithms",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Node.js", "Python", "Machine Learning"],
      views: "892",
      repo: "https://github.com/aadighai/music-recommendation-engine"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="border-b bg-white/90 dark:bg-gray-900/90 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 text-gray-600 hover:text-gray-700">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-xl font-semibold">Projects</h1>
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
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of data science, machine learning, and web development projects 
            that showcase my technical skills and problem-solving abilities.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{project.views} views</span>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.repo} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}