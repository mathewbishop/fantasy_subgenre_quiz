//=====================================================
// Data objects for matching
//=====================================================
const _ = require("lodash");
// Need to compare surveyAnswers.score with all objects[i].score
// Find closest match (least difference) and return the objects[i].name and objects[i].photo

// Iterate over each array and get diff of each value
// 

// let surveyAnswers = {
//     name: $("#name").val().trim(),
//     photo: $("#pic").val().trim(),
//     score: [
//         parseInt($("#q1").val()),
//         parseInt($("#q2").val()),
//         parseInt($("#q3").val()),
//         parseInt($("#q4").val()),
//         parseInt($("#q5").val()),
//         parseInt($("#q6").val()),
//         parseInt($("#q7").val()),
//         parseInt($("#q8").val()),
//         parseInt($("#q9").val()),
//         parseInt($("#q10").val())
//     ]
// }

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

// function compare(arry1, arry2) {
//     for (let i = 0; i < arry1.length; i++) {
//         let result = []
//         result.push(arry1[i] - arry2[i]);
//         return result;
//     }
// }

// console.log(compare(objects[0].score, objects[1].score));

let x = objects[1].score.map((item, index) => {
    return Math.abs(item - objects[0].score[index]);
})
console.log(x);
