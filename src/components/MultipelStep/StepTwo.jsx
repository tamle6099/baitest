import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import css from "../../page/CreateNewWallet/Create.module.css";
import Shape from "../../image/Shape.svg";
const CreateNewItem = (props) => {
  const [openTab, setOpenTab] = React.useState("");
  const [error, SetError] = useState(false);
  const handleClick = (e) => {
    setOpenTab(e.target.value);
    props.handler((state) => {
      state[props.id] = e.target.value;
      if (Object.keys(state).length > 5) {
        props.setIsDisabledButton(false);
      } else {
        SetError(true);
      }
      return state;
    });
  };

  return (
    <form className={css.checkbox}>
      {Object.keys((props && props.values) || {}).map((value, idx) => {
        return (
          <p key={`${props.id}-${idx}`}>
            <input
              type="radio"
              id={props.values[value]}
              name="fav_language"
              value={props.values[value]}
              className="d-none"
              onClick={handleClick}
            />
            <label
              htmlFor={props.values[value]}
              key={props.id}
              className={openTab === props.values[value] ? "active" : ""}
            >
              {props.values[value]}
            </label>
          </p>
        );
      })}
    </form>
  );
};

const StepTwo = ({ nextStep, values, listItems }) => {
  const [selectedRows, setSelectedRows] = useState({});
  const [isDisabledButton, setIsDisabledButton] = useState(true);
  const submitFormData = (e) => {
    e.preventDefault();

    nextStep();
  };

  return (
    <>
      <Form onSubmit={submitFormData}>
        {listItems &&
          listItems.map((b, i) => (
            <div key={i} className={css.confrim__box}>
              <div className={css.confrim__box__select}>
                <span>{b.primary}</span>
                <CreateNewItem
                  key={i}
                  values={b.list}
                  handler={setSelectedRows}
                  setIsDisabledButton={setIsDisabledButton}
                  id={i}
                />
              </div>
            </div>
          ))}
        <div></div>
        <div>
          <div className={css.how}>
            <p>How does this work?</p>
            <img src={Shape} alt="" />
          </div>
          <Button
            variant="primary"
            type="submit"
            className={css.app_button}
            disabled={isDisabledButton}
          >
            <span>Submit</span>
          </Button>
        </div>
      </Form>
    </>
  );
};

export default StepTwo;
