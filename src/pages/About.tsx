import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import soloImage from '/images/solo.png';
import { 
  ArrowLeft,
  GraduationCap,
  Briefcase,
  MapPin,
  Calendar,
  Award,
  Code,
  Database,
  BarChart3
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
            I'm a passionate data science student at the University of Michigan, combining technical skills 
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
              src = {soloImage}
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
                  Growing up, I was always fascinated by patterns and numbers. This curiosity led me to 
                  pursue Data Science at the University of Michigan, where I'm learning to transform 
                  raw data into meaningful insights that drive decision-making.
                </p>
                <p>
                  My passion lies at the intersection of technology and business. I believe that the most 
                  impactful solutions come from understanding both the technical capabilities and the 
                  real-world problems they can solve.
                </p>
                <p>
                  Currently, I'm gaining hands-on experience as a Software & Business Analyst Intern at 
                  Next Play Games, where I'm working on sports analytics platforms and learning how 
                  data science applications work in production environments.
                </p>
              </div>
            </div>

            {/* Skills & Interests */}
            <div>
              <h3 className="text-2xl font-bold mb-4">What Drives Me</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border">
                  <Code className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                  <h4 className="font-semibold">Programming</h4>
                  <p className="text-sm text-muted-foreground">Python, R, SQL, JavaScript</p>
                </div>
                <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border">
                  <BarChart3 className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
                  <h4 className="font-semibold">Analytics</h4>
                  <p className="text-sm text-muted-foreground">Machine Learning, Statistics</p>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border">
                  <Database className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                  <h4 className="font-semibold">Data Engineering</h4>
                  <p className="text-sm text-muted-foreground">ETL, Databases, APIs</p>
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
                      <p className="text-muted-foreground font-medium">Bachelor of Arts in Data Science & Economics</p>
                      <div className="flex items-center space-x-2 text-muted-foreground mt-2">
                        <MapPin className="w-4 h-4" />
                        <span>Ann Arbor, Michigan</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>Expected Graduation: May 2027 | GPA: 3.84</span>
                      </div>
                    </div>
                    
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold mb-2">Relevant Coursework</h4>
                      <div className="grid md:grid-cols-2 gap-2 text-sm">
                        <span>• Data Structures & Algorithms</span>
                        <span>• Statistical Learning</span>
                        <span>• Database Management</span>
                        <span>• Econometrics</span>
                        <span>• Machine Learning</span>
                        <span>• Financial Economics</span>
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
                    <span>Experience</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold">Software & Business Analyst Intern</h3>
                      <p className="text-muted-foreground font-medium">Next Play Games</p>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>January 2025 - Present</span>
                      </div>
                      <ul className="mt-3 space-y-2 text-muted-foreground">
                        <li>• Developing React-based web applications for sports analytics platform</li>
                        <li>• Building Python data processing pipelines for real-time game statistics</li>
                        <li>• Collaborating with cross-functional teams on product development</li>
                        <li>• Implementing data visualization tools for sports performance metrics</li>
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
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="w-6 h-6 text-muted-foreground" />
                    <span>Achievements</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold">Dean's List</h4>
                        <p className="text-sm text-muted-foreground">University of Michigan (Fall 2023, Winter 2024)</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold">Data Science Projects</h4>
                        <p className="text-sm text-muted-foreground">NBA Analytics, Stock Prediction, Music Recommendation Engine</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold">Technical Skills</h4>
                        <p className="text-sm text-muted-foreground">Python, R, SQL, JavaScript, React, Machine Learning</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
            I'm always excited to discuss data science, technology, and potential opportunities. 
            Whether you're looking for a collaborator, intern, or just want to chat about the latest 
            in machine learning, I'd love to hear from you.
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