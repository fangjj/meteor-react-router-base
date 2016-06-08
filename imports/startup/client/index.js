/**
 * Created by jim on 2016/6/6.
 */
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import { renderRoutes } from './routes.jsx';

Meteor.startup(() => {
    render(renderRoutes(), document.getElementById('react-root'));
});