const techSkills = [
    {
        title: "Languages",
        skills: [
            { icon: `<i class="fa-brands fa-square-js text-yellow-500"></i>`, name: "JavaScript" },
            { icon: `<i class="fa-brands fa-java text-orange-1000"></i>`, name: "Java" },
            { icon: `<i class="fa-brands fa-python text-purple-500"></i>`, name: "Python" },
            { icon: `<i class="fa-brands fa-html5 fa-lg text-green-600"></i>`, name: "HTML5" },
            { icon: `<i class="fa-brands fa-css3-alt fa-lg text-blue-600"></i>`, name: "CSS3" },
        ]
    },
    {
        title: "Front-end",
        skills: [
            { icon: `<i class="fa-brands fa-react text-yellow-600"></i>`, name: "React" },
            { icon: `<i class="fa-solid fa-fire text-red-600"></i>`, name: "Firebase" },
            { icon: `<i class="fa-brands fa-bootstrap text-green-600"></i>`, name: "Bootstrap" },
            { icon: `<i class="fa-solid fa-code fa-xs text-green-600"></i>`, name: "Tailwind" }
        ]
    },
    {
        title: "Back-end",
        skills: [
            { icon: `<i class="fa-brands fa-node fa-sm text-green-600"></i>`, name: "Node.js" },
            { icon: `<i class="fa-brands fa-node-js text-green-600"></i>`, name: "Express.js" }
        ]
    },
    {
        title: "Database",
        skills: [
            { icon: `<i class="fa-solid fa-database fa-xs text-green-700"></i>`, name: "MongoDB" },
            { icon: `<i class="fa-solid fa-database fa-xs text-blue-700"></i>`, name: "MySql" }
        ]
    },
    {
        title: "Dev Tools",
        skills: [
            { icon: `<i class="fa-brands fa-git text-yellow-500"></i>`, name: "Git" },
            { icon: `<i class="fa-brands fa-github"></i>`, name: "GitHub" },
            { icon: `<i class="fa-sharp fa-solid fa-laptop-code fa-xs text-blue-500"></i>`, name: "VS" },
        ]
    }
    
];
const parent = document.getElementById("tech-skills");

const getSkill = (skills) => {
    const skillHtml = skills.map(skill =>
        `<p class="text-md text-gray-700 dark:text-gray-200">
            ${skill.icon}
            ${skill.name}
            
        </p>`);

    return skillHtml.join(" ");
}

const html = techSkills.map(tech =>
    `<div>
        <h2 class="text-xl font-medium text-gray-800 dark:text-gray-100 mb-2">${tech.title}</h2>
        ${getSkill(tech.skills)}
    </div>`
);


parent.innerHTML = html.join(" ");