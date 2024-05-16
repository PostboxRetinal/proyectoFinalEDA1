Tomando como referencia el ejercicio que hemos denominado Tablero de resultados (mostrado en
la Figura 1), construir una solución al ejercicio en el cual se aplicarán las siguientes
modificaciones:

- Solo se procesará un único caso.
- La entrada del caso estará compuesta por m submissions.
  
        Su formato será el siguiente: submission_1_ ; submission2; ….; submissionm
- Teniendo en cuenta que hay n contest (1≤n≤100), p problems (1≤p≤9), la entrada de cada
submission mantiene el formato:
contest problem time L
Donde constest es una cadena iniciada con Team y seguida del número correspondiente.
Ejemplo: si la entrada es:

        Team1 1 5 C;Team2 5 10 C;Team3 2 15 I;Team1 3 20 R;Team2 1 25 R;Team2 4 30C;
        
        Team1 3 35 I;Team1 3 40 C;Team3 2 45 I;Team3 2 50 C

- El scoreboard se calcula aplicando los siguientes criterios:
  - Ordenamiento descendentemente por el número de problemas resueltos (problemsSolved) - criterio1.

  - Ordenamiento ascendentemente por el contest (criterio3).
Por lo cual cada línea del scoreboard debe mantener el siguiente formato:
_contest problemsSolved penaltyTime_

La solución obligatoriamente debe tener una función en JavaScript denominada calcularScoreBoard(caso) (escrita en el archivo util.js) que recibe el caso y produce una sola cadena con el formato indicado para la salida.

Ejemplo: Si la variable caso se corresponde a la cadena del ejemplo anterior, la cadena
retornada por calcularScoreBoard(caso) será:

'Team2 2 40
Team1 2 65
Team3 1 90'