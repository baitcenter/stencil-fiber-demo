/*! Built with http://stenciljs.com */
const{h:t}=window.App;class e{constructor(){this.elapsed=0,this.seconds=0}componentDidLoad(){var t=this.tick.bind(this);this.intervalID=setInterval(t,1e3)}tick(){this.seconds=this.seconds%10+1}hostData(){const t=this.elapsed/1e3%10;return{style:{position:"absolute",transformOrigin:"0 0",left:"50%",top:"50%",width:"10px",height:"10px",background:"#eee",transform:"scaleX("+(1+(t>5?10-t:t)/10)/2.1+") scaleY(0.7) translateZ(0.1px)"}}}render(){return t("div",null,t("fiber-triangle",{x:0,y:0,s:1e3,seconds:this.seconds}))}static get is(){return"fiber-demo"}static get encapsulation(){return"shadow"}static get properties(){return{elapsed:{type:Number,attr:"elapsed"}}}}class s{constructor(){this.hover=!1}enter(){this.hover=!0}leave(){this.hover=!1}hostData(){const t=1.3*this.size;return{style:{position:"absolute",font:"normal 15px sans-serif",textAlign:"center",cursor:"pointer",width:t+"px",height:t+"px",left:this.x+"px",top:this.y+"px",borderRadius:t/2+"px",lineHeight:t+"px",background:this.hover?"#ff0":"#61dafb"},onmouseenter:this.enter.bind(this),onmouseleave:this.leave.bind(this)}}render(){return this.hover?"**"+this.text+"**":this.text}static get is(){return"fiber-dot"}static get encapsulation(){return"shadow"}static get properties(){return{hover:{state:!0},size:{type:Number,attr:"size"},text:{type:String,attr:"text"},x:{type:Number,attr:"x"},y:{type:Number,attr:"y"}}}}var r=25;class i{render(){var e=this.s;if(e<=r)return t("fiber-dot",{x:this.x-r/2,y:this.y-r/2,size:r,text:this.seconds.toString()});e/=2;for(var s=performance.now()+.8;performance.now()<s;);return[t("fiber-triangle",{x:this.x,y:this.y-e/2,s:e,seconds:this.seconds}),t("fiber-triangle",{x:this.x-e,y:this.y+e/2,s:e,seconds:this.seconds}),t("fiber-triangle",{x:this.x+e,y:this.y+e/2,s:e,seconds:this.seconds})]}static get is(){return"fiber-triangle"}static get encapsulation(){return"shadow"}static get properties(){return{s:{type:Number,attr:"s"},seconds:{type:Number,attr:"seconds"},x:{type:Number,attr:"x"},y:{type:Number,attr:"y"}}}}export{e as FiberDemo,s as FiberDot,i as FiberTriangle};