
import { Brain, Database, Shield, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Machine Learning Models",
      description: "Our system uses advanced Random Forest and XGBoost algorithms trained on comprehensive health datasets."
    },
    {
      icon: Database,
      title: "BRFSS Dataset",
      description: "Trained on the Heart 2020 BRFSS dataset, containing real-world health and lifestyle data from thousands of participants."
    },
    {
      icon: Activity,
      title: "Lifestyle Analysis",
      description: "Analyzes key indicators including BMI, smoking habits, physical activity, sleep patterns, and medical history."
    },
    {
      icon: Shield,
      title: "Predictive, Not Diagnostic",
      description: "Provides early risk assessment to help you make informed decisions about your health and lifestyle."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About the Project
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered health risk prediction system leverages machine learning to analyze lifestyle 
            and health indicators, providing early insights into chronic disease risks.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Key Health Conditions Analyzed
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-red-500 font-semibold">Heart Disease</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-blue-500 font-semibold">Kidney Disease</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-green-500 font-semibold">Asthma</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-purple-500 font-semibold">Skin Cancer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
