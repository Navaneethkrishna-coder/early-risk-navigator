
import { Heart, Shield, Database } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold">HealthAI Predictor</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Empowering individuals with AI-driven health insights for early disease prevention 
              and better lifestyle decisions.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Privacy Protected
              </div>
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4" />
                BRFSS Data
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Project</a></li>
              <li><a href="#try-it-now" className="hover:text-blue-400 transition-colors">Try Demo</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Research Papers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">API Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Health Guidelines</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Data Sources</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Use</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 HealthAI Predictor. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Data Source: CDC BRFSS 2020 Dataset
            </p>
          </div>
          
          <div className="mt-6 p-4 bg-gray-800 rounded-lg">
            <h5 className="font-semibold text-yellow-400 mb-2">⚠️ Important Medical Disclaimer</h5>
            <p className="text-gray-300 text-sm leading-relaxed">
              This tool is for educational and informational purposes only. It does not constitute medical advice, 
              diagnosis, or treatment. The predictions are based on statistical models and should not replace 
              professional medical consultation. Always consult with qualified healthcare providers for medical 
              decisions and treatment plans.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
