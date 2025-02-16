import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PollList = () => {
  const [polls, setPolls] = useState({});

  useEffect(() => {
    const fetchPolls = async () => {
    //   const res = (await axios.get("http://localhost:5000/api/polls"));
    const res = await fetch("http://localhost:5000/api/polls");
      const data = await res.json();
    setPolls(data);
    if((data))
    {
        console.log(typeof data);
        console.log(polls)
    }
    
    };

    fetchPolls();
    const interval = setInterval(fetchPolls, 5000); // Auto-refresh every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Polls</h2>
      <ul>
        {/* {polls.map((poll) => (
          <li key={poll._id}>
            <Link to={`/polls/${poll._id}`}>{poll.question}</Link>
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default PollList;
