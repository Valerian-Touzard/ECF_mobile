import { IonBackButton, IonButton, IonContent, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import { useHistory, useParams } from 'react-router'
import { vehiculeService } from '../../Services/vehiculeService'

const SuppressionVehicule = () => {
    const { id } = useParams() as { id: string }
    const history = useHistory();

    const supprimerVehicule = (e:any) =>{
        e.preventDefault();
        vehiculeService.deleteVehicule(id);
        history.push("/");
    }

    const annulleSuppression = (e:any) =>{
        e.preventDefault();
        history.push("/");
    }

  return (
    <IonPage>
        <IonHeader>
        <IonToolbar>
          <IonTitle>Supprimer véhicules</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonTitle>Êtes-vous sûr de vouloir supprimer ce véhicule ?</IonTitle>
        <IonList>
            <IonItem>
                <IonButton onClick={supprimerVehicule}>Oui</IonButton>
                <IonButton onClick={annulleSuppression}>Non</IonButton>
            </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  )
}

export default SuppressionVehicule