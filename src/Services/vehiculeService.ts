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
}

export const vehiculeService = Object.freeze(new VehiculeService());