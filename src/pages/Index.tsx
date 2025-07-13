/* 
Index Page - Main landing page for TuitionPro website
Features: Complete tuition website with all sections, responsive design, modern styling
*/

// Import all component sections for the website
import Header from '@/components/Header'; // Top navigation with logo and menu
import HeroSection from '@/components/HeroSection'; // Main hero section with gradient background
import AboutSection from '@/components/AboutSection'; // About the tutor section
import ParentsSection from '@/components/ParentsSection'; // Parent-focused information section
import WhyChooseSection from '@/components/WhyChooseSection'; // Benefits and reasons to choose
import SubjectsSection from '@/components/SubjectsSection'; // Available subjects grid
import ReviewsSection from '@/components/ReviewsSection'; // Student testimonials carousel
import Footer from '@/components/Footer'; // Contact information and footer
import WhatsAppFloat from '@/components/WhatsAppFloat'; // Floating WhatsApp contact button

const Index = () => {
  return (
    <div className="min-h-screen bg-background"> {/* Full height container with background color */}
      
      {/* Fixed header navigation */}
      <Header /> {/* Top navigation bar with menu and theme toggle */}
      
      {/* Main content sections */}
      <main> {/* Main content wrapper */}
        
        {/* Hero section with gradient background and main CTA */}
        <HeroSection /> {/* Full-screen hero with gradient background */}
        
        {/* About section with tutor information */}
        <AboutSection /> {/* Two-column layout with tutor details and features */}
        
        {/* Parent-focused section */}
        <ParentsSection /> {/* Information specifically for parents with features */}
        
        {/* Why choose us section */}
        <WhyChooseSection /> {/* Grid of benefits and reasons to choose */}
        
        {/* Subjects offered section */}
        <SubjectsSection /> {/* Colorful grid of available subjects */}
        
        {/* Student reviews and testimonials */}
        <ReviewsSection /> {/* Carousel of student and parent testimonials */}
        
      </main>
      
      {/* Footer with contact information */}
      <Footer /> {/* Contact details, business hours, and site footer */}
      
      {/* Floating WhatsApp contact button */}
      <WhatsAppFloat /> {/* Fixed floating button for WhatsApp contact */}
      
    </div>
  );
};

export default Index;
