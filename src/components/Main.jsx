import { Route, Switch } from 'react-router-dom'
import PostAdd from './PostAdd';
import PostList from './PostList';
import PostDetail from './PostDetail';
import PostEdit from './PostEdit';

const Main = () => (
  <Switch>
    <Route exact path="/" component={ PostList } />
    <Route exact path="/blog" component={ PostList } />
    <Route exact path="/blog/new" component={ PostAdd } />
    <Route exact path="/blog/:id" component={ PostDetail } />
    <Route exact path="/blog/:id/edit" component={ PostEdit } />
  </Switch>
);

export default Main;