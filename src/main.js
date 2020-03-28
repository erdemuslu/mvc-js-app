import './style/index.css';

import Controller from './Controller';
import Model from './Model';
import View from './View';

new Controller(new Model(), new View()).render();
