// ---------------------------------------------------------------------------
// All personal content lives here. Edit this file to update the site --
// name, bio, services, projects, images, and contact email.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Karthigai Pandian",
  firstName: "Karthi",
  role: "Website Developer",
  tagline:
    "a website developer driven by building reliable, real-world software solutions",
  email: "karthipandi480@gmail.com",
  // Hero portrait image (src/assets/portrait.jpg)
  portraitUrl: new URL("../assets/portrait.jpg", import.meta.url).href,
};

export const about = {
  heading: "About me",
  paragraph:
    "I'm a computer science graduate and software developer with hands-on experience in web development and building real-world automation and monitoring solutions. I focus on modern, responsive web applications using React, JavaScript, Node.js, Express, MySQL, MongoDB, and REST APIs, turning real-world problems into practical software -- from business dashboards to smart building and IoT monitoring systems.",
};

export const services = [
  {
    number: "01",
    name: "Full-Stack Web Development",
    description:
      "Building responsive, modern web applications end to end with React, JavaScript, Node.js, and Express, from UI to server logic.",
  },
  {
    number: "02",
    name: "REST API Design",
    description:
      "Designing and building clean, well-structured REST APIs that connect front-end applications to reliable backend services.",
  },
  {
    number: "03",
    name: "Database Design",
    description:
      "Structuring and managing relational and document data with MySQL and MongoDB for applications that need to scale.",
  },
  {
    number: "04",
    name: "Dashboards & Monitoring",
    description:
      "Creating business dashboards and real-time monitoring interfaces that turn raw data into decisions people can act on.",
  },
  {
    number: "05",
    name: "IoT & Automation Systems",
    description:
      "Building smart building and IoT monitoring solutions that connect hardware signals to practical, usable software.",
  },
];

export const projects = [
  {
    number: "01",
    category: "E-Commerce",
    name: "PrintIt -- Custom Wallpapers",
    description:
      "A premium wallpaper storefront with a live room visualizer, an interactive material and size cost calculator, and a guided design-match quiz.",
    url: "https://printit-six.vercel.app",
    images: {
      col1a:
        "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=900&q=80&auto=format&fit=crop",
      col1b:
        "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=900&q=80&auto=format&fit=crop",
      col2:
        "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1000&q=80&auto=format&fit=crop",
    },
  },
  {
    number: "02",
    category: "Dashboard",
    name: "NovaLearn Student Dashboard",
    description:
      "A Supabase-powered learning dashboard with animated bento cards, live progress sync, streak tracking, and weekly focus analytics.",
    url: "https://assingnment-frontend-tau.vercel.app",
    images: {
      col1a:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&auto=format&fit=crop",
      col1b:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80&auto=format&fit=crop",
      col2:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1000&q=80&auto=format&fit=crop",
    },
  },
  {
    number: "03",
    category: "AI Tool",
    name: "AI Interview Platform",
    description:
      "An AI-driven mock interview tool that runs practice interview sessions and gives candidates structured feedback.",
    url: "https://ai-interview-ashen-ten.vercel.app",
    images: {
      col1a:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=900&q=80&auto=format&fit=crop",
      col1b:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=80&auto=format&fit=crop",
      col2:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&q=80&auto=format&fit=crop",
    },
  },
  {
    number: "04",
    category: "AI Tool",
    name: "Resume Filter",
    description:
      "A resume screening tool that filters and ranks candidate resumes against role criteria to speed up recruiter shortlisting.",
    url: "https://resume-filter-o3hy.vercel.app",
    images: {
      col1a:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=900&q=80&auto=format&fit=crop",
      col1b:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80&auto=format&fit=crop",
      col2:
        "https://images.unsplash.com/photo-1454165833767-027f9a12ce22?w=1000&q=80&auto=format&fit=crop",
    },
  },
  {
    number: "05",
    category: "E-Commerce",
    name: "E-Commerce Storefront",
    description:
      "A full front-end e-commerce build covering product browsing, cart, and checkout flow.",
    url: "https://e-commerce-kappa-ten-52.vercel.app",
    images: {
      col1a:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80&auto=format&fit=crop",
      col1b:
        "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=900&q=80&auto=format&fit=crop",
      col2:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000&q=80&auto=format&fit=crop",
    },
  },
  {
    number: "06",
    category: "AI Tool",
    name: "AI Service Desk -- Ticket Booking",
    description:
      "An enterprise-grade AI-based service ticket management system for logging, routing, and tracking support tickets.",
    url: "https://ai-based-ticket-booking.vercel.app",
    images: {
      col1a:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&q=80&auto=format&fit=crop",
      col1b:
        "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=900&q=80&auto=format&fit=crop",
      col2:
        "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=1000&q=80&auto=format&fit=crop",
    },
  },
  {
    number: "07",
    category: "Dashboard",
    name: "Automation UI Dashboard",
    description:
      "A monitoring and automation dashboard UI for tracking workflows and system status at a glance.",
    url: "https://automation-ui-dash-board-qpeh.vercel.app",
    images: {
      col1a:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80&auto=format&fit=crop",
      col1b:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=900&q=80&auto=format&fit=crop",
      col2:
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1000&q=80&auto=format&fit=crop",
    },
  },
];

// Placeholder scrolling marquee visuals -- swap for your own project
// screenshots/GIFs whenever you have them.
const marqueeSeed = [
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&q=70&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&q=70&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=70&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&q=70&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&q=70&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&q=70&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550439062-609e1531270e?w=500&q=70&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&q=70&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=500&q=70&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=500&q=70&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=500&q=70&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=500&q=70&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=500&q=70&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500&q=70&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=500&q=70&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=500&q=70&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&q=70&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=500&q=70&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&q=70&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&q=70&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&q=70&auto=format&fit=crop",
];

export const marqueeRow1 = marqueeSeed.slice(0, 11);
export const marqueeRow2 = marqueeSeed.slice(11, 21);

export const decorativeImages = {
  topLeft:
    "https://images.unsplash.com/photo-1614064548237-096f735f344f?w=400&q=80&auto=format&fit=crop",
  bottomLeft:
    "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=400&q=80&auto=format&fit=crop",
  topRight:
    "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?w=400&q=80&auto=format&fit=crop",
  bottomRight:
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&q=80&auto=format&fit=crop",
};
