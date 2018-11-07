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
        $.post("/api/friends", surveyAnswers)
        .then(res => {
            let data = res;
            console.log(data); 
        }); 
        
    }
    else {
        alert("Please complete form before submitting.");
    }
        
})