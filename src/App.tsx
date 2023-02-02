import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { car, people } from 'ionicons/icons';
import ListVehicules from './pages/ListVehicules';
import DetailVehicule from './Components/Detail/DetailVehicule';
import ListLocataires from './pages/ListLocataires';
import { FormulaireAjoutVehicule } from './Components/Ajout/FormulaireAjoutVehicule';
import SuppressionVehicule from './Components/Suppr/SuppressionVehicule';
import { FormulaireAjoutLocataire } from './Components/Ajout/FormulaireAjoutLocataire';
import DetailLocataire from './Components/Detail/DetailLocataire';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';



setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/vehicules">
            <ListVehicules />
          </Route>
          <Route exact path="/addVehicule">
            <FormulaireAjoutVehicule />
          </Route>
          <Route exact path="/">
            <Redirect to="/vehicules" />
          </Route>
          <Route exact path="/locataires">
            <ListLocataires />
          </Route>
          <Route exact path="/addLocataire">
            <FormulaireAjoutLocataire />
          </Route>


          <Route path="/vehicules/:id" component={DetailVehicule} />
          <Route path="/supprimerVehicule/:id" component={SuppressionVehicule} />

          <Route path="/locataires/:id" component={DetailLocataire} />
        </IonRouterOutlet>


        <IonTabBar slot="bottom">
          <IonTabButton tab="vehicules" href="/vehicules">
            <IonIcon icon={car} />
            <IonLabel>Véhicules</IonLabel>
          </IonTabButton>
          <IonTabButton tab="locataires" href="/locataires">
            <IonIcon icon={people} />
            <IonLabel>Locataires</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
