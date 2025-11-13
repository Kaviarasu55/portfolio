// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

const projectData = {
  project1: {
    title: "Sports & Games Player Performance and Fantasy Sports Analyzer",
    summary: "Analyzed IPL dataset using radar charts and heatmaps, and built fantasy points tables to evaluate player performance.",
    skills: "Python, Pandas, Matplotlib, Data Visualization"
  },
  project2: {
    title: "Live Weather Forecasting Webpage",
    summary: "Led a team project to create a live weather forecasting web application using API integration, ensuring real-time data display.",
    skills: "HTML, CSS, JavaScript, API Handling"
  },
  project3: {
    title: "Sentiment Analysis for Product Reviews",
    summary: "Led a team to build a machine learning model to classify customer reviews into positive, negative, or neutral sentiments.",
    skills: "R, Logistic Regression, Data Preprocessing"
  },
  project4: {
    title: "Password Generator",
    summary: "Designed a simple yet effective program to generate secure random passwords with customizable password length and Strength.",
    skills: "Python (Random library,Gradio UI)"
  }
};

// Elements
const modal = document.getElementById("projectModal");
const title = document.getElementById("projectTitle");
const summary = document.getElementById("projectSummary");
const skills = document.getElementById("projectSkills");
const closeBtn = document.querySelector(".close");

// Open modal on project click
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    const projectKey = card.getAttribute("data-project");
    title.innerText = projectData[projectKey].title;
    summary.innerText = projectData[projectKey].summary;
    skills.innerText = projectData[projectKey].skills;
    modal.style.display = "flex";
  });
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close when clicking outside modal
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});