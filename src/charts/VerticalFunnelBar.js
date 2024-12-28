import styles from './VerticalFunnelBar.module.css'

const VerticalFunnelBar = ({ height }) => {
  //   const data = [
  //     { value: 100, label: 'Candidates Applied', color: '#1f77b4' },
  //     { value: 75, label: 'Aptitude Test', color: '#ff7f0e' },
  //     { value: 50, label: 'Technical Interview', color: '#2ca02c' },
  //     { value: 25, label: 'HR Interview', color: '#d62728' },
  //     { value: 25, label: 'Candidates Recruited', color: '#9467bd' }
  //   ]

  // const data = [
  //   { value: 100, label: 'Candidates Applied 100', color: '#4772F3' },
  //   { value: 75, label: 'Aptitude Test', color: '#03a9f4' },
  //   { value: 50, label: 'Technical Interview', color: '#2196f3' },
  //   { value: 25, label: 'HR Interview', color: '#d62728' },
  //   { value: 25, label: 'Candidates Recruited', color: '#9c27b0' }
  // ]
  const data = [
    {
      value: 100,
      label: 'Candidates Applied',
      subLabel: '1,000 total',
      color: '#1f77b4'
    },
    {
      value: 75,
      label: 'Aptitude Test',
      subLabel: '750 passed',
      color: '#ff7f0e'
    },
    {
      value: 50,
      label: 'Technical Interview',
      subLabel: '500 shortlisted',
      color: '#2ca02c'
    },
    {
      value: 25,
      label: 'HR Interview',
      subLabel: '250 final',
      color: '#d62728'
    },
    {
      value: 1,
      label: 'Candidates Recruited',
      subLabel: '25 hired',
      color: '#9467bd'
    }
  ]

  // Calculate the total of all values for scaling purposes
  const total = data.reduce((acc, cur) => acc + cur.value, 0)

  return (
    <div className={styles.container} style={{ height: height }}>
      {data.map((item, index) => (
        <div
          key={index}
          className={styles.segment}
          style={{
            // updated formula with fixed min height
            height: `${Math.max((item.value / total) * 100, 15)}%`,
            backgroundColor: item.color || 'gray'
          }}
        >
          <div className={styles.label}>
            <span>{item.label}</span>
            <span>{item.subLabel}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default VerticalFunnelBar
