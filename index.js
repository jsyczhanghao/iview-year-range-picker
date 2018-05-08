import Picker from './picker';

let install = Picker.install = function(Vue, opts = {}){
    if(install.installed) return;

    Vue.component('iview-year-range-picker', Picker);
    install.installed = true;
};

// auto install
if(typeof window !== 'undefined' && window.Vue){
    install(window.Vue);
}

export default Picker;