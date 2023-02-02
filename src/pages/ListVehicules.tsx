import { IonContent, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import { VehiculeType } from '../Models/VehiculeType';
import { vehiculeService } from '../Services/vehiculeService';
import { Vehicule } from '../Layout/Vehicule';
import { Link } from 'react-router-dom';

const ListVehicules: React.FC = () => {
  const [vehicules, setVehicules] = useState<VehiculeType[]>([])

  useEffect(() => {
    getAllVehicules()
  }, [])

  const getAllVehicules = () => {
    vehiculeService.getAllVehicules()
      .then((data) => setVehicules(data))
      .catch((err) => console.error(err));
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Liste des Véhicules</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Link to={'addVehicule'} >Ajouter un Véhicules</Link>
        <IonList>
          {vehicules && vehicules.map((vehicule, index) => {
            return <IonItem key={index}>
              <Vehicule vehicule={vehicule} />
            </IonItem>
          })}
        </IonList>

      </IonContent>
    </IonPage>
  );
};

export default ListVehicules;
