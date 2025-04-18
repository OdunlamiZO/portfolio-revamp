import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import PersonalProject from "./components/PersonalProject";
import SocialLink from "./components/SocialLink";
import WorkExperience from "./components/WorkExperience";

export default function App() {
  // data for the portfolio
  const socialLinks = [
    {
      url: "https://github.com/OdunlamiZO",
      icon: "fa-brands fa-github fa-2xl",
    },
    {
      url: "https://twitter.com/OdunlamiZO",
      icon: "fa-brands fa-twitter fa-2xl",
    },
    {
      url: "https://www.linkedin.com/in/zacchaeus-odunlami-4749ba160/",
      icon: "fa-brands fa-linkedin fa-2xl",
    },
  ];

  const workExperience = [
    {
      jobTitle: "Junior Software Engineer",
      company: "Oval Labs Inc",
      companyUrl: "https://ovalfi.com/",
      startDate: "January 2025",
      endDate: "Present",
      achievements: [
        "Developing a Jira Forge App for generating detailed reports on engineers' tasks. The app also features an interactive stand-up meeting tool, allowing teams to log daily updates and blockers.",
      ],
      skills: ["React", "Forge", "AWS Lambda", "Postgres"],
    },
    {
      jobTitle: "Software Engineering Intern",
      company: "Oval Labs Inc",
      companyUrl: "https://ovalfi.com/",
      startDate: "April 2024",
      endDate: "December 2024",
      achievements: [
        "Implemented a real time doppler sync, enabling restart of services on change in stored environment variables on doppler.",
        "Developed a Golang SDK to expose various APIs, significantly enhancing the accessibility and usability of our services.",
      ],
      skills: ["Golang", "NodeJS"],
    },
  ];

  const personalProjects = [
    {
      name: "Portfolio",
      description: `A personal portfolio website showcasing my skills, projects, and work experience. Built with <span class="text-black font-bold">React</span> and <span class="text-black font-bold">Tailwind CSS</span>.`,
      githubUrl: "https://github.com/OdunlamiZO/portfolio-revamp",
      liveUrl: "https://odunlamizo.netlify.app/",
    },
    {
      name: "Zone Clock",
      description: `A web-based application that provides users with the current time for multiple time zones, offering a convenient way to track global time differences. This was created with <span class="text-black font-bold" >vanilla JS</span>.`,
      githubUrl: "https://github.com/OdunlamiZO/zone-clock",
      liveUrl: "https://odunlamizo.github.io/zone-clock/",
    },
  ];

  const [isTypingDone, setIsTypingDone] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          toast.error("Message failed to send.");
          console.error("Error sending message:", error);
        }
      );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTypingDone(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-6 px-6 flex flex-col items-center orbitron-regular text-base text-gray-600 leading-relaxed">
      <header className="w-full flex items-center justify-between">
        <div className="text-xl font-bold overflow-hidden whitespace-nowrap border-r-2 animate-typingBlink">
          OdunlamiZO
        </div>

        <div
          className={`${
            isTypingDone ? "animate-fadeIn" : "opacity-0"
          } flex gap-6`}
        >
          {socialLinks.map((link, index) => (
            <SocialLink key={index} url={link.url} icon={link.icon} />
          ))}
        </div>
      </header>

      <main
        className={`${
          isTypingDone ? "animate-fadeIn" : "opacity-0"
        } lg:w-2/3 w-full`}
      >
        <div className="pt-16 flex flex-col items-center justify-center gap-4">
          <div className="pb-4">
            <img
              src="/images/portfolio_DP.jpeg"
              alt="Portfolio DP"
              className="w-48 md:w-52 lg:w-60 h-auto rounded-full object-cover"
            />
          </div>
          <h1 className="text-2xl lg:text-3xl text-center orbitron-medium">
            HEY, I'M ZACCHAEUS ODUNLAMI
          </h1>
          <p className="text-justify">
            A young and passionate individual, leveraging every opportunity to
            advance in his career. Has a solid grasp of backend technologies and
            a proficient understanding of frontend development. Dedicated to
            delivering efficient and scalable software solutions while
            continuously expanding expertise in both domains. Eager to
            contribute to dynamic projects and collaborate effectively with
            cross-functional teams.
          </p>
        </div>

        <div className="pt-8">
          <h1 className="text-xl orbitron-medium">Work Experience</h1>
          <div className="pt-4 flex flex-col gap-4">
            {workExperience.map((experience, index) => (
              <WorkExperience
                key={index}
                jobTitle={experience.jobTitle}
                company={experience.company}
                companyUrl={experience.companyUrl}
                startDate={experience.startDate}
                endDate={experience.endDate}
                achievements={experience.achievements}
                skills={experience.skills}
              />
            ))}
          </div>
        </div>

        <div className="pt-8">
          <h1 className="text-xl orbitron-medium">Personal Projects</h1>
          <div className="pt-4 flex flex-col gap-4">
            {personalProjects.map((project, index) => (
              <PersonalProject
                key={index}
                name={project.name}
                description={project.description}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
              />
            ))}
          </div>
        </div>

        <div className="pt-8">
          <h1 className="text-xl orbitron-medium">What Am I Up To?</h1>
          <p className="pt-4 text-justify">
            Currently, I am building something interesting with&nbsp;
            <a href="https://github.com/Sammy-OD" className="underline">
              Samuel Odunlami
            </a>
            . A school management system that will help schools manage their
            students and teachers. The system will have features like attendance
            management, grading system, and lots more. This project is being
            built with&nbsp;
            <span className="text-black font-bold">Java Spring Boot&nbsp;</span>
            and&nbsp;
            <span className="text-black font-bold">VueJS</span>. If you are
            interested in contributing to this project, you can reach out to me.
            <br />
          </p>
        </div>

        <div className="py-8">
          <form
            className="p-4 border border-gray-300 rounded-lg"
            onSubmit={handleSubmit}
          >
            <h1 className="text-xl orbitron-medium">Contact Me</h1>

            <div className="pt-4">
              <label htmlFor="name" className="block">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
              />
            </div>

            <div className="pt-4">
              <label htmlFor="email" className="block">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
              />
            </div>

            <div className="pt-4">
              <label htmlFor="message" className="block">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
                rows={4}
              />
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 rounded-lg text-white bg-gray-500  hover:bg-gray-700 transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </main>

      <footer className="w-full h-24 text-sm flex justify-center items-center">
        @2024 Zacchaeus Odunlami. All rights reserved.
      </footer>

      <ToastContainer />
    </div>
  );
}
