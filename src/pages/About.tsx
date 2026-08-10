import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft,
  GraduationCap,
  Briefcase,
  MapPin,
  Calendar,
  Network,
  Zap,
  Sparkles
} from "lucide-react";
import { Link } from "react-router";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/90 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-xl font-semibold">About</h1>
          <div></div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate Computer Science and Economics student at the University of Michigan, combining technical skills 
            with business acumen to solve real-world problems through data-driven insights.
          </p>
        </motion.div>

        {/* Photo Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img
              src = "/images/solo.png"
              alt="Professional headshot"
              className="w-full h-48 object-cover rounded-lg"
            />
            <img
              src="/images/family.png"
              alt="University campus"
              className="w-full h-48 object-cover rounded-lg"
            />
            <img
              src="/images/michFriends.png"
              alt="Data visualization"
              className="w-full h-48 object-cover rounded-lg"
            />
            <img
              src="/images/homeFriends.png"
              alt="Analytics workspace"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                I’ve always been drawn to patterns, whether in sports, behavior, or systems, and curious about what drives outcomes beneath the surface. That mindset naturally pulled me toward data, but also toward the bigger picture: incentives, decisions, and how people interact with products and information.
                </p>
                <p>
                At Michigan, I began building the technical foundation to work with data at scale by writing models, building tools, and exploring real-world applications. Along the way, I found myself gravitating toward projects that lived at the intersection of technology and people. I didn’t just want to answer questions, I wanted to build things that solved meaningful problems, were intuitive to use, and helped others make better decisions.

                </p>
                <p>
                That blend of analytical thinking, product curiosity, and a drive to build led me into roles across software, data, and strategy. Most recently, I’ve been working at PrizePicks as a Backend Software Engineer Intern, building real-time event-driven systems that power rewards and messaging for millions of users.
                </p>
                <p>
                Now, I’m focused on projects where I can work end-to-end: from asking the right questions, to designing and building the solution, to seeing how it impacts users in the real world. I’m also intentional about using AI to optimize my workflow, speeding up research, iteration, and decision-making so I can spend more time on the problems that matter.
                </p>
              </div>
            </div>

            {/* Focus Areas */}
            <div>
              <h3 className="text-2xl font-bold mb-4">What I'm Focused On</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border">
                  <Network className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                  <h4 className="font-semibold">Distributed Systems</h4>
                  <p className="text-sm text-muted-foreground">Event-driven pipelines, workers, and scalable backends</p>
                </div>
                <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border">
                  <Zap className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
                  <h4 className="font-semibold">Real-time Backend</h4>
                  <p className="text-sm text-muted-foreground">Low-latency messaging, streams, and live data systems</p>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border">
                  <Sparkles className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                  <h4 className="font-semibold">AI-Assisted Building</h4>
                  <p className="text-sm text-muted-foreground">Using AI to ship faster and solve harder problems</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education & Experience */}
          <div className="space-y-8">
            {/* Education Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <GraduationCap className="w-6 h-6 text-muted-foreground" />
                    <span>Education</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold">University of Michigan, Ann Arbor</h3>
                      <p className="text-muted-foreground font-medium">Bachelor of Science in Computer Science and Economics</p>
                      <div className="flex items-center space-x-2 text-muted-foreground mt-2">
                        <MapPin className="w-4 h-4" />
                        <span>Ann Arbor, Michigan</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>Expected Graduation: May 2028 | GPA: 3.7</span>
                      </div>
                    </div>
                    
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold mb-2">Relevant Coursework</h4>
                      <div className="grid md:grid-cols-2 gap-2 text-sm">
                        <span>• Data Structures and Algorithms</span>
                        <span>• Machine Learning</span>
                        <span>• Web Systems</span>
                        <span>• Computer Organization</span>
                        <span>• Theory of Computation</span>
                        <span>• Linear Algebra</span>
                        <span>• Discrete Mathematics</span>
                        <span>• Probability</span>
                        <span>• Object-Oriented Programming</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Experience Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Briefcase className="w-6 h-6 text-muted-foreground" />
                    <span>Most Recent Experience</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-start gap-4 mb-3">
                        <img
                          src="https://assets.actionnetwork.com/159609_PrizePicks-Logo.webp"
                          alt="PrizePicks logo"
                          className="h-10 w-auto object-contain shrink-0"
                        />
                        <div>
                          <h3 className="text-xl font-semibold">Backend Software Engineer Intern</h3>
                          <p className="text-muted-foreground font-medium">PrizePicks</p>
                          <div className="flex items-center space-x-2 text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span>May 2026 - Present</span>
                          </div>
                        </div>
                      </div>
                      <ul className="mt-3 space-y-2 text-muted-foreground">
                        <li>• Owned development of end-to-end event-driven rewards synchronization system using Ruby on Rails, React Native, Sidekiq, and Centrifugo, replacing delayed polling to reduce latency from 5s to under 250ms for millions of users</li>
                        <li>• Published a reusable Ruby gem that standardized real-time messaging patterns across 5+ engineering teams, simplifying WebSocket adoption while reducing redundant API traffic and backend overhead across services</li>
                        <li>• Conducted load testing and performance validation of Kubernetes-hosted real-time messaging infrastructure, validating scalability and fault tolerance under 10,000+ concurrent connections prior to platform-wide rollout</li>
                      </ul>
                    </div>
                  </div>
                  
                </CardContent>
              </Card>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >

            </motion.div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16 p-8 bg-white dark:bg-black rounded-lg border border-border"
        >
          <h3 className="text-2xl font-bold mb-4 text-foreground">Let's Connect</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm always excited to discuss new technology and potential opportunities. 
            Whether you're looking for a collaborator, intern, or just want to chat, I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
  <Button asChild size="lg" className="bg-black dark:bg-transparent text-white dark:text-white border-0 dark:border dark:border-border hover:bg-gray-800 dark:hover:bg-gray-800">
    <Link to="/contact">
      Get In Touch
    </Link>
  </Button>
  <Button variant="outline" size="lg" asChild className="bg-black dark:bg-transparent text-white dark:text-white border-0 dark:border dark:border-border hover:bg-gray-800 dark:hover:bg-gray-800">
    <Link to="/projects">
      View My Work
    </Link>
  </Button>
</div>
        </motion.div>
      </div>
    </div>
  );
}