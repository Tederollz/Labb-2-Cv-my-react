// Hämta CV-data från JSON-filen
fetch('/JS/cv.json')
.then(response => response.json())
.then(data => {
    const cvContainer = document.getElementById('cv-container');

    // Visa utbildningar
    const educationSection = document.createElement('div');
    educationSection.innerHTML = '<h2>Utbildningar:</h2>';
    data.education.forEach(edu => {
        const entry = document.createElement('div');
        entry.innerHTML = `
            <div class="entry">
                <h3>${edu.degree}</h3>
                <p>${edu.school} (${edu.year})</p>
            </div>
        `;
        educationSection.appendChild(entry);
    });
    cvContainer.appendChild(educationSection);

    // Visa arbetslivserfarenhet
    const workExperienceSection = document.createElement('div');
    workExperienceSection.innerHTML = '<h2>Arbetslivserfarenhet:</h2>';
    data.workExperience.forEach(work => {
        const entry = document.createElement('div');
        entry.innerHTML = `
            <div class="entry">
                <h3>${work.title}</h3>
                <p>${work.company} (${work.year})</p>
                <p>${work.description}</p>
            </div>
        `;
        workExperienceSection.appendChild(entry);
    });
    cvContainer.appendChild(workExperienceSection);
})
.catch(error => console.error('Fetch error:', error));