import logo from './logo.svg';
import './App.css';
import BookCard from './components/BookCard';
import BookList from './components/BookList';

function App() {
  return (
    <div className="App">
      <BookList data={<BookCard data={{title: "test", author: "test"}}/>}/>
    </div>
  );
}

export default App;
