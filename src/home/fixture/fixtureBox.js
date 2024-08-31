import './fixtureBox.css'
function FixtureBox() {
  const MCI = {
    name: 'MANCHESTER CITY',
    color: 'rgb(242, 250, 136)',
    backgroundColor: 'rgb(0, 119, 255)',
  }
  const LIV = {
    name: 'LIVERPOOL',
    color: 'white',
    backgroundColor: 'red',
  }
  const ARS = {
    name: 'ARSENAL',
    color: 'yellow',
    backgroundColor: 'red',
  }
  const CHE = {
    name: 'CHELSEA',
    color: 'grey',
    backgroundColor: 'blue',
  }
  const MNU = {
    name: 'MANCHESTER UNITED',
    color: 'white',
    backgroundColor: 'red',
  }
  const TOT = {
    name: 'TOTTENHAM HOTSPURS',
    color: 'gray',
    backgroundColor: 'white',
  }
  const AST = {
    name: 'ASTON VILLA',
    color: 'blue',
    backgroundColor: 'brown',
  }
  const NEW = {
    name: 'NEWCASTLE UNITED',
    color: 'white',
    backgroundColor: 'black',
  }
  const FUL = {
    name: 'FULHAM',
    color: 'black',
    backgroundColor: 'white',
  }
  const BRG = {
    name: 'BRIGHTON',
    color: 'yellow',
    backgroundColor: 'blue',
  }
  const WLV = {
    name: 'WOLVES',
    color: 'black',
    backgroundColor: 'yellow',
  }

  const fixture = [
    {
      index: 0,
      day: 16,
      month: 'August',
      year: 2024,
      fixture1HomeTeam: FUL,
      fixture1AwayTeam: MNU,
      fixture2HomeTeam: CHE,
      fixture2AwayTeam: MCI,
      fixture3HomeTeam: ARS,
      fixture3AwayTeam: WLV,
    },

    {
      index: 1,
      day: 23,
      month: 'August',
      year: 2024,
      fixture1HomeTeam: LIV,
      fixture1AwayTeam: MCI,
    },

    {
      index: 2,
      day: 31,
      month: 'August',
      year: 2024,
      fixture1HomeTeam: TOT,
      fixture1AwayTeam: MNU,
    }
  ]


  function length() {
    let homeBoys = ''
    let awayBoys = ''
    const date = new Date()
    const day = date.getUTCDate()
    // for (let i = 0; i < fixture.length; i++) {
    //   if (day === fixture[i].day) {
    //     homeBoys = fixture[i].fixture1HomeTeam
    //     awayBoys = fixture[i].fixture1AwayTeam
    //     console.log(day, fixture[i].index)
    //   }
    // }
    console.log(fixture.fixture1AwayTeam.name.length, 'goo')
  }
   const date = new Date()
   const day = date.getUTCDate()
   const year = date.getFullYear()
   let month = date.getUTCMonth()

   if(month === 0) {
      month = 'January'
   }
   if(month === 1) {
    month = 'February'
   }
    if(month === 2) {
      month = 'March'
   }
    if(month === 3) {
      month = 'April'
   }
    if(month === 4) {
      month = 'May'
   }
   if(month === 5) {
    month = 'June'
  }
  if(month === 6) {
    month = 'July'
  }
  if(month === 7) {
      month = 'August'
   }
   if(month === 8) {
    month = 'September'
   }
  if(month === 9) {
    month = 'October'
   }
  if(month === 10) {
    month = 'November'
   }
   if(month === 11) {
    month = 'December'
 }
  return (
    <>
      <div className='fixture-Box' onLoad={length}>
        <div className='fixture-Date'>
          <div className='day match-Date'><p>{day}  {month}</p></div>
          <div className='month match-Date'><p>{year}</p></div>
        </div>
        <div className='match-Fixture'>
          <div className='home-club' style={{ color: (fixture[1].fixture1HomeTeam.color), backgroundColor: (fixture[1].fixture1HomeTeam.backgroundColor) }}>
            <p>{fixture[1].fixture1HomeTeam.name}</p>
          </div>
          <div className='away-club' style={{ color: (fixture[1].fixture1AwayTeam.color), backgroundColor: (fixture[1].fixture1AwayTeam.backgroundColor) }}>
            <p>{fixture[1].fixture1AwayTeam.name}</p>
          </div>
        </div>
        {/* <div className='versus'>
          <p>VS</p>
        </div> */}
      </div>
    </>
  )
}

export default FixtureBox