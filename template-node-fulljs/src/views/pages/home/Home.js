import {api, postform} from "../../../service/api";

async function getRandonJoke() {
  const request = await api.get('random');
  const response = request.data;
  return response;
}

let Home = {
  is_private: false,

  render: async () => {
    const jokes = await getRandonJoke()
      let view = /*html*/`
          <div>
            <h1>Primeira página!</h1>
            <img src=${jokes.icon_url}>
            <p> ${jokes.value} <p>
          </div>
          <div>
            <form id="form">
              <input type="text" id="name" placeholder="name"/>
              <input type="text" id="email" placeholder="email"/>
              <input type="text" id="phone" placeholder="phone"/>
              <input type="submit" value="Enviar"/>
            </form>
          </div>
      `;

      return view
  },

  after_render: async () => {
    let formcontent = document.getElementById('form');

    formcontent.addEventListener('submit', (e) => {
      e.preventDefault();
      let name = document.querySelector('#name').value;
      let email = document.querySelector('#email').value;
      let phone = document.getElementById('phone').value;

      let postData = {
        name,
        email,
        phone
      }

      postform.post('', postData).then(
        response => {
          alert('Tudo Certo')
        }
      ). catch(e => alert('Algo de errado não está certo...'))
    });
  }
}

export default Home;