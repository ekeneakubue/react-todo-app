import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import TodoList from './pages/TodoList';

function App() {
  return (
    <div className="App">
      <Header/>
      <TodoList/>
      <Footer/>
    </div>
  );
}

export default App;