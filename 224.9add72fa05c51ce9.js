(self.webpackChunkawg_app=self.webpackChunkawg_app||[]).push([[224],{6224:(a,l,o)=>{"use strict";o.r(l),o.d(l,{EditionRowTablesModule:()=>r});var e=o(655),t=o(4650),s=o(5921),c=o(5867);var i,R=o(3204),T=o.n(R),w=o(3212);let n=((i=class{constructor(g,m){this.editionService=g,this.editionDataService=m}ngOnInit(){this.editionService.updateIsRowTableView(!0),this.rowTablesData=this.editionDataService.getRowTables()}ngOnDestroy(){this.editionService.clearIsRowTableView()}}).ctorParameters=()=>[{type:w.OE},{type:w.Ko}],i);n=(0,e.gn)([(0,t.wA2)({selector:"awg-edition-row-tables",template:'<div *ngIf="rowTablesData" class="row row-cols-1 row-cols-md-3 row-cols-xl-5 g-4">\n    <div class="col" *ngFor="let rowTable of rowTablesData">\n        <div class="card h-100">\n            <div class="card-body">\n                <h5 class="card-title" [ngClass]="{ \'text-muted\': rowTable.disabled }">\n                    Reihentabelle {{ rowTable.short }}\n                </h5>\n            </div>\n            <div class="card-footer text-end">\n                <a\n                    [routerLink]="[\'./../complex\' + rowTable.route, \'sheets\']"\n                    [queryParams]="{ convolute: rowTable.convolute, sketch: rowTable.sketch }"\n                    class="btn btn-outline-info"\n                    [ngClass]="{ disabled: rowTable.disabled }"\n                    >Mehr...\n                </a>\n            </div>\n        </div>\n    </div>\n</div>\n',styles:[T()]})],n);const u=[{path:"",component:n,data:{title:"AWG Online Edition \u2013 Row tables"}}],h=[n];let d=class{};d=(0,e.gn)([(0,t.LVF)({imports:[c.Bz.forChild(u)],exports:[c.Bz]})],d);let r=class{};r=(0,e.gn)([(0,t.LVF)({imports:[s.m,d],declarations:[h]})],r)},3204:(a,l,o)=>{var e=o(135),s=o(479)(e);s.push([a.id,"",""]),a.exports=s.toString()}}]);