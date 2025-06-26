import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: "fas fa-envelope",
      label: "Email",
      value: "teema.sireesha@example.com"
    },
    {
      icon: "fas fa-phone", 
      label: "Phone",
      value: "+91 XXXXX XXXXX"
    },
    {
      icon: "fas fa-map-marker-alt",
      label: "Location", 
      value: "India"
    }
  ];

  const socialLinks = [
    { icon: "fab fa-linkedin", href: "#" },
    { icon: "fab fa-github", href: "#" },
    { icon: "fab fa-twitter", href: "#" },
    { icon: "fas fa-globe", href: "#" }
  ];

  return (
    <section id="contact" className="py-20 luxury-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-[var(--luxury-gold)]">Touch</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Ready to discuss opportunities in data science and full-stack development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-[var(--luxury-gold)]">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <div className="bg-[var(--luxury-gold)]/20 p-3 rounded-full mr-4">
                    <i className={`${info.icon} text-[var(--luxury-gold)]`}></i>
                  </div>
                  <div>
                    <p className="font-semibold">{info.label}</p>
                    <p className="text-gray-300">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <h4 className="text-lg font-semibold mb-4 text-[var(--luxury-gold)]">Connect With Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.icon}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    className="bg-[var(--luxury-gold)]/20 p-3 rounded-full hover:bg-[var(--luxury-gold)] hover:text-[var(--luxury-navy)] transition-all duration-300"
                  >
                    <i className={social.icon}></i>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card-gradient backdrop-blur-sm rounded-xl p-8 border border-[var(--luxury-gold)]/20"
          >
            <h3 className="text-2xl font-bold mb-6 text-[var(--luxury-gold)]">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="bg-[var(--luxury-navy)]/50 border-[var(--luxury-gold)]/20 focus:border-[var(--luxury-gold)] text-white placeholder:text-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="bg-[var(--luxury-navy)]/50 border-[var(--luxury-gold)]/20 focus:border-[var(--luxury-gold)] text-white placeholder:text-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="bg-[var(--luxury-navy)]/50 border-[var(--luxury-gold)]/20 focus:border-[var(--luxury-gold)] text-white placeholder:text-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={4}
                  required
                  className="bg-[var(--luxury-navy)]/50 border-[var(--luxury-gold)]/20 focus:border-[var(--luxury-gold)] text-white placeholder:text-gray-400"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full gold-gradient text-[var(--luxury-navy)] hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
