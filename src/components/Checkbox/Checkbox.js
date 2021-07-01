import styled from 'styled-components/macro'

export default function Checkbox({ onClick, isChecked }) {
  return (
    <Switch>
      <input
        type="checkbox"
        id="addToCalender"
        name="add"
        value="calenderEntry"
        checked={isChecked}
        onClick={onClick}
      ></input>
      <label for="addToCalender"></label>
    </Switch>
  )
}

const Switch = styled.div`
  /* Base for label styling */
  [type='checkbox']:not(:checked),
  [type='checkbox']:checked {
    position: absolute;
    left: 0;
    opacity: 0.01;
  }
  [type='checkbox']:not(:checked) + label,
  [type='checkbox']:checked + label {
    position: relative;
    padding-left: 2.3em;
    font-size: 1.05em;
    line-height: 1.7;
    cursor: pointer;
  }

  /* checkbox aspect */
  [type='checkbox']:not(:checked) + label:before,
  [type='checkbox']:checked + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 1.4em;
    height: 1.4em;
    border: 1px solid #aaa;
    background: #fff;
    border-radius: 0.2em;
    box-shadow: inset 0 1px 3px var(--light-purple);
    -webkit-transition: all 0.275s;
    transition: all 0.275s;
  }

  /* checked mark aspect */
  [type='checkbox']:not(:checked) + label:after,
  [type='checkbox']:checked + label:after {
    content: '✕';
    position: absolute;
    top: 0.525em;
    left: 0.18em;
    font-size: 1.375em;
    color: var(--purple);
    line-height: 0;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
  }

  /* checked mark aspect changes */
  [type='checkbox']:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0) rotate(45deg);
    transform: scale(0) rotate(45deg);
  }

  [type='checkbox']:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1) rotate(0);
    transform: scale(1) rotate(0);
  }

  /* Disabled checkbox */
  [type='checkbox']:disabled:not(:checked) + label:before,
  [type='checkbox']:disabled:checked + label:before {
    box-shadow: none;
    border-color: #bbb;
    background-color: #e9e9e9;
  }

  [type='checkbox']:disabled:checked + label:after {
    color: #777;
  }

  [type='checkbox']:disabled + label {
    color: #aaa;
  }

  /* Accessibility */
  [type='checkbox']:checked:focus + label:before,
  [type='checkbox']:not(:checked):focus + label:before {
    box-shadow: inset 0 1px 3px var(--light-purple);
  }
`
