import React, { useState, useEffect } from 'react';
import { Shield, Database, Users, Lock, Zap, Globe, ChevronRight, Play, Check, Star } from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Shield,
      title: "Military-Grade Security",
      description: "End-to-end encryption with blockchain immutability",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Database,
      title: "Decentralized Storage",
      description: "No single point of failure, distributed globally",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Patient Ownership",
      description: "You control who accesses your medical data",
      color: "from-green-500 to-teal-500"
    }
  ];

  const stats = [
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "256-bit", label: "Encryption Standard" },
    { number: "50+", label: "Healthcare Partners" },
    { number: "10K+", label: "Patients Protected" }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Medical Officer, Metro Health",
      content: "HealthyChain has revolutionized how we manage patient data. The security and accessibility are unmatched.",
      avatar: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Michael Rodriguez",
      role: "Patient",
      content: "Finally, I have complete control over my medical records. Sharing with new doctors is seamless and secure.",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Dr. Emily Watson",
      role: "Cardiologist",
      content: "The interoperability between different healthcare systems is incredible. Patient care has never been more coordinated.",
      avatar: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-xl">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              HealthyChain
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#security" className="text-gray-300 hover:text-white transition-colors">Security</a>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
            <button
              onClick={onGetStarted}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
              <Zap className="h-4 w-4 text-yellow-400" />
              <span className="text-sm text-gray-300">Powered by Blockchain Technology</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Your Health Data,
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Your Control
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Experience the future of healthcare with our decentralized medical records system. 
              Secure, private, and accessible from anywhere in the world.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button
                onClick={onGetStarted}
                className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Start Your Journey</span>
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group flex items-center space-x-3 text-white hover:text-blue-300 transition-colors">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 group-hover:bg-white/30 transition-colors">
                  <Play className="h-6 w-6" />
                </div>
                <span className="text-lg">Watch Demo</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Revolutionary Features
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Built with cutting-edge technology to ensure your medical data is secure, accessible, and truly yours.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105 ${
                  activeFeature === index ? 'ring-2 ring-blue-500/50' : ''
                }`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Unbreakable Security
                </span>
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Your medical data is protected by the same cryptographic principles that secure billions in cryptocurrency.
              </p>
              
              <div className="space-y-6">
                {[
                  "256-bit AES encryption for all data",
                  "Blockchain immutability prevents tampering",
                  "Zero-knowledge proofs for privacy",
                  "Multi-signature access controls"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="bg-green-500 rounded-full p-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className="h-16 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-lg animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    ></div>
                  ))}
                </div>
                <div className="text-center">
                  <Lock className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <p className="text-gray-300">Your data, encrypted and secure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Trusted by Healthcare Leaders
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl p-12 backdrop-blur-sm border border-white/10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Ready to Take Control?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of patients and healthcare providers who trust HealthyChain with their most sensitive data.
            </p>
            <button
              onClick={onGetStarted}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-12 py-4 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-xl">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                HealthyChain
              </span>
            </div>
            <div className="flex items-center space-x-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
              <div className="flex items-center space-x-1">
                <Globe className="h-4 w-4" />
                <span className="text-sm">Secured by Blockchain</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};