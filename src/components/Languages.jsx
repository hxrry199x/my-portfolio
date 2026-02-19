import LanguageCard from "./LanguageCard";

function Languages() {
  const languages = [
    {
      title: "JavaScript",
      description: "JavaScript is a high-level language primarily used for web development, enabling dynamic website content. With Node.js, it also supports server-side development, making it essential for full-stack applications.",
    },
     {
      title: "Java",
      description: "Java is an object-oriented, class-based language with as few implementation dependencies as possible. It is known for its system independence, because of the Java Virtual Machine (JVM). Nowadays, it is heavily applied everywhere in enterprise environments and in the development of Android apps and large-scale systems.",
    },
     {
      title: "C#",
      description: "C# is a modern, high-level object-oriented programming language developed by Microsoft. It represents an element of the .NET ecosystem and literally means being simple, robust, and in a position to empower a developer for creating any form of application, whether on the desktop, the web, or even in a mobile environment.",
    },
     {
      title: "VBA",
      description: "(Visual Basic for Applications) VBA is an event-driven programming language from Microsoft, primarily used for automating tasks in Microsoft Office applications.",
    },
     {
      title: "Python",
      description: "Python is a high-level, interpreted language known for its readability and versatility. Supporting procedural, object-oriented, and functional programming, it’s widely used for web development, data science, and more, backed by a rich standard library and strong community.",
    },
  ];

  return (
    <section id="languages">
      <h2>PL | Frameworks</h2>

      <div className="projects-grid">
        {languages.map((project, index) => (
          <LanguageCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Languages;
