import { MessageSquare, FileText, CreditCard, Shield, Clock, Users } from 'lucide-react'; // Lucide icons for features
import { Button } from '@/components/ui/button'; // Custom button component

/* 
ParentsSection Component - Information specifically targeted at parents
Features: Parent-focused messaging, feature grid, dedicated CTA, trust indicators
*/
const ParentsSection = () => {
  
  /* Array of parent-focused features with icons and descriptions */
  const parentFeatures = [
    {
      icon: MessageSquare, // WhatsApp communication icon
      title: "SMS on Attendance", // Feature title
      description: "Receive instant SMS notifications about your child's attendance and punctuality" // Feature description
    },
    {
      icon: Users, // Parent-teacher meeting icon
      title: "Regular Parent-Teacher Meetings",
      description: "Monthly meetings to discuss progress, address concerns, and plan ahead"
    },
    {
      icon: FileText, // Performance reports icon
      title: "Performance & Engagement Reports",
      description: "Detailed reports tracking academic progress and classroom engagement"
    },
    {
      icon: MessageSquare, // WhatsApp results icon
      title: "Test Results on WhatsApp",
      description: "Get test scores and feedback instantly through WhatsApp for quick updates"
    },
    {
      icon: Shield, // Child safety icon
      title: "Child Safety Commitment",
      description: "Unmatched commitment to providing a safe and nurturing learning environment"
    },
    {
      icon: CreditCard, // Payment flexibility icon
      title: "Flexible Payment Options",
      description: "Multiple payment methods and flexible installment options for your convenience"
    }
  ];

  /* Function to handle "Ask Now" button click */
  const handleAskNow = () => {
    // Open WhatsApp chat or scroll to contact section
    const whatsappNumber = "1234567890"; // Replace with actual WhatsApp number
    const message = "Hi! I have some questions about the tuition program."; // Pre-filled message
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`; // WhatsApp URL format
    window.open(whatsappUrl, '_blank'); // Open WhatsApp in new tab
  };

  return (
    <section id="parents" className="py-20 bg-secondary/30"> {/* Section with subtle background */}
      <div className="container mx-auto px-4 lg:px-6"> {/* Container with responsive padding */}
        
        {/* Section header */}
        <div className="text-center mb-16"> {/* Centered header with bottom margin */}
          
          {/* Section badge */}
          <div className="inline-block mb-4">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"> {/* Colored badge */}
              For Parents
            </span>
          </div>

          {/* Main heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight"> {/* Responsive heading */}
            <span className="text-primary">Parents,</span> we know exactly
            <br className="hidden sm:block" /> {/* Line break on larger screens */}
            what you need
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"> {/* Centered subtitle with max width */}
            Complete transparency and regular communication to keep you informed about 
            your child's academic progress and overall development.
          </p>
        </div>

        {/* Two-column layout for content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16"> {/* Grid layout with gap */}
          
          {/* Left column - Features grid */}
          <div className="grid sm:grid-cols-2 gap-6"> {/* Responsive grid for features */}
            {parentFeatures.map((feature, index) => { // Map through features array
              const IconComponent = feature.icon; // Extract icon component
              return (
                <div 
                  key={index} // React key for list items
                  className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1" // Card styling with hover effects
                >
                  {/* Feature icon */}
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"> {/* Icon container */}
                    <IconComponent className="h-6 w-6 text-primary" /> {/* Icon with primary color */}
                  </div>
                  
                  {/* Feature content */}
                  <h3 className="font-semibold text-foreground mb-2 text-lg"> {/* Feature title */}
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed"> {/* Feature description */}
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right column - Parent image/testimonial */}
          <div className="relative"> {/* Relative positioning for absolute children */}
            
            {/* Parent testimonial card */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 lg:p-10"> {/* Gradient background */}
              
              {/* Testimonial content */}
              <div className="text-center mb-8"> {/* Centered testimonial */}
                
                {/* Parent avatar placeholder */}
                <div className="w-20 h-20 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center"> {/* Circular avatar */}
                  <Users className="h-10 w-10 text-primary" /> {/* Users icon for parent representation */}
                </div>

                {/* Quote */}
                <blockquote className="text-lg font-medium text-foreground mb-4 italic"> {/* Styled quote text */}
                  "The regular updates and transparent communication give me complete peace of mind. 
                  I always know how my child is progressing."
                </blockquote>

                {/* Parent attribution */}
                <cite className="text-muted-foreground font-medium"> {/* Citation styling */}
                  - Happy Parent
                </cite>
              </div>

              {/* Trust indicators */}
              <div className="space-y-3"> {/* Vertical spacing for trust indicators */}
                
                {/* Trust indicator 1 */}
                <div className="flex items-center space-x-3 bg-background/50 backdrop-blur-sm rounded-lg p-3"> {/* Semi-transparent background */}
                  <Clock className="h-5 w-5 text-primary flex-shrink-0" /> {/* Clock icon */}
                  <span className="text-sm font-medium text-foreground">24/7 Communication Support</span> {/* Trust statement */}
                </div>

                {/* Trust indicator 2 */}
                <div className="flex items-center space-x-3 bg-background/50 backdrop-blur-sm rounded-lg p-3">
                  <Shield className="h-5 w-5 text-primary flex-shrink-0" /> {/* Shield icon */}
                  <span className="text-sm font-medium text-foreground">Safe Learning Environment</span>
                </div>

                {/* Trust indicator 3 */}
                <div className="flex items-center space-x-3 bg-background/50 backdrop-blur-sm rounded-lg p-3">
                  <FileText className="h-5 w-5 text-primary flex-shrink-0" /> {/* File icon */}
                  <span className="text-sm font-medium text-foreground">Detailed Progress Tracking</span>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-float"></div> {/* Floating decorative circle */}
          </div>
        </div>

        {/* Call-to-action section */}
        <div className="text-center"> {/* Centered CTA */}
          
          {/* CTA heading */}
          <h3 className="text-2xl font-bold text-foreground mb-4"> {/* CTA title */}
            Have Questions or Concerns?
          </h3>
          
          {/* CTA description */}
          <p className="text-muted-foreground mb-6 max-w-md mx-auto"> {/* Centered description */}
            We're here to address all your queries and provide the transparency you deserve.
          </p>
          
          {/* CTA button */}
          <Button 
            size="lg" // Large button size
            onClick={handleAskNow} // Handle button click
            className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-glow transition-all duration-300" // Custom styling
          >
            Doubts? Ask Now
            <MessageSquare className="ml-2 h-5 w-5" /> {/* Message icon */}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ParentsSection;