import { CheckCircle, Award, Users, Target } from 'lucide-react'; // Lucide icons for feature highlights

/* 
AboutSection Component - Information about the tutor and teaching approach
Features: Two-column layout, feature highlights with icons, professional presentation
*/
const AboutSection = () => {
  
  /* Array of key features with icons and descriptions */
  const features = [
    {
      icon: CheckCircle, // Icon component for individual attention
      title: "Individual Attention", // Feature title
      description: "Personalized learning approach tailored to each student's pace and learning style" // Feature description
    },
    {
      icon: Target, // Icon component for conceptual clarity
      title: "Conceptual Clarity",
      description: "Focus on building strong fundamentals and deep understanding of core concepts"
    },
    {
      icon: Award, // Icon component for proven results
      title: "Proven Results",
      description: "Consistent track record of academic improvement and exam success"
    },
    {
      icon: Users, // Icon component for flexible batches
      title: "Flexible Batches",
      description: "Small batch sizes and flexible timings to accommodate different schedules"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background"> {/* Section with ID for navigation and generous padding */}
      <div className="container mx-auto px-4 lg:px-6"> {/* Container with responsive padding */}
        
        {/* Two-column layout container */}
        <div className="grid lg:grid-cols-2 gap-12 items-center"> {/* Grid layout with gap, centered items */}
          
          {/* Left column - Text content */}
          <div className="space-y-6"> {/* Vertical spacing between elements */}
            
            {/* Section badge */}
            <div className="inline-block">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"> {/* Colored badge */}
                About Your Tutor
              </span>
            </div>

            {/* Main heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight"> {/* Responsive heading size */}
              8+ Years of Teaching
              <span className="text-primary block"> {/* Highlighted text on new line */}
                Excellence & Results
              </span>
            </h2>

            {/* Description paragraph */}
            <p className="text-lg text-muted-foreground leading-relaxed"> {/* Large, readable text */}
              With over 8 years of dedicated teaching experience, I specialize in creating 
              personalized learning experiences that help students excel in their academic journey. 
              My approach focuses on building strong conceptual foundations while maintaining 
              individual attention for each student.
            </p>

            {/* Additional paragraph about teaching philosophy */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe that every student has unique potential. Through customized teaching methods, 
              regular assessments, and continuous parent communication, I ensure that each child 
              receives the support they need to achieve their academic goals.
            </p>

            {/* Features grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-6"> {/* Responsive grid for features */}
              {features.map((feature, index) => { // Map through features array
                const IconComponent = feature.icon; // Extract icon component
                return (
                  <div 
                    key={index} // React key for list items
                    className="flex items-start space-x-3 p-4 rounded-lg bg-card hover:shadow-md transition-shadow duration-200" // Card styling with hover effect
                  >
                    {/* Feature icon */}
                    <div className="flex-shrink-0"> {/* Prevent icon from shrinking */}
                      <IconComponent className="h-6 w-6 text-primary mt-1" /> {/* Icon with primary color */}
                    </div>
                    
                    {/* Feature content */}
                    <div>
                      <h3 className="font-semibold text-foreground mb-1"> {/* Feature title */}
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed"> {/* Feature description */}
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right column - Image/Visual content */}
          <div className="relative"> {/* Relative positioning for absolute children */}
            
            {/* Main image container */}
            <div className="relative bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 lg:p-12"> {/* Gradient background with rounded corners */}
              
              {/* Placeholder for tutor image - replaced with styled content */}
              <div className="aspect-square bg-gradient-to-br from-primary/30 to-primary/10 rounded-xl flex items-center justify-center mb-6"> {/* Square aspect ratio container */}
                <div className="text-center"> {/* Centered content */}
                  <Award className="h-16 w-16 text-primary mx-auto mb-4" /> {/* Large award icon */}
                  <h3 className="text-xl font-bold text-foreground mb-2">Excellence in Education</h3> {/* Title */}
                  <p className="text-muted-foreground">Dedicated to Student Success</p> {/* Subtitle */}
                </div>
              </div>

              {/* Achievement highlights */}
              <div className="space-y-3"> {/* Vertical spacing for achievements */}
                
                {/* Achievement 1 */}
                <div className="flex items-center space-x-3 bg-background/50 backdrop-blur-sm rounded-lg p-3"> {/* Semi-transparent background */}
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" /> {/* Check icon */}
                  <span className="text-sm font-medium text-foreground">8+ Years Teaching Experience</span> {/* Achievement text */}
                </div>

                {/* Achievement 2 */}
                <div className="flex items-center space-x-3 bg-background/50 backdrop-blur-sm rounded-lg p-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">95% Student Success Rate</span>
                </div>

                {/* Achievement 3 */}
                <div className="flex items-center space-x-3 bg-background/50 backdrop-blur-sm rounded-lg p-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">Specialized in Multiple Subjects</span>
                </div>

                {/* Achievement 4 */}
                <div className="flex items-center space-x-3 bg-background/50 backdrop-blur-sm rounded-lg p-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">Flexible Learning Approach</span>
                </div>
              </div>
            </div>

            {/* Decorative floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div> {/* Floating decorative circle */}
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/30 rounded-full blur-lg animate-float" style={{animationDelay: '1s'}}></div> {/* Another floating circle with delay */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;