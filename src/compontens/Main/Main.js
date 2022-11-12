import React from "react";

export default function Main({ changeColor }) {
  return (
    <section className="main">
      <div className="main__box">
        <div className="main__button main__button_active">
          <span className="main__att">
            <span className="main__but"></span>
            <span className="main__but2"></span>
          </span>
          <div className="main__block">
            <input
              className="main__but3"
              type="checkbox"
              id="but3"
              onClick={changeColor}
            />
            <label className="main__saber" htmlFor="but3"></label>
          </div>
          <span className="main__att2"></span>
          <span className="main__att3"></span>
          <span className="main__att4"></span>
          <span className="main__att5"></span>
        </div>
      </div>
    </section>
  );
}
