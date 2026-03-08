document.addEventListener('DOMContentLoaded', () => {
    
    const ctaInput = document.getElementById('cta-input');
    const updateBtn = document.getElementById('update-btn');
    const ctaHeadline = document.getElementById('cta-headline');

    updateBtn.addEventListener('click', () => {
        const userInput = ctaInput.value;

        if (userInput.trim() !== "") {
            ctaHeadline.textContent = userInput;
            console.log("BK Studio Vision Updated: " + userInput);
            ctaInput.value = "";
        } else {
            alert("Please enter a new statement");
        }
    });
});