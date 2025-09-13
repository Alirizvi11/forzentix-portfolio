import { motion } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Camera, Code, MapPin, Calendar } from "lucide-react";
import aptosHackathon from "@/assets/gallery/AptosSeminar.jpg";
import aptosbreak from "@/assets/gallery/aptoshackatonbreaktime.jpg";
import aptoscoding from "@/assets/gallery/aptoshackhton.jpg";
import avalanchebegin from "@/assets/gallery/avalanchehackhtonbegain.jpg";
import avalancheCoding from "@/assets/gallery/avalanchecodingtime.jpg";
import avalancheLunchBreak from "@/assets/gallery/avalanchelunchbreak.jpg";
import LunchEvent from "@/assets/gallery/foodduringevent.jpg";
import himalayasRetreat from "@/assets/gallery/himalays3.jpg";
import himalayasFeel from "@/assets/gallery/himalays2.jpg";
import NanitalGarden from "@/assets/gallery/nanital.jpg";
import NanitalMountains from "@/assets/gallery/nanital1.jpg";
import Lucknowmonuments from "@/assets/gallery/teamtravel.jpg";
// import uiWorkshop from "@/assets/gallery/ui-workshop.jpg";
// import web3Conference from "@/assets/gallery/web3-conference.jpg";
// import goaWorkation from "@/assets/gallery/goa-workation.jpg";
import cyberLab from "@/assets/gallery/CyberLabAbhay.jpg";
import mlDeepDive from "@/assets/gallery/ml-deep-dive.jpg";
import web3ali from "@/assets/gallery/alicode.jpg";
import teamPortrait from "@/assets/gallery/team.jpg";


interface GalleryItem {
  id: string;
  src: string;
  title: string;
  description: string;
  category:  "Hackathon" | "Travel" | "Work" | "Team" | "Event";
  date: string;
  location?: string;
}

// Generate placeholder images using a reliable placeholder service
const generatePlaceholder = (width: number, height: number, text: string) => 
  `https://via.placeholder.com/${width}x${height}/1a1a2e/8B5DFF?text=${encodeURIComponent(text)}`;

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    src: aptosHackathon,
    title: "Aptos Pune Hackathon Seminar",
    description: "Descussing Rule&Regulations with Aptos Prticipants Teams .",
    category: "Hackathon",
    date: "2025-08-25",
    location: "Pune, India"
    
  },
  {
   id: "2",
    src: aptosbreak,
    title: "Aptos Pune Hackathon Breaktime",
    description: "Making Connections with Aptos Prticipants Teams .",
    category: "Hackathon",
    date: "2025-08-25",
    location: "Pune, India"
    },
    {
   id: "3",
    src: aptoscoding,
    title: "Aptos Pune Hackathon Coding & Group Disscussion Time",
    description: "Making Strategy and disscussing Planing with Team.",
    category: "Hackathon",
    date: "2025-08-26",
    location: "Pune, India"
    },
    {
    id: "4",
    src: avalanchebegin,
    title: "Avalanche Team 1 Hackhathon Beginning Time",
    description: "Giving the Rule And Regulation of the Avalanche Team 1 Hackhthon.",
    category: "Hackathon",
    date: "2025-09-13",
    location: "Pune, India"
    },
     {
    id: "5",
    src: avalancheCoding,
    title: "Avalanche Team 1 Hackhathon Coding Time",
    description: "Developing a Web 3 dApp for the Web 3 Project",
    category: "Hackathon",
    date: "2025-09-13",
    location: "Pune, India"
    },
     {
    id: "6",
    src: avalancheLunchBreak,
    title: "Having Lunch & Fun During The Hackhthon",
    description: "Enjoying The Delicious Food During The Avalanche Team1 Hackhton",
    category: "Hackathon",
    date: "2025-09-13",
    location: "Pune, India"
    },
      {
    id: "7",
    src: LunchEvent,
    title: "Having Lunch & Fun During The Event",
    description: "Enjoying The Delicious Food During The Google Cloud Ai Agent Workshop.",
    category: "Event",
    date: "2025-08-31",
    location: "Mumbai, India"
    },
  
  
  // {
  //   id: "", 
  //   src: generatePlaceholder(400, 600, "Team+Coding"),
  //   title: "Late Night Coding Session",
  //   description: "Burning the midnight oil while crafting the perfect smart contract architecture.",
  //   category: "Work",
  //   date: "2024-02-28",
  //   location: "Mumbai, India"
  // },
  {
    id: "8",
    src: himalayasRetreat,
    title: "Team Retreat in the Himalayas", 
    description: "Finding inspiration in nature's grandeur during our annual team retreat.",
    category: "Travel",
    date: "2025-05-20",
    location: "Himachal Pradesh, India"
  },
  {
    id: "9",
    src: himalayasFeel,
    title: "Team Relax in the Himalayas & Feel The Enviorment", 
    description: "Finding Peace in nature's grandeur during our annual team retreat.",
    category: "Travel",
    date: "2025-05-20",
    location: "Himachal Pradesh, India"
  },
  {
    id: "10",
    src: NanitalGarden,
    title: "Team Finding Dry Fruits in the Nanital Botinical Gaurden ", 
    description: "Finding Fruits in nature's grandeur with our team .",
    category: "Travel",
    date: "2025-03-05",
    location: "Himachal Pradesh, India"
  },
   {
    id: "11",
    src: NanitalMountains,
    title: "Team Finding Peace  in the Nanital Nature & Nanital Environment ", 
    description: "Seeking Peace in Naintal Mother nature's  with our team .",
    category: "Travel",
    date: "2025-03-06",
    location: "Himachal Pradesh, India"
  },
   {
    id: "12",
    src: Lucknowmonuments,
    title: "Listning the Voice Of Lucknow Historical Monuments Buildings ", 
    description: "Exploring the City Of Nawab's  with our team .",
    category: "Travel",
    date: "2025-06-02",
    location: "Lucknow, India"
  },
  // {
  //   id: "6",
  //   src: generatePlaceholder(400, 300, "UI+Design"),
  //   title: "UI/UX Design Workshop",
  //   description: "Experimenting with cosmic design patterns and glassmorphism effects.",
  //   category: "Work",
  //   date: "2024-04-05",
  //   location: "Remote"
  // },
  // {
  //   id: "7",
  //   src: generatePlaceholder(500, 400, "Blockchain+Conference"),
  //   title: "Web3 Conference Speaking",
  //   description: "Ali presenting our latest blockchain innovations at the national Web3 summit.",
  //   category: "Hackathon",
  //   date: "2024-03-25",
  //   location: "Bangalore, India"
  // },
  // {
  //   id: "6",
  //   src: generatePlaceholder(400, 500, "Beach+Workation"),
  //   title: "Workation by the Sea",
  //   description: "Combining productivity with paradise during our Goa workation.",
  //   category: "Travel", 
  //   date: "2024-02-10",
  //   location: "Goa, India"
  // },
  {
    id: "13",
    src: cyberLab,
    title: "Cybersecurity Lab Session",
    description: "Abhay demonstrating advanced penetration testing techniques to the team.",
    category: "Work",
    date: "2025-09-01",
    location: "Pune, India"
  },
  {
    id: "14",
    src: mlDeepDive,
    title: "Data Science Deep Dive",
    description: "Lokendra unveiling insights from our latest machine learning models.",
    category: "Work",
    date: "2025-07-30",
    location: "Lucknow, India"
  },
   {
    id: "15",
    src: web3ali,
    title: "Web3 Development & Deep Dive Into Blockchain Technology",
    description: "Ali Building Web3  with very Passionate and Focus",
    category: "Work",
    date: "2025-09-10",
    location: "Pune, India"
  },
  {
    id: "16",
    src: teamPortrait,
    title: "Official Team Portrait",
    description: "Our first professional team photo after officially forming Forzentix.",
    category: "Team",
    date: "2025-01-01",
    location: "Pune, India"
  }
];

const categories = [
  { id: "all", name: "all", icon: <Camera className="w-4 h-4" /> },
  { id: "Hackathon", name: "Hackathons", icon: <Code className="w-4 h-4" /> },
  { id: "Work", name: "Work", icon: <Code className="w-4 h-4" /> },
  { id: "Travel", name: "Travel", icon: <MapPin className="w-4 h-4" /> },
  { id: "Team", name: "Team", icon: <Camera className="w-4 h-4" /> },
];

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (item: GalleryItem) => {
    setSelectedImage(item);
    setCurrentIndex(filteredItems.findIndex(i => i.id === item.id));
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredItems[newIndex]);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % filteredItems.length;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredItems[newIndex]);
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-display text-cosmic mb-6">
            Sacred Memories
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Journey through our adventures, victories, and creative moments that define the Forzentix story.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300
                ${selectedCategory === category.id 
                  ? 'bg-cosmic text-white shadow-cosmic' 
                  : 'glass-card hover:border-primary/30 text-muted-foreground hover:text-foreground'
                }
              `}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => openLightbox(item)}
              className="glass-card-hover cursor-pointer group overflow-hidden"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-cosmic opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <span className={`
                    px-3 py-1 rounded-full text-xs font-medium
                    ${item.category === 'Hackathon' ? 'bg-accent text-accent-foreground' :
                      item.category === 'Work' ? 'bg-primary text-primary-foreground' :
                      item.category === 'Travel' ? 'bg-secondary text-secondary-foreground' :
                      'bg-muted text-muted-foreground'
                    }
                  `}>
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-cosmic mb-2 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(item.date).toLocaleDateString()}
                  </div>
                  {item.location && (
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-lg"
            onClick={closeLightbox}
          >
            <div className="relative max-w-4xl max-h-[90vh] mx-4">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 p-2 bg-background/80 rounded-full hover:bg-background transition-colors duration-300"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation */}
              <button
                onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-background/80 rounded-full hover:bg-background transition-colors duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); goToNext(); }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-background/80 rounded-full hover:bg-background transition-colors duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="glass-card overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full max-h-[60vh] object-contain"
                />
                <div className="p-6">
                  <h3 className="text-heading text-cosmic mb-2">{selectedImage.title}</h3>
                  <p className="text-body text-muted-foreground mb-4">{selectedImage.description}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(selectedImage.date).toLocaleDateString()}
                    </div>
                    {selectedImage.location && (
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {selectedImage.location}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;