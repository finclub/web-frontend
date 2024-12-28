import styles from './notice.module.css'

const Notice = () => {
  return (
    <div className={styles.notice}>
      <div className={styles.noticeWrap}>
        <ul className={styles.content}>
          <li>
            <span>
              Gym will remain closed today on account of Christmas.
              <a
                href="https://zerodha.com/marketintel/bulletin/400222/trading-holiday-on-account-of-christmas-2"
                target="_blank"
                rel="noreferrer"
              >
                Read more
              </a>
            </span>
          </li>
        </ul>
        <a
          href="#"
          aria-label="Show all notices"
          className="notice-stack-1"
        ></a>
        <a
          href="#"
          aria-label="Show all notices"
          className="notice-stack-2"
        ></a>
      </div>
    </div>
  )
}

export default Notice
