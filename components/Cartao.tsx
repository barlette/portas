import styles from "../styles/Cartao.module.css";

interface CartaoProps {
  bgcolor?: String;
  children?: any;
}

export default function Cartao(props) {
  return (
    <div
      className={styles.cartao}
      style={{ backgroundColor: props.bgcolor ?? "#fff" }}
    >
      {props.children}
    </div>
  );
}
