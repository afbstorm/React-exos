import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const requestAge = createAsyncThunk(
    // Nom de l'action
    'age/request',
    async (firstname) => {
        // Création d'une requête GET vers l'api agify
        const response = await axios.get('https://api.agify.io/', {
            // Configuration de la requête, on indique les params a envoyer
            // "name" qui récupère le paramètre de notre action (firstname)
            // "country_id" on le brute force en "BE"
            params: {
                name: firstname,
                country_id: 'BE'
            }
        });
        return response.data;
    }
);