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

    return results.map(result => `${result.contest} ${result.problemsSolved} ${result.penaltyTime}`).join('\n');
}

const caso = "Team8 4 5 U;Team7 2 6 R;Team10 8 8 C;Team7 5 13 C;Team4 3 18 I;Team4 1 23 E;Team7 4 25 C;Team6 1 27 C;Team1 7 31 E;Team4 5 35 I;Team9 3 36 C;Team7 2 40 U;Team1 3 41 U;Team1 3 44 I;Team1 7 46 E;Team4 4 47 C;Team5 6 51 C;Team7 2 54 C;Team2 1 58 U;Team8 3 62 I;Team1 2 66 R;Team1 3 68 C;Team6 7 71 U;Team5 2 74 I;Team8 7 75 R;Team6 5 78 R;Team6 5 79 R;Team8 2 84 C;Team8 4 87 U;Team5 3 91 I;Team7 7 96 E;Team7 7 98 R;Team6 4 99 C;Team8 7 102 I;Team4 3 106 C;Team8 7 110 R;Team6 7 112 R;Team8 7 113 R;Team3 4 116 U;Team7 7 120 I;Team5 3 122 I;Team8 4 124 E;Team9 4 125 I;Team3 4 127 E;Team9 2 129 R;Team6 7 134 I;Team3 3 139 I;Team9 8 142 U;Team5 3 143 I;Team10 7 146 C;Team3 4 151 E;Team6 5 155 U;Team6 5 159 C;Team5 3 164 I;Team10 5 165 R;Team10 5 166 R;Team4 7 169 E;Team10 5 171 I;Team6 7 175 I;Team1 7 176 E;Team4 7 178 C;Team7 7 181 R;Team2 7 182 R;Team5 3 187 I;Team7 7 191 U;Team4 5 194 C;Team2 1 199 U;Team5 2 201 I;Team3 2 202 I;Team5 3 206 I;Team10 5 211 E;Team6 7 216 I;Team9 8 219 E;Team2 3 221 E;Team5 3 225 E;Team3 3 229 C;Team7 7 231 R;Team7 7 235 I;Team8 7 237 R;Team4 1 239 C;Team1 2 244 U;Team10 5 249 R;Team2 8 250 U;Team6 7 251 C;Team5 3 253 R;Team1 4 257 R;Team10 5 261 I;Team10 3 266 E;Team5 3 268 I;Team3 4 271 U;Team1 4 272 U;Team8 4 273 R;Team2 7 278 C;Team2 1 282 C;Team1 7 285 R;Team5 3 286 I;Team2 8 292 I;Team9 4 295 U;Team5 2 301 E;Team2 8 302 C;Team8 6 310 I;Team9 8 313 E;Team10 3 318 C;Team7 7 323 U;Team9 2 326 E;Team3 2 329 C;Team8 7 332 U;Team7 7 336 I;Team9 4 338 I;Team2 3 340 I;Team5 3 343 E;Team5 3 352 U;Team3 4 355 R;Team3 4 363 U;Team7 7 364 I;Team9 2 369 C;Team10 5 371 R;Team8 6 373 R;Team9 8 378 I;Team8 4 383 C;Team5 3 388 U;Team8 6 393 R;Team5 2 395 I;Team2 3 396 R;Team2 3 400 C;Team3 4 404 E;Team7 7 408 E;Team10 5 409 I;Team9 4 413 I;Team7 7 416 C;Team10 5 417 C;Team5 2 426 I;Team1 4 432 E;Team8 7 440 E;Team3 4 451 U;Team1 7 453 U;Team3 4 458 R;Team9 8 464 C;Team1 2 469 R;Team9 4 472 R;Team3 4 482 R;Team8 7 484 C;Team9 4 508 E;Team8 6 511 R;Team8 6 520 I;Team3 4 521 U;Team8 6 527 I;Team8 3 543 R;Team9 4 544 U;Team9 4 552 U;Team3 4 556 R;Team5 3 576 C;Team3 4 582 C";
console.log(calcularScoreBoard(caso));