"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contacts";
import GISTools from "./components/GISTools";
import Footer from "./components/footer";
import StarsCanvas from "./components/starBg";
import { ChatDemo } from "./components/chat-demo";
import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { Bot } from "lucide-react";

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleChat = () => setIsChatOpen((prev) => !prev);

  // Close when clicking outside 
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        chatRef.current &&
        !chatRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsChatOpen(false);
      }
    }

    if (isChatOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isChatOpen]);

  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-slate-950">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
        </div>

        <StarsCanvas />
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <Technologies />
        <GISTools />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer />

        <div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-6 right-6 w-16 h-16 bg-gray-100 rounded-full shadow-lg flex items-center justify-center hover:scale-110 hover:shadow-2xl transition-transform">
            <button
              ref={buttonRef}
              onClick={toggleChat}
              // className="fixed bottom-6 right-6 w-16 h-16 bg-blue-600 rounded-full shadow-lg flex items-center justify-center text-white text-xl hover:bg-blue-700 transition"
              className="w-full h-full flex items-center justify-center focus:outline-none"
            >
              <Bot className="w-8 h-8 text-black" />
            </button>
          </motion.div>
        </div>

          {isChatOpen && (
            <div
              ref={chatRef}
              className="fixed bottom-24 right-6 w-[350px] h-[500px] z-50 shadow-lg"
            >
              <ChatDemo />
            </div>
          )}
        
      </div>
    </div>
  );
}
