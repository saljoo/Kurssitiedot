// Component to gather everything together
const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total parts={course.parts} />
    </div>
  )
}

// Component to display the header of the course
const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

// Component to display the content of the course
const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map(part =>
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
    <p>
      total of {total} exercises
    </p>
  )
}

// Main component
const App = () => {
  const course = {
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
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App;
