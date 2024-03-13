import './Card.css';



const Feature = (props) => {
  return (
    <p className={`card-text ${props.symbol === '✘' ? 'text-muted' : ''}`}>
      {props.symbol} {props.feature}
    </p>
  )
}


const Card = (props) => {

  return (
    <div className="card mx-3" style={{width: '18rem'}}>
      <div className="card-header">
        <p className="text-center">{ props.card.type }</p>
        <h2 className="card-title text-center">{ props.card.cost }</h2>
    </div>
      <div className="card-body">
      <p>✔  { props.card.seperateFeature}</p>
        {
          
          props.features.map((feature, index) => {
            let symbol = props.card.features.includes(feature) ? '✔' : '✘';
          
            return <Feature feature={feature} key={index} symbol={ symbol } property = "text-muted" />
          })
        }
       <div className="button">
       <button className="btn" style={{ backgroundColor: (props.card.type === 'FREE' || props.card.type === 'PLUS') ? '#4BA2FF' : '#007AFF' }}>Button</button>
      </div>

    </div>
  </div>
  )
}

export default Card;