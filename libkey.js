(e=>{
    globalThis.libkey = e
})(class lk{
    pressKeyArray = []
    isPressEtcKey = {
        upArrow:false,
        downArrow:false,
        leftArrow:false,
        rightArrow:false,
        enter:false,
        space:false,
        alt:false,
        ctrl:false,
        shift:false
    }
    #setmeta = (e,i) => {
        if(e.key == "Enter") this.isPressEtcKey.enter = i
        if(e.key == " ") this.isPressEtcKey.space = i
        if(e.key == "ArrowUp") this.isPressEtcKey.upArrow = i
        if(e.key == "ArrowDown") this.isPressEtcKey.downArrow = i
        if(e.key == "ArrowLeft") this.isPressEtcKey.leftArrow = i
        if(e.key == "ArrowRight") this.isPressEtcKey.rightArrow = i

        if((e.altKey && i) || 
          !(e.altKey || i)) this.isPressEtcKey.alt = i

        if((e.ctrlKey && i) || 
         (!(e.ctrlKey || i))) this.isPressEtcKey.ctrl = i

        if((e.shiftKey && i) || 
         (!(e.shiftKey || i))) this.isPressEtcKey.shift = i
        //console.log(e.key + " press is " + i);
        //console.log(e.altKey);
        i ? this.ondown(e.key, e.repeat):this.onup(e.key);
    }
    ondown = e=>e
    onup = e=>e
    constructor(){
        
        document.addEventListener("keydown",e=>{
            if(e.key && !this.isPress(e.key) && e.key.length === 1) this.pressKeyArray.push(e.key)
            this.#setmeta(e,true)
        })
        document.addEventListener("keyup",e=>{
            if(e.key) this.pressKeyArray.splice( this.pressKeyArray.indexOf(e.key) )
            this.#setmeta(e,false)
        })
    }
    isPress(key){
        let ret = false
        this.pressKeyArray.forEach(e=>{
            if(key == e) ret = true
        })
        return ret
    }
})