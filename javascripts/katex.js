document$.subscribe(({ body }) => {
  renderMathInElement(body, {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "$", right: "$", display: false },
      { left: "\\(", right: "\\)", display: false },
      { left: "\\[", right: "\\]", display: true },
    ],
    macros: {
      "\\electronTrajectory":
        "\\overset{\\mathrm{#1}}{\\begin{array}{#2} \\hline #3 \\\\ \\hline \\end{array}}",
      "\\etS": "\\electronTrajectory{#1s}{|c|}{#2}",
      "\\etP": "\\electronTrajectory{#1p}{|c|c|c|}{#2}",
      "\\etD": "\\electronTrajectory{#1d}{|c|c|c|c|c|}{#2}",
      "\\etF": "\\electronTrajectory{#1f}{|c|c|c|c|c|c|c|}{#2}",
      "\\emptyT": "\\hspace{0.5em}",
    },
  });
});
