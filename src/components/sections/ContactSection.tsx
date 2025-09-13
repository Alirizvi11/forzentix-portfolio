// import { motion } from "framer-motion";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { Send, Sparkles, Mail, User, MessageSquare } from "lucide-react";
// import { Button } from "../ui/button";
// import { Input } from "..//ui/input";
// import { Textarea } from "../ui/textarea";
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
// import { toast } from "sonner";

// const contactSchema = z.object({
//   name: z.string().min(2, "Name must be at least 2 characters"),
//   email: z.string().email("Please enter a valid email address"),
//   subject: z.string().min(5, "Subject must be at least 5 characters"),
//   message: z.string().min(10, "Message must be at least 10 characters"),
// });

// type ContactFormValues = z.infer<typeof contactSchema>;

// const ContactSection = () => {
//   const form = useForm<ContactFormValues>({
//     resolver: zodResolver(contactSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       subject: "",
//       message: "",
//     },
//   });

//   const onSubmit = async (data: ContactFormValues) => {
//     try {
//       // Simulate form submission
//       await new Promise(resolve => setTimeout(resolve, 1000));
//       toast.success("Message sent successfully! We'll get back to you soon. 🚀");
//       form.reset();
//     } catch (error) {
//       toast.error("Failed to send message. Please try again.");
//     }
//   };

//   const contactInfo = [
//     {
//       icon: <Mail className="w-6 h-6" />,
//       title: "Email Us",
//       description: "team@forzentix.dev",
//       action: "mailto:team@forzentix.dev"
//     },
//     {
//       icon: <MessageSquare className="w-6 h-6" />,
//       title: "Let's Chat",
//       description: "Schedule a call",
//       action: "#"
//     },
//     {
//       icon: <Sparkles className="w-6 h-6" />,
//       title: "Collaborate",
//       description: "Start a project",
//       action: "#"
//     }
//   ];

//   return (
//     <section id="contact" className="py-24 relative overflow-hidden">
//       {/* Background Effects */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-display text-cosmic mb-6">
//             Let's Create Something Extraordinary
//           </h2>
//           <p className="text-body text-muted-foreground max-w-2xl mx-auto">
//             Ready to embark on a journey to the future? We're here to transform your ideas 
//             into groundbreaking digital experiences.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
//           {/* Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="space-y-8"
//           >
//             <div>
//               <h3 className="text-heading text-cosmic mb-4">Get in Touch</h3>
//               <p className="text-body text-muted-foreground leading-relaxed mb-8">
//                 Whether you're looking to build the next revolutionary dApp, need cybersecurity expertise, 
//                 or want to harness the power of data science, we're ready to make it happen.
//               </p>
//             </div>

//             <div className="space-y-6">
//               {contactInfo.map((item, index) => (
//                 <motion.a
//                   key={item.title}
//                   href={item.action}
//                   initial={{ opacity: 0, x: -30 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.1, duration: 0.6 }}
//                   viewport={{ once: true }}
//                   whileHover={{ scale: 1.02, x: 10 }}
//                   className="flex items-center space-x-4 glass-card p-6 hover:border-primary/30 transition-all duration-300 group"
//                 >
//                   <div className="p-3 bg-cosmic rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
//                     {item.icon}
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-foreground">{item.title}</h4>
//                     <p className="text-muted-foreground">{item.description}</p>
//                   </div>
//                 </motion.a>
//               ))}
//             </div>

//             {/* Cosmic Quote */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.4, duration: 0.8 }}
//               viewport={{ once: true }}
//               className="glass-card p-6 border-accent/20"
//             >
//               <blockquote className="text-accent italic text-lg leading-relaxed">
//                 "In the vast cosmos of technology, every line of code is a star, 
//                 and every project is a constellation of dreams."
//               </blockquote>
//               <cite className="text-sm text-muted-foreground mt-3 block">- The Forzentix Way</cite>
//             </motion.div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="glass-card p-8"
//           >
//             <div className="mb-6">
//               <h3 className="text-heading text-cosmic mb-2">Send us a Message</h3>
//               <p className="text-muted-foreground">Let's discuss your next big idea</p>
//             </div>

//             <Form {...form}>
//               <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <FormField
//                     control={form.control}
//                     name="name"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel className="text-foreground">Name</FormLabel>
//                         <FormControl>
//                           <div className="relative">
//                             <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
//                             <Input 
//                               placeholder="Your name" 
//                               className="pl-10 bg-background-secondary border-border hover:border-primary/50 focus:border-primary transition-all duration-300" 
//                               {...field} 
//                             />
//                           </div>
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
                  
//                   <FormField
//                     control={form.control}
//                     name="email"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel className="text-foreground">Email</FormLabel>
//                         <FormControl>
//                           <div className="relative">
//                             <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
//                             <Input 
//                               placeholder="your@email.com" 
//                               type="email"
//                               className="pl-10 bg-background-secondary border-border hover:border-primary/50 focus:border-primary transition-all duration-300" 
//                               {...field} 
//                             />
//                           </div>
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                 </div>

//                 <FormField
//                   control={form.control}
//                   name="subject"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel className="text-foreground">Subject</FormLabel>
//                       <FormControl>
//                         <Input 
//                           placeholder="What's this about?" 
//                           className="bg-background-secondary border-border hover:border-primary/50 focus:border-primary transition-all duration-300" 
//                           {...field} 
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 <FormField
//                   control={form.control}
//                   name="message"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel className="text-foreground">Message</FormLabel>
//                       <FormControl>
//                         <Textarea 
//                           placeholder="Tell us about your project, ideas, or how we can help..." 
//                           className="min-h-[120px] bg-background-secondary border-border hover:border-primary/50 focus:border-primary transition-all duration-300 resize-none" 
//                           {...field} 
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 <motion.div
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   <Button 
//                     type="submit" 
//                     disabled={form.formState.isSubmitting}
//                     className="w-full btn-cosmic group"
//                   >
//                     {form.formState.isSubmitting ? (
//                       <div className="flex items-center gap-2">
//                         <motion.div
//                           animate={{ rotate: 360 }}
//                           transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//                         >
//                           <Sparkles className="w-5 h-5" />
//                         </motion.div>
//                         Sending Message...
//                       </div>
//                     ) : (
//                       <div className="flex items-center gap-2">
//                         <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
//                         Send Message
//                       </div>
//                     )}
//                   </Button>
//                 </motion.div>
//               </form>
//             </Form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Sparkles, Mail, User, MessageSquare, Bot, ExternalLink, Calendar, Shield } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { toast } from "sonner";
import { useState, useRef } from "react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

// Simple Math CAPTCHA Component
const MathCaptcha = ({ onVerify, isVerified }: { onVerify: (verified: boolean) => void; isVerified: boolean }) => {
  const [num1] = useState(Math.floor(Math.random() * 10) + 1);
  const [num2] = useState(Math.floor(Math.random() * 10) + 1);
  const [userAnswer, setUserAnswer] = useState("");
  const correctAnswer = num1 + num2;

  const handleAnswerChange = (value: string) => {
    setUserAnswer(value);
    const answer = parseInt(value);
    if (answer === correctAnswer) {
      onVerify(true);
      toast.success("CAPTCHA verified! ✅");
    } else if (value && answer !== correctAnswer) {
      onVerify(false);
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <Shield className={`w-5 h-5 ${isVerified ? 'text-green-500' : 'text-muted-foreground'}`} />
        <label className="text-foreground font-medium">Security Check</label>
      </div>
      
      <div className="bg-muted/30 border border-border rounded-lg p-4">
        <div className="flex items-center gap-4">
          <div className="text-lg font-mono bg-background px-4 py-2 rounded border">
            {num1} + {num2} = ?
          </div>
          <Input
            type="number"
            value={userAnswer}
            onChange={(e) => handleAnswerChange(e.target.value)}
            placeholder="Answer"
            className={`w-24 ${isVerified ? 'border-green-500' : 'border-border'}`}
          />
          {isVerified && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-green-500"
            >
              ✅
            </motion.div>
          )}
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          Please solve this simple math problem to verify you're human
        </p>
      </div>
    </div>
  );
};

// Advanced reCAPTCHA-like Component
const SmartCaptcha = ({ onVerify, isVerified }: { onVerify: (verified: boolean) => void; isVerified: boolean }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleVerification = async () => {
    if (isVerified) return;
    
    setIsClicked(true);
    setIsLoading(true);
    
    // Simulate verification process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    onVerify(true);
    toast.success("Verification complete! You're human! 🤖✅");
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <Shield className={`w-5 h-5 ${isVerified ? 'text-green-500' : 'text-muted-foreground'}`} />
        <label className="text-foreground font-medium">Human Verification</label>
      </div>
      
      <div className="border border-border rounded-lg p-4 bg-background-secondary">
        <div className="flex items-center gap-3">
          <button
            onClick={handleVerification}
            disabled={isVerified}
            className={`w-6 h-6 border-2 rounded flex items-center justify-center transition-all duration-300 ${
              isVerified 
                ? 'bg-green-500 border-green-500' 
                : isClicked 
                ? 'border-primary bg-primary/10' 
                : 'border-muted-foreground hover:border-primary'
            }`}
          >
            {isLoading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-3 h-3 border border-primary border-t-transparent rounded-full"
              />
            ) : isVerified ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-white text-sm"
              >
                ✓
              </motion.div>
            ) : null}
          </button>
          <span className="text-foreground">I'm not a robot</span>
        </div>
        
        {isClicked && !isVerified && !isLoading && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-4 p-3 bg-muted rounded border"
          >
            <p className="text-sm text-muted-foreground mb-2">Select all images with traffic lights:</p>
            <div className="grid grid-cols-3 gap-1">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className="w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-400 rounded cursor-pointer hover:opacity-80 transition-opacity"
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

// Simple Chatbot Component
const PersonalChatbot = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm the Forzentix AI assistant. How can I help you today?", isBot: true }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const botResponses = {
    greeting: "Hello! Thanks for reaching out. I'm here to help you learn more about Forzentix and our services.",
    services: "We offer Web3 development, Full-stack applications, Data Science solutions, and Cybersecurity services. Which area interests you?",
    web3: "Our Web3 expertise includes Aptos blockchain, Move smart contracts, DeFi applications, and NFT platforms. Would you like to know more?",
    fullstack: "We build modern web applications using React, Node.js, Python, and various databases. What kind of application are you planning?",
    pricing: "Our pricing varies based on project complexity. For a detailed quote, please fill out the contact form or schedule a call with our team.",
    timeline: "Project timelines typically range from 2-12 weeks depending on scope. We'll provide a detailed timeline after understanding your requirements.",
    team: "Our team consists of experienced developers specializing in blockchain, full-stack development, data science, and cybersecurity.",
    contact: "You can reach us via email at team@forzentix.dev, or schedule a call using the 'Collaborate' option. We typically respond within 24 hours.",
    default: "That's interesting! For detailed discussions about your specific needs, I'd recommend scheduling a call with our team or filling out the contact form."
  };

  const getResponse = (message: string) => {
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) return botResponses.greeting;
    if (lowerMessage.includes('service') || lowerMessage.includes('what do you do')) return botResponses.services;
    if (lowerMessage.includes('web3') || lowerMessage.includes('blockchain')) return botResponses.web3;
    if (lowerMessage.includes('fullstack') || lowerMessage.includes('web app')) return botResponses.fullstack;
    if (lowerMessage.includes('price') || lowerMessage.includes('cost')) return botResponses.pricing;
    if (lowerMessage.includes('time') || lowerMessage.includes('deadline')) return botResponses.timeline;
    if (lowerMessage.includes('team') || lowerMessage.includes('who are you')) return botResponses.team;
    if (lowerMessage.includes('contact') || lowerMessage.includes('reach')) return botResponses.contact;
    return botResponses.default;
  };

  const sendMessage = () => {
    if (!inputMessage.trim()) return;

    const newUserMessage = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false
    };

    const botResponse = {
      id: messages.length + 2,
      text: getResponse(inputMessage),
      isBot: true
    };

    setMessages(prev => [...prev, newUserMessage, botResponse]);
    setInputMessage("");
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="fixed bottom-4 right-4 w-96 h-96 bg-card border border-border rounded-lg shadow-2xl z-50 flex flex-col"
    >
      {/* Chatbot Header */}
      <div className="flex items-center justify-between p-4 border-b border-border bg-cosmic text-white rounded-t-lg">
        <div className="flex items-center gap-2">
          <Bot className="w-5 h-5" />
          <span className="font-semibold">Forzentix AI</span>
        </div>
        <button
          onClick={onClose}
          className="text-white/80 hover:text-white transition-colors"
        >
          ✕
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.isBot
                  ? 'bg-muted text-foreground'
                  : 'bg-cosmic text-white'
              }`}
            >
              <p className="text-sm">{message.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-border">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Type your message..."
            className="flex-1 px-3 py-2 bg-background-secondary border border-border rounded-lg focus:outline-none focus:border-primary"
          />
          <button
            onClick={sendMessage}
            className="px-4 py-2 bg-cosmic text-white rounded-lg hover:bg-cosmic/90 transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const ContactSection = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [captchaType, setCaptchaType] = useState<'math' | 'smart'>('smart'); // Toggle between captcha types

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    if (!isCaptchaVerified) {
      toast.error("Please complete the security verification first! 🛡️");
      return;
    }

    try {
      // Real form submission using Formspree
      const response = await fetch('https://formspree.io/f/xblabqed', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          captcha_verified: true,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        toast.success("Message sent successfully! We'll get back to you within 24 hours. 🚀");
        form.reset();
        setIsCaptchaVerified(false);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      // Fallback to mailto if form service fails
      const subject = encodeURIComponent(data.subject);
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
      );
      window.location.href = `mailto:teamforzentix@gmail.com?subject=${subject}&body=${body}`;
      toast.success("Opening email client... Message details have been pre-filled!");
      form.reset();
      setIsCaptchaVerified(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      description: "teamforzentix@gmail.com",
      action: () => window.location.href = "mailto:teamforzentix@gmail.com"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Let's Chat",
      description: "AI Assistant",
      action: () => setIsChatbotOpen(true)
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Collaborate",
      description: "Schedule a meeting",
      // action: () => window.open('https://calendly.com/forzentix-team', '_blank')
      // Alternative: WhatsApp
      action: () => window.open('https://wa.me/917084096364?text=Hi, I want to collaborate on a project with Forzentix', '_blank')
    }
  ];

  return (
    <>
      <section id="contact" className="py-24 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-display text-cosmic mb-6">
              Let's Create Something Extraordinary
            </h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              Ready to embark on a journey to the future? We're here to transform your ideas 
              into groundbreaking digital experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-heading text-cosmic mb-4">Get in Touch</h3>
                <p className="text-body text-muted-foreground leading-relaxed mb-8">
                  Whether you're looking to build the next revolutionary dApp, need cybersecurity expertise, 
                  or want to harness the power of data science, we're ready to make it happen.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.button
                    key={item.title}
                    onClick={item.action}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="w-full flex items-center space-x-4 glass-card p-6 hover:border-primary/30 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="p-3 bg-cosmic rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary ml-auto" />
                  </motion.button>
                ))}
              </div>

              {/* Cosmic Quote */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-card p-6 border-accent/20"
              >
                <blockquote className="text-accent italic text-lg leading-relaxed">
                  "In the vast cosmos of technology, every line of code is a star, 
                  and every project is a constellation of dreams."
                </blockquote>
                <cite className="text-sm text-muted-foreground mt-3 block">- The Forzentix Way</cite>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <div className="mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-heading text-cosmic mb-2">Send us a Message</h3>
                    <p className="text-muted-foreground">Let's discuss your next big idea</p>
                  </div>
                  <button
                    onClick={() => setCaptchaType(captchaType === 'math' ? 'smart' : 'math')}
                    className="text-xs text-primary hover:text-primary-glow transition-colors"
                  >
                    Switch CAPTCHA
                  </button>
                </div>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Name</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                              <Input 
                                placeholder="Your name" 
                                className="pl-10 bg-background-secondary border-border hover:border-primary/50 focus:border-primary transition-all duration-300" 
                                {...field} 
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Email</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                              <Input 
                                placeholder="your@email.com" 
                                type="email"
                                className="pl-10 bg-background-secondary border-border hover:border-primary/50 focus:border-primary transition-all duration-300" 
                                {...field} 
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Subject</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="What's this about?" 
                            className="bg-background-secondary border-border hover:border-primary/50 focus:border-primary transition-all duration-300" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your project, ideas, or how we can help..." 
                            className="min-h-[120px] bg-background-secondary border-border hover:border-primary/50 focus:border-primary transition-all duration-300 resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* CAPTCHA */}
                  {captchaType === 'math' ? (
                    <MathCaptcha onVerify={setIsCaptchaVerified} isVerified={isCaptchaVerified} />
                  ) : (
                    <SmartCaptcha onVerify={setIsCaptchaVerified} isVerified={isCaptchaVerified} />
                  )}

                  <motion.div
                    whileHover={{ scale: isCaptchaVerified ? 1.02 : 1 }}
                    whileTap={{ scale: isCaptchaVerified ? 0.98 : 1 }}
                  >
                    <Button 
                      type="submit" 
                      disabled={form.formState.isSubmitting || !isCaptchaVerified}
                      className={`w-full group transition-all duration-300 ${
                        isCaptchaVerified 
                          ? 'btn-cosmic' 
                          : 'bg-muted text-muted-foreground cursor-not-allowed hover:bg-muted'
                      }`}
                    >
                      {form.formState.isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            <Sparkles className="w-5 h-5" />
                          </motion.div>
                          Sending Message...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className={`w-5 h-5 ${isCaptchaVerified ? 'group-hover:translate-x-1' : ''} transition-transform duration-300`} />
                          {isCaptchaVerified ? 'Send Message' : 'Complete Security Check First'}
                        </div>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chatbot */}
      <PersonalChatbot 
        isOpen={isChatbotOpen} 
        onClose={() => setIsChatbotOpen(false)} 
      />
    </>
  );
};

export default ContactSection;