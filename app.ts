document.getElementById("resumeForm")!.addEventListener("submit", (event) => {
    event.preventDefault();
  });
  
  function generateResume(): void {
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const contact = (document.getElementById("contact") as HTMLInputElement).value;
    const summary = (document.getElementById("summary") as HTMLTextAreaElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value;
  
    // Build the HTML for the resume preview
    const resumeContent = `
      <h2>${name}</h2>
      <p><strong>Contact:</strong> ${contact}</p>
      <h3>Professional Summary</h3>
      <p>${summary}</p>
      <h3>Experience</h3>
      <p>${experience}</p>
      <h3>Skills</h3>
      <p>${skills}</p>
    `;
  
    // Display the generated resume in the preview section
    const resumePreview = document.getElementById("resumePreview") as HTMLDivElement;
    resumePreview.innerHTML = resumeContent;
    resumePreview.classList.remove("hidden");
  }
  