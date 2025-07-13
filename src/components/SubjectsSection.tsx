import { Calculator, Atom, Globe, BookA, PenTool, Cpu } from 'lucide-react'; // Lucide icons for subjects

/* 
SubjectsSection Component - Grid of available subjects
Features: Colorful subject cards, hover effects, responsive grid, subject icons
*/
const SubjectsSection = () => {
  
  /* Array of subjects with icons, colors, and descriptions */
  const subjects = [
    {
      icon: Calculator, // Calculator icon for Mathematics
      title: "Mathematics", // Subject title
      description: "Algebra, Geometry, Calculus & More", // Subject description
      bgColor: "bg-gradient-to-br from-blue-500 to-blue-600", // Background gradient
      iconColor: "text-blue-100", // Icon color
      textColor: "text-white" // Text color
    },
    {
      icon: Atom, // Atom icon for Physics
      title: "Physics",
      description: "Mechanics, Thermodynamics, Optics",
      bgColor: "bg-gradient-to-br from-purple-500 to-purple-600",
      iconColor: "text-purple-100",
      textColor: "text-white"
    },
    {
      icon: Globe, // Globe icon for Chemistry (representing molecular structures)
      title: "Chemistry",
      description: "Organic, Inorganic & Physical Chemistry",
      bgColor: "bg-gradient-to-br from-green-500 to-green-600",
      iconColor: "text-green-100",
      textColor: "text-white"
    },
    {
      icon: BookA, // BookA icon for English
      title: "English",
      description: "Grammar, Literature & Writing Skills",
      bgColor: "bg-gradient-to-br from-red-500 to-red-600",
      iconColor: "text-red-100",
      textColor: "text-white"
    },
    {
      icon: PenTool, // PenTool icon for Hindi
      title: "Hindi",
      description: "व्याकरण, साहित्य और लेखन कौशल",
      bgColor: "bg-gradient-to-br from-orange-500 to-orange-600",
      iconColor: "text-orange-100",
      textColor: "text-white"
    },
    {
      icon: Cpu, // Cpu icon for Computer Science
      title: "Computer Science",
      description: "Programming, Data Structures, Algorithms",
      bgColor: "bg-gradient-to-br from-indigo-500 to-indigo-600",
      iconColor: "text-indigo-100",
      textColor: "text-white"
    }
  ];

  return (
    <section id="subjects" className="py-20 bg-secondary/30"> {/* Section with subtle background */}
      <div className="container mx-auto px-4 lg:px-6"> {/* Container with responsive padding */}
        
        {/* Section header */}
        <div className="text-center mb-16"> {/* Centered header with bottom margin */}
          
          {/* Section badge */}
          <div className="inline-block mb-4">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"> {/* Colored badge */}
              Subjects Offered
            </span>
          </div>

          {/* Main heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight"> {/* Responsive heading */}
            Comprehensive Subject
            <span className="text-primary block"> {/* Highlighted text on new line */}
              Coverage
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"> {/* Centered subtitle with max width */}
            Expert tuition across multiple subjects with specialized teaching methods 
            tailored for each discipline's unique requirements.
          </p>
        </div>

        {/* Subjects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Responsive grid layout */}
          {subjects.map((subject, index) => { // Map through subjects array
            const IconComponent = subject.icon; // Extract icon component
            return (
              <div 
                key={index} // React key for list items
                className={`subject-card group ${subject.bgColor} rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden relative`} // Card styling with hover effects
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div> {/* Decorative circle */}
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div> {/* Another decorative circle */}
                
                {/* Subject content */}
                <div className="relative z-10"> {/* Ensure content is above background decorations */}
                  
                  {/* Subject icon */}
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"> {/* Icon container with hover scale */}
                    <IconComponent className={`h-8 w-8 ${subject.iconColor}`} /> {/* Subject icon */}
                  </div>
                  
                  {/* Subject title */}
                  <h3 className={`text-2xl font-bold ${subject.textColor} mb-2 group-hover:translate-x-1 transition-transform duration-300`}> {/* Title with hover slide */}
                    {subject.title}
                  </h3>
                  
                  {/* Subject description */}
                  <p className={`${subject.textColor} opacity-90 text-sm leading-relaxed`}> {/* Description with opacity */}
                    {subject.description}
                  </p>

                  {/* Hover indicator */}
                  <div className="mt-4 flex items-center text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"> {/* Appears on hover */}
                    <span className="text-sm font-medium">Learn More</span>
                    <div className="w-0 group-hover:w-6 h-0.5 bg-white/60 ml-2 transition-all duration-300"></div> {/* Animated arrow */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional information section */}
        <div className="mt-16 text-center"> {/* Top margin and centered content */}
          
          {/* Additional info heading */}
          <h3 className="text-2xl font-bold text-foreground mb-4"> {/* Info heading */}
            All Boards Covered
          </h3>
          
          {/* Board information */}
          <div className="flex flex-wrap justify-center gap-4 mb-8"> {/* Flexbox for board badges */}
            
            {/* Board badges */}
            <span className="bg-card px-4 py-2 rounded-full text-foreground font-medium shadow-sm"> {/* CBSE badge */}
              CBSE
            </span>
            <span className="bg-card px-4 py-2 rounded-full text-foreground font-medium shadow-sm"> {/* ICSE badge */}
              ICSE
            </span>
            <span className="bg-card px-4 py-2 rounded-full text-foreground font-medium shadow-sm"> {/* State Board badge */}
              State Board
            </span>
            <span className="bg-card px-4 py-2 rounded-full text-foreground font-medium shadow-sm"> {/* IB badge */}
              IB
            </span>
          </div>

          {/* Grade levels */}
          <p className="text-muted-foreground max-w-md mx-auto"> {/* Centered grade info */}
            Classes 6th to 12th • All competitive exam preparation including JEE, NEET, and Board Exams
          </p>
        </div>
      </div>
    </section>
  );
};

export default SubjectsSection;