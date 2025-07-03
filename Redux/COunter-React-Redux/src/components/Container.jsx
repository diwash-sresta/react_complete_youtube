const Container = ({ children }) => {
  return (
    <div className="modal-dialog">
      {" "}
      <div className="modal-content rounded-4 shadow">
        {" "}
        <div className="modal-body p-5">{children}</div>{" "}
      </div>{" "}
    </div>
  );
};
export default Container;
