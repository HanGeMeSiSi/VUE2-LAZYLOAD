import LazyLoad from './LazyLoad.js'


const VueLazyLoad = {
    install (Vue,options){
        const LazyClass= LazyLoad(Vue);
        const lazyload = new LazyClass(options);

        Vue.directive('lazy', {
            // bind(el, binding, vnode) {
            //     // el 元素
            //     // binding
            //     // vnode 虚拟节点
            //     // console.log(el,binding,vnode);

            // },
            // el, binding, vnode
            bind:lazyload.bindLazy.bind(lazyload),
            inserted(el, binding, vnode) {},
            update(el, binding, vnode, oldVnode) {},
            componentUpdated(el, binding, vnode) {},
            unbind(el, binding, vnode) {},
        });
    }
}

export default VueLazyLoad;