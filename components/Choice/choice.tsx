import styles from "./Choice.module.scss"

export const Choice = props =>  {
  return (

    <div className={styles.questionCard}>
      <div className={styles.content}>
        <div>
          <input type="radio" className={styles.input}/>
          {/* <span className={styles.customRadioButton}></span> */}
        </div>
        
        <p>{props.text}</p>
      </div>
    </div>

  )
}
