import { ArrowRight, Play } from 'lucide-react'; // Lucide icons for buttons
import { Button } from '@/components/ui/button'; // Custom button component

/* 
HeroSection Component - Main landing section with gradient background
Features: Gradient background, floating animation, dual CTAs, responsive design
*/
const HeroSection = () => {
  
  /* Function to handle booking a demo - placeholder for future implementation */
  const handleBookDemo = () => {
    // Scroll to contact section for demo booking
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to contact
    }
  };

  /* Function to handle learn more action */
  const handleLearnMore = () => {
    // Scroll to about section for more information
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to about
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden"> {/* Full height section with centered content */}
      
      {/* Gradient background overlay */}
      <div className="absolute inset-0 hero-gradient"></div> {/* Custom gradient background from CSS */}
      
      {/* Background pattern overlay for texture */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div> {/* Subtle dot pattern */}
      
      {/* Main hero content container */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto"> {/* Centered content with max width */}
        
        {/* Floating badge above main heading */}
        <div className="inline-block mb-6 animate-float"> {/* Floating animation applied */}
          <span className="bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-full text-white text-sm font-medium"> {/* Glass-effect badge */}
            ✨ 8+ Years of Teaching Excellence
          </span>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"> {/* Responsive text sizing */}
          Transform Your Child's
          <span className="block text-yellow-300"> {/* Highlighted text in yellow */}
            Academic Journey
          </span>
        </h1>

        {/* Subheading with key value proposition */}
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"> {/* Large, readable subtext */}
          Experience personalized learning with proven results. Our dedicated approach ensures 
          <strong className="text-yellow-300"> individual attention</strong> and 
          <strong className="text-yellow-300"> conceptual clarity</strong> for lasting success.
        </p>

        {/* Call-to-action buttons container */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"> {/* Responsive button layout */}
          
          {/* Primary CTA - Book Free Demo */}
          <Button 
            size="lg" // Large button size
            onClick={handleBookDemo} // Handle demo booking
            className="group bg-white text-primary hover:bg-white/95 hover:shadow-glow-lg transition-all duration-300 text-lg px-8 py-4 rounded-full font-semibold" // Custom styling with hover effects
          >
            Book Free Demo
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" /> {/* Arrow icon with slide animation */}
          </Button>

          {/* Secondary CTA - Learn More */}
          <Button 
            variant="outline" // Outline button variant
            size="lg"
            onClick={handleLearnMore}
            className="group border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 text-lg px-8 py-4 rounded-full font-semibold" // Custom outline styling
          >
            <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-200" /> {/* Play icon with scale effect */}
            Learn More
          </Button>
        </div>

        {/* Key statistics or achievements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"> {/* Responsive grid for stats */}
          
          {/* Statistic 1 - Years of Experience */}
          <div className="text-center animate-fade-in"> {/* Fade in animation */}
            <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">8+</div> {/* Large number display */}
            <div className="text-white/80 text-sm md:text-base">Years Experience</div> {/* Description */}
          </div>

          {/* Statistic 2 - Student Success Rate */}
          <div className="text-center animate-fade-in">
            <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">95%</div>
            <div className="text-white/80 text-sm md:text-base">Success Rate</div>
          </div>

          {/* Statistic 3 - Individual Attention */}
          <div className="text-center animate-fade-in">
            <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">1:1</div>
            <div className="text-white/80 text-sm md:text-base">Personal Attention</div>
          </div>
        </div>
      </div>

      {/* Bottom wave separator for smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0"> {/* Positioned at bottom */}
        <svg 
          className="section-wave text-background" // Uses background color for wave fill
          viewBox="0 0 1440 120" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,69.3C960,85,1056,107,1152,112C1248,117,1344,107,1392,101.3L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" 
            fill="currentColor" // Uses current color (background) for smooth transition
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;