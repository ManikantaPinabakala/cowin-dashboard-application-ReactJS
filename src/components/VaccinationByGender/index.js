import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

const VaccinationByGender = props => {
  const {vaccinationByGenderData} = props

  return (
    <div className="container">
      <h1 className="section-heading">Vaccination by gender</h1>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            cx="50%"
            cy="60%"
            data={vaccinationByGenderData}
            startAngle={180}
            endAngle={0}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill="#5a8dee" />
            <Cell name="Others" fill="#2cc6c6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByGender
