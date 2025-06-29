const WelcomeMessage = ({ onGetPostsClick }) => {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold text-body-emphasis">
        Welcome to Social-Media.
      </h1>
      <div className="col-lg-6 mx-auto">
        <button
          type="button"
          onClick={onGetPostsClick}
          className="btn btn-primary btn-lg px-4 gap-3"
        >
          Get Posts From Server
        </button>
      </div>
    </div>
  );
};

export default WelcomeMessage;
