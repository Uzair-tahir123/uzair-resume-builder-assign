document.getElementById("resumeForm").addEventListener("submit", function (event) {
    event.preventDefault();
});
function generateResume() {
    var name = document.getElementById("name").value;
    var contact = document.getElementById("contact").value;
    var summary = document.getElementById("summary").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // Build the HTML for the resume preview
    var resumeContent = "\n      <h2>".concat(name, "</h2>\n      <p><strong>Contact:</strong> ").concat(contact, "</p>\n      <h3>Professional Summary</h3>\n      <p>").concat(summary, "</p>\n      <h3>Experience</h3>\n      <p>").concat(experience, "</p>\n      <h3>Skills</h3>\n      <p>").concat(skills, "</p>\n    ");
    // Display the generated resume in the preview section
    var resumePreview = document.getElementById("resumePreview");
    resumePreview.innerHTML = resumeContent;
    resumePreview.classList.remove("hidden");
}
