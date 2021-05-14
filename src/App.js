import { Component, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Container from './Components/Container/Container';
import AppBar from './Components/AppBar';
import { authOperations } from './Redux/auth';
import PrivateRoute from './Components/Routes/PrivateRoute';
import PublicRoute from './Components/Routes/PublicRoute';
import './styles.css';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Container>
        <AppBar />
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route exact path="/" component={HomeView} />
            <PublicRoute restricted path="/register" component={RegisterView} />
            <PublicRoute restricted path="/login" component={LoginView} />
            <PrivateRoute path="/contacts" component={ContactsView} />
          </Switch>
        </Suspense>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
