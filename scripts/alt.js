document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const result = params.get('result');
    const feedback = document.createElement("div");
    feedback.id = "feedback";
    feedback.innerHTML = result === "correct" 
        ? "<p style='color: green;'><strong>Correct!</strong> You selected the right area.</p>" 
        : "<p style='color: red;'><strong>Incorrect.</strong> Try again!</p>";
    const contentDiv = document.querySelector(".content2");
    contentDiv.parentNode.insertBefore(feedback, contentDiv);
});