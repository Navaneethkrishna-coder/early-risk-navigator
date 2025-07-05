
import { ArrowRight, User, Brain, BarChart3 } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: User,
      title: "Input Your Data",
      description: "Enter basic lifestyle and health information including BMI, smoking status, physical activity, and sleep patterns.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Brain,
      title: "AI Analysis",
      description: "Our machine learning models process your inputs using advanced Random Forest and XGBoost algorithms.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: BarChart3,
      title: "Risk Assessment",
      description: "Receive personalized risk scores for various chronic diseases with clear explanations and recommendations.",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our simple three-step process provides you with comprehensive health risk insights in minutes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative">
                <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300`}>
                  <step.icon className="w-10 h-10" />
                </div>
                <div className="absolute top-10 left-full w-full hidden md:block">
                  {index < steps.length - 1 && (
                    <div className="flex items-center justify-center">
                      <ArrowRight className="w-6 h-6 text-gray-300 -ml-10" />
                    </div>
                  )}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
              
              <div className="mt-4 text-sm font-semibold text-blue-600">
                Step {index + 1}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            What We Analyze
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Body Mass Index (BMI)",
              "Smoking History",
              "Physical Activity Level",
              "Sleep Duration",
              "Alcohol Consumption",
              "Medical History",
              "Age & Demographics",
              "Mental Health Indicators",
              "Chronic Conditions"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
