function setGoal() {
    //reads the input value
    var goalValue = document.getElementById('goalInput').value;
    //if the value isn't empty it creates the goal
    if (goalValue !== '') {
        var goalText = document.createElement('p');
        goalText.textContent = goalValue.toUpperCase();
        document.getElementById('goalSection').appendChild(goalText);
        //clears the value
        document.getElementById('goalInput').value = '';
    } else {
        alert("INSERT A GOAL");
    }
}
//the function is called in the html 
