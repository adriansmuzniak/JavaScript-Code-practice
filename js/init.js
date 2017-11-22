window.onload = function() {
    var button = document.getElementById("bake");
    button.onclick = function() {
        setTimeout(function() {
            alert(cookies.instructions);
        }, 1000)
        cookies.bake( 2000 );
    }
}

var cookies = {
    instructions: "Wstepne rozgrzewanie do 175 stopni...",
    bake: function( time ) {
        console.log("Wypiekam ciasteczka");
        setTimeout(done, time);
    }
};

function done() {
    alert("Ciasteczka są gotowe, wyciągnij je, aby przestygły");
    console.log("Chłodzenie ciasteczek");
    setTimeout(function() {
        alert("Ciasteczka są już zimne, można je jeść");
        console.log("Zakończone");
    }, 1000);
}