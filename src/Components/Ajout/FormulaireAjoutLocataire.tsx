import React, { useState } from 'react'
import { LocataireType } from '../../Models/LocataireType';
import { v4 as uuidv4 } from 'uuid';
import { locataireService } from '../../Services/LocataireService';
import { IonBackButton, IonButton, IonButtons, IonContent, IonDatetime, IonDatetimeButton, IonHeader, IonInput, IonItem, IonLabel, IonList, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';

export const FormulaireAjoutLocataire = () => {

    const [newLocataire, setNewLocataire] = useState<LocataireType>({
        id: uuidv4(),
        nom: "",
        prenom: "",
        email: "",
        tel: "",
        dateNaiss: "01-01-2015",
    });


    /**
     * Change la valeur de l'attribut correspondant avec la valeur de l'input
     * @param event ChangeEvent<HTMLInputElement>
     */
    const handleChange = (event: any) => {
        setNewLocataire({ ...newLocataire, [event.target.name]: event.target.value })
    }

    /**
     * Enregistre et formate la date pour qu'elle puisse être enregistrer en bdd
     * @param event 
     */
    const handleChangeDate = (event:any) =>{
        event.preventDefault();
        let date = new Date(event.target.value).toISOString()
        newLocataire.dateNaiss = date;
    }

    /**
     * Appelle API pour enregistrer le nouveaux locataire
     * @param event React.MouseEvent<HTMLButtonElement>
     */
    const addNewLocataire = (event: any) => {
        event.preventDefault();
        locataireService.addLocataire(newLocataire);
        locataireService.getAllLocataires();
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="locataires" />
                    </IonButtons>
                    <IonTitle>Ajout d'un locataires</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <form className='formulaire'>
                    <IonList>
                        <IonItem>
                            <IonLabel position='floating'>nom:</IonLabel>
                            <IonInput id='nom' name='nom' onIonChange={handleChange}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position='floating'>prenom:</IonLabel>
                            <IonInput id='prenom' name='prenom' onIonChange={handleChange}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position='floating'>email:</IonLabel>
                            <IonInput id='email' name='email' onIonChange={handleChange} type='email'></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel>date de naissance:</IonLabel>
                            <IonDatetimeButton datetime='dateTime'></IonDatetimeButton>
                            <IonModal keepContentsMounted={true}>
                                <IonDatetime name='dateNaiss' onIonChange={handleChangeDate} id='dateTime' presentation='date'>
                                    <span slot="title">Votre date de naissance</span>
                                </IonDatetime>
                            </IonModal>
                        </IonItem>
                        <IonItem>
                            <IonLabel position='floating'>telephone:</IonLabel>
                            <IonInput id='tel' name='tel' onIonChange={handleChange} type='number'></IonInput>
                        </IonItem>
                    </IonList>

                    <IonButton type="submit" onClick={addNewLocataire} className="bouton">Ajouter client</IonButton>
                </form>
            </IonContent>
        </IonPage>
    )
}
