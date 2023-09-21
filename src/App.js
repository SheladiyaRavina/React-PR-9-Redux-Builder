import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD, DELETE, EDIT, UPDATE } from './action/action';

function App() {
  
  const [fname,setFname] = useState("");
  const [lname,setLname] = useState("");
  const [email,setEmail] = useState("");
  const [salary,setSalary] =useState("");
  const [edit,setEdit] = useState("");

  let record = useSelector(state =>state.Crud.users);
  let single = useSelector(state=>state.Crud.user);

  const dispatch = useDispatch();

  const handleSubmit =()=>{
    if(edit){
      let obj = {
        id:edit,
        fname:fname,
        lname:lname,
        email:email,
        salary:salary
      }
      dispatch(UPDATE(obj));
      alert("Record sucessfully Update");
      setEdit("");
    }else{
      let obj = {
        id:Math.floor(Math.random()*1000),
        fname:fname,
        lname:lname,
        email:email,
        salary:salary
      }
      dispatch(ADD(obj));
      alert("Record sucessfully Insert");
    }
    setFname("");
    setLname("");
    setEmail("");
    setSalary("");
  }

  useEffect(()=>{
    setEdit(single.id);
    setFname(single.fname);
    setLname(single.lname);
    setEmail(single.email);
    setSalary(single.salary);
  },[single])
  return (
    <>
      <header className='mb-4'>
        <h2 class='ms-5'>Employee Management App</h2>
      </header>
      <section>
        <div className='container'>
          <div className='row'>
          <center>

          <div class='from'>
          <h1 className='text-dark m-0 mt-3'>Employee List</h1>
          <table class="table-dark mt-5">
            <tr>
              <td className='text-dark h5 '>Employee First Name :-</td>
              <td><input type='text' name='fname' onChange={(e)=>setFname(e.target.value)} value={fname} class='mb-3'/></td>
            </tr>
            <tr>
              <td className='text-dark h5'>Employee Last Name :-</td>
              <td><input type='text' name='lname' onChange={(e)=>setLname(e.target.value)} value={lname} class='mb-3'/></td>
            </tr>
            <tr>
              <td className='text-dark h5'>Employee Email Id :-</td>
              <td><input type='email' name='email' onChange={(e)=>setEmail(e.target.value)} value={email} class='mb-3'/></td>
            </tr>
            <tr >
              <td className='text-dark h5'>Employee Salary :-</td>
              <td><input type='number' name='salary' onChange={(e)=>setSalary(e.target.value)} value={salary} class='mb-3'/></td>
            </tr>
            <tr>
              <td></td>
              <td >{
                  edit ? (<button className='bg-dark text-light border-0' onClick={()=>handleSubmit()}>Edit</button>)
                      : (<button className='bg-dark text-light border-0' onClick={()=>handleSubmit()}>Submit</button>)
                    }</td>
            </tr>
          </table>
          </div>
          <br></br>
          <table class="bg-dark mt-5" border={1} cellPadding={10}>
            <tr>
              <th class='text-light'>Employee id</th>
              <th class='text-light'>Employee First Name</th>
              <th class='text-light'>Employee Last Name</th>
              <th class='text-light'>Employee Email Id</th>
              <th class='text-light'>Employee Salary</th>
              <th class='text-light'>ACTION</th>
            </tr>
            {
              record.map((v)=>{
                const{id,fname,lname,email,salary} =v;
                return(
                  <tr class='bg-light'>
                    <td class='text-dark bg-tbl'>{id}</td>
                    <td class='text-dark bg-tbl1'>{fname}</td>
                    <td class='text-dark bg-tbl'>{lname}</td>
                    <td class='text-dark bg-tbl1'>{email}</td>
                    <td class='text-dark bg-tbl'>{salary}</td>
                    <td class='text-dark bg-tbl1'><button onClick={()=>dispatch(DELETE(id))}>DELETE</button>---
                    <button onClick={()=>dispatch(EDIT(id))}>EDIT</button></td>
                  </tr>
                )
              })
            }
          </table>
      </center>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
