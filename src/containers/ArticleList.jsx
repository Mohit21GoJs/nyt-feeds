import { PureComponent } from 'react';

export default class ArticleList extends PureComponent {
  state = {
    name: 'mash',
  };

  render() {
    return (
      <div className="App">
        <h1>Welcome to {this.state.name}</h1>
      </div>
    );
  }
}
