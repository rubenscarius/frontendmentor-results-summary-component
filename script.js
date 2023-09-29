let requestURL = "https://rubenscarius.github.io/json-files/data.json"
let request = new XMLHttpRequest(); // Create a constructor XMLHTTPRequest
request.open('GET', requestURL); // Open a method and JSON URL 
request.responseType = "json"; // Convert JSON in a JS object
request.send(); // Send the request
request.onload = function () {  // Start the function on de website is total load
    let results = request.response; // Store the respose (JSON) in a variable
    let scr1 = results[0].score;
    let scr2 = results[1].score;
    let scr3 = results[2].score;
    let scr4 = results[3].score;
    
    // Call all functions for insert datas in website
    image(results);
    category(results);
    scores(results);
    average(scr1, scr2, scr3, scr4);
};

// Function for the scores
function scores(results) {
    document.getElementById("num1").textContent = results[0].score;
    document.getElementById("num2").textContent = results[1].score;
    document.getElementById("num3").textContent = results[2].score;
    document.getElementById("num4").textContent = results[3].score;
}

// Function for the categorys
function category(name) {
    document.getElementById("name1").textContent = name[0].category;
    document.getElementById("name2").textContent = name[1].category;
    document.getElementById("name3").textContent = name[2].category;
    document.getElementById("name4").textContent = name[3].category;
}

// Function for the icons
function image(img) {
    document.getElementById("img1").src = img[0].icon;
    document.getElementById("img2").src = img[1].icon;
    document.getElementById("img3").src = img[2].icon;
    document.getElementById("img4").src = img[3].icon;
}

// Function for the average displaying in left side of the card
function average(scr1, scr2, scr3, scr4) {
    let avrg = (scr1 + scr2 + scr3 + scr4)/4
    let finalResult = document.getElementById("final-res")
    finalResult.textContent = Math.floor(avrg);
}