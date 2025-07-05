
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertTriangle, Activity } from "lucide-react";

const TryItNow = () => {
  const [formData, setFormData] = useState({
    age: '',
    bmi: '',
    smoking: '',
    physicalActivity: '',
    sleepTime: '',
    alcoholDrinking: '',
    stroke: '',
    diffWalking: ''
  });

  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call - replace with actual backend integration
    setTimeout(() => {
      const mockResults = {
        heartDisease: Math.random() > 0.7 ? 'High' : Math.random() > 0.4 ? 'Medium' : 'Low',
        kidneyDisease: Math.random() > 0.8 ? 'High' : Math.random() > 0.5 ? 'Medium' : 'Low',
        asthma: Math.random() > 0.7 ? 'High' : Math.random() > 0.4 ? 'Medium' : 'Low',
        skinCancer: Math.random() > 0.8 ? 'High' : Math.random() > 0.5 ? 'Medium' : 'Low'
      };
      setResults(mockResults);
      setIsLoading(false);
    }, 2000);
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'High': return 'text-red-600 bg-red-50';
      case 'Medium': return 'text-yellow-600 bg-yellow-50';
      case 'Low': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <section id="try-it-now" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Try It Now
          </h2>
          <p className="text-xl text-gray-600">
            Enter your health information to get a personalized risk assessment
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-blue-600" />
                Health Assessment Form
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="age">Age</Label>
                    <Input
                      id="age"
                      type="number"
                      placeholder="Enter your age"
                      value={formData.age}
                      onChange={(e) => handleInputChange('age', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="bmi">BMI</Label>
                    <Input
                      id="bmi"
                      type="number"
                      step="0.1"
                      placeholder="Enter your BMI"
                      value={formData.bmi}
                      onChange={(e) => handleInputChange('bmi', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label>Smoking Status</Label>
                  <Select onValueChange={(value) => handleInputChange('smoking', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select smoking status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="never">Never Smoked</SelectItem>
                      <SelectItem value="former">Former Smoker</SelectItem>
                      <SelectItem value="current">Current Smoker</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Physical Activity</Label>
                  <Select onValueChange={(value) => handleInputChange('physicalActivity', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select activity level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">No Physical Activity</SelectItem>
                      <SelectItem value="light">Light Activity</SelectItem>
                      <SelectItem value="moderate">Moderate Activity</SelectItem>
                      <SelectItem value="vigorous">Vigorous Activity</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="sleepTime">Average Sleep Hours</Label>
                  <Input
                    id="sleepTime"
                    type="number"
                    placeholder="Hours per night"
                    value={formData.sleepTime}
                    onChange={(e) => handleInputChange('sleepTime', e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label>Alcohol Consumption</Label>
                  <Select onValueChange={(value) => handleInputChange('alcoholDrinking', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select alcohol consumption" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">No Alcohol</SelectItem>
                      <SelectItem value="light">Light Drinker</SelectItem>
                      <SelectItem value="moderate">Moderate Drinker</SelectItem>
                      <SelectItem value="heavy">Heavy Drinker</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled={isLoading}
                >
                  {isLoading ? 'Analyzing...' : 'Get My Risk Score'}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div>
            {results ? (
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-green-600">Your Risk Assessment</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.entries(results).map(([condition, risk]) => (
                    <div key={condition} className="flex justify-between items-center p-3 rounded-lg border">
                      <span className="font-medium text-gray-900 capitalize">
                        {condition.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getRiskColor(risk as string)}`}>
                        {risk} Risk
                      </span>
                    </div>
                  ))}
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-yellow-800 mb-2">Important Disclaimer</h4>
                        <p className="text-sm text-yellow-700">
                          This assessment provides risk predictions only and is not a medical diagnosis. 
                          Always consult with healthcare professionals for proper medical advice and treatment.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="shadow-lg h-full flex items-center justify-center">
                <CardContent className="text-center py-16">
                  <Activity className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">
                    Ready for Your Assessment
                  </h3>
                  <p className="text-gray-500">
                    Fill out the form to receive your personalized health risk analysis
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TryItNow;
