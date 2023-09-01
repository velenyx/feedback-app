import styles from "./AuthButton.module.scss"


interface IAuthButton {
    name: string;
    type: "submit" | "button",
    callback?: () => void
}

export const AuthButton = ({name, type, callback}: IAuthButton) => {
  return (
    <button type={type} onClick={callback} className={styles.button}>{name}</button>
  )
}

