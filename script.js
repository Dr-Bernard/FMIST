// Placeholder data for departments and agencies
const departments = [
    "Department 1", "Department 2", "Department 3", "Department 4", 
    "Department 5", "Department 6", "Department 7", "Department 8", 
    "Department 9", "Department 10", "Department 11", "Department 12", 
    "Department 13", "Department 14", "Department 15"
];

const agencies = [
    { name: "Agency 1", url: "agency.html" },
    { name: "Agency 2", url: "agency.html" },
    { name: "Agency 3", url: "agency.html" },
    // ...more agencies
    { name: "Agency 18", url: "agency.html" }
];

// Populate departments list
const departmentsList = document.getElementById('departments-list');
departments.forEach(department => {
    const li = document.createElement('li');
    li.textContent = department;
    departmentsList.appendChild(li);
});

// Populate agencies list
const agenciesList = document.getElementById('agencies-list');
agencies.forEach(agency => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = agency.url;
    a.textContent = agency.name;
    li.appendChild(a);
    agenciesList.appendChild(li);
});
