import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle, Clock, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'alex@example.com',
      description: 'Drop me a line anytime',
      link: 'mailto:alex@example.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Call me for urgent matters',
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA',
      description: 'Available for remote work',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, name: 'GitHub', link: 'https://github.com/ayushd150', color: 'hover:text-gray-800' },
    { icon: Linkedin, name: 'LinkedIn', link: 'https://linkedin.com', color: 'hover:text-blue-600' },
    { icon: Twitter, name: 'Twitter', link: 'https://x.com/Ayushd150', color: 'hover:text-blue-400' },
    { icon: MessageCircle, name: 'Discord', link: '#', color: 'hover:text-indigo-600' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? Let's discuss how we can bring your ideas to life.
            I'm always excited to work on new challenges and collaborate with amazing people.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Info */}
          <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="space-y-8">
              <div className="glass rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <MessageCircle className="w-6 h-6 mr-3 text-purple-400" />
                  Let's Connect
                </h3>
                <p className="text-white/80 mb-8 leading-relaxed">
                  I'm always open to discussing new opportunities, creative projects, 
                  or just having a friendly chat about technology and design.
                </p>

                {/* Contact Information */}
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-start p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover-lift group"
                    >
                      <div className="glass rounded-full p-3 mr-4 group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">{info.title}</h4>
                        <p className="text-purple-300 font-medium">{info.value}</p>
                        <p className="text-white/60 text-sm">{info.description}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="pt-8 border-t border-white/10">
                  <h4 className="text-white font-semibold mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        className={`glass rounded-full p-3 text-white/70 hover:text-white transition-all duration-300 hover:scale-110 ${social.color}`}
                        aria-label={social.name}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Availability Status */}
              <div className="glass rounded-2xl p-6 text-center">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-2" />
                  <span className="text-white font-semibold">Available for Work</span>
                </div>
                <p className="text-white/80 text-sm">
                  Currently accepting new projects for Q3 2025
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Send className="w-6 h-6 mr-3 text-purple-400" />
                Send a Message
              </h3>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-green-300">Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="block text-white/80 font-medium mb-2">
                      Your Name
                    </div>
                    <div className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white/60">
                      John Doe
                    </div>
                  </div>
                  <div>
                    <div className="block text-white/80 font-medium mb-2">
                      Email Address
                    </div>
                    <div className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white/60">
                      john@example.com
                    </div>
                  </div>
                </div>

                <div>
                  <div className="block text-white/80 font-medium mb-2">
                    Subject
                  </div>
                  <div className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white/60">
                    Project Discussion
                  </div>
                </div>

                <div>
                  <div className="block text-white/80 font-medium mb-2">
                    Message
                  </div>
                  <div className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white/60 h-32 flex items-start">
                    Tell me about your project...
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner mr-3" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </div>

              <div className="mt-6 p-4 bg-white/5 rounded-xl">
                <div className="flex items-center text-white/80 text-sm">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Typical response time: 24-48 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;