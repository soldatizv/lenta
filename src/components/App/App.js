import styles from "./App.module.css";
import Header from "../Header/Header";
import { Redirect, Route, Switch } from "react-router-dom";
import { Routes } from "../routes";
import RefugeesFromLDNR from "../pages/RefugeesFromLDNR/RefugeesFromLDNR";
import HousingForUkrainians from "../pages/HousingForUkrainians";
import GeneralMobilizacia from "../pages/GeneralMobilizatcia";
import Footer from "../Footer/Footer";
import GeneralMobilizatcia1 from "../pages/GeneralMobilizatcia1";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Switch>
          <Route exact path={Routes.main}>
            <RefugeesFromLDNR />
          </Route>
          <Route exact path={Routes.refugees}>
            <RefugeesFromLDNR />
          </Route>
          <Route exact path={Routes.housingForUkrainians}>
            <HousingForUkrainians />
          </Route>
          <Route exact path={Routes.mobilizatcia}>
            <GeneralMobilizacia />
          </Route>
          <Route exact path={Routes.mobilizatcia_1}>
            <GeneralMobilizatcia1 />
          </Route>
          <Redirect to={Routes.refugees} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
