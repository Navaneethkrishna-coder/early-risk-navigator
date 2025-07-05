
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { AlertTriangle, Activity, BarChart3 } from "lucide-react";

const TryItNow = () => {
  const [formData, setFormData] = useState({
    bmi: '',
    smoking: '',
    alcoholDrinking: '',
    physicalActivity: '',
    sleepTime: [7],
    ageCategory: '',
    sex: ''
  });

  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: string, value: string | number[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call - replace with actual backend integration
    setTimeout(() => {
      const mockResults = {
        heartDisease: Math.random() > 0.7 ? 'High' : Math.random() > 0.4 ? 'Moderate' : 'Low',
        kidneyDisease: Math.random() > 0.8 ? 'High' : Math.random() > 0.5 ? 'Moderate' : 'Low',
        asthma: Math.random() > 0.7 ? 'High' : Math.random() > 0.4 ? 'Moderate' : 'Low',
        skinCancer: Math.random() > 0.8 ? 'High' : Math.random() > 0.5 ? 'Moderate' : 'Low'
      };
      setResults(mockResults);
      setIsLoading(false);
    }, 2000);
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'High': return 'text-red-600 bg-red-50 border-red-200';
      case 'Moderate': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'Low': return 'text-green-600 bg-green-50 border-green-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <section id="try-it-now" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Try the Model
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
                <div>
                  <Label htmlFor="bmi">BMI</Label>
                  <Input
                    id="bmi"
                    type="number"
                    step="0.1"
                    placeholder="Enter your BMI (e.g., 25.5)"
                    value={formData.bmi}
                    onChange={(e) => handleInputChange('bmi', e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label>Do you smoke?</Label>
                  <Select onValueChange={(value) => handleInputChange('smoking', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select smoking status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="No">No</SelectItem>
                      <SelectItem value="Yes">Yes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Do you drink alcohol?</Label>
                  <Select onValueChange={(value) => handleInputChange('alcoholDrinking', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select alcohol consumption" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="No">No</SelectItem>
                      <SelectItem value="Yes">Yes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Do you engage in physical activity?</Label>
                  <Select onValueChange={(value) => handleInputChange('physicalActivity', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select physical activity level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="No">No</SelectItem>
                      <SelectItem value="Yes">Yes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Sleep Time (hours per night): {formData.sleepTime[0]}</Label>
                  <Slider
                    value={formData.sleepTime}
                    onValueChange={(value) => handleInputChange('sleepTime', value)}
                    max={12}
                    min={4}
                    step={1}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label>Age Category</Label>
                  <Select onValueChange={(value) => handleInputChange('ageCategory', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select age category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="18-24">18-24</SelectItem>
                      <SelectItem value="25-29">25-29</SelectItem>
                      <SelectItem value="30-34">30-34</SelectItem>
                      <SelectItem value="35-39">35-39</SelectItem>
                      <SelectItem value="40-44">40-44</SelectItem>
                      <SelectItem value="45-49">45-49</SelectItem>
                      <SelectItem value="50-54">50-54</SelectItem>
                      <SelectItem value="55-59">55-59</SelectItem>
                      <SelectItem value="60-64">60-64</SelectItem>
                      <SelectItem value="65-69">65-69</SelectItem>
                      <SelectItem value="70-74">70-74</SelectItem>
                      <SelectItem value="75-79">75-79</SelectItem>
                      <SelectItem value="80+">80+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Sex</Label>
                  <Select onValueChange={(value) => handleInputChange('sex', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select sex" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled={isLoading}
                >
                  {isLoading ? 'Analyzing...' : 'Predict Risk'}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div>
            {results ? (
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-600">
                    <BarChart3 className="w-5 h-5" />
                    Your Risk Assessment Results
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.entries(results).map(([condition, risk]) => (
                    <div key={condition} className={`flex justify-between items-center p-4 rounded-lg border-2 ${getRiskColor(risk as string)}`}>
                      <span className="font-medium text-gray-900 capitalize">
                        {condition.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm font-bold">
                        {risk} Risk
                      </span>
                    </div>
                  ))}
                  
                  <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4 mt-6">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-yellow-800 mb-2">Important Disclaimer</h4>
                        <p className="text-sm text-yellow-700">
                          This tool is not a medical diagnosis. These are risk predictions based on lifestyle factors. 
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
