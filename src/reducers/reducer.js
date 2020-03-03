import {
  ADD_MOVIE,
  SEARCH_INPUT,
  SEARCH_RATING,
  REMOVE_MOVIE,
  EDIT_MOVIE
} from "../actions/actiontype";
import Coco from "../img/coco.jpg";
import Joker from "../img/joker.jpg";
import LePrinceOublié from "../img/LePrinceOublié.jpg";
import Dolittle from "../img/dollitle.jpeg";
import Pinocchio from "../img/Pinocchio.jpg";
import Frozen from "../img/frozen.jpg";

const initialState = {
  movies: [
    {
      id: 0,
      image: Coco,
      name: "Coco",
      star: "5",
      desc:
        "Depuis déjà plusieurs générations, la musique est bannie dans la famille de Miguel. Un vrai déchirement pour le jeune garçon dont le rêve ultime est de devenir un musicien aussi accompli que son idole, Ernesto de la Cruz",
      info: "29 novembre 2017 / Animation, Fantastique"
    },
    {
      id: 1,
      image: Joker,
      name: "Joker",
      star: "4",
      desc:
        "Le film, qui relate une histoire originale inédite sur grand écran, se focalise sur la figure emblématique de l’ennemi juré de Batman. Il brosse le portrait d’Arthur Fleck, un homme sans concession méprisé par la société. ",
      info: "9 octobre 2019 / Drame "
    },
    {
      id: 2,
      image: LePrinceOublié,
      name: "Le Prince Oublié",
      star: "3",
      desc:
        "Sofia, 8 ans, vit seule avec son père. Tous les soirs, il lui invente une histoire pour l’endormir. Ses récits extraordinaires prennent vie dans un monde imaginaire où l’héroïne est toujours la princesse Sofia, et son père, le Prince courageux. Mais trois ans plus tard, quand Sofia rentre au collège, elle n’a plus besoin de ces histoires. ",
      info: "12 février 2020 / Aventure, Comédie, Fantastique"
    },
    {
      id: 3,
      image: Dolittle,
      name: "Le Voyage du Dr Dolittle",
      star: "4",
      desc:
        "Après la perte de sa femme sept ans plus tôt, l’excentrique Dr. John Dolittle, célèbre docteur et vétérinaire de l’Angleterre de la Reine Victoria s’isole derrière les murs de son manoir, avec pour seule compagnie sa ménagerie d’animaux exotiques. ",
      info: "5 février 2020 / Comédie, Famille"
    },
    {
      id: 4,
      image: Pinocchio,
      name: "Pinocchio",
      star: "5",
      desc: "Adaptation du conte de Carlo Collodi par Matteo Garrone. ",
      info: "18 mars 2020 / Famille, Fantastique"
    },
    {
      id: 5,
      image: Frozen,
      star: "3",
      name: "La Reine des neiges II",
      desc:
        "Pourquoi Elsa est-elle née avec des pouvoirs magiques ? La jeune fille rêve de l’apprendre, mais la réponse met son royaume en danger. Avec l’aide d’Anna, Kristoff, Olaf et Sven, Elsa entreprend un voyage aussi périlleux qu’extraordinaire. ",
      info: "20 novembre 2019 / Animation"
    }
  ],
  valueInput: "",
  filtredMovies: [],
  rating:0
};

function moviereducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MOVIE:
      return { ...state, movies: state.movies.concat(action.payload) };

    case SEARCH_INPUT:
      return {
        ...state,
        valueInput: action.payload,
        filtredMovies: state.movies.filter(el =>
          el.name.toLowerCase().includes(action.payload)
        )
      };
    case SEARCH_RATING:
      return {
        ...state,
        rating: action.payload,
        movies: state.movies.filter(el => el.star >  state.rating)
      };

    case REMOVE_MOVIE: {
      // const new_state={... state}
      // delete new_state[action.id]
      // return new_state
      //    const item_index =action.index;
      //    const new_state = { ... state};
      //    delete new_state.movies[item_index];
      // return new_state;

      return {
        ...state,
        // id: action.id,
        filtredMovies: state.movies.filter(el => el.id !== action.id)
      };
    }

    case EDIT_MOVIE:
      return {...state, movies: state.movies.map(el =>
        el.id === action.payload.id ?  {...action.payload } : el
      ) }

    default:
      return state;
  }
}

export default moviereducer;
