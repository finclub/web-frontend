import styles from './stats.module.css'

const Stats = () => {
  return (
    <>
      <div className={styles.stats}>
        <div>
          <div className={styles.label}>Total investment</div>
          <h4 className={styles.value}>
            {/* text-bold text-pagetitle */}
            1,15,466<span className={styles.decimal}>.22</span>
          </h4>
        </div>
        <div>
          <div className={styles.label}>Current value</div>
          <h4 className={styles.value}>
            1,01,899<span className={styles.decimal}>.42</span>
          </h4>
        </div>
        <div>
          <div className={styles.label}>Day's P&amp;L</div>
          <h4 className={styles.value}>
            <span>
              -468<span className={styles.decimal}>.04</span>
            </span>
            <span className="text-xxsmall">(-0.46%)</span>
          </h4>
        </div>
        <div>
          <div className={styles.label}>Total P&amp;L</div>
          <h4 className={styles.value}>
            <span>
              -13,566<span className={styles.decimal}>.80</span>
            </span>
            <span className="text-xxsmall">(-11.75%)</span>
          </h4>
        </div>
      </div>
    </>
  )
}

export default Stats
