//=====================================================
// Data objects for matching
//=====================================================
const _ = require("lodash");
// Need to compare surveyAnswers.score with all objects[i].score
// Find closest match (least difference) and return the objects[i].name and objects[i].photo


let surveyAnswers = {
    name: "matt",
    photo: "test",
    score: [
        2,
        1,
        3,
        1,
        2,
        5,
        3,
        2,
        1,
        3
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
        2
    ]

}
]

let userScore = surveyAnswers.score;

for (let i = 0; i < objects.length; i++) {
    let diff = 0;
    for (let j = 0; j < userScore.length; j++) {
        diff += Math.abs(objects[i].score[j] - userScore[j]);
    }
    console.log(diff);
}

