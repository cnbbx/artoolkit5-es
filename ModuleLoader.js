import Module from './artoolkit5/artoolkit_wasm.js';

const ModuleLoader = {
  init: () => {
    return new Promise(resolve => {
      Module({
        "printErr": () => { },
        onRuntimeInitialized() {
          // need to wrap this in an object
          // otherwise it will cause Chrome to crash
          resolve({ instance: this });
        }
      });
    });
  }
};

export default ModuleLoader
