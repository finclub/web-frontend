import './notice.css'

const Notice = () => {
  return (
    <div className="notice">
      <div className="notice-wrap">
        <ul className="content">
          <li>
            <span>
              Gym will remain closed today on account of Christmas.
              <a
                href="https://zerodha.com/marketintel/bulletin/400222/trading-holiday-on-account-of-christmas-2"
                target="_blank"
                rel="noreferrer"
              >
                &nbsp;Read more
              </a>
            </span>
          </li>
        </ul>
        <a
          href="#"
          aria-label="Show all notices"
          className="notice-stack-1"
        ></a>{' '}
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
