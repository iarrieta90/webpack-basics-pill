import './scss/main.scss';

import {ModuleA} from './app/module-a';
import {ModuleB} from './app/module-b';

import {run} from './app/app';

const moduleA1 = new ModuleA();
let moduleA2 = new ModuleA();
const moduleB = new ModuleB();

run(moduleA1, moduleA2, moduleB);