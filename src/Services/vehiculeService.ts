import { VehiculeType } from "../Models/VehiculeType";

class VehiculeService {


    getAllVehicules = () => {  
        return fetch(process.env.REACT_APP_URI_VEHICULE as string)
            .then((response) => response.json())
            .catch((error) => console.error(error));
    }

    getOneVehicule = (id: string) => {
        return fetch(`${process.env.REACT_APP_URI_VEHICULE}/${id}`)
            .then((response) => response.json())
            .catch((error) => console.error(error));
    }

    /**
     * Méthode qui ajoute un véhicule dans la bdd
     * @param vehicule VehiculeType
     * @returns json
     */
    addNewVehicule(vehicule: VehiculeType) {
        return fetch(process.env.REACT_APP_URI_VEHICULE as string, {
            method: "POST",
            body: JSON.stringify(vehicule),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json()).catch(err => console.log(err));
    }

    /**
     * Méthode qui supprime un vehicule via son id
     * @param idVehicule string
     * @returns 
     */
    deleteVehicule(idVehicule: string) {
        return fetch(process.env.REACT_APP_URI_VEHICULE + "/" + idVehicule, {
            method: "DELETE",
        }).then(response => response.json()).catch(err => console.log(err));
    }
}

export const vehiculeService = Object.freeze(new VehiculeService());