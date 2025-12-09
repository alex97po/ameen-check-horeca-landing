import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Final CTA */}
      <div className="py-16 lg:py-24 border-b border-background/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold mb-4">
              Stop losing great hospitality talent to slow hiring.
            </h2>
            <p className="text-background/70 text-lg mb-8">
              Your next head chef, front desk star, or F&B manager is out there.
              <br />
              Let AI find them while you run your business.
            </p>
            <Button 
              variant="gold" 
              size="xl" 
              asChild
              className="bg-gold hover:bg-gold/90"
            >
              <a href="#waitlist" className="group">
                Join the Waitlist
                <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo.svg" alt="AmeenCheck" className="h-8 w-auto" />
                <span className="font-serif font-semibold text-lg">
                  Ameen<span className="text-primary">Check</span>
                </span>
              </div>
              <p className="text-background/60 mb-6 max-w-sm">
                Built for hospitality operators who are tired of hiring chaos. Launching in the MENA region.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/alex-pohorelov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://wa.me/message/FIOH33SJFXQ6J1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                >
                  <MessageCircle size={18} />
                </a>
                <a
                  href="mailto:sas.pogorelov@gmail.com"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-serif font-semibold mb-4">Contact</h4>
              <div className="space-y-3">
                <a
                  href="mailto:sas.pogorelov@gmail.com"
                  className="block text-background/60 hover:text-background transition-colors"
                >
                  sas.pogorelov@gmail.com
                </a>
                <a
                  href="https://wa.me/message/FIOH33SJFXQ6J1"
                  className="block text-background/60 hover:text-background transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-serif font-semibold mb-4">Links</h4>
              <div className="space-y-3">
                <a
                  href="#"
                  className="block text-background/60 hover:text-background transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="block text-background/60 hover:text-background transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="#faq"
                  className="block text-background/60 hover:text-background transition-colors"
                >
                  FAQ
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-background/10 text-center">
            <p className="text-background/40 text-sm">
              © {new Date().getFullYear()} AmeenCheck. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
