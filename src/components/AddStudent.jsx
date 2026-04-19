import { useState } from "react";

function AddStudent(props) {

  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || score === "") return;

    props.addStudent(name, Number(score));

    setName("");
    setScore("");
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter Score"
        value={score}
        onChange={(e) => setScore(e.target.value)}
      />

      <button type="submit">Add Student</button>

    </form>
  );
}

export default AddStudent;