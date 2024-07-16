export const navItems = [
  { name: "Home", link: "#" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60 opacity-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Podcastr - OpenAI Powered Podcast App",
    des: "Explore the latest podcasts with AI-powered podcast generation and a seamless user experience.",
    img: "/p1.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/c.svg", "/three.svg"],
    link: "https://podcastr-app.saadings.me",
  },
  {
    id: 2,
    title: "Zoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Zoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://zoom-app.saadings.me",
  },
  {
    id: 3,
    title: "Horizon - Banking Application",
    des: "Manage your finances with ease using Horizon. Track your transactions and grow your savings.",
    img: "/p3.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://horizon-app.saadings.me",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://apple-app.saadings.me",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Saad has been transformative. His keen eye for design and innovative approach resulted in a stunning website that exceeded our expectations. Saad's attention to detail and commitment to excellence are unmatched. We highly recommend his services.",
    name: "Sophia Williams",
    title: "CEO of BlueWave Solutions",
  },
  {
    quote:
      "Saad's technical expertise and problem-solving skills were pivotal in launching our app on time. His ability to navigate complex challenges with ease and deliver high-quality code is impressive. Saad is a valuable asset to any development team.",
    name: "Liam Brown",
    title: "CTO of Quantum Leap Enterprises",
  },
  {
    quote:
      "Collaborating with Saad was a game-changer for our marketing strategy. His creativity and strategic thinking brought our campaigns to life, resulting in significant growth. Saad's dedication and passion for her work are truly inspiring.",
    name: "Ava Davis",
    title: "Marketing Manager at Sunrise Innovations",
  },
  {
    quote:
      "Saad's analytical skills and data-driven approach provided us with insights that transformed our business operations. His ability to interpret complex data and present actionable recommendations is remarkable. Saad's contributions have been invaluable.",
    name: "Noah Miller",
    title: "Head of Analytics at GreenTech Solutions",
  },
  {
    quote:
      "Saad's leadership and vision have been instrumental in our company's success. His strategic planning and ability to inspire the team have resulted in numerous successful projects. Saad is an exceptional leader and a pleasure to work with.",
    name: "James Wilson",
    title: "COO of Apex Innovations",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full-Stack Dev - AgencyBox",
    desc: "Assisted in the development of multiple web-based platform using MERN Stack and NextJS, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Frontend Engineer - Exarta Labs",
    desc: "Designed and developed a web app using AI to generate dynamic landing pages for marketing campaigns.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app store.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/saadings",
  },
  {
    id: 2,
    img: "/wha.svg",
    link: "https://wa.me/923241110016",
  },
  {
    id: 3,
    img: "/insta.svg",
    link: "https://www.instagram.com/saadingzz/",
  },
  {
    id: 4,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/saad-nauman-4a4bb3241/",
  },
];
