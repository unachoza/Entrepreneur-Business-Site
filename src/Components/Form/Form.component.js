import React from 'react';
import 'Components/Form/Form.styles.css';

const Form = () => {
  return (
    <div>
      <form action="">
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </form>
      <form action="">
        <div className="form__radio__group">
          <input
            type="radio"
            className="form__radio__input"
            id="left"
            name="politicalLean"
            onClick={(e) => this.handleRadio(e)}
          />
          <label for="left" className="form__radio__label" id="left">
            <span className="form__radio-button"></span>
            Left and sometimes the most left
          </label>
        </div>
        <div className="form__radio__group ">
          <input
            type="radio"
            className="form__radio__input"
            id="right"
            name="politicalLean"
            onClick={(e) => this.handleRadio(e)}
          />
          <label for="right" className="form__radio__label" id="right">
            <span className="form__radio-button"></span>
            Right
          </label>
        </div>
      </form>
      <div className="other">
        <h1>This is getting messy</h1>
      </div>
    </div>
  );
};
export default Form;
