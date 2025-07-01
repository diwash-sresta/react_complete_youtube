import { useEffect, useState } from "react";

function CurrentTime() {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })
  );

  const [date, setDate] = useState(
    new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
      setDate(
        new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })
      );
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <p>
        This is the Current Time : {date}-{time}
      </p>
    </div>
  );
}

export default CurrentTime;
