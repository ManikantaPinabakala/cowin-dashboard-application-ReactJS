import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'

import './index.css'

const VaccinationCoverage = props => {
  const {vaccinationCoverageData} = props

  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <div className="container">
      <h1 className="section-heading">Vaccination Coverage</h1>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart data={vaccinationCoverageData} margin={{top: 5}}>
          <XAxis
            dataKey="vaccineDate"
            tick={{stroke: '#6c757d', strokewidth: 1}}
          />
          <YAxis
            tickFormatter={DataFormatter}
            tick={{stroke: '#6c757d', strokewidth: 0.5}}
          />
          <Legend wrapperStyle={{padding: 30}} />
          <Bar
            dataKey="dose1"
            name="Dose 1"
            radius={[15, 15, 0, 0]}
            fill="#5a8dee"
            barSize="15%"
          />
          <Bar
            dataKey="dose2"
            name="Dose 2"
            radius={[15, 15, 0, 0]}
            fill="#f54394"
            barSize="15%"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationCoverage
