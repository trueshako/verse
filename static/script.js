const button = document.getElementById("testButton");
const message = document.getElementById("message");

button.addEventListener("click", function () {

    button.textContent = "Working...";

    setTimeout(() => {

        message.textContent =
            "✓ Everything is working — Flask, JavaScript and your server are connected!";

        button.textContent = "Test Successful";

    }, 500);

});
