import { BrowserRouter as Router, Route } from 'react-router-dom';
import ArticleList from 'containers/ArticleList';
import ArticleDetail from 'containers/ArticleDetail';

const App = () => (
    <Router>
      <Route exact path="/" component={ArticleList} />
      <Route path="/details" component={ArticleDetail} />  
    </Router>
);

export default App;