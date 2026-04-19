import { useState } from "react";

function StudentRow(props) {

  const [newScore, setNewScore] = useState(props.score);

  const handleUpdate = () => {
    props.updateScore(props.index, newScore);
  };

  return (
    <tr>
      <td>{props.name}</td>

      <td>
        <input className="data"
          type="number"
          value={newScore}
          onChange={(e) => setNewScore(e.target.value)}
        />
      </td>

      <td
        style={{
          color: props.score >= 40 ? "green" : "red",
          fontWeight: "bold"
        }}
      >
        {props.score >= 40 ? "Pass" : "Fail"}
      </td>

      <td>
        <button className="update-btn" onClick={handleUpdate}>
          Update
        </button>
      </td>

      <td>
        <button className="delete-btn" onClick={() => props.deleteStudent(props.index)}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default StudentRow;