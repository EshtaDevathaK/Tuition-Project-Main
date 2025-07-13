import { useState, useEffect } from 'react'; // React hooks for state management
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'; // Lucide icons for reviews
import { Button } from '@/components/ui/button'; // Custom button component

/* 
ReviewsSection Component - Carousel of student and parent testimonials
Features: Auto-rotating carousel, star ratings, student/parent reviews, navigation controls
*/
const ReviewsSection = () => {
  
  /* Array of testimonials with ratings and reviewer information */
  const testimonials = [
    {
      id: 1, // Unique identifier
      name: "Priya Sharma", // Reviewer name
      role: "Class 12 Student", // Reviewer role/grade
      rating: 5, // Star rating out of 5
      review: "The teaching method is excellent! Complex topics are explained in such a simple way that I can understand everything easily. My marks have improved significantly since joining.", // Review text
      subject: "Mathematics & Physics", // Subjects studied
      improvement: "+25% marks" // Academic improvement
    },
    {
      id: 2,
      name: "Mrs. Rajesh Kumar",
      role: "Parent",
      rating: 5,
      review: "I'm amazed by the individual attention my son receives. The regular updates and progress reports keep me informed about his development. Highly recommended!",
      subject: "All Subjects",
      improvement: "Excellent Progress"
    },
    {
      id: 3,
      name: "Arjun Patel",
      role: "Class 10 Student",
      rating: 5,
      review: "Best tuition ever! The teacher makes learning fun and interesting. I used to hate Chemistry, but now it's one of my favorite subjects. Thank you!",
      subject: "Chemistry & Biology",
      improvement: "+30% marks"
    },
    {
      id: 4,
      name: "Mrs. Sunita Gupta",
      role: "Parent",
      rating: 5,
      review: "The flexible timing and personalized approach have been perfect for my daughter. She's more confident now and actually enjoys studying. Great experience!",
      subject: "English & Hindi",
      improvement: "Improved Confidence"
    },
    {
      id: 5,
      name: "Rohit Singh",
      role: "Class 11 Student",
      rating: 5,
      review: "The concepts are taught with real-life examples which makes it easy to remember. Mock tests and regular practice sessions have really helped me prepare for board exams.",
      subject: "Physics & Mathematics",
      improvement: "+35% marks"
    }
  ];

  /* State for current active testimonial */
  const [currentIndex, setCurrentIndex] = useState(0); // Start with first testimonial

  /* Auto-rotate carousel every 5 seconds */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1 // Loop back to start when reaching end
      );
    }, 5000); // 5 second interval

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [testimonials.length]);

  /* Function to go to previous testimonial */
  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1 // Loop to end when at beginning
    );
  };

  /* Function to go to next testimonial */
  const goToNext = () => {
    setCurrentIndex(
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1 // Loop to beginning when at end
    );
  };

  /* Function to go to specific testimonial */
  const goToSlide = (index: number) => {
    setCurrentIndex(index); // Set current index to clicked slide
  };

  /* Function to render star rating */
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => ( // Create array of 5 stars
      <Star
        key={index} // React key
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300' // Fill stars based on rating
        }`}
      />
    ));
  };

  /* Get current testimonial */
  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="reviews" className="py-20 bg-background"> {/* Section with ID for navigation */}
      <div className="container mx-auto px-4 lg:px-6"> {/* Container with responsive padding */}
        
        {/* Section header */}
        <div className="text-center mb-16"> {/* Centered header with bottom margin */}
          
          {/* Section badge */}
          <div className="inline-block mb-4">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"> {/* Colored badge */}
              Student Reviews
            </span>
          </div>

          {/* Main heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight"> {/* Responsive heading */}
            What Students & Parents
            <span className="text-primary block"> {/* Highlighted text on new line */}
              Say About Us
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"> {/* Centered subtitle with max width */}
            Real experiences from our students and their families who have seen 
            remarkable improvements in their academic journey.
          </p>
        </div>

        {/* Testimonial carousel container */}
        <div className="relative max-w-4xl mx-auto"> {/* Centered container with max width */}
          
          {/* Main testimonial card */}
          <div className="testimonial-card bg-card rounded-2xl p-8 lg:p-12 shadow-lg"> {/* Large testimonial card */}
            
            {/* Quote icon */}
            <div className="flex justify-center mb-6"> {/* Centered quote icon */}
              <Quote className="h-12 w-12 text-primary/30" /> {/* Large quote icon */}
            </div>

            {/* Star rating */}
            <div className="flex justify-center mb-6"> {/* Centered star rating */}
              {renderStars(currentTestimonial.rating)} {/* Render star rating */}
            </div>

            {/* Review text */}
            <blockquote className="text-xl md:text-2xl text-foreground text-center mb-8 leading-relaxed font-medium italic"> {/* Large quote text */}
              "{currentTestimonial.review}"
            </blockquote>

            {/* Reviewer information */}
            <div className="text-center"> {/* Centered reviewer info */}
              <h4 className="text-lg font-bold text-foreground mb-1"> {/* Reviewer name */}
                {currentTestimonial.name}
              </h4>
              <p className="text-muted-foreground mb-3"> {/* Reviewer role */}
                {currentTestimonial.role}
              </p>
              
              {/* Subject and improvement info */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm"> {/* Responsive layout for info */}
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full"> {/* Subject badge */}
                  {currentTestimonial.subject}
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium"> {/* Improvement badge */}
                  {currentTestimonial.improvement}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation controls */}
          <div className="flex justify-between items-center mt-8"> {/* Navigation layout */}
            
            {/* Previous button */}
            <Button
              variant="outline" // Outline button style
              size="sm" // Small button size
              onClick={goToPrevious} // Handle previous click
              className="p-3 rounded-full" // Custom padding and shape
            >
              <ChevronLeft className="h-5 w-5" /> {/* Left arrow icon */}
            </Button>

            {/* Slide indicators */}
            <div className="flex space-x-2"> {/* Horizontal layout for indicators */}
              {testimonials.map((_, index) => ( // Map through testimonials for indicators
                <button
                  key={index} // React key
                  onClick={() => goToSlide(index)} // Handle indicator click
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary scale-125' // Active indicator styling
                      : 'bg-gray-300 hover:bg-gray-400' // Inactive indicator styling
                  }`}
                />
              ))}
            </div>

            {/* Next button */}
            <Button
              variant="outline"
              size="sm"
              onClick={goToNext} // Handle next click
              className="p-3 rounded-full"
            >
              <ChevronRight className="h-5 w-5" /> {/* Right arrow icon */}
            </Button>
          </div>

          {/* Overall rating summary */}
          <div className="mt-12 text-center"> {/* Top margin and centered content */}
            <div className="inline-flex items-center space-x-4 bg-card px-6 py-4 rounded-full shadow-sm"> {/* Rating summary container */}
              
              {/* Star display */}
              <div className="flex items-center space-x-1"> {/* Star layout */}
                {renderStars(5)} {/* Display 5 stars */}
              </div>
              
              {/* Rating text */}
              <div className="text-left"> {/* Left-aligned text */}
                <div className="text-lg font-bold text-foreground">5.0 out of 5</div> {/* Rating number */}
                <div className="text-sm text-muted-foreground">Based on 50+ reviews</div> {/* Review count */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;