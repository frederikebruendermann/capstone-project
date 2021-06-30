import styled from 'styled-components/macro'

export default function Checkbox({ onClick, isChecked }) {
  return (
    <div>
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
  width: 1.5em;
  height: 1.5em;
  border: 0.8px solid gray;
  display: inline-block;
  content: '';
  background-color: var(--purple);

  ::checked {
    color: var(--purple);
  }
`
