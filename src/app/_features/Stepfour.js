export const Stepfour = (props) => {
  const { handleReDoStep } = props;
  return (
    <div className="container1">
      <div className="con1">
        <img src="/Main 1.svg" /> <h1>You're All Set 🔥</h1>
        <p>We have received your submission. Thank you!</p>
        <button onClick={handleReDoStep} className="butt4">
          Change answer
        </button>
      </div>
    </div>
  );
};
