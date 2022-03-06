import styles from "./App.module.css";
import Header from "../Header/Header";
import { Redirect, Route, Switch } from "react-router-dom";
import { Routes } from "../routes";
import RefugeesFromLDNR from "../pages/RefugeesFromLDNR/RefugeesFromLDNR";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <div className={styles.wrapper}>
          <Route exact path={Routes.refugees}>
            <RefugeesFromLDNR />
          </Route>
          <Redirect to={Routes.refugees} />
        </div>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
