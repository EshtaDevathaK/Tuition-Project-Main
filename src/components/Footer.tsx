import { Phone, Mail, MapPin, Clock, BookOpen } from 'lucide-react'; // Lucide icons for contact info

/* 
Footer Component - Contact information and site footer
Features: Contact details, business hours, social links, clean layout
*/
const Footer = () => {
  
  /* Function to handle phone call */
  const handlePhoneCall = () => {
    window.location.href = 'tel:+919876543210'; // Replace with actual phone number
  };

  /* Function to handle email */
  const handleEmail = () => {
    window.location.href = 'mailto:info@tuitionpro.com'; // Replace with actual email
  };

  /* Function to handle address click (open maps) */
  const handleAddressClick = () => {
    const address = encodeURIComponent('123 Education Street, Knowledge City, State 123456'); // Replace with actual address
    window.open(`https://maps.google.com/?q=${address}`, '_blank'); // Open Google Maps
  };

  /* Current year for copyright */
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-card border-t border-border"> {/* Footer with top border */}
      <div className="container mx-auto px-4 lg:px-6 py-12"> {/* Container with padding */}
        
        {/* Main footer content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"> {/* Responsive grid layout */}
          
          {/* Brand and description column */}
          <div className="lg:col-span-2"> {/* Spans 2 columns on large screens */}
            
            {/* Brand section */}
            <div className="flex items-center space-x-2 mb-4"> {/* Brand layout */}
              <BookOpen className="h-8 w-8 text-primary" /> {/* Brand icon */}
              <span className="text-2xl font-bold text-foreground">TuitionPro</span> {/* Brand name */}
            </div>

            {/* Tagline */}
            <p className="text-muted-foreground mb-4 max-w-md leading-relaxed"> {/* Description with max width */}
              Personal Attention. Proven Results. Transform your child's academic journey 
              with 8+ years of dedicated teaching excellence and individualized learning approach.
            </p>

            {/* Key highlights */}
            <div className="space-y-2"> {/* Vertical spacing for highlights */}
              <div className="flex items-center text-sm text-muted-foreground"> {/* Highlight item */}
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div> {/* Bullet point */}
                <span>8+ Years Teaching Experience</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span>95% Student Success Rate</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span>Individual Attention Guaranteed</span>
              </div>
            </div>
          </div>

          {/* Contact information column */}
          <div> {/* Contact details column */}
            <h3 className="text-lg font-bold text-foreground mb-4">Contact Info</h3> {/* Section heading */}
            
            <div className="space-y-3"> {/* Vertical spacing for contact items */}
              
              {/* Phone contact */}
              <button 
                onClick={handlePhoneCall} // Handle phone call
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-200 w-full text-left" // Button styling
              >
                <Phone className="h-5 w-5 flex-shrink-0" /> {/* Phone icon */}
                <span>+91 98765 43210</span> {/* Phone number */}
              </button>

              {/* Email contact */}
              <button 
                onClick={handleEmail} // Handle email
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-200 w-full text-left"
              >
                <Mail className="h-5 w-5 flex-shrink-0" /> {/* Email icon */}
                <span>info@tuitionpro.com</span> {/* Email address */}
              </button>

              {/* Address */}
              <button 
                onClick={handleAddressClick} // Handle address click
                className="flex items-start space-x-3 text-muted-foreground hover:text-primary transition-colors duration-200 w-full text-left"
              >
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" /> {/* Map pin icon */}
                <span className="leading-relaxed">123 Education Street, Knowledge City, State 123456</span> {/* Address */}
              </button>
            </div>
          </div>

          {/* Business hours column */}
          <div> {/* Business hours column */}
            <h3 className="text-lg font-bold text-foreground mb-4">Class Timings</h3> {/* Section heading */}
            
            <div className="space-y-3"> {/* Vertical spacing for timing items */}
              
              {/* Weekday timings */}
              <div className="flex items-center space-x-3 text-muted-foreground"> {/* Timing item */}
                <Clock className="h-5 w-5 flex-shrink-0" /> {/* Clock icon */}
                <div> {/* Timing content */}
                  <div className="font-medium">Monday - Friday</div> {/* Days */}
                  <div className="text-sm">4:00 PM - 8:00 PM</div> {/* Time */}
                </div>
              </div>

              {/* Weekend timings */}
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Clock className="h-5 w-5 flex-shrink-0" />
                <div>
                  <div className="font-medium">Saturday</div>
                  <div className="text-sm">9:00 AM - 6:00 PM</div>
                </div>
              </div>

              {/* Sunday timings */}
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Clock className="h-5 w-5 flex-shrink-0" />
                <div>
                  <div className="font-medium">Sunday</div>
                  <div className="text-sm">By Appointment</div>
                </div>
              </div>
            </div>

            {/* Additional note */}
            <p className="text-xs text-muted-foreground mt-4 leading-relaxed"> {/* Small note */}
              Flexible timings available based on student requirements. 
              Contact us to discuss custom schedules.
            </p>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border pt-8"> {/* Top border with padding */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"> {/* Responsive layout */}
            
            {/* Copyright */}
            <div className="text-muted-foreground text-sm"> {/* Copyright text */}
              © {currentYear} TuitionPro. All rights reserved. Made with ❤️ for student success.
            </div>

            {/* Quick links */}
            <div className="flex space-x-6 text-sm"> {/* Horizontal layout for links */}
              <button className="text-muted-foreground hover:text-primary transition-colors duration-200"> {/* Link button */}
                Privacy Policy
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Terms of Service
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Refund Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;