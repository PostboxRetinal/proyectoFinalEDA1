function calcularScoreBoard(caso) {
    let casos = caso.split(";");
    let result = [];

    casos.forEach(submission => {
        let submissionParts = submission.split(" ");
        let contest = submissionParts[0];
        let problem = parseInt(submissionParts[1]);
        let time = parseInt(submissionParts[2]);
        let L = submissionParts[3];
    
        result.push({
            contest: contest,
            problem: problem,
            time: time,
            calificacion: L
        });
    });

    
    let teams = {};

    result.forEach(submission => {
        let { contest, problem, time, calificacion } = submission;

        if (!teams[contest]) {
            teams[contest] = {
                problemsSolved: 0,
                penaltyTime: 0,
                problems: {}
            };
        }

        if (!teams[contest].problems[problem]) {
            teams[contest].problems[problem] = {
                solved: false,
                incorrectSubmissions: 0,
                firstCorrectTime: 0
            };
        }

        let problemData = teams[contest].problems[problem];
        if (calificacion === 'C' && !problemData.solved) {
            problemData.solved = true;
            problemData.firstCorrectTime = time;
            teams[contest].problemsSolved++;
            teams[contest].penaltyTime += time + (problemData.incorrectSubmissions * 20);
        } else if (calificacion === 'I' && !problemData.solved) {
            problemData.incorrectSubmissions++;
        }
    });

    let results = Object.keys(teams).map(contest => {
        return {
            contest: contest,
            problemsSolved: teams[contest].problemsSolved,
            penaltyTime: teams[contest].penaltyTime
        };
    });

    results.sort((a, b) => {
        if (b.problemsSolved !== a.problemsSolved) {
            return b.problemsSolved - a.problemsSolved;
        } else if (a.penaltyTime !== b.penaltyTime) {
            return a.penaltyTime - b.penaltyTime;
        } else {
            return a.contest.localeCompare(b.contest);
        }
    });

    return results;
}

export {calcularScoreBoard};