import React from "react";

const TasksList = ({ task, tasks, settaskUpdated }) => {
  const handleDelete = (id) => {
    const requestInit = {
      method: "DELETE",
    };

    fetch("http://localhost:9000/api/" + id, requestInit)
      .then((res) => res.text())
      .then((res) => console.log(res));

    //actualizar la lista
    settaskUpdated(true);
  }
  let { task_title, task_description } = task


  const handleUpdate = (id) => {
    if (task_title === "" || task_description === "") {
      alert("All fields must be completed");
      return;
    }
    const requestInit = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(task),
    }

    fetch('http://localhost:9000/api/' + id, requestInit)
      .then((res) => res.text())
      .then((res) => console.log(res))

    //actualizar la lista
    settaskUpdated(true);
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th style={{ textAlign: "center" }}>Number</th>
          <th style={{ textAlign: "center" }}>Title</th>
          <th style={{ textAlign: "center" }}>Description</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((tasks) => (
          <tr key={tasks.task_id}>
            <td>{tasks.task_id}</td>
            <td>{tasks.task_title}</td>
            <td>{tasks.task_description}</td>
            <td>
              <div className="mb-3">
                <button
                  onClick={() => handleDelete(tasks.task_id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            </td>
            <td>
              <div className="mb-3">
                <button
                  onClick={() => handleUpdate(tasks.task_id)}
                  className="btn btn-dark"
                >
                  Update
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default TasksList;
