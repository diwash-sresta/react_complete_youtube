function CurrentTime() {
  let currentTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  let currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
  return (
    <div>

      <p>This is the Current Time : {currentDate}-{currentTime}</p>
    </div>
  );
}

export default CurrentTime;