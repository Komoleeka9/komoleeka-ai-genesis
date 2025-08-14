import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  FileText,
  Send,
  Download
} from "lucide-react";

export function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoLink = `mailto:komoleekagostu@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening email client...",
      description: "Your default email client will open with the message pre-filled.",
    });

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "komoleekagostu@gmail.com",
      link: "mailto:komoleekagostu@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8999372410",
      link: "tel:+918999372410"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, Maharashtra, India",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/komoleekagostu-b82247235/",
      color: "hover:text-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/komoleekag",
      color: "hover:text-foreground"
    },
    {
      icon: FileText,
      label: "Medium",
      url: "https://medium.com/@komoleekagostu",
      color: "hover:text-green-600"
    }
  ];

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/lovable-uploads/df117c49-7325-4b44-863b-5677fecca738.png';
    link.download = 'Komoleeka_Gostu_Resume.png';
    link.click();
  };

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-black text-4xl md:text-5xl mb-6 text-foreground">
              Let's Build the Future Together
            </h2>
            <p className="font-roboto text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your ideas into intelligent AI solutions? Let's connect and create something extraordinary.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-tech-accent to-foreground mx-auto rounded-full mt-6" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="tech-card">
                <CardHeader>
                  <CardTitle className="font-montserrat font-bold text-xl text-foreground">
                    Get In Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-tech-accent" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="font-semibold text-foreground hover:text-tech-accent transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-semibold text-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="tech-card">
                <CardHeader>
                  <CardTitle className="font-montserrat font-bold text-xl text-foreground">
                    Connect With Me
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full h-16 bg-secondary rounded-lg flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 ${social.color} group`}
                      >
                        <social.icon className="h-6 w-6 mb-1 group-hover:scale-110 transition-transform" />
                        <span className="text-xs font-semibold">{social.label}</span>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Resume Download */}
              <Card className="tech-card">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-tech-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <Download className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="font-montserrat font-bold text-lg text-foreground mb-2">
                      Download Resume
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get a detailed overview of my experience and skills
                    </p>
                  </div>
                  
                  <Button 
                    onClick={downloadResume}
                    className="hire-button w-full font-montserrat font-semibold"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="tech-card">
                <CardHeader>
                  <CardTitle className="font-montserrat font-bold text-2xl text-foreground">
                    Send a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Have a project in mind? I'd love to hear about it. Fill out the form below and I'll get back to you.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-semibold text-foreground mb-2 block">
                          Your Name *
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-foreground mb-2 block">
                          Email Address *
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          required
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-semibold text-foreground mb-2 block">
                        Subject *
                      </label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-semibold text-foreground mb-2 block">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project, requirements, or any questions you have..."
                        required
                        className="w-full min-h-[120px] resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="hire-button w-full font-montserrat font-bold text-lg py-4 group"
                      size="lg"
                    >
                      <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}