//=====================================================
// Data objects for matching
//=====================================================
// Need to compare surveyAnswers.score with all objects[i].score
// Find closest match (least difference) and return the objects[i].name and objects[i].photo

// Iterate over each array and get diff of each value
// 

let surveyAnswers = {
    name: $("#name").val().trim(),
    photo: $("#pic").val().trim(),
    score: [
        parseInt($("#q1").val()),
        parseInt($("#q2").val()),
        parseInt($("#q3").val()),
        parseInt($("#q4").val()),
        parseInt($("#q5").val()),
        parseInt($("#q6").val()),
        parseInt($("#q7").val()),
        parseInt($("#q8").val()),
        parseInt($("#q9").val()),
        parseInt($("#q10").val())
    ]
}

const objects = [
 {
    name: "Test",
    photo: "Test-pic",
    score: [
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5
    ]
},
{
    name: "Test-2",
    photo: "Test-pic-2",
    score: [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
    ]

}
]