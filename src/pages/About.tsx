import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="border-b bg-white/90 dark:bg-gray-900/90 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 text-gray-600 hover:text-gray-700">
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
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
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
              src="https://media.licdn.com/dms/image/v2/D5603AQGnhpDRHZIR6g/profile-displayphoto-shrink_400_400/B56ZXUbZPxGcAg-/0/1743025745140?e=1755129600&v=beta&t=RABTmOuJuNFNmNfM2Eglst312DGCNV1bPa2HK77KdA4"
              alt="Professional headshot"
              className="w-full h-48 object-cover rounded-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              alt="University campus"
              className="w-full h-48 object-cover rounded-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              alt="Data visualization"
              className="w-full h-48 object-cover rounded-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
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
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
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
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                  <Code className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                  <h4 className="font-semibold">Programming</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Python, R, SQL, JavaScript</p>
                </div>
                <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <BarChart3 className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-semibold">Analytics</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Machine Learning, Statistics</p>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <Database className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <h4 className="font-semibold">Data Engineering</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">ETL, Databases, APIs</p>
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
                    <GraduationCap className="w-6 h-6 text-gray-600" />
                    <span>Education</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold">University of Michigan, Ann Arbor</h3>
                      <p className="text-gray-600 font-medium">Bachelor of Arts in Data Science & Economics</p>
                      <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 mt-2">
                        <MapPin className="w-4 h-4" />
                        <span>Ann Arbor, Michigan</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                        <Calendar className="w-4 h-4" />
                        <span>Expected Graduation: May 2027 | GPA: 3.84</span>
                      </div>
                    </div>
                    
                    <div className="border-l-4 border-gray-600 pl-4">
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
                    <Briefcase className="w-6 h-6 text-gray-600" />
                    <span>Experience</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold">Software & Business Analyst Intern</h3>
                      <p className="text-gray-600 font-medium">Next Play Games</p>
                      <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                        <Calendar className="w-4 h-4" />
                        <span>January 2025 - Present</span>
                      </div>
                      <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-300">
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
                    <Award className="w-6 h-6 text-gray-600" />
                    <span>Achievements</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gray-900 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold">Dean's List</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">University of Michigan (Fall 2023, Winter 2024)</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gray-900 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold">Data Science Projects</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">NBA Analytics, Stock Prediction, Music Recommendation Engine</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gray-900 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold">Technical Skills</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Python, R, SQL, JavaScript, React, Machine Learning</p>
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
          className="text-center mt-16 p-8 bg-gray-50 dark:bg-gray-800 rounded-lg"
        >
          <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm always excited to discuss data science, technology, and potential opportunities. 
            Whether you're looking for a collaborator, intern, or just want to chat about the latest 
            in machine learning, I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">
                Get In Touch
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
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