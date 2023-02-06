// Component to gather everything together
const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

// Component to display the header of the course
const Header = ({ name }) => {
  return (
    <h2>{name}</h2>
  )
}

// Component to display the content of the course
const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part =>
        <Part key={part.id} part={part} />
      )}
    </div>
  )
}

// Component to display one part of the course
const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

// Component to display total number of the exercises on the course
const Total = ({ parts }) => {
  const total = parts.reduce( (cB, cV) => cB + cV.exercises, 0);
  return (
    <h4>
      total of {total} exercises
    </h4>
  )
}

// Main component
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name:'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web development curriculum</h1>
      <div>
        {courses.map(course =>
          <Course key={course.id} course={course} />
        )}
      </div>
    </div>
  )
}

export default App;