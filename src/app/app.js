// import {ModuleA} from './module-a';
// import {ModuleB} from './module-b';

// const moduleA = new ModuleA();
// const moduleB = new ModuleB();

export const run = (moduleA1, moduleA2, moduleB) => {
    moduleA1.printMessage_a1();
    moduleA2.printMessage_a2();
    moduleB.printMessage_b();
    moduleB.arrowMessage();
}