;
(function(JXG) {
    JXG.Options.text.useMathJax = true;
    JXG.Options.text.useMathJax.display = 'html';

    const createBoard = function(id) {
        return JXG.JSXGraph.initBoard(id, {
            boundingbox: [-11, 1, 11, -1],
            axis: false,
            showCopyright: false,
            showNavigation: false,
        });
    };

    const createCeroEje = function(board) {
        board.create("point", [0.0, 0.0], {
            face: "+",
            name: "0",
            strokeColor: "black",
            size: 2,
            fixed: true,
        });
        board.create(
            "line",
            [
                [-10, 0],
                [10, 0],
            ], {
                strokeColor: "red",
                fixed: true
            }
        );
        board.create("point", [-10.7, 0], {
            size: 0,
            name: "\\[-\\infty\\]",
        });
        board.create("point", [9, 0], {
            size: 0,
            name: "\\[+\\infty\\]",
        });
    };

    const dibujaExtremo = function(tipo, nombre) {
        let color = "";
        if (tipo === "a") {
            color = "white";
        } else {
            color = "black";
        }
        return {
            strokeColor: "black",
            fillColor: color,
            name: nombre,
            size: 3,
            fixed: true,
        };
    };
    // INTERVALO ABIERTO
    const intervalo1 = createBoard("intervalo1");
    createCeroEje(intervalo1);

    const p1 = intervalo1.create("point", [-5, 0], dibujaExtremo("a", '-5'));
    const p2 = intervalo1.create("point", [2, 0], dibujaExtremo("a", '2'));
    intervalo1.create("segment", [p1, p2]);

    // INTERVALO CERRADO
    const intervalo2 = createBoard("intervalo2");
    createCeroEje(intervalo2);

    const p21 = intervalo2.create("point", [-5.0, 0.0], dibujaExtremo('b', '-5'));
    const p22 = intervalo2.create("point", [2.0, 0.0], dibujaExtremo('b', '2'));
    intervalo2.create("segment", [p21, p22]);

    // INTERVALO SEMIABIERTTO
    const intervalo3 = createBoard("intervalo3");
    createCeroEje(intervalo3);

    const p31 = intervalo3.create("point", [-5.0, 0.0], dibujaExtremo('b', '-5'));
    const p32 = intervalo3.create("point", [2.0, 0.0], dibujaExtremo('a', '2'));
    intervalo3.create("segment", [p31, p32]);

    const intervalo4 = createBoard("intervalo4");
    createCeroEje(intervalo4);

    const p40 = intervalo4.create("point", [-5, 0], dibujaExtremo('a', '-5'));
    const p42 = intervalo4.create("point", [2, 0], dibujaExtremo('b', '2'));
    intervalo4.create("segment", [p40, p42]);

    // SEMIRECTA 1
    const semirecta1 = createBoard("semirecta1");
    createCeroEje(semirecta1);

    const p41 = semirecta1.create("point", [2.0, 0.0], dibujaExtremo('a', 'a'));
    semirecta1.create("arrow", [p41, [-10, 0]]);

    // SEMIRECTA 2
    const semirecta2 = createBoard("semirecta2");
    createCeroEje(semirecta2);

    const p51 = semirecta2.create("point", [5.0, 0.0], dibujaExtremo('b', 'a'));
    semirecta2.create("arrow", [p51, [-10, 0]]);

    // SEMIRECTA 3
    const semirecta3 = createBoard("semirecta3");
    createCeroEje(semirecta3);
    const p61 = semirecta3.create("point", [1.0, 0.0], dibujaExtremo('a', 'a'));
    semirecta3.create("arrow", [p61, [10, 0]]);

    // SEMIRECTA 4
    const semirecta4 = createBoard("semirecta4");
    createCeroEje(semirecta4);

    const p71 = semirecta4.create("point", [-2.0, 0.0], dibujaExtremo('b', 'a'));
    semirecta4.create("arrow", [p71, [10, 0]]);
})(JXG);
