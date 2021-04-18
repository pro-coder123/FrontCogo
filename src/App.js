import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';


const fetchData = async () => {

  const res = await fetch('http://localhost:4000/students')
  const json = await res.json()
  console.log(json)
  return json
}

function App() {

  const [students, setStudents] = React.useState([])

  React.useEffect(() => {
    fetchData().then(students => {
      setStudents(students)
    })
  }, [])


  return (
    <div>
      <h1>Student Portal</h1>
      <a class="button" href="/register">Register</a>
      <table cellpadding="0" cellspacing="0" border="0">
        <tr><td> Id </td><td> Name </td> <td> Email </td><td> Username </td><td> Created At</td></tr>
        {students.map(student => <tr> <td>{student.id}</td> <td> {student.name} </td> <td> {student.email}</td>  <td>{student.username}</td> <td>{student.created_at}</td></tr>)}
      </table>
    </div>
  )
}

export default App;
