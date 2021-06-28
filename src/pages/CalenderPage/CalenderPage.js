import styled from 'styled-components/macro'
import Heading from '../../components/Header/Header'
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'

export default function CalenderPage({ pageName }) {
  return (
    <div>
      <Heading pageName={pageName} />
      <CalWrapper>
        <Calender />
      </CalWrapper>
    </div>
  )
}

const CalWrapper = styled.section`
  display: flex;
  flex-direction: row;
  margin-top: 75px;
`

const Calender = styled(DayPicker)``
