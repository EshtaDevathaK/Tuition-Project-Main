import { MessageCircle } from 'lucide-react'; // WhatsApp-style message icon

/* 
WhatsAppFloat Component - Floating WhatsApp contact button
Features: Fixed positioning, WhatsApp green color, hover effects, direct chat link
*/
const WhatsAppFloat = () => {
  
  /* Function to handle WhatsApp chat opening */
  const handleWhatsAppClick = () => {
    const phoneNumber = "919876543210"; // Replace with actual WhatsApp number (include country code without +)
    const message = "Hi! I'm interested in learning more about your tuition services. Could you please provide more details?"; // Pre-filled message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`; // WhatsApp URL format
    
    window.open(whatsappUrl, '_blank'); // Open WhatsApp in new tab
  };

  return (
    <button
      onClick={handleWhatsAppClick} // Handle click to open WhatsApp
      className="whatsapp-float group" // Apply custom CSS class and group for hover effects
      aria-label="Contact us on WhatsApp" // Accessibility label
    >
      {/* WhatsApp icon */}
      <MessageCircle className="h-7 w-7 text-white group-hover:scale-110 transition-transform duration-200" /> {/* Icon with hover scale effect */}
      
      {/* Pulse animation ring */}
      <div className="absolute inset-0 rounded-full bg-[#25d366] animate-ping opacity-20"></div> {/* Ping animation for attention */}
      
      {/* Tooltip on hover */}
      <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-foreground text-background px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"> {/* Tooltip styling */}
        Chat with us on WhatsApp
        {/* Tooltip arrow */}
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-l-4 border-l-foreground border-y-4 border-y-transparent"></div> {/* Arrow pointing to button */}
      </div>
    </button>
  );
};

export default WhatsAppFloat;