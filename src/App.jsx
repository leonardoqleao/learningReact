import './App.css';
import { Component } from 'react';


class App extends Component {
  state = {
    posts: [],
  };

  //Função do react, reponsavel por atualizar a página toda vez que o state é alterado. 
  componentDidMount() {
    this.loadPosts();

  }
  //Função criada: que responsavel por coletar e converter em array e atualizar o state para mostragem dentro do render();
  loadPosts = async () => {
    //Coleta de dados dentro do jsonPlaceHolder, coletando alguns posts para fazer alguns testes 
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');


    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

    //Todos os posts e photos em array, onde ambos são coletados como json(string). 
    const postsJson = await posts.json();
    const photosJson = await photos.json();

    //Anexando a url de cada foto contida dentro da constante phoyosResponse, a cada index dos post. Fazendo assim apenas um array com photos e posts
    const postsAndPhotos = postsJson.map((post, index)=>{
      return {...post, photo: photosJson[index].url}
    })
    this.setState({ posts: postsAndPhotos })
  }

  render() {
    const { posts } = this.state;
    return (
      <section className='container'>
        <div className="posts">
          
            {posts.map(post => (
              <div className='post'>
              <div key={post.id} className="postContent">
                <img className='postPhoto' src={post.photo} alt={post.title}/>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
}


export default App;
