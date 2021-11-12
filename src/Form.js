import React from "react";

const Form = ({ task, setOneTask }) => {
  const handleChange = (e) => {
    setOneTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

 let { task_title, task_description} = task;

  const handleSubmit = () => {
    
    //validar los datossss para que no sean nulos ni cero
   if (task_title === "" || task_description === ""){
     alert("All fields must be completed");
    return;
    }
    
    //hago laa consulta
    const requestInit = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},  /////////
      body: JSON.stringify(task),
    }

    fetch('http://localhost:9000/api', requestInit)
      .then((res) => res.text())
      .then((res) => console.log(res));

      //reinicio el form(state de la tarea)
    setOneTask({
      task_title: "",
      task_description: "",
      
    })


  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title:
        </label>
        <input
          onChange={handleChange}
          name="task_title"
          type="text"
          id="title"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description:
        </label>
        <input
          onChange={handleChange}
          name="task_description"
          type="text"
          id="description"
          className="form-control"
        />
      </div>
     
      <button type="submit" className="btn btn-success">
        Submit
      </button>
    </form>
  );
};

export default Form;
