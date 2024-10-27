import styles from './Loader.module.css'

export const Loader = () => {
  return (
    <div className={`flex justify-center items-center h-[200px] ${styles.Loader}`}>
      <div className="absolute w-[16px] h-[16px] rounded-[50%] bg-white ">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>Í
      </div>
    </div>
  );
};
