// Sample resources data
const resourcesData = [
    {
        "Grade Level": "Primary",
        "Subject": "Math",
        "Description": "Fun math games and exercises for early learners",
        "URL": "https://www.khanacademy.org/math"
    },
    {
        "Grade Level": "Primary",
        "Subject": "English",
        "Description": "Basic reading and writing skills for kids",
        "URL": "https://www.starfall.com"
    },
    {
        "Grade Level": "Secondary",
        "Subject": "Math",
        "Description": "Algebra and geometry concepts",
        "URL": "https://www.mathsisfun.com"
    },
    {
        "Grade Level": "Secondary",
        "Subject": "Computer Science",
        "Description": "Introduction to programming and algorithms",
        "URL": "https://www.codecademy.com"
    },
    {
        "Grade Level": "College",
        "Subject": "Computer Science",
        "Description": "Data structures, AI, and machine learning",
        "URL": "https://www.coursera.org/courses?query=computer%20science"
    }
];

// Function to filter resources based on user input
function filterResources() {
    const gradeLevel = document.getElementById('gradeLevel').value;
    const subject = document.getElementById('subject').value;
    const filteredResources = resourcesData.filter(resource =>
        (resource["Grade Level"] === gradeLevel || gradeLevel === "All") &&
        (resource.Subject === subject || subject === "All")
    );
    displayResources(filteredResources);
}

// Function to display filtered resources
function displayResources(resources) {
    const resourceDiv = document.getElementById('resources');
    resourceDiv.innerHTML = ''; // Clear previous results

    if (resources.length > 0) {
        resources.forEach(resource => {
            const resourceElement = document.createElement('div');
            resourceElement.classList.add('resource');
            resourceElement.innerHTML = `
                <h3>${resource.Subject} - ${resource["Grade Level"]}</h3>
                <p><strong>Description:</strong> ${resource.Description}</p>
                <a href="${resource.URL}" target="_blank">Visit Resource</a>
            `;
            resourceDiv.appendChild(resourceElement);
        });
    } else {
        resourceDiv.innerHTML = '<p>No resources found for the selected filters.</p>';
    }
}

// Event listener for search button
document.getElementById('searchButton').addEventListener('click', filterResources);

