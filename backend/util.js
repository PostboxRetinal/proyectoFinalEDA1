function calcularScoreBoard(caso) {
    let penaltyTime = 0;   
    let casos = caso.split(";");
    casos.forEach(submission => {

        submission.split(" ");
        let contest = submission [0];
        let problem = submission [1];
        let time = submission [2];
        let L = submission [3];

        if (L === "I") {
            penaltyTime += 20;
        }
    });
}

export default calcularScoreBoard;