import Axios from "axios";
import { forEach } from "lodash";

export default {
    data() {
      return {
        search: "",
        headers: [
          {
            text: "Titre",
            align: "start",
            value: "titre",
          },
          { text: "Resumé", value: "resumé" },
          { text: "Auteur", value: "id_auteur.name" },
        ],
        texte: [],
      };
    },
    created() {
        this.getHistoire();
    },
    methods: {
        getHistoire() {
            Axios.get('/api/textes').then(
                ({data}) => {
                    data.data.forEach(_data => {
                        this.texte.push(_data)
                        console.log(this.texte)
                    });
                }
            )
        }
    }
  };