import { Component } from 'react';
import './App.css';

import { loadPosts } from './functions/loadPosts'
import { Posts } from './components/Posts';


class App extends Component {
  state = {
    posts: []
  };

  //Função do react, reponsavel por atualizar a página toda vez que o state é alterado. 
  //Utilizando 'async' para aguardar a reposta contida dentro do this.leadPosts();
  async componentDidMount() {
    await this.loadPosts();

  }
  //Função criada: que responsavel por coletar e converter em array e atualizar o state para mostragem dentro do render();
  loadPosts = async () => {
    const postsAndPhotos = await loadPosts();
    this.setState({ posts: postsAndPhotos })
  }

  render() {
    const { posts } = this.state;
    return (
      <section className='container'>
        <Posts posts={posts}/>
      </section>
    )
  }
}

export default App;
