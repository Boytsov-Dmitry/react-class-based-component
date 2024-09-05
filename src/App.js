import './App.css';

const item = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '£'
}

const ShopItemClass = ({item}) => {
  const {brand, title, description, descriptionFull, price, currency} = item;
  return (
  <div className="main-content">
    <h2>{brand}</h2>
    <h1>{title}</h1>
    <h3>{description}</h3>
    <div className="description">
      {descriptionFull}
    </div>
    <div className="highlight-window mobile"><div class="highlight-overlay"></div></div>
    <div className="divider"></div>
    <div class="purchase-info">
      <div className="price">{currency}{price}.00</div>
      <button>Добавить в корзину</button>
    </div>
  </div>
  )
}

function App() {
  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <ShopItemClass item={item} />
      </div>
    </div>
  );
}

export default App;
