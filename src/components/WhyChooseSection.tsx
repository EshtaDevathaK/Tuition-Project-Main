import { Heart, DollarSign, Clock, BookOpen, Trophy, Users } from 'lucide-react'; // Lucide icons for benefits

/* 
WhyChooseSection Component - Grid of benefits and reasons to choose this tuition
Features: Grid layout with cards, icons, hover effects, compelling benefits
*/
const WhyChooseSection = () => {
  
  /* Array of benefits with icons and descriptions */
  const benefits = [
    {
      icon: Heart, // Heart icon for personalized learning
      title: "Personalized Learning", // Benefit title
      description: "Customized teaching approach tailored to each student's unique learning style and pace", // Benefit description
      color: "text-pink-500" // Icon color class
    },
    {
      icon: DollarSign, // Dollar sign for affordability
      title: "Affordable Pricing",
      description: "Quality education at competitive rates with flexible payment options for all families",
      color: "text-green-500"
    },
    {
      icon: Clock, // Clock icon for flexible schedule
      title: "Flexible Schedule",
      description: "Convenient timing options that work around your family's busy schedule and commitments",
      color: "text-blue-500"
    },
    {
      icon: BookOpen, // Book icon for comprehensive curriculum
      title: "Comprehensive Curriculum",
      description: "Complete coverage of syllabus with additional practice materials and revision sessions",
      color: "text-purple-500"
    },
    {
      icon: Trophy, // Trophy icon for proven results
      title: "Proven Track Record",
      description: "Consistent success stories with students achieving their academic goals and beyond",
      color: "text-yellow-500"
    },
    {
      icon: Users, // Users icon for small batch sizes
      title: "Small Batch Sizes",
      description: "Limited students per batch ensuring individual attention and personalized guidance",
      color: "text-indigo-500"
    }
  ];

  return (
    <section id="why-choose" className="py-20 bg-background"> {/* Section with ID for navigation */}
      <div className="container mx-auto px-4 lg:px-6"> {/* Container with responsive padding */}
        
        {/* Section header */}
        <div className="text-center mb-16"> {/* Centered header with bottom margin */}
          
          {/* Section badge */}
          <div className="inline-block mb-4">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"> {/* Colored badge */}
              Why Choose Us
            </span>
          </div>

          {/* Main heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight"> {/* Responsive heading */}
            Why Students & Parents
            <span className="text-primary block"> {/* Highlighted text on new line */}
              Choose TuitionPro
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"> {/* Centered subtitle with max width */}
            Discover what makes our tuition program the preferred choice for academic excellence 
            and comprehensive student development.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Responsive grid layout */}
          {benefits.map((benefit, index) => { // Map through benefits array
            const IconComponent = benefit.icon; // Extract icon component
            return (
              <div 
                key={index} // React key for list items
                className="group bg-card rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer" // Card styling with hover effects
              >
                {/* Benefit icon container */}
                <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"> {/* Icon container with hover scale */}
                  <IconComponent className={`h-7 w-7 ${benefit.color}`} /> {/* Icon with custom color */}
                </div>
                
                {/* Benefit content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300"> {/* Benefit title with hover color change */}
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed"> {/* Benefit description */}
                  {benefit.description}
                </p>

                {/* Decorative bottom border that appears on hover */}
                <div className="mt-4 w-0 h-1 bg-gradient-to-r from-primary to-primary-light rounded-full group-hover:w-full transition-all duration-500"></div> {/* Animated underline */}
              </div>
            );
          })}
        </div>

        {/* Additional trust section */}
        <div className="mt-16 text-center"> {/* Top margin and centered content */}
          
          {/* Trust statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"> {/* Responsive grid for stats */}
            
            {/* Statistic 1 - Happy Students */}
            <div className="text-center"> {/* Centered stat */}
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">200+</div> {/* Large number */}
              <div className="text-muted-foreground text-sm">Happy Students</div> {/* Description */}
            </div>

            {/* Statistic 2 - Success Rate */}
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground text-sm">Success Rate</div>
            </div>

            {/* Statistic 3 - Teaching Experience */}
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">8+</div>
              <div className="text-muted-foreground text-sm">Years Experience</div>
            </div>

            {/* Statistic 4 - Subjects Covered */}
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground text-sm">Subjects Covered</div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave separator at bottom */}
      <div className="relative mt-20"> {/* Margin top for separation */}
        <svg 
          className="section-wave text-secondary/30" // Wave with secondary color
          viewBox="0 0 1440 120" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" 
            fill="currentColor" // Uses current color for wave fill
          />
        </svg>
      </div>
    </section>
  );
};

export default WhyChooseSection;