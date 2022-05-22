import { Component } from 'react';
import './styles/Home.css';

//Aqui é carregado e guardado dentro de constantes os post 'cru'
import { loadPosts } from '../../functions/loadPosts'
//Componente responsável pelo carregamento dos posts, aqui estãos os posts que serão carregados na página. 
import { Posts } from '../../components/Posts';
//Componente responsável pelo botão de interação 
import { Button } from '../../components/Button'

class Home extends Component {
  /*Construtor
  o state pode ser setado assim, ou atravez de um construtor()
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2
  };*/
  constructor(props){
    super(props);
    this.state = {
      posts: [],
      allPosts: [],
      page: 0,
      postsPerPage: 2
    };
  }
  //Função do react, reponsavel por atualizar a página toda vez que o state é alterado. 
  //Utilizando 'async' para aguardar a reposta contida dentro do this.leadPosts();
  async componentDidMount() {
    await this.loadPosts();

  }
  //Função criada: que responsavel por coletar e converter em array e atualizar o state para mostragem dentro do render();
  // Utilizado o mecanismo async, que aguarda a resposta de uma requisição sem interromper o andamento do cógido. Mantendo o sistema fluid. 
  loadPosts = async () => {
    const {page, postsPerPage} = this.state
    const postsAndPhotos = await loadPosts();
    this.setState({ 
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos
    })
  }
  //Função utilizada para alterar a quantidade de posts exibidas, 
  clickButtonForChangePosts = () =>{
    //Aqui é importado todos os paramentros do state necessário para fazer a alteração. 
    const {
      posts,
      allPosts,
      page,
      postsPerPage
    } = this.state
    //A quantidade de posts exibidas é limitadas pelos estaddos, {page && postsPerPage}, isso é feito no carregamento da página, para encrementar, é necessário pegar os 
    //os posts nao exibidos, o mesmo estão no state.allPosts. Dele é estraido 2 posts subsequente aos que estão sendo exibidos. 
    const nextPage = page + postsPerPage
    //Aqui é feito o incremento dos dois posts, começando pelos já exibidos, na const nextPage, e somando mais 2 na soma, nextPage + postsPerPage. 
    //O Apenas o estado { page } é alterado aqui,  

    //É pego o número atual de posts exibidos, como paramentro inical do .slice(), e é encrementando ao número inicail, a quantidade de postPerPage setadas. 
    //ex: allPost.slice(8, 8+2) => allPost.slice(10, 10+2) => allPosts.slice(12, 12+2)
    const nextPost = allPosts.slice(nextPage, nextPage + postsPerPage)
    //.push pe responsável por coordenar e manter a cadeia de array na oredem correta, apenas incrementando os novos arrays, sem aletara na ordem. 
    //Básicamente é feito de uma concatenação. 
    posts.push(...nextPost)
    //Aqui é setado a alteração no this.state.page; que ocasiona na alteração no frot. 
    this.setState({ posts, page: nextPage})
  }
  
  render() {
    const { posts } = this.state;
    return (
      <section className='container'>
        <Posts posts={posts}/>
        <Button clickButtonForChangePosts={this.clickButtonForChangePosts}/>
      </section>
    )
  }
}

export default Home;
