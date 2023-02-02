import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonText, IonButton } from '@ionic/react'
import React from 'react'
import { useHistory } from 'react-router'
import { VehiculeType } from '../Models/VehiculeType'

export type unVehicule = {
  vehicule: VehiculeType
}

export const Vehicule = (props: unVehicule) => {
  const history = useHistory();
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{props.vehicule.marque}</IonCardTitle>
        <IonCardSubtitle>{props.vehicule.type}</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <IonText>prix: {props.vehicule.prix}€</IonText>
        <IonText> état: {props.vehicule.etat}</IonText>
        <IonButton onClick={(e) => { e.preventDefault(); history.push(`vehicules/${props.vehicule.id}`) }}>Détail</IonButton>
        <IonButton onClick={(e)=>{e.preventDefault(); history.replace(`supprimerVehicule/${props.vehicule.id}`)}}>Supprimer</IonButton>
      </IonCardContent>
    </IonCard>
  )
}