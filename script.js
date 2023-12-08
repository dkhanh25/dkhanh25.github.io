import {initializeApp} from "firebase/app";
import {getDatabase, ref, onValue} from "firebase/database";
let navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.top = '0';
}
function hideMenu(){
    navLinks.style.top = '-800px'
}
document.getElementById("circle1").addEventListener("click", function() {
    fetchDataAndAlert(1);
});

document.getElementById("circle2").addEventListener("click", function() {
    fetchDataAndAlert(2);
});

// Add more event listeners as needed

function fetchDataAndAlert(index) {
    // Replace 'spreadsheetId' and 'range' with your actual values
    var url = "https://sheets.googleapis.com/v4/spreadsheets/1WlH7dcRNeIYNvG4e0TGHvJads6KULYOR2kfSLNz4Xyo/values/A2:B8?key=AIzaSyCCr-SQHp7a8hy9oJfL1WZmSAiQOgDt2Ng";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            var alertText = data.values[0][index]; // Use the index to get the specific value
            alert("Tình trạng thùng rác: " + alertText);
        })
        .catch(error => console.error('Error:', error));
}
imageMapResize();