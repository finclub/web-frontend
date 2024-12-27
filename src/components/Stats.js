import './stats.css'

const Stats = () => {
  return (
    <>
      <div className="stats">
        <div>
          <div className="label">Total investment</div>
          <h4 className="value text-bold text-pagetitle">
            1,15,466<span className="text-decimal">.22</span>
          </h4>
        </div>
        <div>
          <div className="label">Current value</div>
          <h4 className="value text-bold text-pagetitle">
            1,01,899<span className="text-decimal">.42</span>
          </h4>
        </div>
        <div>
          <div className="label">Day's P&amp;L</div>
          <h4 className="value text-bold text-pagetitle text-red">
            <span>
              -468<span className="text-decimal">.04</span>
            </span>
            <span className="text-xxsmall">(-0.46%)</span>
          </h4>
        </div>
        <div>
          <div className="label">Total P&amp;L</div>
          <h4 className="value text-bold text-pagetitle text-red">
            <span>
              -13,566<span className="text-decimal">.80</span>
            </span>
            <span className="text-xxsmall">(-11.75%)</span>
          </h4>
        </div>
      </div>
    </>
  )
}

export default Stats
