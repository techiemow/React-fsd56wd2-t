import Card from './componets/Card'
import './App.css'

const App = () => {
  return (
    <div className="container">
      <Card className="card1 text-muted" name="FREE" num ="0" user="Single User"  symbol = "✖" wrong="✖" />
      <Card className="card2" name="PLUS"  num ="9" user="5 Users" symbol = "✓" cross ="✖" property='text-muted' wrong="✖"/>
      <Card className="card3"  name="PRO"  num ="49" user="Unlimited Users" symbol = "✓" right ="✓" />
    </div>
  )
}

export default App;
