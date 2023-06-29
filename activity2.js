function back(){
window.location="activity_1.html";
}
function getScore(){
    score=localStorage.getItem("score");
    document.getElementById("update").innerHTML="Score: "+score;
}