(function (JXG) {
  // INTERVALO ABIERTO
  const intervalo1 = JXG.JSXGraph.initBoard("intervalo1", {
    boundingbox: [-11, 1, 11, -1],
    axis: true,
    showCopyright: false,
    showNavigation: false,
  });
  const p0 = intervalo1.create("point", [0.0, 0.0], {
    face: "+",
    name: "0",
    size: 1
  });
  const p1 = intervalo1.create("point", [-5.0, 0.0], {
    strokeColor: "black",
    fillColor: "white",
    name: "-5",
    size: 3
  });
  const p2 = intervalo1.create("point", [2.0, 0.0], {
    strokeColor: "black",
    fillColor: "white",
    name: "2",
    size: 3
  });
  const xaxis = intervalo1.create("line", [p1, p2], { strokeColor: "red" });
  const segment = intervalo1.create("segment", [p1, p2]);
  // INTERVALO CERRADO
  const intervalo2 = JXG.JSXGraph.initBoard("intervalo2", {
    boundingbox: [-11, 1, 11, -1],
    axis: true,
    showCopyright: false,
    showNavigation: false,
  });
  const p20 = intervalo2.create("point", [0.0, 0.0], {
    face: "+",
    name: "0",
    size: 1
  });
  const p21 = intervalo2.create("point", [-5.0, 0.0], {
    strokeColor: "black",
    fillColor: "black",
    name: "-5",
    size: 3
  });
  const p22 = intervalo2.create("point", [2.0, 0.0], {
    strokeColor: "black",
    fillColor: "black",
    name: "2",
    size: 3
  });
  const xaxis2 = intervalo2.create("line", [p21, p22], { strokeColor: "red" });
  const segment2 = intervalo2.create("segment", [p21, p22]);
  // INTERVALO SEMIABIERTTO
  const intervalo3 = JXG.JSXGraph.initBoard("intervalo3", {
    boundingbox: [-11, 1, 11, -1],
    axis: true,
    showCopyright: false,
    showNavigation: false,
  });
  const p30 = intervalo3.create("point", [0.0, 0.0], {
    face: "+",
    name: "0",
    size: 1
  });
  const p31 = intervalo3.create("point", [-5.0, 0.0], {
    strokeColor: "black",
    fillColor: "black",
    name: "-5",
    size: 3
  });
  const p32 = intervalo3.create("point", [2.0, 0.0], {
    strokeColor: "black",
    fillColor: "white",
    name: "2",
    size: 3
  });
  const xaxis3 = intervalo3.create("line", [p31, p32], { strokeColor: "red" });
  const segment3 = intervalo3.create("segment", [p31, p32]);
})(JXG);
