import React from 'react';
import { render } from 'react-dom';

import { Admin, Resource } from 'admin-on-rest';

import restClient from './api/restClient';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { Motorcycle } from './entities';

render(
  <Admin title="Lowside.io" restClient={restClient('http://localhost:1323')}>
    <Resource
      name="motorcycles"
      list={Motorcycle.List}
      edit={Motorcycle.Edit}
      create={Motorcycle.Create}
      show={Motorcycle.Show}
      icon={Motorcycle.Icon}
    />
  </Admin>,
  document.getElementById('root')
);

registerServiceWorker();
