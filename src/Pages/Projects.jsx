const projects = [
  {
    name: "Fast Pizza App",
    description: "A pizza ordering app built with React, Redux, and Tailwind.",
    link: "https://react-fast-pizza-eosin.vercel.app/",
    image:
      "https://media.istockphoto.com/id/2148261229/photo/eating-pizza-and-funny-faces.jpg?s=1024x1024&w=is&k=20&c=e4VdeRZl7TfHCFwZSmupvh2CcIf86exBy6jh8Yjokfk=", // Example image
  },
  {
    name: "Far Away Travel ",
    description:
      "A far away travel that used what should be packed or not for the trip",
    link: "https://far-away-travel-three.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "The Wild Osis Hotel",
    description:
      "The Wild Oasis is a modern and intuitive hotel management web application designed to simplify daily operations for hotel staff and managers. ",
    link: "https://the-wild-osis-hotel-app-git-main-yasirnikozais-projects.vercel.app/dashboard",
    image:
      "https://images.unsplash.com/photo-1732347210962-c37cb67aabb2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Projects() {
  return (
    <section className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        My Projects
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-900">
                {project.name}
              </h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
