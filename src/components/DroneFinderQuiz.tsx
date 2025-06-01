
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Camera, Zap, Users, Building } from 'lucide-react';

const DroneFinderQuiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "What's your primary use case?",
      options: [
        { value: "photography", label: "Photography & Videography", icon: Camera },
        { value: "racing", label: "Racing & Acrobatics", icon: Zap },
        { value: "recreation", label: "Recreational Flying", icon: Users },
        { value: "commercial", label: "Commercial/Industrial", icon: Building }
      ]
    },
    {
      question: "What's your experience level?",
      options: [
        { value: "beginner", label: "Complete Beginner" },
        { value: "intermediate", label: "Some Experience" },
        { value: "advanced", label: "Advanced Pilot" },
        { value: "professional", label: "Professional User" }
      ]
    },
    {
      question: "What's your budget range?",
      options: [
        { value: "budget", label: "Under £1,000" },
        { value: "mid", label: "£1,000 - £3,000" },
        { value: "high", label: "£3,000 - £6,000" },
        { value: "premium", label: "£6,000+" }
      ]
    }
  ];

  const getRecommendation = () => {
    const [useCase, experience, budget] = answers;
    
    if (useCase === "photography" && budget === "premium") {
      return {
        name: "DJI Mavic 3 Pro",
        reason: "Perfect for professional photography with Hasselblad camera",
        features: ["4/3 CMOS Camera", "46-min Flight Time", "Omnidirectional Obstacle Sensing"]
      };
    } else if (useCase === "recreation" || experience === "beginner") {
      return {
        name: "DJI Mini 4K",
        reason: "Ideal starter drone with great value and easy controls",
        features: ["4K Video Recording", "Lightweight Design", "Easy to Fly"]
      };
    } else if (useCase === "racing") {
      return {
        name: "Racing Drone X1",
        reason: "Built for speed and agility with FPV capabilities",
        features: ["High-Speed Racing", "FPV Goggles Included", "Aerobatic Performance"]
      };
    } else {
      return {
        name: "Industrial Drone Pro",
        reason: "Professional-grade for commercial applications",
        features: ["Dual Operator Control", "Extended Range", "Industrial Sensors"]
      };
    }
  };

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers([]);
    setShowResult(false);
  };

  if (showResult) {
    const recommendation = getRecommendation();
    
    return (
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-slate-900">
                Perfect Match Found! 🎯
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div>
                <h3 className="text-xl font-bold text-blue-600 mb-2">{recommendation.name}</h3>
                <p className="text-slate-600">{recommendation.reason}</p>
              </div>
              
              <div className="space-y-2">
                {recommendation.features.map((feature, index) => (
                  <div key={index} className="flex items-center justify-center text-sm text-slate-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {feature}
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  View This Drone <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" onClick={resetQuiz}>
                  Take Quiz Again
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Find Your Perfect Drone
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Answer a few quick questions and we'll recommend the ideal drone for your needs.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto shadow-xl animate-fade-in delay-200">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">
                {questions[currentStep].question}
              </CardTitle>
              <span className="text-sm text-slate-500">
                {currentStep + 1} of {questions.length}
              </span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {questions[currentStep].options.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full justify-start text-left h-auto p-4 hover:bg-blue-50 hover:border-blue-300"
                onClick={() => handleAnswer(option.value)}
              >
                <div className="flex items-center">
                  {option.icon && <option.icon className="h-5 w-5 mr-3 text-blue-600" />}
                  <span>{option.label}</span>
                </div>
              </Button>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DroneFinderQuiz;
