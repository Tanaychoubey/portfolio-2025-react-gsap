import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);
export let scroller: LocomotiveScroll;

const Navbar = () => {
  useEffect(() => {
    // Initialize Locomotive Scroll
    scroller = new LocomotiveScroll({
      el: document.querySelector("#smooth-content") as HTMLElement,
      smooth: true,
      multiplier: 1,
      lerp: 0.05,
      smartphone: {
        smooth: false
      },
      tablet: {
        smooth: false
      },
      scrollFromAnywhere: true,
      getDirection: true,
      getSpeed: true
    });

    // Initialize ScrollTrigger
    ScrollTrigger.defaults({
      scroller: "#smooth-content"
    });

    // Sync ScrollTrigger with Locomotive Scroll
    scroller.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#smooth-content", {
      scrollTop(value) {
        if (arguments.length) {
          if (typeof value === 'number') {
            scroller.scrollTo(value);
          }
          return;
        }
        return scroller.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      }
    });

    // Handle navigation links
    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          if (section) {
            scroller.scrollTo(section);
          }
        }
      });
    });

    // Handle resize
    window.addEventListener("resize", () => {
      scroller.update();
      ScrollTrigger.refresh();
    });

    // Cleanup
    return () => {
      scroller.destroy();
    };
  }, []);

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          tanaychoubey.com
        </a>
        <a
          href="mailto:tanaychoubey2@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          tanaychoubey2@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
