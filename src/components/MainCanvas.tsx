import React, { createRef, useContext, useLayoutEffect } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import appContext from "../AppContext";
import { GridOption } from "../types";

const useStyles = makeStyles<Theme, { gridOption: GridOption }>((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "start",
    padding: theme.spacing(4),
  },
  paper: {
    boxSizing: "content-box",
    width: 500,
    height: 500,
    padding: theme.spacing(2),
    borderRadius: 16,
    display: "grid",
    gridTemplateRows: ({ gridOption }) =>
      gridOption === GridOption.OPTION_2_2
        ? "repeat(2, 1fr)"
        : gridOption === GridOption.OPTION_2_1
        ? "auto"
        : "auto",
    gridTemplateColumns: ({ gridOption }) =>
      gridOption === GridOption.OPTION_2_2
        ? "repeat(2, 1fr)"
        : gridOption === GridOption.OPTION_2_1
        ? "repeat(2, 1fr)"
        : "auto",
    gap: theme.spacing(2),
    zIndex: 1,
  },
  canvas: {
    position: "absolute",
    zIndex: -1,
  },
  placeholder: {
    border: "2px dashed #9ae0f2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#9ae0f2",
    fontSize: theme.typography.pxToRem(30),
    cursor: "pointer",
  },
}));

const MainCanvas: React.FC = () => {
  const { gridOption } = useContext(appContext);
  const classes = useStyles({ gridOption });
  const canvasRef = createRef<HTMLCanvasElement>();
  const paperRef = createRef<HTMLDivElement>();

  useLayoutEffect(() => {});

  const openImageFile = (index: number) => {
    console.log("Danze...." + index);
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.style.display = "none";
    input.click();
    input.oninput = (event) => {
      if (event.target instanceof HTMLInputElement) {
        const { files } = event.target;
        if (files) {
          const file = files[0];
          console.log(file);
        }
      }
    };
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} ref={paperRef}>
        <canvas
          ref={canvasRef}
          width={500}
          height={500}
          className={classes.canvas}
        />
        {gridOption === GridOption.OPTION_2_2
          ? [...new Array(4)].map((_, i) => (
              <div
                className={classes.placeholder}
                onClick={() => openImageFile(i)}
                key={i}
              >
                +
              </div>
            ))
          : gridOption === GridOption.OPTION_2_1
          ? [...new Array(2)].map((_, i) => (
              <div
                className={classes.placeholder}
                onClick={() => openImageFile(i)}
                key={i}
              >
                +
              </div>
            ))
          : null}
      </Paper>
    </div>
  );
};

export default MainCanvas;
