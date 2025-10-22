import pImg1 from "/public/images/portfolio/portfolio_item_image_1.webp";
import pImg2 from "/public/images/portfolio/portfolio_item_image_2.webp";
import pImg3 from "/public/images/portfolio/portfolio_item_image_3.webp";
import pImg4 from "/public/images/case/case_image_1.webp";
import pImg5 from "/public/images/case/case_image_2.webp";
import pImg6 from "/public/images/case/case_image_3.webp";

import pImg7 from "/public/images/portfolio/portfolio_item_image_4.webp";
import pImg8 from "/public/images/portfolio/portfolio_item_image_5.webp";
import pImg9 from "/public/images/portfolio/portfolio_item_image_6.webp";
import pImg10 from "/public/images/portfolio/portfolio_item_image_7.webp";
import pImg11 from "/public/images/portfolio/portfolio_item_image_8.webp";
import pImg12 from "/public/images/portfolio/portfolio_item_image_9.webp";
import pImg13 from "/public/images/portfolio/portfolio_item_image_10.webp";
import pImg14 from "/public/images/portfolio/portfolio_item_image_11.webp";

// New Project Images
import skylineImg from "/public/images/projects/skyline.png";
import gotripImg from "/public/images/projects/gotrip.png";
import eskisoImg from "/public/images/projects/eskiso.png";
import inventifyImg from "/public/images/projects/inventify.png";

import tImg1 from "/public/images/case/icon_angular.svg";
import tImg2 from "/public/images/case/icon_elephent.svg";
import tImg3 from "/public/images/case/icon_netcore.svg";
import tImg4 from "/public/images/case/vuejs.svg";
import tImg5 from "/public/images/case/icon_python.svg";

const Project = [
  {
    Id: "1",
    pImg: pImg1,
    title: "Mobile App Design",
    slug: "Mobile-App-Design",
    sub: "App Design",
    description:
      "Our all-encompassing IELTS Coaching curriculum encompasses every aspect...",
  },
  {
    Id: "2",
    pImg: pImg2,
    title: "TOEFL Coaching",
    slug: "TOEFL-Coaching",
    sub: "",
    description:
      "Our experienced coaches are not just educators; they are partners in your journey..",
  },
  {
    Id: "3",
    pImg: pImg3,
    title: "Dashboard Design",
    slug: "Dashboard-Design",
    sub: "Web Design",
    description:
      "The contents of the citizenship test typically cover a range of subjects ...",
  },
  {
    Id: "4",
    pImg: pImg1,
    title: "Mobile App Design",
    slug: "Mobile-App-Design",
    sub: "App Design",
    description:
      "Our all-encompassing IELTS Coaching curriculum encompasses every aspect...",
  },
  {
    Id: "5",
    pImg: pImg2,
    title: "TOEFL Coaching",
    slug: "TOEFL-Coaching",
    sub: "",
    description:
      "Our experienced coaches are not just educators; they are partners in your journey..",
  },
  {
    Id: "6",
    pImg: pImg3,
    title: "Dashboard Design",
    slug: "Dashboard-Design",
    sub: "Web Design",
    description:
      "The contents of the citizenship test typically cover a range of subjects ...",
  },
  {
    Id: "7",
    pImg: skylineImg,
    title: "Skyline Academics – Plagiarism & AI Detection",
    slug: "Skyline-Academics",
    sub: "Education Technology",
    Industry: "EdTech / Academic Services",
    Country: "United States",
    website: "https://skylineacademic.com/",
    Technologies1: tImg1,
    Technologies2: tImg2,
    description:
      "Designed and developed a plagiarism detection admin dashboard for Skyline Academics, enabling administrators to manage users, view reports, and monitor system performance in real-time. Implemented secure authentication, intuitive UI, and robust backend APIs to handle plagiarism scan data efficiently.",
    impact:
      "Improved admin workflow efficiency by 40% and enhanced data visibility for better decision-making.",
    techStack:
      "React.js, Tailwind CSS, Node.js, Express.js, MongoDB, JWT Authentication, REST APIs",
  },
  {
    Id: "8",
    pImg: gotripImg,
    title: "GoTrip – Your Trusted Travel Companion",
    slug: "GoTrip",
    sub: "Travel & Tourism",
    Industry: "Tourism & Hospitality",
    Country: "International",
    website: "https://gotripportal.vercel.app",
    Technologies1: tImg1,
    Technologies2: tImg3,
    description:
      "Developed as a complete tourism and travel agency solution featuring a modern, user-friendly platform to showcase destinations, manage bookings, and engage with travelers worldwide. Multi-language, multi-currency travel website that highlights destinations and offers supporting services like car rentals, holiday packages, flight finder, and tour bookings.",
    impact:
      "Created a comprehensive travel platform enabling global reach with localized experiences.",
    techStack:
      "React.js, Next.js, Tailwind CSS, Node.js, MongoDB, Multi-language Support",
  },
  {
    Id: "9",
    pImg: eskisoImg,
    title: "Eskino Healthcare Website Rebuild",
    slug: "Eskino-Healthcare",
    sub: "Healthcare",
    Industry: "Medical & Healthcare",
    Country: "Germany",
    website: "https://eskino.vercel.app",
    Technologies1: tImg4,
    Technologies2: tImg5,
    description:
      "Rebuilt an outdated healthcare website for a German client into Eskino Medical & Healthcare Center. Transformed a slow, unfriendly platform into a fast, scalable, and modern solution tailored for pediatric and healthcare services with improved user experience and performance.",
    impact:
      "Achieved 60% faster load times and significantly improved patient engagement.",
    techStack: "React.js, Node.js, Tailwind CSS, MongoDB",
  },
  {
    Id: "24",
    pImg: inventifyImg,
    title: "INVENTIFY - Smart Inventory Management",
    slug: "Inventify",
    sub: "Business Software",
    Industry: "SaaS / Inventory Management",
    Country: "Global",
    website: "https://inventify-project.vercel.app",
    Technologies1: tImg1,
    Technologies2: tImg2,
    description:
      "Smart inventory management system built to streamline business operations, track stock levels, manage suppliers, and generate comprehensive reports. Features real-time inventory tracking, automated alerts, and intuitive dashboards for better decision-making.",
    impact:
      "Reduced inventory management time by 50% and minimized stock discrepancies.",
    techStack: "React.js, Node.js, MongoDB, Shadcn UI",
  },
  {
    Id: "10",
    pImg: pImg7,
    title:
      "Driving Digital Transformation Explore the Depth of Our IT Projects",
    slug: "Driving-Digital-Transformation-Explore-the-Depth-of-Our-IT Projects",
    thumb1: "Logo Design",
    thumb2: "Finance",
    category: "technology",
  },
  {
    Id: "17",
    pImg: pImg8,
    title: "Explore Our IT Solutions Portfolio for Public Sector Organizations",
    slug: "Explore-Our-IT-Solutions",
    thumb1: "App Design",
    thumb2: "Public",
    category: "helpdesk",
  },
  {
    Id: "18",
    pImg: pImg9,
    title: "Innovative Solutions Showcase the Diversity of Our IT Portfolio",
    slug: "Innovative-Solutions-Showcase-the-Diversity-of-Our-IT-Portfolio",
    thumb1: "Card Design",
    thumb2: "Transpiration",
    category: "analysis",
  },
  {
    Id: "19",
    pImg: pImg10,
    title: "Tech Triumphs Celebrating Our Achievements in IT Solutions",
    slug: "Tech-Triumphs-Celebrating-Our-Achievements-in-IT-Solutions",
    thumb1: "Web Design",
    thumb2: "Logistic",
    category: "technology",
  },
  {
    Id: "20",
    pImg: pImg11,
    title:
      "Revolutionizing IT Strategies A Closer Look at Our Dynamic IT Solutions",
    slug: "Revolutionizing-IT-Strategies-A-Closer-Look-at-Our-Dynamic-IT-Solutions",
    thumb1: "Web Design",
    thumb2: "Fution",
    category: "analysis",
  },
  {
    Id: "21",
    pImg: pImg12,
    title: "Cloud Migration and Integration Project IT Solutions Portfolio",
    slug: "Cloud-Migration-and-Integration-Project-IT-Solutions-Portfolio",
    thumb1: "Web Design",
    thumb2: "Energy",
    category: "helpdesk",
  },
  {
    Id: "22",
    pImg: pImg13,
    title: "Pioneering Progress Exploring the Evolution and Impact of",
    slug: "Pioneering-Progress-Exploring-the-Evolution-and-Impact-of",
    thumb1: "Web Design",
    thumb2: "Health",
    category: "marketing",
  },
  {
    Id: "23",
    pImg: pImg14,
    title: "Unlocking Potential Explore Our Comprehensive IT Portfolio",
    slug: "Unlocking-Potential-Explore-Our-Comprehensive-IT-Portfolio",
    thumb1: "Web Design",
    thumb2: "Industry",
    category: "technology",
  },
];

export default Project;
