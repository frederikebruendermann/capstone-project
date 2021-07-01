import PropTypes from 'prop-types'
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import styled from 'styled-components/macro'
import DividingLine from '../../components/DividingLine/DividingLine'
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
          fixedWeeks
        />
      </CalWrapper>
      <TitleSmall>Next</TitleSmall>
      <DividingLine />
      <CalenderList>
        {checkedConcerts.map(concert => (
          <ConcertCardSmall
            key={concert.id}
            date={concert.shortDate}
            artist={concert.artist}
            location={concert.location}
            onClick={() => onNavigate(concert.id)}
          >
            <div>
              <span>{concert.shortDate}</span>
              <span>- {concert.artist}</span>
              {/* <span>{concert.location}</span> */}
            </div>
          </ConcertCardSmall>
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

const TitleSmall = styled.h2`
  display: grid;
  justify-content: center;
  font-size: 15px;
  margin-bottom: 10px;
`

const ConcertCardSmall = styled.div`
  box-shadow: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'Text Image';
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
    color: var(--white);
    background: var(--light-purple);
  }

  .DayPicker-Day--selected {
    background: var(--light-purple);
    color: var(--purple);
  }

  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover,
  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
    background-color: var(--purple);
  }
`
