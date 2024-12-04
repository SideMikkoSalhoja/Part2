import React from 'react';

const Header = ({ coursename }) => (<h2>{coursename}</h2>);
const Part = ({ giveslice }) => (<p>{giveslice.name} {giveslice.exercises}</p>);

const Total = ({ calculate }) => {
  const result = calculate.reduce((sum, part) => sum + part.exercises, 0);
  return <p>total of {result} exercises</p>
};

const Content = ({ parts }) => (
  <div>
  {parts.map((part, index) => (<Part key={index} giveslice={part} />))}
  </div>
);

const Course = ({ input }) => (
      <div>
        <Header coursename={input.name} />
        <Content parts={input.parts} />
        <Total calculate={input.parts} />
      </div>
);

export default Course