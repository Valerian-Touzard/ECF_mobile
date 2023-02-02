class LocataireService {

    /**
     * retourne la liste des locataires
     * @returns JSON
     */
    async getAllLocataires() {
        return await fetch(process.env.REACT_APP_URI_LOCATAIRE as string)
            .then(response => response.json())
            .catch(err => console.error(err));
    }

    /**
     * Méthode qui retourne un locataire via son id
     * @param idLocataire string
     * @returns json
     */
    getOneLocataireById(idLocataire: string) {
        return fetch(process.env.REACT_APP_URI_LOCATAIRE + "/" + idLocataire).then(response => response.json()).catch(err => console.log(err));
    }

    /**
     * Ajoute 1 locataire
     * @param locataire : locataire
     * @returns JSON
     */
    async addLocataire(locataire: any) {
        return await fetch(process.env.REACT_APP_URI_LOCATAIRE as string, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(locataire),
        }).then(response => response.json()).catch(err => console.error(err));

    };

    /**
     * Modifie un locataire
     * @param idLocataire 
     * @param locataire : locataire
     * @returns JSOn
     */
    modifyLocataire(id: string, locataire: any) {
        return fetch(process.env.REACT_APP_URI_LOCATAIRE + `/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(locataire),
        }).then(response => response.json()).catch(err => console.error(err));
    }

    /**
     * Supprime un locataire
     * @param idLocataire : string
     * @returns JSON
     */
    async deleteLocataire(idLocataire: string) {
        return await fetch(process.env.REACT_APP_URI_LOCATAIRE + `/${idLocataire}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

}

export const locataireService = new LocataireService();