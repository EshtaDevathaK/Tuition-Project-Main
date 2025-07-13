import { Calculator, Atom, Globe, BookA, PenTool, Cpu } from 'lucide-react'; // Lucide icons for subjects

// Import background images for each subject card
import mathBg from '../assets/math-bg.png'; // Mathematics background with formulas
import physicsBg from '../assets/physics-bg.png'; // Physics background with scientific symbols  
import chemistryBg from '../assets/chemistry-bg.png'; // Chemistry background with molecular structures
import englishBg from '../assets/english-bg.png'; // English background with books and letters
import hindiBg from '../assets/hindi-bg.png'; // Hindi background with Devanagari script
import computerBg from '../assets/computer-bg.png'; // Computer Science background with code

/* 
SubjectsSection Component - Grid of available subjects
Features: Colorful subject cards, hover effects, responsive grid, subject icons
*/
const SubjectsSection = () => {
  
  /* Array of subjects with icons, colors, descriptions, and background images */
  const subjects = [
    {
      icon: Calculator, // Calculator icon for Mathematics
      title: "Mathematics", // Subject title
      description: "Algebra, Geometry, Calculus & More", // Subject description
      bgColor: "bg-gradient-to-br from-blue-500 to-blue-600", // Background gradient
      iconColor: "text-blue-100", // Icon color
      textColor: "text-white", // Text color
      bgImage: mathBg // Background image with mathematical formulas
    },
    {
      icon: Atom, // Atom icon for Physics
      title: "Physics",
      description: "Mechanics, Thermodynamics, Optics",
      bgColor: "bg-gradient-to-br from-purple-500 to-purple-600",
      iconColor: "text-purple-100",
      textColor: "text-white",
      bgImage: physicsBg // Background image with physics symbols
    },
    {
      icon: Globe, // Globe icon for Chemistry (representing molecular structures)
      title: "Chemistry",
      description: "Organic, Inorganic & Physical Chemistry",
      bgColor: "bg-gradient-to-br from-green-500 to-green-600",
      iconColor: "text-green-100",
      textColor: "text-white",
      bgImage: chemistryBg // Background image with molecular structures
    },
    {
      icon: BookA, // BookA icon for English
      title: "English",
      description: "Grammar, Literature & Writing Skills",
      bgColor: "bg-gradient-to-br from-red-500 to-red-600",
      iconColor: "text-red-100",
      textColor: "text-white",
      bgImage: englishBg // Background image with books and letters
    },
    {
      icon: PenTool, // PenTool icon for Hindi
      title: "Hindi",
      description: "व्याकरण, साहित्य और लेखन कौशल",
      bgColor: "bg-gradient-to-br from-orange-500 to-orange-600",
      iconColor: "text-orange-100",
      textColor: "text-white",
      bgImage: hindiBg // Background image with Devanagari script
    },
    {
      icon: Cpu, // Cpu icon for Computer Science
      title: "Computer Science",
      description: "Programming, Data Structures, Algorithms",
      bgColor: "bg-gradient-to-br from-indigo-500 to-indigo-600",
      iconColor: "text-indigo-100",
      textColor: "text-white",
      bgImage: computerBg // Background image with code patterns
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
                style={{
                  // CSS background image with subtle opacity for readability
                  backgroundImage: `url(${subject.bgImage})`, // Set background image from imported asset
                  backgroundSize: 'cover', // Cover entire card area 
                  backgroundPosition: 'center', // Center the background image
                  backgroundRepeat: 'no-repeat' // Prevent image repetition
                }}
              >
                {/* Background image overlay for better text readability */}
                <div 
                  className="absolute inset-0 bg-black/20 dark:bg-black/40 rounded-2xl" // Dark overlay for light/dark mode compatibility
                  style={{
                    // Additional subtle blur effect on the background image
                    backdropFilter: 'blur(0.5px)', // Slight blur for better text contrast
                    zIndex: 1 // Place overlay above background image but below content
                  }}
                ></div>
                
                {/* Background decoration circles */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 z-[2]"></div> {/* Decorative circle with higher z-index */}
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12 z-[2]"></div> {/* Another decorative circle with higher z-index */}
                
                {/* Subject content */}
                <div className="relative z-[3]"> {/* Ensure content is above background decorations and overlay */}
                  
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