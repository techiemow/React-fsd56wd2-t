

import Card from "./componets/Card";
const App = () => {

  const data = {
    features: [
      
      '5GB Storage',
      'Unlimited Public Projects',
      'Community Access',
      'Unlimited Private Projects',
      'Dedicated Phone Support',
      'Free Subdomain',
      'Monthly Status Reports'
    ],
    cards: [
      {
        type: 'FREE',
        cost: '$ 0/month',
        seperateFeature : 'Single Users',
        features: [
          'Single User',
          '5GB Storage',
          'Unlimited Public Projects',
          'Community Access',
        ]
      },
      {
        type: 'PLUS',
        cost: '$ 9/month',
        seperateFeature : '5 Users',
        features: [
        
          '5GB Storage',
          'Unlimited Public Projects',
          'Community Access',
          'Unlimited Private Projects',
          'Dedicated Phone Support',
          'Free Subdomain',
        ]
      },
      {
        type: 'PRO',
        cost: '$ 49/month',
        seperateFeature : 'Unlimited Users',
        features: [
          'Single User',
          '5GB Storage',
          'Unlimited Public Projects',
          'Community Access',
          'Unlimited Private Projects',
          'Dedicated Phone Support',
          'Free Subdomain',
          'Monthly Status Reports'
        ]
      },
    ]
  };

  return (
    <div className="d-flex justify-content-center my-4">
      {
        data.cards.map((card, index) => {
          return <Card key={index} card={card} features={ data.features } />
        })
      }
    </div>
  )
}

export default App;