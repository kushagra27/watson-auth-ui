import logo from './logo.svg';
import './App.css';
import './app.scss';
import { Button, Content } from 'carbon-components-react';
import HeaderC from './components/Header';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage/LandingPage';


function App() {
  return (
    <>
        <HeaderC />
        {/* <Content> */}
        <div style={{marginTop:"3rem"}}>
          <Switch>
            <Route exact path="/" component={LandingPage} />
          </Switch>
        </div>
        {/* </Content> */}
      </>
  );
}

export default App;
