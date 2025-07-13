import { useState, useEffect } from 'react'; // React hooks for state and lifecycle management
import { Moon, Sun, Menu, X, BookOpen } from 'lucide-react'; // Lucide icons for UI elements
import { Button } from '@/components/ui/button'; // Custom button component

/* 
Header Component - Top navigation with logo, menu items, and theme toggle
Features: Responsive navigation, dark/light mode toggle, mobile hamburger menu
*/
const Header = () => {
  const [isDark, setIsDark] = useState(false); // State to track dark mode toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu visibility
  const [isScrolled, setIsScrolled] = useState(false); // State to track scroll position for header styling

  /* Effect to handle scroll-based header styling changes */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Set scrolled state when user scrolls past 50px
    };
    
    window.addEventListener('scroll', handleScroll); // Add scroll event listener
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
  }, []);

  /* Effect to apply dark mode class to document root */
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark'); // Add dark class to enable dark mode
    } else {
      document.documentElement.classList.remove('dark'); // Remove dark class for light mode
    }
  }, [isDark]);

  /* Function to toggle between light and dark themes */
  const toggleTheme = () => {
    setIsDark(!isDark); // Toggle the dark mode state
  };

  /* Function to toggle mobile menu visibility */
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle mobile menu state
  };

  /* Function to handle smooth scrolling to sections */
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId); // Find target section element
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to section
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-md' // Glassmorphism effect when scrolled
          : 'bg-transparent' // Transparent when at top
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6"> {/* Container with responsive padding */}
        <div className="flex items-center justify-between h-16"> {/* Header content layout */}
          
          {/* Logo and brand section */}
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-primary" /> {/* Book icon representing education */}
            <span className="text-xl font-bold text-foreground">TuitionPro</span> {/* Brand name */}
            <span className="hidden sm:block text-sm text-muted-foreground">Personal Attention. Proven Results.</span> {/* Tagline visible on larger screens */}
          </div>

          {/* Desktop navigation menu */}
          <nav className="hidden md:flex items-center space-x-8"> {/* Hidden on mobile, visible on medium+ screens */}
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-foreground hover:text-primary transition-colors duration-200" // Smooth color transition on hover
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('parents')} 
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              For Parents
            </button>
            <button 
              onClick={() => scrollToSection('why-choose')} 
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Why Choose Us
            </button>
            <button 
              onClick={() => scrollToSection('subjects')} 
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Subjects
            </button>
            <button 
              onClick={() => scrollToSection('reviews')} 
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Contact
            </button>
          </nav>

          {/* Right side controls - theme toggle and mobile menu */}
          <div className="flex items-center space-x-4">
            {/* Theme toggle button */}
            <Button
              variant="ghost" // Ghost variant for subtle appearance
              size="sm" // Small size for icon button
              onClick={toggleTheme} // Toggle theme on click
              className="p-2" // Custom padding
            >
              {isDark ? ( // Conditional icon based on current theme
                <Sun className="h-4 w-4" /> // Sun icon for light mode toggle
              ) : (
                <Moon className="h-4 w-4" /> // Moon icon for dark mode toggle
              )}
            </Button>

            {/* Mobile menu toggle button - only visible on mobile */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="md:hidden p-2" // Hidden on medium+ screens
            >
              {isMobileMenuOpen ? ( // Conditional icon based on menu state
                <X className="h-5 w-5" /> // X icon when menu is open
              ) : (
                <Menu className="h-5 w-5" /> // Hamburger menu icon when menu is closed
              )}
            </Button>
          </div>
        </div>

        {/* Mobile navigation menu - slides down when open */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border"> {/* Mobile menu container */}
            <nav className="flex flex-col space-y-3"> {/* Vertical navigation layout */}
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-left py-2 text-foreground hover:text-primary transition-colors duration-200"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('parents')} 
                className="text-left py-2 text-foreground hover:text-primary transition-colors duration-200"
              >
                For Parents
              </button>
              <button 
                onClick={() => scrollToSection('why-choose')} 
                className="text-left py-2 text-foreground hover:text-primary transition-colors duration-200"
              >
                Why Choose Us
              </button>
              <button 
                onClick={() => scrollToSection('subjects')} 
                className="text-left py-2 text-foreground hover:text-primary transition-colors duration-200"
              >
                Subjects
              </button>
              <button 
                onClick={() => scrollToSection('reviews')} 
                className="text-left py-2 text-foreground hover:text-primary transition-colors duration-200"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-left py-2 text-foreground hover:text-primary transition-colors duration-200"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;