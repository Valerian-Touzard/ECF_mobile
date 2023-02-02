import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonList, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { LocataireType } from '../../Models/LocataireType'
import { locataireService } from '../../Services/LocataireService'

const DetailLocataire = () => {
    const { id } = useParams() as { id: string }
    const [locataire, setLocataire] = useState<LocataireType>()

    useEffect(() => {
        getOneVehicule(id)
    }, [])

    const getOneVehicule = (id: string) => {
        locataireService.getOneLocataireById(id)
            .then((data) => setLocataire(data))
            .catch((error) => console.log(error))
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
                        <IonCardTitle>{locataire?.nom} {locataire?.prenom}</IonCardTitle>
                        <IonCardSubtitle>{locataire?.dateNaiss}</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonList>
                            <IonItem>
                                <IonText>Email: {locataire?.email}</IonText>
                            </IonItem>
                            <IonItem>
                                <IonText>Téléphone: {locataire?.tel}</IonText>
                            </IonItem>
                        </IonList>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    )
}

export default DetailLocataire