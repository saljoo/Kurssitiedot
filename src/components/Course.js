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

  export default Course;