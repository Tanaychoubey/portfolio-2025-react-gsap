import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Ecom from "../assets/ecommerce-project.png"
import FB from "../assets/facebook-clone-project.png"
import BlockChain from "../assets/blockchain-explorer-project.png"
// import ChatApp from "../assets/chat-app-project.png" 

gsap.registerPlugin(useGSAP);

const projects = [
  {
    name: "Ecommerce Web App",
    category: "Full Stack",
    description: "A modern e-commerce web application built using the MERN stack, featuring a seamless shopping experience with product sorting, filtering, pagination, JWT authentication, Stripe payments, and an admin panel for managing orders and inventory.",
    tools: "React.js, Redux, Node.js, Express, MongoDB, JWT, Stripe, TailwindCSS",
    image: Ecom,
    source_code_link: "https://github.com/Tanaychoubey/ecommerce-mern-23",
  },
  {
    name: "Facebook Clone",
    category: "Full Stack",
    description: "A Facebook-like social media platform built with Next.js and Tailwind CSS for the frontend, and Spring Boot with MySQL for the backend, featuring authentication, real-time notifications, posts, comments, and a friend system.",
    tools: "Next.js, Spring Boot, MySQL, TailwindCSS, JWT, REST API",
    image: FB,
    source_code_link: "https://github.com/Tanaychoubey/facebook-clone-springboot-next.js",
  },
  {
    name: "Blockchain Explorer",
    category: "Web3",
    description: "A Web3-based Ethereum blockchain query tool built with Next.js, using Ethers.js and Solidity smart contracts. It features block and transaction search, MetaMask integration for direct blockchain access, and backend API support.",
    tools: "Next.js, Ethers.js, Solidity, Web3, MetaMask, Smart Contracts",
    image: BlockChain,
    source_code_link: "https://github.com/Tanaychoubey/blockchain-explorer-web3js",
  },
  {
    name: "Real-time Chat Application",
    category: "Full Stack",
    description: "A real-time chat application built with Socket.IO and React, featuring instant messaging, user authentication, group chats, and file sharing capabilities. Includes features like typing indicators, read receipts, and message history.",
    tools: "React.js, Node.js, Socket.IO, MongoDB, Express, JWT, Material-UI",
    image: 'ChatApp',
    source_code_link: "https://github.com/Tanaychoubey/chat-app-socket.io",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "+=100%", // Increased for better scroll control
        scrub: 1,      // Increased for smoother scrolling
        pin: true,
        pinSpacing: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
        onUpdate: (self) => {
          document.querySelector(".work-section")?.setAttribute("data-progress", self.progress.toString());
          // Add a class to body when scroll is complete
          if (self.progress >= 0.99) {
            document.body.classList.add('work-complete');
          } else {
            document.body.classList.remove('work-complete');
          }
        }
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 1,     // Reduced for smoother animation
      ease: "none",    // Added for consistent scrolling speed
    });
  }, []);
  
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage 
                image={project.image} 
                alt={project.name}
                link={project.source_code_link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
