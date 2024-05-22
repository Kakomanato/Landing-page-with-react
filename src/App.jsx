import './App.css';
import Navbar from './assets/components/navbar';
import Jumbotron from './assets/components/jumbotron';
import Card from './assets/components/card';
import Footer from './assets/components/footer';

function App() {
  const listaCards = [
    {id: 1, texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatem aperiam ut saepe dolorum, veritatis minus molestiae cum maxime facere. Nisi exercitationem assumenda velit officia dolorem soluta dicta ex fugiat!" },
    {id: 2, texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatem aperiam ut saepe dolorum, veritatis minus molestiae cum maxime facere." },
    {id: 3, texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatem aperiam ut saepe dolorum, veritatis minus molestiae cum maxime facere. Nisi exercitationem assumenda velit officia dolorem soluta dicta ex fugiat!" },
    {id: 4, texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatem aperiam ut saepe dolorum, veritatis minus molestiae cum maxime facere." }
  ];
  
  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='row justify-content-center mb-3'>
          <Jumbotron />
        </div>
        <div className="row">
          {listaCards.map((item) => (
            <div className="col-12 col-md-6 col-lg-3" key={item.id}>
              <Card description={item.texto} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;

