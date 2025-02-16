import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PollDetails = () => {
  const { id } = useParams();
  const [poll, setPoll] = useState(null);

  useEffect(() => {
    const fetchPoll = async () => {
      const res = await axios.get(`http://localhost:5000/polls/${id}`);
      setPoll(res.data);
    };

    fetchPoll();
    const interval = setInterval(fetchPoll, 5000); // Auto-refresh

    return () => clearInterval(interval);
  }, [id]);

  const handleVote = async (optionIndex) => {
    await axios.post(`http://localhost:5000/polls/${id}/vote`, { optionIndex });
  };

  return (
    <div>
      {poll && (
        <>
          <h2>{poll.question}</h2>
          {poll.options.map((opt, idx) => (
            <button key={idx} onClick={() => handleVote(idx)}>
              {opt.text} - {opt.votes} votes
            </button>
          ))}
        </>
      )}
    </div>
  );
};

export default PollDetails;
