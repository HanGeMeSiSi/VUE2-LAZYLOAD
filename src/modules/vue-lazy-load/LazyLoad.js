import { getScrollParent } from "./utils";
import LazyImg from "./LazyImg";

export default function LazyLoad(Vue){

    return class Lazy{
        constructor(options){
            this.options = options;
            this.isAddScrollListener = false;
            this.lazyImgPool = [];
        }

        bindLazy(el, binding, vnode){
            // console.log(this.options)
            // console.log(binding)
            Vue.nextTick(()=>{
                const scrollParent = getScrollParent(el);
                console.log(scrollParent);
                scrollParent 
                    && !this.isAddScrollListener 
                    && scrollParent.addEventListener('scroll',this.handleScroll.bind(this),false);
                const lazyImg = new LazyImg({
                    el,
                    src:binding.value,
                    options:this.options,
                    imgRender:this.imgRender.bind(this),
                });
                this.lazyImgPool.push(lazyImg);
                this.handleScroll();
            });
           
        }

        handleScroll(){
            let isVisible = false;
            this.lazyImgPool.forEach(lazyImg=>{
                if(lazyImg.loaded)return;
                isVisible = lazyImg.checkIsVisible();
                isVisible && lazyImg.loadImg();
            })
        }

        imgRender(lazyImg,state){
            const { el , options } = lazyImg;
            const { loading , error } = options;
            let src = '';
            switch (state){
                case "loading":
                    src = loading || '';
                    break;
                case "error":
                    src = error || "";
                    break;
                default:
                    src = lazyImg.src;
                    break;        
            }
            el.setAttribute('src',src);
        }

    }
}