import { useState } from "react";
import axios from "axios";

const CreatePoll = () => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", ""]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/polls", { question, options });
    setQuestion("");
    setOptions(["", ""]);
  };

  return (
    <div>
      <h2>Create Poll</h2>
      <form onSubmit={handleSubmit}>
        <input value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Poll Question" />
        {options.map((opt, idx) => (
          <input key={idx} value={opt} onChange={(e) => {
            const newOpts = [...options];
            newOpts[idx] = e.target.value;
            setOptions(newOpts);
          }} placeholder={`Option ${idx + 1}`} />
        ))}
        <button type="button" onClick={() => setOptions([...options, ""])}>Add Option</button>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreatePoll;
