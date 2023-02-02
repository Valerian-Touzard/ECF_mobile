import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonList, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { VehiculeType } from '../../Models/VehiculeType'
import { vehiculeService } from '../../Services/vehiculeService'

const DetailVehicule = () => {
    const { id } = useParams() as { id: string }
    const [vehicule, setVehicule] = useState<VehiculeType>()

    useEffect(() => {
        getOneVehicule(id)
    }, [])

    const getOneVehicule = (id: string) => {
        vehiculeService.getOneVehicule(id)
            .then((data) => setVehicule(data))
            .catch((error) => console.error(error))
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton></IonBackButton>
                    </IonButtons>
                    <IonTitle>Détails</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>{vehicule?.marque} {vehicule?.modele}</IonCardTitle>
                        <IonCardSubtitle>{vehicule?.type}</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonList>
                            <IonItem>
                                <IonText>état: {vehicule?.etat}</IonText>
                            </IonItem>
                            <IonItem>
                                <IonText>prix: {vehicule?.prix}</IonText>
                            </IonItem>
                            <IonItem>
                                <IonText>Immatriculation: {vehicule?.imma}</IonText>
                            </IonItem>
                            <IonItem>
                                <IonText>disponible: {vehicule?.dispo ? "Disponible" : "Indisponible"}</IonText>
                            </IonItem>
                        </IonList>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    )
}

export default DetailVehicule