import './App.css';
import axios from 'axios'

const apiUrl = 'http://localhost:3333'

function App() {
  async function handleSub(params) {
    const response = await axios.get(apiUrl + '/sub')
    const { links } = response.data
    const approveLink = links.filter(l => l.rel === 'approve')
    console.log(response)
    window.open(approveLink[0].href, '_blank', "width: 400px; height: 600px; top: 50px;")
  }

  return (
    <div className="App">
      <p>xin chào</p>
      <button className="subButton" onClick={handleSub}>Subscription</button>
    </div>
  );
}

export default App;
