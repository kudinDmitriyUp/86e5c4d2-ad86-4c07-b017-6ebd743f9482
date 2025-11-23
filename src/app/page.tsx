"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import FeatureCardFour from '@/components/sections/feature/FeatureCardFour';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Wrench, Sparkles, CreditCard, Shield, Trophy, Users, Car, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="large"
      sizing="large"
      background="grid"
      cardStyle="gradient-bordered"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="outline"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Monaco Luxury Cars"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Inventory", id: "inventory" },
            { name: "Services", id: "services" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="MONACO LUXURY"
          description="Experience the pinnacle of automotive excellence. Curated collection of the world's most prestigious vehicles."
          buttons={[
            { text: "Explore Inventory", href: "inventory" },
            { text: "Schedule Viewing", href: "contact" }
          ]}
          slides={[
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SARPpOYHFbiqus5iP5yOitJp2/uploaded-1763914193103-t2rl5oog.png", imageAlt: "Red luxury sports car" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SARPpOYHFbiqus5iP5yOitJp2/uploaded-1763914193791-m1zbgee7.jpg", imageAlt: "Black luxury sedan" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SARPpOYHFbiqus5iP5yOitJp2/uploaded-1763914194446-t237khpy.jpg", imageAlt: "Yellow exotic supercar" }
          ]}
          autoplayDelay={4000}
          showDimOverlay={true}
        />
      </div>

      <div id="inventory" data-section="inventory">
        <ProductCardTwo
          title="Featured Inventory"
          description="Handpicked luxury vehicles carefully selected for discerning buyers"
          tag="Premium Selection"
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          products={[
            {
              id: "1",
              brand: "Ferrari",
              name: "F8 Tributo",
              price: "€398,000",
              rating: 5,
              reviewCount: "12",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SARPpOYHFbiqus5iP5yOitJp2/uploaded-1763914195106-hxqyzhav.jpg",
              imageAlt: "Ferrari F8 Tributo"
            },
            {
              id: "2",
              brand: "Mercedes-Benz",
              name: "AMG S 63 Coupe",
              price: "€280,000",
              rating: 5,
              reviewCount: "8",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SARPpOYHFbiqus5iP5yOitJp2/uploaded-1763914195764-4o8trhej.png",
              imageAlt: "Mercedes-Benz AMG S 63"
            },
            {
              id: "3",
              brand: "Lamborghini",
              name: "Huracán Sterrato",
              price: "€320,000",
              rating: 5,
              reviewCount: "10",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SARPpOYHFbiqus5iP5yOitJp2/uploaded-1763914196437-zy3t3r2i.jpg",
              imageAlt: "Lamborghini Huracán Sterrato"
            }
          ]}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardFour
          title="Premium Services"
          description="Comprehensive concierge services tailored to luxury car ownership"
          tag="Exclusive Benefits"
          textboxLayout="default"
          animationType="blur-reveal"
          features={[
            {
              title: "Expert Maintenance",
              description: "Certified technicians with years of luxury vehicle expertise",
              icon: Wrench
            },
            {
              title: "Detailed Care",
              description: "Professional detailing and preservation of your investment",
              icon: Sparkles
            },
            {
              title: "Flexible Financing",
              description: "Tailored financing solutions for luxury purchases",
              icon: CreditCard
            },
            {
              title: "Extended Warranty",
              description: "Comprehensive protection plans for peace of mind",
              icon: Shield
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="Our Legacy"
          description="Trusted by discerning collectors and enthusiasts worldwide"
          tag="Excellence"
          textboxLayout="default"
          animationType="scale-rotate"
          gridVariant="four-items-2x2-equal-grid"
          metrics={[
            {
              id: "1",
              icon: Trophy,
              title: "Years Experience",
              value: "25+"
            },
            {
              id: "2",
              icon: Users,
              title: "Satisfied Clients",
              value: "2,400+"
            },
            {
              id: "3",
              icon: Car,
              title: "Vehicles Sold",
              value: "1,850+"
            },
            {
              id: "4",
              icon: Star,
              title: "5-Star Rating",
              value: "4.9/5"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="Client Testimonials"
          description="Hear from our valued clients about their experience"
          tag="Real Stories"
          textboxLayout="default"
          animationType="opacity"
          testimonials={[
            {
              id: "1",
              name: "Alessandro Rossi",
              handle: "@arossi_monaco",
              testimonial: "Exceptional service from start to finish. The team at Monaco Luxury Cars understood exactly what I was looking for and delivered beyond expectations.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SARPpOYHFbiqus5iP5yOitJp2/uploaded-1763914200117-jcmg9ly5.jpg",
              imageAlt: "Alessandro Rossi portrait"
            },
            {
              id: "2",
              name: "Victoria Laurent",
              handle: "@victoria_cl",
              testimonial: "Professional, knowledgeable, and truly passionate about luxury automobiles. My Ferrari experience has been absolutely incredible.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SARPpOYHFbiqus5iP5yOitJp2/uploaded-1763914200798-x46ufhut.jpg",
              imageAlt: "Victoria Laurent portrait"
            },
            {
              id: "3",
              name: "James Cambridge",
              handle: "@jcambridge",
              testimonial: "The financing options were flexible and transparent. Every detail was handled with precision and care. Highly recommended.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SARPpOYHFbiqus5iP5yOitJp2/uploaded-1763914201516-q30sklsd.jpg",
              imageAlt: "James Cambridge portrait"
            },
            {
              id: "4",
              name: "Margot Dubois",
              handle: "@margot_dubois",
              testimonial: "Finding the right luxury car can be daunting, but Monaco Luxury Cars made it seamless. Their expertise is unmatched in the region.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SARPpOYHFbiqus5iP5yOitJp2/uploaded-1763914202592-lzkqkgmw.jpg",
              imageAlt: "Margot Dubois portrait"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get in Touch"
          description="Schedule a private viewing or inquire about our premium inventory. Our team is ready to assist you."
          inputs={[
            { name: "name", type: "text", placeholder: "Full Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: true },
            { name: "vehicle", type: "text", placeholder: "Vehicle Interest", required: false }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your automotive dreams...",
            rows: 5,
            required: false
          }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SARPpOYHFbiqus5iP5yOitJp2/uploaded-1763914203648-0yl2v7zt.jpg"
          imageAlt="Monaco Luxury Cars showroom"
          mediaPosition="right"
          buttonText="Request Consultation"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Team", href: "about" },
                { label: "Careers", href: "#" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Inventory", href: "inventory" },
                { label: "Maintenance", href: "services" },
                { label: "Financing", href: "services" },
                { label: "Warranty", href: "services" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Phone: +377 92 97 49 99", href: "#" },
                { label: "Email: info@monacocluxury.mc", href: "#" },
                { label: "Address: Monte Carlo, Monaco", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2025 Monaco Luxury Cars | Automotive Excellence"
        />
      </div>
    </ThemeProvider>
  );
}