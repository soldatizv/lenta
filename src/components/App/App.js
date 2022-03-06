import styles from "./App.module.css";
import Header from "../Header/Header";
import { Redirect, Route, Switch } from "react-router-dom";
import { Routes } from "../routes";
import RefugeesFromLDNR from "../pages/RefugeesFromLDNR/RefugeesFromLDNR";
import HousingForUkrainians from "../pages/HousingForUkrainians";
import Footer from "../Footer/Footer";

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
          <Redirect to={Routes.refugees} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
