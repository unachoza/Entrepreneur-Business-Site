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
        <div class="form__radio__group">
          <input
            type="radio"
            class="form__radio__input"
            id="left"
            name="politicalLean"
            onClick={(e) => this.handleRadio(e)}
          />
          <label for="left" class="form__radio__label" id="left">
            <span class="form__radio-button"></span>
            Left
          </label>
        </div>
        <div class="form__radio__group ">
          <input
            type="radio"
            class="form__radio__input"
            id="right"
            name="politicalLean"
            onClick={(e) => this.handleRadio(e)}
          />
          <label for="right" class="form__radio__label" id="right">
            <span class="form__radio-button"></span>
            Right
          </label>
        </div>
      </form>
    </div>
  );
};
export default Form;
