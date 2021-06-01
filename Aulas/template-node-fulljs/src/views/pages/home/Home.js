import HomeSectionOne from "../../components/section/homeSectionOne";
import HomeSectionTwo from "../../components/section/homeSectionTwo";

let Home = {
  is_private: false,

  render: async () => {
    let view = `
          <div>
            <h1>Início</div>
            ${HomeSectionOne}
            ${HomeSectionTwo}
          </div>
      `;

    return view
  },

  after_render: async () => { }
}

export default Home;