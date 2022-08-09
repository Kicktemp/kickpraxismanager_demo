(function(){"use strict";var e={239:function(e,t,n){var a=n(9242),o=n(3045),i=n(3396),s=n(7139);const r={class:"uk-container"},l={class:"uk-form-stacked uk-margin-large"},u={class:"uk-table uk-table-divider uk-table-small uk-table-justify"},c=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th",null,"Wert"),(0,i._)("th",null,"Value")])],-1),d=(0,i._)("td",null,"Location",-1),m=(0,i._)("td",null,"Customer",-1),p=(0,i._)("td",null,"Group",-1),h=(0,i._)("td",null,"Interest",-1),k=(0,i._)("td",null,"Appointment",-1),g=(0,i._)("td",null,"Resource",-1),w=(0,i._)("td",null,"CustomerData",-1),f=(0,i._)("td",null,"Location",-1),v=(0,i._)("td",null,"Location",-1),_={key:0,class:"uk-overlay-primary uk-position-cover"},b=(0,i._)("div",{class:"uk-position-center"},[(0,i._)("span",{"uk-spinner":"ratio: 2"})],-1),y=[b];function D(e,t,n,o,b,D){const M=(0,i.up)("LocationsSelect"),T=(0,i.up)("NewCustomer"),Y=(0,i.up)("InterestsSelect"),x=(0,i.up)("AppointmentsSelect"),N=(0,i.up)("ResourcesSelect"),j=(0,i.up)("CalendarPicker"),S=(0,i.up)("CustomerForm");return(0,i.wg)(),(0,i.iD)("div",r,[(0,i._)("form",l,[(0,i.Wm)(M,{location:e.location,"onUpdate:location":t[0]||(t[0]=t=>e.location=t),loading:e.loading,"onUpdate:loading":t[1]||(t[1]=t=>e.loading=t)},null,8,["location","loading"]),0!==e.location?((0,i.wg)(),(0,i.j4)(T,{key:0,customer:e.customer,"onUpdate:customer":t[2]||(t[2]=t=>e.customer=t)},null,8,["customer"])):(0,i.kq)("",!0),(0,i.wy)((0,i.Wm)(Y,{location:e.location,group:e.group,"onUpdate:group":t[3]||(t[3]=t=>e.group=t),interest:e.interest,"onUpdate:interest":t[4]||(t[4]=t=>e.interest=t),loading:e.loading,"onUpdate:loading":t[5]||(t[5]=t=>e.loading=t)},null,8,["location","group","interest","loading"]),[[a.F8,""!==e.customer&&0!=e.location]]),""!==e.interest&&0!=e.interest?((0,i.wg)(),(0,i.j4)(x,{key:1,location:e.location,interest:e.interest,appointment:e.appointment,"onUpdate:appointment":t[6]||(t[6]=t=>e.appointment=t),loading:e.loading,"onUpdate:loading":t[7]||(t[7]=t=>e.loading=t)},null,8,["location","interest","appointment","loading"])):(0,i.kq)("",!0),""!==e.appointment&&0!=e.appointment?((0,i.wg)(),(0,i.j4)(N,{key:2,location:e.location,interest:e.interest,resource:e.resource,"onUpdate:resource":t[8]||(t[8]=t=>e.resource=t),weightlocation:e.weightlocation,"onUpdate:weightlocation":t[9]||(t[9]=t=>e.weightlocation=t),showCalendar:e.showCalendar,"onUpdate:showCalendar":t[10]||(t[10]=t=>e.showCalendar=t),loading:e.loading,"onUpdate:loading":t[11]||(t[11]=t=>e.loading=t)},null,8,["location","interest","resource","weightlocation","showCalendar","loading"])):(0,i.kq)("",!0),(0,i.Wm)(j,{location:e.location,interest:e.interest,appointment:e.appointment,resource:e.resource,loading:e.loading,"onUpdate:loading":t[12]||(t[12]=t=>e.loading=t),showCustomer:e.showCustomer,"onUpdate:showCustomer":t[13]||(t[13]=t=>e.showCustomer=t)},null,8,["location","interest","appointment","resource","loading","showCustomer"]),""!==e.customer&&e.showCustomer?((0,i.wg)(),(0,i.j4)(S,{key:3,customerData:e.customerData,"onUpdate:customerData":t[14]||(t[14]=t=>e.customerData=t),customer:e.customer},null,8,["customerData","customer"])):(0,i.kq)("",!0)]),(0,i._)("table",u,[c,(0,i._)("tbody",null,[(0,i._)("tr",null,[d,(0,i._)("td",null,(0,s.zw)(e.location),1)]),(0,i._)("tr",null,[m,(0,i._)("td",null,(0,s.zw)(e.customer),1)]),(0,i._)("tr",null,[p,(0,i._)("td",null,(0,s.zw)(e.group),1)]),(0,i._)("tr",null,[h,(0,i._)("td",null,(0,s.zw)(e.interest),1)]),(0,i._)("tr",null,[k,(0,i._)("td",null,(0,s.zw)(e.appointment),1)]),(0,i._)("tr",null,[g,(0,i._)("td",null,(0,s.zw)(e.resource),1)]),(0,i._)("tr",null,[w,(0,i._)("td",null,(0,s.zw)(e.customerData),1)]),(0,i._)("tr",null,[f,(0,i._)("td",null,(0,s.zw)(e.location),1)]),(0,i._)("tr",null,[v,(0,i._)("td",null,(0,s.zw)(e.location),1)])])]),e.loading?((0,i.wg)(),(0,i.iD)("div",_,y)):(0,i.kq)("",!0)])}var M=n(4078),T=n.n(M),Y=n(3565),x=n.n(Y);const N={class:"uk-margin"},j=(0,i._)("label",{class:"uk-form-label",for:"form-horizontal-select"},"Standort wählen",-1),S={class:"uk-form-controls"},U={class:"uk-flex-middle","uk-grid":""},C={class:"uk-width-5-6"},I=(0,i._)("option",{value:"0"},"Standort wählen",-1),Z=["value"],$={class:"uk-width-1-6 uk-text-right"},O={key:0,"uk-icon":"icon: check; ratio: 2",class:"uk-text-success"};function W(e,t,n,o,r,l){return(0,i.wg)(),(0,i.iD)("div",N,[j,(0,i._)("div",S,[(0,i._)("div",U,[(0,i._)("div",C,[(0,i.wy)((0,i._)("select",{class:"uk-select",id:"form-horizontal-select","onUpdate:modelValue":t[0]||(t[0]=e=>l.locationSelected=e),onInput:t[1]||(t[1]=t=>e.$emit("update:location",t.target.value))},[I,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.locations,(e=>((0,i.wg)(),(0,i.iD)("option",{key:e.attributes.locationid,value:e.attributes.locationid},(0,s.zw)(e.attributes.title),9,Z)))),128))],544),[[a.bM,l.locationSelected]])]),(0,i._)("div",$,[0!=n.location?((0,i.wg)(),(0,i.iD)("span",O)):(0,i.kq)("",!0)])])])])}var z={name:"LocationsSelect",props:{location:{type:Number,default:0},loading:Boolean},emits:["update:location","update:loading"],data:()=>({locations:null}),computed:{locationSelected(){return this.location}},created(){this.init(),this.fetchLocations()},methods:{init(){void 0!==window.kick_location&&this.$emit("update:location",window.kick_location)},async fetchLocations(){this.$emit("update:loading",!0);const e="https://stage.s7.projekt.dev/api/index.php/v1/kickpraxismanager/locations";fetch(e,{headers:{"X-Joomla-Token":"c2hhMjU2OjE6ZTQyMTkxNTc3N2U0ODk1M2Q0MWE5NmY4YTA5MmNmZWIwOGI1MTJjNTllY2U3ZWZmYTFmN2UyOTI0MDQ3NDQ1MA=="}}).then((async e=>{const t=await e.json();if(!e.ok){const n=t&&t.message||e.statusText;return Promise.reject(n)}void 0!==window.kick_location&&this.$emit("update:location",window.kick_location),this.locations=t.data,this.$emit("update:loading",!1)})).catch((e=>{this.errorMessage=e,console.error("There was an error!",e)}))}}},B=n(89);const Q=(0,B.Z)(z,[["render",W]]);var A=Q;const P={class:"uk-margin"},q=(0,i._)("label",{class:"uk-form-label"},"Planen Sie Ihren ersten Besuch oder sind sie bereits Patient bei uns?",-1),F={class:"uk-form-controls"},E={class:"uk-flex-middle","uk-grid":""},L={class:"uk-width-5-6"},H={class:"uk-grid"},J={class:"uk-width-1-2"},G={class:"uk-width-1-2"},K={class:"uk-width-1-6 uk-text-right"},V={key:0,"uk-icon":"icon: check; ratio: 2",class:"uk-text-success"};function R(e,t,n,a,o,r){return(0,i.wg)(),(0,i.iD)("div",P,[q,(0,i._)("div",F,[(0,i._)("div",E,[(0,i._)("div",L,[(0,i._)("div",H,[(0,i._)("div",J,[(0,i._)("button",{onMousedown:t[0]||(t[0]=t=>e.$emit("update:customer","new")),class:(0,s.C_)(["uk-button",{"uk-button-primary":"new"==n.customer}]),type:"button"}," Ich plane meinen ersten Termin ",34)]),(0,i._)("div",G,[(0,i._)("button",{onClick:t[1]||(t[1]=t=>e.$emit("update:customer","old")),class:(0,s.C_)(["uk-button",{"uk-button-primary":"old"==n.customer}]),type:"button"}," Ich möchte einen Folgetermin vereinbaren ",2)])])]),(0,i._)("div",K,[""!=n.customer?((0,i.wg)(),(0,i.iD)("span",V)):(0,i.kq)("",!0)])])])])}var X={name:"NewCustomer",props:{customer:{type:String,default:""}},emits:["update:customer"],data:()=>({locations:null}),computed:{locationSelected(){return this.location}}};const ee=(0,B.Z)(X,[["render",R]]);var te=ee;const ne={class:"uk-margin"},ae=(0,i._)("label",{class:"uk-form-label",for:"interesse-select"},"Zu welcher Körperregion möchten Sie beraten werden und was ist Ihr Behandlungswunsch?",-1),oe={class:"uk-form-controls"},ie={class:"uk-flex-middle","uk-grid":""},se={class:"uk-width-5-6"},re={class:"uk-flex-middle","uk-grid":""},le={class:"uk-width-1-2"},ue=(0,i._)("option",{value:"0"},"Bitte auswählen",-1),ce=["value"],de={class:"uk-width-1-2"},me=(0,i._)("option",{value:"0"},"Bitte auswählen",-1),pe=["value"],he={class:"uk-width-1-6 uk-text-right"},ke={key:0,"uk-icon":"icon: check; ratio: 2",class:"uk-text-success"};function ge(e,t,n,o,r,l){return(0,i.wg)(),(0,i.iD)("div",ne,[ae,(0,i._)("div",oe,[(0,i._)("div",ie,[(0,i._)("div",se,[(0,i._)("div",re,[(0,i._)("div",le,[(0,i.wy)((0,i._)("select",{class:"uk-select",id:"interesse-select","onUpdate:modelValue":t[0]||(t[0]=e=>l.groupSelected=e),onInput:t[1]||(t[1]=t=>e.$emit("update:group",t.target.value))},[ue,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.groups,(e=>((0,i.wg)(),(0,i.iD)("option",{key:e.attributes.id,value:e.attributes.id},(0,s.zw)(e.attributes.title),9,ce)))),128))],544),[[a.bM,l.groupSelected]])]),(0,i._)("div",de,[(0,i.wy)((0,i._)("select",{class:"uk-select",id:"interesse-2-select","onUpdate:modelValue":t[2]||(t[2]=e=>l.interestSelected=e),onInput:t[3]||(t[3]=t=>e.$emit("update:interest",t.target.value))},[me,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.interests,(e=>((0,i.wg)(),(0,i.iD)("option",{key:e.attributes.interestid,value:e.attributes.interestid},(0,s.zw)(e.attributes.title),9,pe)))),128))],544),[[a.bM,l.interestSelected],[a.F8,0!=n.group]])])])]),(0,i._)("div",he,[0!=n.group&&0!=n.interest?((0,i.wg)(),(0,i.iD)("span",ke)):(0,i.kq)("",!0)])])])])}var we={name:"InterestsSelect",props:{location:{type:Number,default:0},group:{type:Number,default:0},interest:{type:Number,default:0},loading:Boolean},emits:["update:groups","update:interest","update:loading"],data:()=>({groups:null,interests:null}),computed:{groupSelected(){return this.group},interestSelected(){return this.interest}},watch:{location(e,t){e!=t&&0!=e&&this.fetchGroups()},group(e,t){e!=t&&0!=e&&this.fetchInterests()}},methods:{async fetchGroups(){this.$emit("update:loading",!0);const e=`https://stage.s7.projekt.dev/api/index.php/v1/kickpraxismanager/groups/${this.location}`;fetch(e,{headers:{"X-Joomla-Token":"c2hhMjU2OjE6ZTQyMTkxNTc3N2U0ODk1M2Q0MWE5NmY4YTA5MmNmZWIwOGI1MTJjNTllY2U3ZWZmYTFmN2UyOTI0MDQ3NDQ1MA=="}}).then((async e=>{const t=await e.json();if(!e.ok){const n=t&&t.message||e.statusText;return Promise.reject(n)}this.groups=t.data,this.$emit("update:loading",!1)})).catch((e=>{this.errorMessage=e,console.error("There was an error!",e)}))},async fetchInterests(){this.$emit("update:loading",!0);const e=`https://stage.s7.projekt.dev/api/index.php/v1/kickpraxismanager/interests/${this.location}/${this.group}`;fetch(e,{headers:{"X-Joomla-Token":"c2hhMjU2OjE6ZTQyMTkxNTc3N2U0ODk1M2Q0MWE5NmY4YTA5MmNmZWIwOGI1MTJjNTllY2U3ZWZmYTFmN2UyOTI0MDQ3NDQ1MA=="}}).then((async e=>{const t=await e.json();if(!e.ok){const n=t&&t.message||e.statusText;return Promise.reject(n)}this.$emit("update:interest",0),this.interests=t.data,this.$emit("update:loading",!1)})).catch((e=>{this.errorMessage=e,console.error("There was an error!",e)}))}}};const fe=(0,B.Z)(we,[["render",ge]]);var ve=fe;const _e={class:"uk-margin"},be=(0,i._)("label",{class:"uk-form-label",for:"terminart"},"Welche Terminart möchten Sie gerne in Anspruch nehmen?",-1),ye={class:"uk-form-controls"},De={class:"uk-flex-middle","uk-grid":""},Me={class:"uk-width-5-6"},Te=(0,i._)("option",{value:"0"},"Bitte wählen",-1),Ye=["value"],xe={class:"uk-width-1-6 uk-text-right"},Ne={key:0,"uk-icon":"icon: check; ratio: 2",class:"uk-text-success"};function je(e,t,n,o,r,l){return(0,i.wg)(),(0,i.iD)("div",_e,[be,(0,i._)("div",ye,[(0,i._)("div",De,[(0,i._)("div",Me,[(0,i.wy)((0,i._)("select",{class:"uk-select",id:"terminart","onUpdate:modelValue":t[0]||(t[0]=e=>l.appointmentSelected=e),onInput:t[1]||(t[1]=t=>e.$emit("update:appointment",t.target.value))},[Te,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.appointments,(e=>((0,i.wg)(),(0,i.iD)("option",{key:e.attributes.id,value:e.attributes.id},(0,s.zw)(e.attributes.name),9,Ye)))),128))],544),[[a.bM,l.appointmentSelected]])]),(0,i._)("div",xe,[0!=n.appointment?((0,i.wg)(),(0,i.iD)("span",Ne)):(0,i.kq)("",!0)])])])])}var Se={name:"AppointmentsSelect",props:{location:{type:Number,default:0},interest:{type:Number,default:0},appointment:{type:Number,default:0},loading:Boolean},emits:["update:appointment","update:loading"],data:()=>({appointments:null}),created(){this.fetchAppointments()},watch:{interest(e,t){e!=t&&0!=e&&this.fetchAppointments()}},computed:{appointmentSelected(){return this.appointment}},methods:{async fetchAppointments(){this.$emit("update:loading",!0);const e=`https://stage.s7.projekt.dev/api/index.php/v1/kickpraxismanager/appointments/${this.location}/${this.interest}`;fetch(e,{headers:{"X-Joomla-Token":"c2hhMjU2OjE6ZTQyMTkxNTc3N2U0ODk1M2Q0MWE5NmY4YTA5MmNmZWIwOGI1MTJjNTllY2U3ZWZmYTFmN2UyOTI0MDQ3NDQ1MA=="}}).then((async e=>{const t=await e.json();if(!e.ok){const n=t&&t.message||e.statusText;return Promise.reject(n)}this.appointments=t.data,this.$emit("update:loading",!1)})).catch((e=>{this.errorMessage=e,console.error("There was an error!",e),this.$emit("update:loading",!1)}))}}};const Ue=(0,B.Z)(Se,[["render",je]]);var Ce=Ue;const Ie={key:0,class:"uk-margin"},Ze=(0,i._)("label",{class:"uk-form-label",for:"behandler-praeferenz"},"Sollen wir Ihnen einen frühstmöglichen Termin ohne Behandlerpräferenz anbieten oder möchten Sie eine Beratung bei einem Behandler Ihrer Wahl?",-1),$e={class:"uk-form-controls"},Oe={class:"uk-flex-middle","uk-grid":""},We={class:"uk-width-5-6"},ze={class:"uk-grid"},Be={class:"uk-width-1-2"},Qe={class:"uk-width-1-2"},Ae={class:"uk-width-1-6 uk-text-right"},Pe={key:0,"uk-icon":"icon: check; ratio: 2"},qe={key:1,class:"uk-margin"},Fe=(0,i._)("label",{class:"uk-form-label"},"Bitte wählen Sie Ihren gewünschten Behandler aus",-1),Ee={class:"uk-child-width-1-4@m","uk-grid":""},Le=["value"],He={class:"uk-card uk-card-default"},Je={class:"uk-card-media-top"},Ge=["src","alt"],Ke={class:"uk-card-body"},Ve={class:"uk-card-title"},Re={class:"uk-form-controls"},Xe={class:"uk-flex-middle","uk-grid":""},et={class:"uk-width-5-6"},tt=(0,i._)("option",{value:"0"},"Bitte wählen",-1),nt=["value"],at={class:"uk-width-1-6 uk-text-right"},ot={key:0,"uk-icon":"icon: check; ratio: 2",class:"uk-text-success"};function it(e,t,n,o,r,l){return(0,i.wg)(),(0,i.iD)(i.HY,null,[e.showNext?((0,i.wg)(),(0,i.iD)("div",Ie,[Ze,(0,i._)("div",$e,[(0,i._)("div",Oe,[(0,i._)("div",We,[(0,i._)("div",ze,[(0,i._)("div",Be,[(0,i._)("button",{onMousedown:t[0]||(t[0]=t=>e.$emit("update:showCalendar",!0)),class:(0,s.C_)(["uk-button",{"uk-button-primary":n.showCalendar}]),type:"button"}," Frühstmöglichen Termin auswählen ",34)]),(0,i._)("div",Qe,[(0,i._)("button",{onClick:t[1]||(t[1]=t=>e.showDoctors=!0),class:(0,s.C_)(["uk-button",{"uk-button-primary":e.showDoctors}]),type:"button"}," Behandler auswählen ",2)])])]),(0,i._)("div",Ae,[""!=e.customer?((0,i.wg)(),(0,i.iD)("span",Pe)):(0,i.kq)("",!0)])])])])):(0,i.kq)("",!0),e.showDoctors?((0,i.wg)(),(0,i.iD)("div",qe,[Fe,(0,i._)("div",Ee,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.resources,(e=>((0,i.wg)(),(0,i.iD)("div",{key:e.attributes.id,value:e.attributes.id},[(0,i._)("div",He,[(0,i._)("div",Je,[(0,i._)("img",{src:e.attributes.data.image,alt:e.attributes.data.image_alt},null,8,Ge)]),(0,i._)("div",Ke,[(0,i._)("h3",Ve,(0,s.zw)(e.attributes.data.title),1)])])],8,Le)))),128))]),(0,i._)("div",Re,[(0,i._)("div",Xe,[(0,i._)("div",et,[(0,i.wy)((0,i._)("select",{class:"uk-select",id:"behandler","onUpdate:modelValue":t[2]||(t[2]=e=>l.resourceSelected=e),onInput:t[3]||(t[3]=t=>e.$emit("update:resource",t.target.value))},[tt,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.resources,(e=>((0,i.wg)(),(0,i.iD)("option",{key:e.attributes.id,value:e.attributes.id},(0,s.zw)(e.attributes.name),9,nt)))),128))],544),[[a.bM,l.resourceSelected]])]),(0,i._)("div",at,[0!=n.resource?((0,i.wg)(),(0,i.iD)("span",ot)):(0,i.kq)("",!0)])])])])):(0,i.kq)("",!0)],64)}var st={name:"ResourcesSelect",props:{location:{type:Number,default:0},interest:{type:Number,default:0},resource:{type:Number,default:0},showCalendar:{type:Boolean,default:!1},weightlocation:{type:Number,default:0},loading:Boolean},emits:["update:resource","update:loading","update:weightlocation"],data:()=>({resources:null,showDoctors:!1,showNext:!1}),created(){this.fetchResources()},watch:{interest(e,t){e!=t&&0!=e&&this.fetchResources()}},computed:{resourceSelected(){return this.resource}},methods:{async fetchResources(){this.$emit("update:loading",!0);const e=`https://stage.s7.projekt.dev/api/index.php/v1/kickpraxismanager/resources/${this.location}/${this.interest}`;fetch(e,{headers:{"X-Joomla-Token":"c2hhMjU2OjE6ZTQyMTkxNTc3N2U0ODk1M2Q0MWE5NmY4YTA5MmNmZWIwOGI1MTJjNTllY2U3ZWZmYTFmN2UyOTI0MDQ3NDQ1MA=="}}).then((async e=>{const t=await e.json();if(!e.ok){const n=t&&t.message||e.statusText;return Promise.reject(n)}this.resources=t.data,this.resources[0].attributes.weightresource&&(this.$emit("update:weightlocation",this.resources[0].attributes.weightresource),this.$emit("update:resource",this.resources[0].attributes.id),this.$emit("update:showCalendar",!0)),this.resources[0].attributes.doctor_id&&(this.showNext=!0),void 0!==this.resources[0]&&this.$emit("update:showCalendar",!0),this.$emit("update:loading",!1)})).catch((e=>{this.errorMessage=e,console.error("There was an error!",e),this.$emit("update:loading",!1)}))}}};const rt=(0,B.Z)(st,[["render",it]]);var lt=rt;const ut={class:"uk-margin"},ct=(0,i._)("label",{class:"uk-form-label",for:"firstname"},"Vorname",-1),dt={class:"uk-form-controls"},mt=(0,i._)("div",{class:"uk-margin"},[(0,i._)("label",{class:"uk-form-label",for:"lastname"},"Nachname"),(0,i._)("div",{class:"uk-form-controls"},[(0,i._)("input",{class:"el-input uk-input",id:"lastname",name:"lastname",placeholder:"Bitte geben Sie Ihren Nachname ein. *"})])],-1),pt={key:0,class:"uk-margin"},ht=(0,i._)("label",{class:"uk-form-label",for:"birthday"},"birthday",-1),kt=(0,i._)("div",{class:"uk-form-controls"},[(0,i._)("input",{class:"el-input uk-input",id:"birthday",name:"birthday",placeholder:"Bitte geben Sie Ihren birthday ein. *"})],-1),gt=[ht,kt];function wt(e,t,n,a,o,s){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",ut,[ct,(0,i._)("div",dt,[(0,i._)("input",{class:"el-input uk-input",id:"firstname",name:"firstname",placeholder:"Bitte geben Sie Ihren Vornamen ein. *",onInput:t[0]||(t[0]=t=>e.$emit("update:customer",t.target.value))},null,32)])]),mt,"new"==n.customer?((0,i.wg)(),(0,i.iD)("div",pt,gt)):(0,i.kq)("",!0)],64)}var ft={name:"CustomerForm",props:{customer:{type:String,default:""},customerData:{type:Object}},emits:["update:customerData"],data:()=>({locations:null})};const vt=(0,B.Z)(ft,[["render",wt]]);var _t=vt;function bt(e,t,n,a,o,r){const l=(0,i.up)("DatePicker");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(l,{onDayclick:r.onDayClick,"is-expanded":"","max-page":o.json["max-page"],"min-page":o.json["min-page"],"available-dates":o.json.available},null,8,["onDayclick","max-page","min-page","available-dates"]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.times,(e=>((0,i.wg)(),(0,i.iD)("div",{key:e},(0,s.zw)(e.start)+" - "+(0,s.zw)(e.end),1)))),128))],64)}var yt={data(){return{date:new Date,day:"",times:[],json:{"min-page":{month:8,year:2022},"max-page":{month:11,year:2022},available:[{start:"2022-08-09",end:"2022-08-09"},{start:"2022-08-18",end:"2022-08-18"},{start:"2022-08-08",end:"2022-08-08"}],slots:{"2022-08-08":[{from:"2010-04-21T09:00:00Z",until:"2010-04-21T10:00:00Z",duration:60,"resource-id":23},{from:"2010-04-21T09:00:00Z",until:"2010-04-21T10:00:00Z",duration:60,"resource-id":23}],"2022-08-09":[{from:"2010-04-21T09:00:00Z",until:"2010-04-21T10:00:00Z",duration:60,"resource-id":23},{from:"2010-04-21T09:00:00Z",until:"2010-04-21T10:00:00Z",duration:60,"resource-id":23}]}}}},filters:{formatDate(e){return console.log(e),new Date(e)}},methods:{onDayClick(e){this.day==e.id?(this.day=null,this.times=[]):(this.day=e.id,this.times=this.json.slots[e.id])}}};const Dt=(0,B.Z)(yt,[["render",bt]]);var Mt=Dt;T().use(x());var Tt={name:"App",components:{LocationsSelect:A,NewCustomer:te,InterestsSelect:ve,AppointmentsSelect:Ce,ResourcesSelect:lt,CustomerForm:_t,CalendarPicker:Mt},data:()=>({location:0,weightlocation:0,showCalendar:!1,showCustomer:!1,customer:"",group:0,interest:0,appointment:0,resource:0,customerData:{firstname:"",lastname:"",email:"",privacy:!1,gender:0,birthday:"",street:"",no:"",zip:"",city:"",phone:"",mobile:""},loading:!1}),watch:{location(e,t){e!=t&&(this.customer="")},customer(e,t){e!=t&&(this.group=0,this.interest=0)},interest(e,t){e!=t&&(this.appointment=0,this.resource=0)}}};const Yt=(0,B.Z)(Tt,[["render",D]]);var xt=Yt;const Nt=(0,a.ri)(xt);Nt.use(o.Sx,{titlePosition:"center",transition:"sldie-h",locales:{de:{firstDayOfWeek:1,masks:{L:"YYYY-MM-DD"}}},masks:{title:"MMMM YYYY",weekdays:"WW",navMonths:"MMM",input:["L","YYYY-MM-DD","YYYY/MM/DD"],dayPopover:"WWW, MMM D, YYYY",data:["L","YYYY-MM-DD","YYYY/MM/DD"],iso:"YYYY-MM-DD"}}),Nt.component("CalendarDate",o.f),Nt.component("DatePicker",o.Mt),Nt.mount("#app")}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var i=t[a]={exports:{}};return e[a].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,i){if(!a){var s=1/0;for(c=0;c<e.length;c++){a=e[c][0],o=e[c][1],i=e[c][2];for(var r=!0,l=0;l<a.length;l++)(!1&i||s>=i)&&Object.keys(n.O).every((function(e){return n.O[e](a[l])}))?a.splice(l--,1):(r=!1,i<s&&(s=i));if(r){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[a,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,i,s=a[0],r=a[1],l=a[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(o in r)n.o(r,o)&&(n.m[o]=r[o]);if(l)var c=l(n)}for(t&&t(a);u<s.length;u++)i=s[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},a=self["webpackChunkkickpraxismanager"]=self["webpackChunkkickpraxismanager"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(239)}));a=n.O(a)})();
//# sourceMappingURL=app.5f31dc00.js.map