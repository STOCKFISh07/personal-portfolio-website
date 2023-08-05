const qualifications = [
    {
        title: "B.E.  Electrical and Electronics Engineering",
        year: 2023,
        description: "",
        institute: {
            name: "BITS PILANI, Pilani Campus",
            shortName: "BITS",
            duration: "AUG 2019 - AUG 2023"
        }
    },
    {
        title: "Higher Secondary Education",
        year: 2019,
        description: "Competed Higher Secondary Education in Science Stream ",
        institute: {
            name: "Shivaji Science College, Nagpur",
            shortName: "86.7%",
            duration: "JUN 2017 - APR 2019"
        }
    },
    {
        title: "Primary Education",
        year: 2017,
        description: "Completed Primary Education in 2017",
        institute: {
            name: "ST. Xavier's High School",
            shortName: "95.4%",
            duration: "...-2017"
        }
    },
];

const parent = document.getElementById('qualification');

const html = qualifications.map(quali =>
    `<li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
        </div>
        <div class="flex items-center">
            <time class="mb-1 mr-3 px-3 py-2 rounded-md leading-none text-gray-100 bg-blue-500 dark:bg-gray-600">${quali.year}</time>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-200">${quali.title}
            </h3>
        </div>
        <p class="mb-3 text-base font-normal text-gray-800 dark:text-gray-400">${quali.description}</p>
        <p class="text-base font-light text-gray-800 dark:text-gray-400">
        <span title=${quali.institute.name}>${quali.institute.shortName}</span> &bull; ${quali.institute.duration}
        </p>
    </li>`);

parent.innerHTML = html.join(" ");

