import PropTypes from 'prop-types'
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import styled from 'styled-components/macro'
import Heading from '../../components/Header/Header'

const MONTHS = [
  'Januar',
  'Februar',
  'März',
  'April',
  'Mai',
  'Juni',
  'Juli',
  'August',
  'September',
  'Oktober',
  'November',
  'Dezember',
]
const WEEKDAYS_SHORT = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']
const WEEKDAYS_LONG = [
  'Sonntag',
  'Montag',
  'Dienstag',
  'Mittwoch',
  'Donnerstag',
  'Freitag',
  'Samstag',
]

CalenderPage.propTypes = {
  concerts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      artist: PropTypes.string,
      location: PropTypes.string,
      id: PropTypes.string,
      image3x2: PropTypes.string,
      price: PropTypes.number,
    })
  ),
}

export default function CalenderPage({ pageName }) {
  // const date = concert.date

  return (
    <div>
      <Heading pageName={pageName} />
      <CalWrapper>
        <Calender
          locale="de"
          weekdaysLong={WEEKDAYS_LONG}
          weekdaysShort={WEEKDAYS_SHORT}
          months={MONTHS}
          firstDayOfWeek={1}
        />
      </CalWrapper>
    </div>
  )
}

const CalWrapper = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 75px;
`

const Calender = styled(DayPicker)`
  .DayPicker-Day--today {
    color: var(--purple);
  }
`
