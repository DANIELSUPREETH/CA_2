document.getElementById("enter").addEventListener("click", function () {
    // Get values from input fields
    var player1Value = document.getElementById("player1").value;
    var text1Value = document.getElementById("text1").value;
    var player2Value = document.getElementById("player2").value;
    var text2Value = document.getElementById("text2").value;

    // Check if any field is empty
    if (player1Value === "" || text1Value === "" || player2Value === "" || text2Value === "") {
        alert("Please fill in all the details!");
    } else {
        localStorage.setItem('player1Name', player1Value);
        localStorage.setItem('player2Name', player2Value);
        window.location.href="gamepage.html"
    }
});
document.getElementsByClassName("rounded-button").addEventListener("click", function() {
    window.location.href = "instruction.html";});
 