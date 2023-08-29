import style from './style.module.scss';

const Button = ({ onClick, classname = null, text }) => {
  return (
    <button
      onClick={onClick}
      className={`${classname ? `${classname} ${style.btn}` : style.btn}`}
    >
      {text}
    </button>
  );
};

export default Button