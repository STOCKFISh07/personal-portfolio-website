const recentWorks = [
    {
        title: "Food Delivery App",
        description: "A full-stack MERN application with advanced features like a login/register system, products filtered by category or price, product Search and shopping cart.",
        techs: ["MERN", "JS", "BS5"],
        img: "/images/food-app.png",
        url: "https://github.com/STOCKFISh07/food_order"
    },
    {
        title: "Store Management App",
        description: "A 3-tier full-stack Store Management application for keeping track of customers and their orders.",
        techs: ["Python", "BS5", "SQL", "Flask"],
        img: "/images/store.png",
        url: "https://github.com/STOCKFISh07/Store-Management-Web-App"
    },
    {
        title: "Slack clone",
        description: "A Slack Clone App using React, Redux and Firebase offering a familiar interface for seamless communication and collaboration.",
        techs: ["React", "JS", "Firebase"],
        img: "/images/slack-clone.png",
        url: "https://github.com/STOCKFISh07/Slack-Clone"
    }
];

const parent = document.getElementById('recent-works');

const getTech = (techs) => {
    return techs.map(tech =>
        `<button type="button" class="text-gray-900 bg-gray-100 border border-gray-100  hover:bg-gray-50 font-medium rounded-md text-sm px-3.5 py-2 mr-2 mb-2 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-700 dark:hover:bg-gray-600 dark:hover:border-gray-600">
                ${tech}
            </button>`).join(" ");
}

const html = recentWorks.map(work =>
    `<div class="bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
        <div class="lg:h-36 object-cover">
            <img class="rounded-t-lg w-full" src=${work.img} alt=${work.title} />
        </div>
        <div class="p-3 border-t border-gray-100 dark:border-gray-600">
            <h5 class="text-xl font-semibold text-gray-900 dark:text-gray-200">${work.title}</h5>
            <p class="font-light text-gray-800 dark:text-gray-400">${work.description}</p>
            <div class="my-4 flex flex-wrap">
                ${getTech(work.techs)}
            </div>
            <a href="${work.url}" target="_blank"
                class="w-full inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center rounded-lg text-white bg-blue-500 hover:bg-blue-600 dark:text-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
                Read more
                <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
                </svg>
            </a>
        </div>
    </div>`
);

parent.innerHTML = html.join(" ");
