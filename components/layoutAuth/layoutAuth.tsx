import styles from './LayoutAuth.module.scss';

const LayoutAuth = ({ children }) => {
  return (
    <div className="flex  bg-blue-400 h-screen">
      <div className="m-auto bg-slate-50 rounded-md w-3/5 mt-6 mb-6 grid lg:grid-cols-2">
        <div className={styles.imgStyle}>
          <div className={styles.cartoonImg}></div>
          {/* <div className={styles.cloud_one}></div>
          <div className={styles.cloud_two}></div> */}
        </div>
        <div className="right flex flex-col justify-evenly">
          <div className="text-center py-10">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default LayoutAuth;
