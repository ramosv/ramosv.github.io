//Change background color whne clicking on main content

document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.querySelector('main');
    mainContent.addEventListener('click', () => {
        mainContent.style.backgroundColor = 'lightblue';
    });
    const introText = document.getElementById('intro-text');
    introText.addEventListener('click', () => {
        introText.textContent = "With a strong foundation in information systems, I am currently diving deeper into computer science through my master's studies, focusing on transitioning into a software engineering role. My experience spans from IT to hands-on software development, showcased by my participation in hackathons and personal projects. Fluent in both English and Spanish, I bring to the table effective communication skills, bridging technical nuances with clarity. My ability to translate technical details, combined with my growing software engineering expertise, positions me uniquely at the intersection of technology and practical solutions.";
        introText.style.color = "#333";
    });
    const schools = document.querySelectorAll('.school');
    schools.forEach(school => {

        const moreInfo = school.querySelector('.more-info');
        const details = school.querySelector('.details');

        moreInfo.addEventListener('click', () => {
            console.log("Clicked more-info");

            if (details.style.display === "none" || !details.style.display) {
                details.style.display = "block";
                moreInfo.textContent = "Less info";
            } else {
                details.style.display = "none";
                moreInfo.textContent = "Click here to learn more";
            }
        });
    });
});
