import products from './data/products.json'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-8">
        Sélection AliExpress - Yannick
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img src={product.image} alt={product.title} className="w-full h-80 object-cover" />
            <div className="p-5">
              <h2 className="text-xl font-bold mb-2">{product.title}</h2>
              <p className="text-2xl font-bold text-red-600 mb-4">{product.price}</p>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <a
                href={product.affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-red-600 text-white text-center py-3 rounded-lg font-bold hover:bg-red-700"
              >
                Voir sur AliExpress
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
