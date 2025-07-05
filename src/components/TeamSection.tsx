
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Github, Linkedin } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Lead Data Scientist",
      bio: "PhD in Machine Learning with 10+ years in healthcare AI research",
      email: "sarah.johnson@healthai.com",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Michael Chen",
      role: "Healthcare AI Engineer",
      bio: "Specialist in medical data analysis and predictive modeling",
      email: "michael.chen@healthai.com",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Medical Advisor",
      bio: "Board-certified physician specializing in preventive medicine",
      email: "emily.rodriguez@healthai.com",
      linkedin: "#",
      github: "#"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Team
          </h2>
          <p className="text-xl text-gray-600">
            Meet the experts behind our healthcare AI innovation
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-green-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <CardTitle className="text-xl text-gray-900">{member.name}</CardTitle>
                <p className="text-blue-600 font-semibold">{member.role}</p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6 leading-relaxed">{member.bio}</p>
                <div className="flex justify-center gap-4">
                  <a 
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-full flex items-center justify-center transition-colors"
                  >
                    <Mail className="w-4 h-4 text-gray-600 hover:text-blue-600" />
                  </a>
                  <a 
                    href={member.linkedin}
                    className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-full flex items-center justify-center transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-gray-600 hover:text-blue-600" />
                  </a>
                  <a 
                    href={member.github}
                    className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-full flex items-center justify-center transition-colors"
                  >
                    <Github className="w-4 h-4 text-gray-600 hover:text-blue-600" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Card className="inline-block shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get In Touch</h3>
              <p className="text-gray-600 mb-6">
                Have questions about our research or want to collaborate?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:info@healthai.com"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  Contact Our Team
                </a>
                <a 
                  href="#"
                  className="border border-gray-300 hover:border-blue-300 text-gray-700 px-6 py-3 rounded-lg transition-colors"
                >
                  View Research Papers
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
