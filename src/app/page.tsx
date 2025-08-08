// import React from "react";
// import Layout from "@/components/Layout";
// import Home from "@/components/landingpage/Home";
// import About from "@/components/landingpage/About";
// import Dashboard from "@/components/landingpage/Dashboard";
// import Login from "@/components/landingpage/Login";


// export default function HomePage() {
//   return (
//     <Layout>
//       <Home />
//       <About />
//       <Dashboard />
//       <Login />
//     </Layout>
//   );
// }
// import { Heart, Mail } from "lucide-react";
// import ContactForm from "@/components/ContactForm";
// // import alphaGroupsLogo from "@/assets/alpha-groups-logo.png";
// import Image from "next/image";

// const Index = () => {
//   return (
//     <div className="min-h-screen bg-gradient-bg">
//       {/* Header */}
//       <header className="py-8 px-4">
//         <div className="container mx-auto text-center">
//           {/* <Image 
//             src={alphaGroupsLogo} 
//             alt="Alpha Groups Logo" 
//             className="mx-auto h-16 w-auto mb-4"
//           /> */}
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="px-4 pb-16">
//         <div className="container mx-auto max-w-4xl">
//           {/* Hero Section */}
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-soft">
//               <Heart className="w-4 h-4 fill-current" />
//               We're Redesigning – Just for You!
//             </div>
            
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
//                We're Redesigning –<br />
//               <span className="bg-gradient-warm bg-clip-text text-transparent">
//                 Just for You!
//               </span>
//             </h1>
            
//             <div className="space-y-6 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
//               <p>
//                 We're working on a brand-new version of the Alphagroups website — with a better look, 
//                 smoother navigation, and everything you love, made even better.
//               </p>
              
//               <p>
//                 Some parts of the site might be down for a little while, but we're still here and happy to help!
//               </p>
              
//               <p>
//                 If you have any questions or need assistance, you can reach out through the form below — 
//                 or simply mail us at{" "}
//                 <a 
//                   href="mailto:alphagroups1997@gmail.com" 
//                   className="text-primary hover:underline font-medium transition-colors"
//                 >
//                   alphagroups1997@gmail.com
//                 </a>
//                 . We'd love to hear from you! 😊
//               </p>
//             </div>
//           </div>

//           {/* Contact Form Section */}
//           <div className="mb-16">
//             <ContactForm />
//           </div>

//           {/* Footer Message */}
//           <div className="text-center">
//             <div className="inline-block bg-card/50 backdrop-blur-sm rounded-xl p-8 shadow-soft border border-border/20">
//               <p className="text-lg font-medium text-foreground">
//                 ✨ Thank you for your patience and continued support.{" "}
//                 <span className="text-primary font-semibold">
//                   Exciting things are on the way!
//                 </span>
//               </p>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Index;

"use client";

import React, { useState } from 'react';
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
// import { useToast } from "@/hooks/use-toast";
import { 
  Menu, 
  X, 
  ChevronRight, 
  BookOpen, 
  Building, 
  Package, 
  MapPin, 
  Users, 
  Calendar,
  Mail,
  Phone,
  MessageSquare,
  Play,
  Star
} from 'lucide-react';

// Import images
// import heroImage from '@/assets/hero-stem-lab.jpg';
// import constructionImage from '@/assets/construction-project.jpg';
// import bulkSupplyImage from '@/assets/bulk-supply.jpg';
// import testimonialImage from '@/assets/testimonial-principal.jpg';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  

  const projects = [
    {
      id: 1,
      title: "Smart STEM Lab - Delhi Government Schools",
      description: "Deployed 15 fully equipped STEM labs with robotics kits, IoT sensors, and custom LMS across government schools in Delhi.",
      // image: heroImage,
      location: "New Delhi",
      studentsImpacted: 500,
      year: 2023,
      fullDescription: "This comprehensive project involved setting up 15 state-of-the-art STEM laboratories across government schools in Delhi. Each lab was equipped with:\n\n• Advanced robotics kits for hands-on learning\n• IoT sensors for real-time data collection\n• Custom Learning Management System (LMS)\n• Teacher training programs\n• Curriculum development support\n\nThe project has successfully transformed the learning experience for over 500 students, introducing them to modern STEM concepts and preparing them for future careers in technology and innovation."
    },
    {
      id: 2,
      title: "Rural School Construction Project",
      description: "Built 5 complete school buildings with modern infrastructure, WASH facilities, and learning spaces.",
      // image: constructionImage,
      location: "Maharashtra",
      studentsImpacted: 300,
      year: 2023,
      fullDescription: "A transformative infrastructure project that established 5 complete school buildings in rural Maharashtra. Key features include:\n\n• Modern classroom facilities\n• WASH (Water, Sanitation, Hygiene) infrastructure\n• Science laboratories\n• Library and computer labs\n• Sports facilities\n• Solar power systems\n\nThis project has provided quality educational infrastructure to 300 students in underserved rural communities, creating an environment conducive to learning and development."
    },
    {
      id: 3,
      title: "Emergency Relief Supply Drive",
      description: "Rapid deployment of educational materials, hygiene kits, and emergency supplies during flood relief operations.",
      // image: bulkSupplyImage,
      location: "Kerala",
      studentsImpacted: 1000,
      year: 2022,
      fullDescription: "During the 2022 floods in Kerala, our team mobilized quickly to provide emergency relief supplies to affected schools and communities:\n\n• Educational materials and stationery\n• Hygiene kits and sanitization supplies\n• Emergency food packages\n• Temporary learning materials\n• Psychological support resources\n• Infrastructure repair assistance\n\nThe rapid response helped 1000+ students continue their education despite the natural disaster, demonstrating our commitment to educational continuity in challenging circumstances."
    }
  ];

  const services = [
    {
      icon: BookOpen,
      title: "STEM & Robotics Labs",
      description: "Complete lab solutions with IoT modules, Learning Management Systems, and hands-on robotics kits designed for interactive learning.",
      features: ["IoT Integration", "Custom LMS", "Hands-on Kits", "Teacher Training"]
    },
    {
      icon: Building,
      title: "Construction Works",
      description: "Purpose-driven infrastructure development including school buildings, WASH facilities, and educational space renovation.",
      features: ["School Buildings", "WASH Infrastructure", "Renovations", "Self-Execution Model"]
    },
    {
      icon: Package,
      title: "Bulk Material Supply",
      description: "Large-scale supply of educational materials, school furniture, hygiene kits, and emergency relief supplies.",
      features: ["Educational Materials", "School Furniture", "Hygiene Kits", "Emergency Relief"]
    }
  ];

  const partners = [
    "L&T", "Save the Children", "AIF", "IAHV", "ChildFund", "WWF", "UNICEF", "Teach for India"
  ];

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate sending email to alphagroups1997@gmail.com
    try {
      // In a real application, you would make an API call here
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast("Message Sent Successfully!", {
  description: "Your message has been sent to Alpha Groups. We'll respond within 24 hours.",
});

      // Reset form
      setFormData({
        name: '',
        email: '',
        organization: '',
        message: ''
      });
    } catch (error) {
     toast.error("Error", {
      description: "Failed to send message. Please try again.",
    });
  }
};

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple login simulation
    if (loginData.email && loginData.password) {
      setIsLoggedIn(true);
      setIsLoginOpen(false);
       toast.success("Login Successful!", {
      description: `Welcome back! You have successfully logged in.`,
    });
      setLoginData({ email: '', password: '' });
    } else {
      toast.error("Login Failed", {
      description: "Please enter both email and password.",
    });
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
   toast("Logged Out", {
    description: "You have been successfully logged out.",
  });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-primary">Alpha Impact Labs</h1>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-primary hover:text-primary-hover px-3 py-2 rounded-md text-sm font-medium transition-smooth">Home</a>
                <a href="#services" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-smooth">Services</a>
                <a href="#projects" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-smooth">Projects</a>
                <a href="#contact" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-smooth">Contact</a>
                {isLoggedIn ? (
                  <Button onClick={handleLogout} variant="outline" size="sm">
                    Logout
                  </Button>
                ) : (
                  <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">Login</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Login to Alpha Impact Labs</DialogTitle>
                        <DialogDescription>
                          Enter your credentials to access your account.
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            value={loginData.email}
                            onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="password">Password</Label>
                          <Input
                            id="password"
                            type="password"
                            value={loginData.password}
                            onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full">Login</Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-foreground hover:text-primary p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              <a href="#home" className="block text-primary hover:text-primary-hover px-3 py-2 rounded-md text-base font-medium">Home</a>
              <a href="#services" className="block text-foreground hover:text-primary px-3 py-2 rounded-md text-base font-medium">Services</a>
              <a href="#projects" className="block text-foreground hover:text-primary px-3 py-2 rounded-md text-base font-medium">Projects</a>
              <a href="#contact" className="block text-foreground hover:text-primary px-3 py-2 rounded-md text-base font-medium">Contact</a>
              <div className="px-3 py-2">
                {isLoggedIn ? (
                  <Button onClick={handleLogout} variant="outline" size="sm" className="w-full">
                    Logout
                  </Button>
                ) : (
                  <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="w-full">Login</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Login to Alpha Impact Labs</DialogTitle>
                        <DialogDescription>
                          Enter your credentials to access your account.
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                          <Label htmlFor="mobile-email">Email</Label>
                          <Input
                            id="mobile-email"
                            type="email"
                            value={loginData.email}
                            onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="mobile-password">Password</Label>
                          <Input
                            id="mobile-password"
                            type="password"
                            value={loginData.password}
                            onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full">Login</Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-hero-gradient min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {/* <img 
            src={heroImage} 
            alt="Students working with STEM and robotics equipment"
            className="w-full h-full object-cover opacity-20"
          /> */}
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Empowering the Future of Learning Through 
            <span className="block text-transparent bg-gradient-to-r from-blue-200 to-white bg-clip-text">
              STEM & Robotics
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            We design and deliver full-fledged labs with IoT modules, LMS, and hands-on kits for educational institutions across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-hero text-lg px-8 py-4"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Our Labs
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-4"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Talk to Our Experts
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-muted-foreground mb-8">Trusted by leading organizations across India</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="text-center">
                <Badge variant="outline" className="text-sm font-medium">
                  {partner}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Behind the Scenes at Alpha Groups
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Watch how we design, build, and deploy STEM Labs that transform educational experiences
          </p>
          <div className="relative bg-card rounded-lg overflow-hidden shadow-card">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <Button size="lg" className="rounded-full h-16 w-16">
                <Play className="h-8 w-8" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions for educational institutions, NGOs, and CSR initiatives
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-card-gradient shadow-card hover:shadow-card-hover transition-all duration-300 border-0">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant="outline">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Projects Executed
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real impact delivered across India through strategic partnerships and innovative solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="bg-card-gradient shadow-card hover:shadow-card-hover transition-all duration-300 border-0 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  {/* <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  /> */}
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {project.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.year}
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <Users className="h-4 w-4 mr-1" />
                    {project.studentsImpacted} students impacted
                  </div>
                  
                  <Dialog>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full" onClick={() => setSelectedProject(project)}>
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        {/* Dialog content */}
                      </DialogContent>
                    </Dialog>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-xl">{project.title}</DialogTitle>
                        <DialogDescription className="text-base">
                          Detailed information about this project
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        {/* <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full aspect-video object-cover rounded-lg"
                        /> */}
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-2xl font-bold text-primary">{project.studentsImpacted}</div>
                            <div className="text-sm text-muted-foreground">Students Impacted</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-primary">{project.location}</div>
                            <div className="text-sm text-muted-foreground">Location</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-primary">{project.year}</div>
                            <div className="text-sm text-muted-foreground">Year Completed</div>
                          </div>
                        </div>
                        <div className="prose prose-sm max-w-none">
                          <p className="whitespace-pre-line text-foreground leading-relaxed">
                            {project.fullDescription}
                          </p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Partners Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Trusted by leading NGOs, schools, and CSR teams across India
            </p>
          </div>
          
          <Card className="bg-card-gradient shadow-card border-0">
            <CardContent className="p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg text-foreground mb-6 italic">
                "Alpha Groups transformed our approach to STEM education. The labs they designed are not just functional but truly inspiring for our students."
              </blockquote>
              <div className="flex items-center">
                {/* <img 
                  src={testimonialImage} 
                  alt="Dr. Priya Sharma"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                /> */}
                <div>
                  <div className="font-semibold text-foreground">Dr. Priya Sharma</div>
                  <div className="text-muted-foreground">Principal, Delhi Public School</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Let's Work Together
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to transform education in your community? Get in touch with our team.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-card-gradient shadow-card border-0">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll respond within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="organization">Organization</Label>
                    <Input
                      id="organization"
                      value={formData.organization}
                      onChange={(e) => setFormData({...formData, organization: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-card-gradient shadow-card border-0">
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-muted-foreground">alphagroups1997@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="text-muted-foreground">+91 9492882197</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <div className="font-medium">WhatsApp</div>
                      <div className="text-muted-foreground">+91 9492882197</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <div className="font-medium">Website</div>
                      <div className="text-muted-foreground">www.alphagroups1997.co.in</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Alpha Impact Labs</h3>
            <p className="text-primary-foreground/80 mb-4">
              Empowering the future of learning through STEM & Robotics
            </p>
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Alpha Groups. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;


