import React, { useState } from "react";
import SuccessImg from "../../image/success.png";
import { Button, Form } from "react-bootstrap";

const CreateNewItem = (props) => {
  const handleClick = (e) => {
    props.handler((state) => {
      state[props.id] = e.target.value;
      if (Object.keys(state).length > 2) {
        props.setIsDisabledButton(false);
      }
      return state;
    });
  };

  return (
    <form className="sucess__flex">
      {Object.keys((props && props.values) || {}).map((value, idx) => {
        return (
          <p key={`${props.id}-${idx}`}>
            <label htmlFor={props.values[value]}>
              {props.values[value]}
              <input
                type="radio"
                id={props.values[value]}
                name="fav_language"
                value={props.values[value]}
                onClick={handleClick}
              />
              <span class="checkmark"></span>
            </label>
          </p>
        );
      })}
    </form>
  );
};

function Success({ listItems }) {
  const [selectedRows, setSelectedRows] = useState({});
  const [isDisabledButton, setIsDisabledButton] = useState(true);
  const submitFormData = (e) => {
    e.preventDefault();
  };
  return (
    <Form onSubmit={submitFormData}>
      <div className="success__container">
        <img src={SuccessImg} alt="" />
      </div>
      {console.log(listItems)}
      {listItems &&
        listItems.map((b, i) => (
          <div key={i}>
            <div>
              <CreateNewItem
                key={i}
                values={b}
                handler={setSelectedRows}
                setIsDisabledButton={setIsDisabledButton}
                id={i}
              />
            </div>
          </div>
        ))}
      <div
        className="sucess_btn"
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Button variant="primary" type="submit" disabled={isDisabledButton}>
          <span>i understand</span>
        </Button>
      </div>
    </Form>
  );
}

export default Success;
