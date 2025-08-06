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
import { Heart, Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";
// import alphaGroupsLogo from "@/assets/alpha-groups-logo.png";
import Image from "next/image";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-bg">
      {/* Header */}
      <header className="py-8 px-4">
        <div className="container mx-auto text-center">
          {/* <Image 
            src={alphaGroupsLogo} 
            alt="Alpha Groups Logo" 
            className="mx-auto h-16 w-auto mb-4"
          /> */}
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 pb-16">
        <div className="container mx-auto max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-soft">
              <Heart className="w-4 h-4 fill-current" />
              We're Redesigning – Just for You!
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              💛 We're Redesigning –<br />
              <span className="bg-gradient-warm bg-clip-text text-transparent">
                Just for You!
              </span>
            </h1>
            
            <div className="space-y-6 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              <p>
                We're working on a brand-new version of the Alphagroups website — with a better look, 
                smoother navigation, and everything you love, made even better.
              </p>
              
              <p>
                Some parts of the site might be down for a little while, but we're still here and happy to help!
              </p>
              
              <p>
                If you have any questions or need assistance, you can reach out through the form below — 
                or simply mail us at{" "}
                <a 
                  href="mailto:alphagroups1997@gmail.com" 
                  className="text-primary hover:underline font-medium transition-colors"
                >
                  alphagroups1997@gmail.com
                </a>
                . We'd love to hear from you! 😊
              </p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="mb-16">
            <ContactForm />
          </div>

          {/* Footer Message */}
          <div className="text-center">
            <div className="inline-block bg-card/50 backdrop-blur-sm rounded-xl p-8 shadow-soft border border-border/20">
              <p className="text-lg font-medium text-foreground">
                ✨ Thank you for your patience and continued support.{" "}
                <span className="text-primary font-semibold">
                  Exciting things are on the way!
                </span>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
