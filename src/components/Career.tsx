import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer Internship</h4>
                <h5>Cloud Regiment | Pune, India</h5>
              </div>
              <h6>May 2022 - Oct 2022</h6>
            </div>
            <p>
              Developed and enhanced web applications using the MERN stack ensuring that it was highly scalable, secure, and efficient.
              Worked on a live project, gaining hands-on experience in building complex web applications and integrating various APIs, including handling AWS server.
              Optimized the website's performance by identifying and resolving issues related to database queries, network latency, and server load balancing.
              Integrated various third-party services such as payment gateways, social media APIs, and email providers into the website.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>UpSale Suite | Indore, India</h5>
              </div>
              <h6>March 2023 - May 2023</h6>
            </div>
            <p>
              Responsible for developing robust web applications using React.js and Redux.
              Involved in both front-end and back-end development tasks, leveraging React for creating dynamic user interfaces and implementing business logic using Node.js and Express.js.
              Integrated various APIs into web applications, ensuring seamless communication between different systems and services.
              Deploying web applications on AWS servers, ensuring scalability, security, and high availability for optimal performance.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>Creysto | Indore, India</h5>
              </div>
              <h6>NOW</h6>
            </div>
            <p>
              Developing and optimizing web applications using React.js and TypeScript, delivering high-quality, user-friendly interfaces.
              Collaborating with cross-functional teams to gather requirements, implement designs, and ensure seamless integration of front-end features.
              Enhancing application performance by implementing best practices, such as lazy loading, code splitting, and efficient state management using Redux.
              Debugging and resolving front-end issues, ensuring optimal user experiences across various devices and browsers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
