import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { LocataireType } from '../Models/LocataireType'

export type unLocataire = {
  locataire: LocataireType
}

export const Locataire = (props: unLocataire) => {

  return (
    <Link to={`modifyLocataire/${props.locataire.id}`}>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>{props.locataire.prenom} {props.locataire.nom}</IonCardTitle>
          <IonCardSubtitle>{props.locataire.tel}</IonCardSubtitle>
        </IonCardHeader>
      </IonCard>
    </Link>

  )
}
