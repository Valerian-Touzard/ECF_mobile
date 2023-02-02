class VehiculeService {


    getAllVehicules = () => {
        console.log(process.env.REACT_APP_URI_VEHICULE as string);
        
        return fetch(process.env.REACT_APP_URI_VEHICULE as string)
            .then((response) => response.json())
            .catch((error) => console.error(error));
    }
}

export const vehiculeService = Object.freeze(new VehiculeService());