
import { Brain, Database, Shield, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Machine Learning Models",
      description: "Our system uses advanced Random Forest algorithms for multi-label classification trained on comprehensive health datasets."
    },
    {
      icon: Database,
      title: "BRFSS Dataset",
      description: "Trained on the Heart 2020 BRFSS dataset, containing real-world health and lifestyle data from thousands of participants."
    },
    {
      icon: Activity,
      title: "Lifestyle Analysis",
      description: "Analyzes key indicators including BMI, smoking habits, physical activity, sleep patterns, and demographic factors."
    },
    {
      icon: Shield,
      title: "Predictive, Not Diagnostic",
      description: "Provides early risk assessment to help you make informed decisions about your health and lifestyle choices."
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
            This web app uses machine learning to predict disease risks from the Heart 2020 BRFSS dataset. 
            The model is trained using Random Forest for multi-label classification, analyzing lifestyle and health features.
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
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Key Health Conditions Analyzed
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-red-500">
              <div className="text-red-600 font-semibold text-lg">Heart Disease</div>
              <p className="text-gray-600 text-sm mt-1">Cardiovascular risk assessment</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-blue-500">
              <div className="text-blue-600 font-semibold text-lg">Kidney Disease</div>
              <p className="text-gray-600 text-sm mt-1">Renal function evaluation</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-green-500">
              <div className="text-green-600 font-semibold text-lg">Asthma</div>
              <p className="text-gray-600 text-sm mt-1">Respiratory health analysis</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-purple-500">
              <div className="text-purple-600 font-semibold text-lg">Skin Cancer</div>
              <p className="text-gray-600 text-sm mt-1">Dermatological risk factors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
