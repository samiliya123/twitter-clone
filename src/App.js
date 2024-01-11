import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Feed from './components/feed/Feed'
import Widget from './components/widget/Widget';

function App() {
  return (
    <div className="app">
      <Sidebar />

      <Feed />

      <Widget />
    </div>
  );
}

export default App;
