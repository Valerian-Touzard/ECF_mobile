import { IonContent, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Locataire } from '../Layout/Locataire';
import { LocataireType } from '../Models/LocataireType';
import { locataireService } from '../Services/LocataireService';


const ListLocataires: React.FC = () => {
  const [listLocataires, setListLocataires] = useState<LocataireType[]>([]);

  useEffect(() => {
    getAllLocataire();
  }, [])


  /**
   * Méthode qui récupère la liste des locataires
   */
  const getAllLocataire = () => {
    locataireService.getAllLocataires()
      .then(data => setListLocataires(data))
      .catch(err => console.log(err));
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Liste des locataires</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Link to="addLocataire">Ajouter un locataire</Link>
        <IonList>
          {listLocataires && listLocataires.map((locataire, index) => {
            return <IonItem key={index}>
              <Locataire locataire={locataire} />
            </IonItem>
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ListLocataires;
