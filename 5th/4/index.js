
    document.getElementById("btn-submit").addEventListener("click", function() {
        const emailField = document.getElementById("email");
        const email = emailField.value;
        const passwordField = document.getElementById("password");
        const password = passwordField.value;

        if (email === "kamiayaka09@gmail.com" && password === "borolox") {
            window.location.href = "bank/bank.html";
        } else {
            alert("Invalid email or password. Please try again.");
        }
    });

