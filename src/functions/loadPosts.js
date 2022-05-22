export const loadPosts = async () =>{
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
      });
      return postsAndPhotos;
}  
