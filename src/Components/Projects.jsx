import { MdArrowOutward } from "react-icons/md";
import HoverVideoPlayer from "react-hover-video-player";

const projects = [
  {
    id: "0.1",
    name: "StreamBox",
    title: "Movie Streaming Website/App",
    type: "Featured project", 
    description: "A modern movie streaming platform featuring 100+ movies, built with React and Tailwind CSS. Includes an AI-powered chatbot (Gemini AI) that provides personalized movie recommendations. The responsive design offers dynamic content browsing, advanced search capabilities, and fluid animations for an engaging user experience.",
    videoSrc: "/ztrendz_v.mp4",
    thumbnailSrc: "/StreamBox_T.png",
    projectUrl: "https://streamboxweb.netlify.app/",
    stack: ["React", "Tailwind CSS", "JavaScript", "API Integration", "AI Integration", "gemini API"]
  },
  {
    id: "0.2", 
    name: "Netspire Creatives Website",
    title: "Agency Website",
    type: "Featured project",
    description: "A minimalistic agency website for Netspire Creatives a Web development & AI Automation Agency. Website has visually appealing and smooth animation and captivative UI Design",
    videoSrc: "/NetspireCreatives_V.mp4",
    thumbnailSrc: "/netspireCreatives_T.jpg",
    projectUrl: "https://www.netspirecreatives.online",
    stack: ["HTML", "Google Fonts", "CSS", "Javascript"]
  },
  {
    id: "0.3",
    name: "SWIS Website", 
    title: "College Website",
    type: "Demo project",
    description: "A modern college website featuring smooth scrolling powered by Locomotive JS. Built with HTML, CSS, JavaScript and Bootstrap, the site incorporates Google Fonts for elegant typography. The design emphasizes a consistent color palette, fluid animations, and an intuitive user experience.",
    videoSrc: "/Swis_V.mp4",
    thumbnailSrc: "/Swis Wbeiste.jpg",
    projectUrl: "https://netspire1920.github.io/swis",
    stack: ["HTML", "CSS", "Google Fonts", "Javascript", "Bootstrap", "Locomotive JS", "UI/UX Design"]
  }
];

const ProjectCard = ({ project }) => {
  return (
    <div className="h-fit md:min-h-[480px] w-[100%] flex flex-col md:flex-row rounded-3xl p-6">
      <div className="w-100 md:w-1/2 bg-zinc-950 md:p-4 rounded-3xl">
        <h4 className="h-[10%] font-semibold text-2xl md:text-3xl pb-4">
          <span className="md:ml-2 font-mono text-teal-600 font-bold">{project.id}</span>{" "}
          {project.name}
        </h4>
        <div className="w-full h-[90%] flex items-center justify-center rounded-3xl">
          <div className="h-fit w-[530px] border-2 border-[grey] flex items-center rounded-3xl overflow-hidden">
            <HoverVideoPlayer
              className="rounded-full"
              videoSrc={project.videoSrc}
              restartOnPaused={true}
              preload="auto"
              disableRemotePlayback
              muted
              loop
              pausedOverlay={
                <img
                  src={project.thumbnailSrc}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              }
              loadingOverlay={
                <div className="loading-overlay">
                  <div className="loading-spinner" />
                </div>
              }
            />
          </div>
        </div>
      </div>
      <div className="w-100 md:w-1/2 h-100 bg-black rounded-r-2xl pt-4 md:p-4 md:pt-8 md:pr-6 flex flex-col justify-between">
        <div className="h-[75%] flex flex-col justify-between">
          <div className="w-100 h-fit text-left md:text-right">
            <h2 className="text-md font-mono font-bold uppercase text-teal-600">
              {project.type}
            </h2>
            <p className="text-4xl font-bold">{project.title}</p>
          </div>
          <div className="mt-6">
            <p className="text-xl text-left md:text-right">
              {project.description}
            </p>
            <div className="flex gap-4 md:gap-6 justify-start md:justify-end pt-8 md:px-0 md:py-4 flex-wrap md:mt-4">
              {project.stack.map((tech, index) => (
                <h2 key={index} className="py-2 px-4 md:px-8 bg-teal-600/55 border-2 border-teal-600 rounded-full hover:bg-teal-600 transtion-all duration-300 ease-in-out text-xs flex justify-center items-center font-semibold">
                  {tech}
                </h2>
              ))}
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[25%] flex justify-start py-10 md:py-0 md:justify-end items-end">
          <a
            href={project.projectUrl}
            target="_blank"
            className="px-4 py-2 h-fit bg-teal-950 w-fit flex items-center rounded-md text-white font-bold border-2 border-teal-600 hover:bg-teal-800 transition-all ease-in-out duration-800"
          >
            Veiw Project <MdArrowOutward size={20} className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

function Projects() {
  return (
    <div
      id="Projects"
      className="w-100 bg-black h-fit flex items-center justify-center text-white"
    >
      <div className="max-w-[1240px] w-[95%] flex flex-col items-center justify-center">
        <div className="w-[100%] h-100 p-4 md:pt-4 pb-2 flex items-start justify-start md:items-end md:justify-center">
          <h1 className="uppercase text-[30px] text-left md:text-[55px] font-bold">
            Featured Projects
          </h1>
        </div>
        <div className="w-100 h-fit p-4 md:p-6 md:pt-0">
          <p className="text-[16px] md:text-[18px]">
            These are some of the selected projects to showcase my Front-End
            Developement Skills{" "}
          </p>
        </div>
        <div className="w-11/12 h-[2.5px] bg-white rounded-full my-1 mb-4"></div>

        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}

        <div className="w-[95%] h-[2.5px] bg-white rounded-full my-1 mt-4"></div>
      </div>
    </div>
  );
}

export default Projects;
