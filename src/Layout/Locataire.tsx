import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react'
import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { LocataireType } from '../Models/LocataireType'

export type unLocataire = {
  locataire: LocataireType
}

export const Locataire = (props: unLocataire) => {
  const history = useHistory()

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{props.locataire.prenom} {props.locataire.nom}</IonCardTitle>
        <IonCardSubtitle>{props.locataire.tel}</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <IonButton onClick={(e) => { e.preventDefault(); history.push(`locataires/${props.locataire.id}`) }}>Detail</IonButton>
        {/* <IonButton onClick={}>Supprimer</IonButton> */}
      </IonCardContent>
    </IonCard>

  )
}
