// app/about/page.js
// Important: Ensure these components are relevant to an 'About' page for a talent hunt.
// If 'CourseSection' or 'PopularServiceSection2' are unrelated, consider replacing them.
import AboutSection3 from "@/component/about/AboutSection3";
import ActivitySection2 from "@/component/activity/ActivitySection2";
import BlogSection from "@/component/blog/BlogSection";
import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import CourseSection from "@/component/course/CourseSection"; 
import Tvstations from "@/component/course/Tvstations"; // R// Review if relevant to Talent Hunt
import FaqSection from "@/component/faq/FaqSection";
import Layout from "@/component/layout/Layout";
import PopularServiceSection2 from "@/component/service/PopularServiceSection2"; // Review if relevant to Talent Hunt

// --- SEO: Dynamic Metadata for App Router ---
// This metadata will be merged with any parent layout.js metadata.
export const metadata = {
  // Primary SEO: Title for browser tab & search results
  title: 'About Spotlight Talent Hunt | Nigeria Premier Reality Show',
  // Primary SEO: Meta Description for search snippets (150-160 chars is good)
  description: 'Learn about Spotlight Talent Hunt, Nigeria\'s leading reality TV show. Discover our mission to find and nurture top talent in music, dance, comedy & more. Get show details, audition info, and judge profiles.',
  
  // Canonical URL (IMPORTANT: Replace with your actual domain and specific page path)
  // This helps prevent duplicate content issues.
  alternates: {
    canonical: 'https://www.timeless-entertainment.com/about', // Replace with your actual domain
  },

  // Open Graph (OG) - For social media sharing previews (Facebook, LinkedIn, etc.)
  openGraph: {
    title: 'About Spotlight Talent Hunt | Nigeria\'s Premier Reality Show',
    description: 'Learn about Spotlight Talent Hunt, Nigeria\'s leading reality TV show. Discover our mission to find and nurture top talent in music, dance, comedy & more.',
    url: 'https://www.timeless-entertainment.com/about', // Must be the absolute URL to this page
    siteName: 'Spotlight Talent Hunt',
    images: [
      {
        // url: 'https://www.timeless-entertainment.com/images/spotlight-og-about.jpg', // Specific OG image for About page (1200x630px recommended)
        width: 1200,
        height: 630,
        alt: 'Spotlight Talent Hunt About Us Banner',
      },
      // You can add more images if needed
    ],
    locale: 'en_NG', // Or 'en_US' if more global, 'en_GB', etc.
    type: 'website', // This page is a general website page
  },

  // Twitter Cards - For Twitter (X) sharing previews
  twitter: {
    card: 'summary_large_image', // Use 'summary_large_image' for better visuals
    site: '@SpotlightHuntNG', // Your show's official Twitter handle
    creator: '@SpotlightHuntNG', // Creator's Twitter handle (can be same as site)
    title: 'About Spotlight Talent Hunt | Nigeria\'s Premier Reality TV Show',
    description: 'Learn about Spotlight Talent Hunt, Nigeria\'s leading reality TV show. Discover our mission to find and nurture top talent in music, dance, acting, film-making, comedy & more.',
    // images: ['https://www.timeless-entertainment.com/images/spotlight-twitter-about.jpg'], // Specific Twitter image (800x418px or 1200x675px recommended)
  },

  // SEO: Keywords (optional, but can help signal relevance)
  keywords: ['Spotlight Talent Hunt', 'Nigeria reality show', 'talent competition', 'singing show Nigeria', 'dancing show Nigeria',  'Auditions Nigeria',
    'TV Show Africa',
    'Music Competition Nigeria',
    'Dance Competition Nigeria',
    'Comedy Show Nigeria', 
    'comedy talent hunt', 'Nigerian entertainment'],

  // Authorship (if relevant)
  authors: [{ name: 'Spotlight Talent Hunt Team', url: 'https://www.timeless-entertainment.com' }],

  // Robots Meta Tag (ensure crawling and indexing)
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
};

export default function About() {
    // --- SEO: JSON-LD Structured Data ---
    // This script helps search engines understand the content on your page more deeply.
    // It's placed directly in the component's render function.
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                // Schema for the WebPage itself
                "@type": "WebPage",
                "@id": "https://www.timeless-entertainment.com/about", // Must match canonical URL
                "url": "https://www.timeless-entertainment.com/about",
                "name": "About Spotlight Talent Hunt | Nigeria's Premier Reality Show",
                "description": "Learn about Spotlight Talent Hunt, Nigeria's leading reality TV show. Discover our mission to find and nurture top talent in music, dance, comedy & more.",
                "isPartOf": {
                    "@type": "WebSite",
                    "url": "https://www.timeless-entertainment.com",
                    "name": "Spotlight Talent Hunt Official Website",
                    "description": "Official website for Spotlight Talent Hunt, Nigeria's premier reality TV show."
                },
                "inLanguage": "en-NG",
                "mainEntityOfPage": "https://www.timeless-entertainment.com/about"
            },
            {
                // Schema for the TV Series itself, as this page is about the show
                "@type": "TVSeries",
                "name": "Spotlight Talent Hunt",
                "description": "Nigeria's premier reality television talent show dedicated to discovering and nurturing exceptional talent across various disciplines including music, dance, and comedy.",
                "url": "https://www.timeless-entertainment.com", // Link to the main show page (often homepage)
                "genre": ["Reality television", "Talent show", "Music", "Dance", "Comedy"],
                "producer": {
                    "@type": "Person", // Or Organization if a company
                    "name": "Your Production Company Name" // Replace with actual producer
                },
                "actor": [ // List your main judges/hosts here
                    { "@type": "Person", "name": "Judge 1 Name" },
                    { "@type": "Person", "name": "Host 1 Name" }
                ],
                // Add more details if known, e.g.,
                // "numberOfSeasons": "3",
                // "startDate": "2023-01-01", // Example start date of the first season
                // "image": "https://www.timeless-entertainment.com/images/spotlight-show-poster.jpg" // Main show poster
            }
        ]
    };
// You could also add Organization schema here if it's not handled in your root layout.
      // Example if placing Organization schema here:
      
      {
        "@context"; "https://schema.org",
        "@type"; "Organization",
        "name"; "Spotlight Talent Hunt",
        "url"; "https://www.timeless-entertainment.com",
        "logo"; "https://www.timeless-entertainment.com/images/spotlight-logo.png",
        "sameAs"; [
          "https://www.facebook.com/timeless-entertainmentOfficial", // Your Facebook Page URL
          "https://twitter.com/SpotlightHuntNG", // Your Twitter Profile URL
          "https://www.instagram.com/timeless-entertainment_ng/", // Your Instagram Profile URL
          "https://www.youtube.com/c/timeless-entertainment", // Your YouTube Channel URL
          "https://www.tiktok.com/@timeless-entertainment", // Your TikTok Profile URL
          // Add other relevant social media profiles here
        ]
      }
      
    
    return (
        <Layout>
            {/* Directly injecting structured data for this specific page */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            {/* Breadcrumb Section - Keep header and title relevant to the page content */}
            <BreadcrumbSection header="Talent Hunt" title="About Us"/>
            
            <section className="tf__about_us_page mt_195 xs_mt_100">
                {/* About Section - Ensure this component's content provides detailed info about the show */}
                <AboutSection3 style=''/>
                <CourseSection style="tf__popular_courses"/>
                {/* Review these components for relevance to a 'Talent Hunt' About page */}
                {/* If they are not directly about the show's core, consider moving them or renaming/repurposing them */}
                <PopularServiceSection2/>
                <CourseSection style="tf__popular_courses"/>
                
                {/* FAQ Section - Excellent for SEO, ensure questions/answers are comprehensive */}
                <FaqSection img="images/advert1.png"/>
                
                {/* Activity Section - Good for showing dynamic content related to the show */}
                <ActivitySection2 style="tf__activities_slider_area pt_95 pb_100"/>
                
                {/* Blog Section - Crucial for fresh content and long-tail keyword targeting */}
                <BlogSection/>
            </section>
        </Layout>
    )
}