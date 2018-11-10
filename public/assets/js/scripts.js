$('#submit-survey').click((event) => {
    event.preventDefault();

    
    let validateForm = () => {
        let isValid = true;
        $(".form-control").each(() => {
            if ($(".form-control").val() === "") {
                isValid = false;
            }
        });
        $(".question").each(() => {
            if ($(".question").val() === "Please Select an Option") {
                isValid = false;
            }
        })
        return isValid;
    }

    if (validateForm()) {
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
        // console.log(surveyAnswers);
        $.post("/api/genres", surveyAnswers)
        .then(res => {
            let matchName = res.bestMatch.name;
            let matchPic = res.bestMatch.photo;
            let description = res.bestMatch.description;
            $("#match-name").html(matchName);
            $("#match-pic").attr("src", matchPic);
            $("#match-description").html(description);
            $("#match-modal").show();
        }); 
        $("#user-name").html(surveyAnswers.name);
        $("#user-pic").attr("src", surveyAnswers.photo);
    }
    else {
        alert("Please complete form before submitting.");
    }

})

$("#close-modal").click(() => {
    $("#match-modal").hide();
})