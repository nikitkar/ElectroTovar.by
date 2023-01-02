const InputPass = (props) => {
  return (
    <div className="auth-modal__password">
      <input
        className="auth-modal__input  auth-modal__input-pass"
        type={props.type}
        placeholder={props.placeholder}
        maxLength={props.length}
        value={props.value}        
        onChange={props.onChenge}
      />
      <span className={props.class} onClick={props.onClick}></span>
    </div>
  );
};

export default InputPass;
