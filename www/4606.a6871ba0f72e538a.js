"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4606],{4606:(f,c,n)=>{n.r(c),n.d(c,{StartDriePageModule:()=>S});var p=n(6814),t=n(95),o=n(451),u=n(1379),e=n(9212),g=n(1721);const m=[{path:"",component:(()=>{var r;class l{constructor(s,i){this.score=s,this.router=i,this.spelers=new t.cw({speler1:new t.NI,speler2:new t.NI,speler3:new t.NI})}ngOnInit(){this.score.existingGame()&&this.router.navigateByUrl("drie-scoreblad")}startGame(){this.score.boom.speler1=this.spelers.controls.speler1.value,this.score.boom.speler2=this.spelers.controls.speler2.value,this.score.boom.speler3=this.spelers.controls.speler3.value,this.score.save(),this.router.navigateByUrl("drie-scoreblad")}}return(r=l).\u0275fac=function(s){return new(s||r)(e.Y36(g.r),e.Y36(u.F0))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-start-drie"]],decls:31,vars:3,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],[3,"formGroup","ngSubmit"],["placeholder","Speler 1","formControlName","speler1"],["placeholder","Speler 2","formControlName","speler2"],["placeholder","Speler 3","formControlName","speler3"],["type","submit"]],template:function(s,i){1&s&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"Start boom drie spelers"),e.qZA()()(),e.TgZ(4,"ion-content",1)(5,"ion-header",2)(6,"ion-toolbar")(7,"ion-title",3),e._uU(8,"Start boom drie spelers"),e.qZA()()(),e.TgZ(9,"form",4),e.NdJ("ngSubmit",function(){return i.startGame()}),e.TgZ(10,"ion-grid")(11,"ion-row")(12,"ion-col")(13,"b"),e._uU(14,"Speler 1"),e.qZA()(),e.TgZ(15,"ion-col")(16,"b"),e._uU(17,"Speler 2"),e.qZA()(),e.TgZ(18,"ion-col")(19,"b"),e._uU(20,"Speler 3"),e.qZA()()(),e.TgZ(21,"ion-row")(22,"ion-col"),e._UZ(23,"ion-input",5),e.qZA(),e.TgZ(24,"ion-col"),e._UZ(25,"ion-input",6),e.qZA(),e.TgZ(26,"ion-col"),e._UZ(27,"ion-input",7),e.qZA()(),e.TgZ(28,"ion-row")(29,"ion-button",8),e._uU(30,"Start spel"),e.qZA()()()()()),2&s&&(e.Q6J("translucent",!0),e.xp6(4),e.Q6J("fullscreen",!0),e.xp6(5),e.Q6J("formGroup",i.spelers))},dependencies:[t._Y,t.JJ,t.JL,o.YG,o.wI,o.W2,o.jY,o.Gu,o.pK,o.Nd,o.wd,o.sr,o.j9,t.sg,t.u]}),l})()}];let d=(()=>{var r;class l{}return(r=l).\u0275fac=function(s){return new(s||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[u.Bz.forChild(m),u.Bz]}),l})(),S=(()=>{var r;class l{}return(r=l).\u0275fac=function(s){return new(s||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[p.ez,t.u5,o.Pc,d,t.UX]}),l})()}}]);