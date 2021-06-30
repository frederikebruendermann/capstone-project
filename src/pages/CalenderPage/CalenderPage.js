import PropTypes from 'prop-types'
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import styled from 'styled-components/macro'
import ConcertCard from '../../components/ConcertCard/ConcertCard'
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
  pageName: PropTypes.string,
  onNavigate: PropTypes.func,
  checkedConcerts: PropTypes.array,
  selectedDay: PropTypes.instanceOf(Date),
}

export default function CalenderPage({
  onNavigate,
  pageName,
  checkedConcerts,
  selectedDay,
}) {
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
          selectedDays={checkedConcerts.map(el => new Date(el.date))}
          modifiers={new Date(2021, 7, 3)}
        />
      </CalWrapper>
      <CalenderList>
        {checkedConcerts.map(concert => (
          <ConcertCard
            key={concert.id}
            date={concert.shortDate}
            artist={concert.artist}
            location={concert.location}
            image3x2={concert.image3x2}
            price={concert.price}
            onClick={() => onNavigate(concert.id)}
          />
        ))}
      </CalenderList>
    </div>
  )
}

const CalWrapper = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 75px;
`
const CalenderList = styled.ul`
  padding: 5px;
  display: grid;
  justify-content: center;
  overflow-y: auto;
`

const Calender = styled(DayPicker)`
  margin: 16px;
  border-radius: 20px;
  box-shadow: 34px 34px 89px var(--color-shadow-13);

  .DayPicker-Day--today {
    color: var(--purple);
  }

  .DayPicker-Day--selected {
    background: var(--light-purple);
    color: var(--color-gradient-2);
  }
`
