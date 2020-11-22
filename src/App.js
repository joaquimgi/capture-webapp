//Import Pages
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import Nav from "./components/Nav";

//Import GlobalStyle
import GlobalStyle from "./components/GlobalStyle";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact component={AboutUs} />
        <Route path="/work" exact component={OurWork} />
        <Route path="/contact" exact component={ContactUs} />
      </Switch>
    </div>
  );
}

export default App;
