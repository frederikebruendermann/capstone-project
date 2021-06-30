import styled from 'styled-components/macro'

export default function Checkbox({ onClick, isChecked }) {
  return (
    <div>
      {' '}
      <CalCheck
        type="checkbox"
        id="addToCalender"
        name="add"
        value="calenderEntry"
        checked={isChecked}
        onClick={onClick}
      ></CalCheck>
    </div>
  )
}

const CalCheck = styled.input`
  width: 1em;
  height: 1em;
  border: 0.8px solid gray;

  :checked {
    color: var(--purple);
  }
`
