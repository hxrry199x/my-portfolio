import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "JuanMallPH",
      description: "JuanMallPH is a responsive online shopping web app built with AngularJS, Node.js, and Firebase. Users can browse products, add items to their cart, earn membership points in their wallet, and chat with the admin in real time for support, ensuring a smooth and interactive shopping experience.",
    },
    {
      title: "Todo App",
      description: "Task manager using React Hooks",
    },
    {
      title: "E-commerce UI",
      description: "Modern shopping interface",
    },
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
