import style from "./style.module.scss";

const Modal = ({ children, changeOpenView, classname }) => {
  return (
    <>
      <section
        className={style.pageModalContainer}
        onClick={changeOpenView}
      ></section>
      <div
        className={
          classname
            ? `${classname} ${style.modalContainer}`
            : style.modalContainer
        }
      >
        {children}
      </div>
    </>
  );
};

export default Modal;
