import './Card.css';

// creating a second component: Hello
const Card = (props) => {

  return (
    <div className="card">
      <div className='card-header'>
      <p className="text-muted">{ props.name }</p>
      <h2>${props.num}/month</h2>
      </div>
      <div className="card-body">
       <p>✓  {props.user}</p>
       <p>✓  50GB Storage</p>
       <p>✓  Unlimited Public Projects</p>
       <p>✓  Community Access</p>
       <div className={props.className}>
        <p>{props.symbol}  Unlimited Private Projects</p>
       <p {...props.className}>{props.symbol}  Dedicated Phone Support</p>
       <p {...props.className}>{props.symbol}  Free Subdomian</p>
       <div className={props.property}>
       <p{...props.className}>{props.wrong}{props.right}  Monthly Status Report</p>
       </div>
       </div>



        


      </div>
    
     <button className='button bg-info'>BUTTON</button>
    
    </div>
  )
} 

export default Card; // exporting the Hello component