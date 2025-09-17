export const FormInput = (props) => {
  const { inputTag, handleChange, name, value, error, placeholder, type } =
    props;
  return (
    <div className="input-container">
      <h1>
        {inputTag} <span style={{ color: "red" }}>*</span>
      </h1>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
        className={error ? "input-error" : ""}
      />
      {error && <div className="error">{error}</div>}
    </div>
  );
};
