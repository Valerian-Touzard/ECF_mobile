import React, { useState } from 'react'
import { VehiculeType } from '../../Models/VehiculeType'
import { v4 as uuidv4 } from 'uuid';
import { vehiculeService } from '../../Services/vehiculeService';
import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonList, IonItem, IonLabel, IonInput, IonButton, IonSelect, IonSelectOption, IonCheckbox } from '@ionic/react';

export const FormulaireAjoutVehicule = () => {

    const [newVehicule, setNewVehicule] = useState<VehiculeType>({
        id: uuidv4(),
        marque: "",
        modele: "",
        type: "",
        imma: "",
        etat: "",
        prix: "",
        dispo: true,
    })

    /**
     * Change la valeur de l'attribut correspondant avec la valeur de l'input
     * @param event ChangeEvent<HTMLInputElement | HTMLSelectElement>
     */
    const handleChange = (event: any) => {
        setNewVehicule({ ...newVehicule, [event.target.name]: event.target.value })
    }

    /**
     * Change la valeur de l'attribut dispo avec la valeur de la checkbox
     * @param event ChangeEvent<HTMLInputElement>
     */
    const handleChangeCheckBox = (event: any) => {
        setNewVehicule({ ...newVehicule, [event.target.name]: event.target.checked });
    }


    /**
     * Methode qui effectue une requete API pour l'insertion du nouveau véhicule
     * @param event React.MouseEvent<HTMLButtonElement>
     */
    const addNewVehicule = (event: any) => {
        event.preventDefault();
        vehiculeService.addNewVehicule(newVehicule);
        vehiculeService.getAllVehicules();
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="vehicules" />
                    </IonButtons>
                    <IonTitle>Ajout d'un Véhicules</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <form className='formulaire'>
                    <IonList>
                        <IonItem>
                            <IonLabel position='floating'>marque:</IonLabel>
                            <IonInput id='marque' name='marque' onIonChange={handleChange}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position='floating'>modele:</IonLabel>
                            <IonInput id='modele' name='modele' onIonChange={handleChange}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position='floating'>type:</IonLabel>
                            <IonInput id='type' name='type' onIonChange={handleChange}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position='floating'>Immatriculation:</IonLabel>
                            <IonInput id='imma' name='imma' onIonChange={handleChange}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonList>
                                <IonItem>
                                    <IonSelect placeholder="Séléctionner l'état" onIonChange={handleChange} name="etat">
                                        <IonSelectOption value="A">A</IonSelectOption>
                                        <IonSelectOption value="B">B</IonSelectOption>
                                        <IonSelectOption value="C">C</IonSelectOption>
                                        <IonSelectOption value="D">D</IonSelectOption>
                                    </IonSelect>
                                </IonItem>
                            </IonList>
                        </IonItem>
                        <IonItem>
                            <IonLabel position='floating'>Prix:</IonLabel>
                            <IonInput id='prix' name='prix' onIonChange={handleChange}></IonInput>
                        </IonItem>
                    </IonList>
                    <IonItem>
                        <IonCheckbox slot="start" onIonChange={handleChangeCheckBox} name="dispo"></IonCheckbox>
                        <IonLabel>Disponible</IonLabel>
                    </IonItem>

                    <IonButton type="submit" onClick={addNewVehicule} className="bouton">Ajouter véhicule</IonButton>
                </form>
            </IonContent>
        </IonPage>
    )
}
