document.addEventListener("DOMContentLoaded", function() {
    const areas = document.querySelectorAll("area");
    const questions = [
        { question: "Which area is known for its dense trees and wildlife?", answer: "forest" },
        { question: "Which area covers most of the Earth's surface with saltwater?", answer: "ocean" },
        { question: "Which area features tall landforms that rise prominently above their surroundings?", answer: "mountains" },
        { question: "Which area is home to a variety of marine life?", answer: "ocean" },
        { question: "Which area is crucial for the global ecosystem and provides oxygen through trees?", answer: "forest" },
        { question: "Which area often serves as a popular destination for hiking and skiing?", answer: "mountains" },
        { question: "Which area can absorb carbon dioxide and provide a habitat for diverse wildlife?", answer: "forest" },
        { question: "Which area supports activities such as snorkeling and diving?", answer: "ocean" },
        { question: "Which area is characterized by its high altitude and often snowy peaks?", answer: "mountains" },
        { question: "Which area includes coral reefs and vast underwater ecosystems?", answer: "ocean" }
    ];
    

    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    const questionDiv = document.createElement("div");
    questionDiv.id = "question";
    questionDiv.innerHTML = `<strong>Question:</strong> ${randomQuestion.question}`;
    const contentDiv = document.querySelector(".temp");
    contentDiv.parentNode.insertBefore(questionDiv, contentDiv);

    areas.forEach(area => {
        area.addEventListener("click", function(event) {
            event.preventDefault();
            const isCorrect = area.alt === randomQuestion.answer;
            const result = isCorrect ? "correct" : "incorrect";
            window.location.href = `${area.href}?result=${result}`;
        });
    });
});