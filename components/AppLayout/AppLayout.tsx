import ResponsiveAppBar from "../Navbar/Navbar";
import styles from "../../styles/Home.module.scss";

type IProps = {
  children: any;
};

const AppLayout = (props: IProps) => {
  const { children } = props;
  return (
    <>
      <ResponsiveAppBar />
      <div className={styles.container}>
      {children}
      </div>
     
    </>
  );
};

export default AppLayout;
