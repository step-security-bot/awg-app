(self.webpackChunkawg_app=self.webpackChunkawg_app||[]).push([[520],{2520:(i,a,e)=>{"use strict";e.r(a),e.d(a,{EditionReportModule:()=>D});var o=e(655),t=e(4650),s=e(5921),O=e(2268);var p,T=e(7183),x=e.n(T),h=e(67),l=e(2638);let v=((p=class{constructor(n){this.utils=n,this.openModalRequest=new t.vpe,this.selectSvgSheetRequest=new t.vpe,this.FIRM_SIGNS={OP12:{A:[l.ss.FIRM_JE_NO_9_LIN_28]},OP25:{A:[l.ss.FIRM_JE_NO_15_LIN_16],B:[l.ss.FIRM_JE_NO_2_LIN_12],C:[l.ss.FIRM_JE_NO_3_LIN_14]}},this.ref=this}openModal(n){n&&this.openModalRequest.emit(n)}selectSvgSheet(n){n&&this.selectSvgSheetRequest.emit(n)}}).ctorParameters=()=>[{type:h.tI}],p.propDecorators={sourceDescriptionListData:[{type:t.IIB}],openModalRequest:[{type:t.r_U}],selectSvgSheetRequest:[{type:t.r_U}]},p);v=(0,o.gn)([(0,t.wA2)({selector:"awg-source-description",template:'<div class="awg-source-description-list" *ngIf="sourceDescriptionListData">\n    <div\n        class="awg-source-description para"\n        *ngFor="let sourceDescription of sourceDescriptionListData.sources"\n        [id]="sourceDescription.id">\n        <div class="awg-source-description-head">\n            <p *ngIf="sourceDescription.siglum" class="awg-source-description-siglum bold">\n                {{ sourceDescription.siglum\n                }}<span *ngIf="sourceDescription.siglumAddendum" class="awg-source-description-siglum-addendum"\n                    ><sup>{{ sourceDescription.siglumAddendum }}</sup></span\n                >\n            </p>\n            <p\n                *ngIf="sourceDescription.type"\n                class="awg-source-description-type"\n                [compile-html]="sourceDescription.type"\n                [compile-html-ref]="ref"></p>\n            <p\n                *ngIf="sourceDescription.location"\n                class="awg-source-description-location"\n                [compile-html]="sourceDescription.location"\n                [compile-html-ref]="ref"></p>\n        </div>\n        <div *ngIf="utils.isNotEmptyObject(sourceDescription.description)" class="awg-source-description-body">\n            \x3c!-- description --\x3e\n            <ng-container *ngIf="utils.isNotEmptyArray(sourceDescription.description.desc)">\n                <p\n                    class="awg-source-description-desc"\n                    *ngFor="let description of sourceDescription.description.desc"\n                    [compile-html]="description"\n                    [compile-html-ref]="ref"></p>\n            </ng-container>\n\n            \x3c!-- writingMaterial --\x3e\n            <p *ngIf="sourceDescription.description.writingMaterial" class="awg-source-description-writing-material">\n                <span class="caps">Beschreibstoff:&nbsp;</span>\n                <span [compile-html]="sourceDescription.description.writingMaterial" [compile-html-ref]="ref"></span>\n            </p>\n\n            \x3c!-- writingInstruments --\x3e\n            <ng-container *ngIf="utils.isNotEmptyObject(sourceDescription.description.writingInstruments)">\n                <p\n                    *ngIf="sourceDescription.description.writingInstruments.main"\n                    class="awg-source-description-writing-instruments">\n                    <span class="caps">Schreibstoff:&nbsp;</span>\n                    <span\n                        [compile-html]="sourceDescription.description.writingInstruments.main"\n                        [compile-html-ref]="ref"></span>\n                    <ng-container\n                        *ngIf="utils.isNotEmptyArray(sourceDescription.description.writingInstruments.secondary)">\n                        <span>;&nbsp;</span>\n                        <span\n                            *ngFor="\n                                let secondary of sourceDescription?.description?.writingInstruments?.secondary;\n                                let last = last\n                            ">\n                            <span [compile-html]="secondary" [compile-html-ref]="ref"></span>\n                            <span *ngIf="!last">,&nbsp;</span>\n                        </span></ng-container\n                    >.\n                </p>\n            </ng-container>\n\n            \x3c!-- title --\x3e\n            <p *ngIf="sourceDescription.description.title" class="awg-source-description-title">\n                <span class="caps">Titel:&nbsp;</span>\n                <span [compile-html]="sourceDescription.description.title" [compile-html-ref]="ref"></span>\n            </p>\n\n            \x3c!-- date --\x3e\n            <p *ngIf="sourceDescription.description.date" class="awg-source-description-date">\n                <span class="caps">Datierung:&nbsp;</span>\n                <span [compile-html]="sourceDescription.description.date" [compile-html-ref]="ref"></span>\n            </p>\n\n            \x3c!-- pagination --\x3e\n            <p *ngIf="sourceDescription.description.pagination" class="awg-source-description-pagination">\n                <span class="caps">Paginierung:&nbsp;</span>\n                <span [compile-html]="sourceDescription.description.pagination" [compile-html-ref]="ref"></span>\n            </p>\n\n            \x3c!-- measureNumbers --\x3e\n            <p *ngIf="sourceDescription.description.measureNumbers" class="awg-source-description-measure-numbers">\n                <span class="caps">Taktzahlen:&nbsp;</span>\n                <span [compile-html]="sourceDescription.description.measureNumbers" [compile-html-ref]="ref"></span>\n            </p>\n\n            \x3c!-- instrumentation --\x3e\n            <p *ngIf="sourceDescription.description.instrumentation" class="awg-source-description-instrumentation">\n                <span class="caps">Instrumentenvorsatz:&nbsp;</span>\n                <span [compile-html]="sourceDescription.description.instrumentation" [compile-html-ref]="ref"></span>\n            </p>\n\n            \x3c!-- annotations --\x3e\n            <p *ngIf="sourceDescription.description.annotations" class="awg-source-description-annotations">\n                <span class="caps">Eintragungen:&nbsp;</span>\n                <span [compile-html]="sourceDescription.description.annotations" [compile-html-ref]="ref"></span>\n            </p>\n\n            \x3c!-- content --\x3e\n            <div\n                *ngIf="utils.isNotEmptyArray(sourceDescription.description.content)"\n                class="awg-source-description-content">\n                <p class="no-para"><span class="caps">Inhalt:</span></p>\n                <p class="half-para" *ngFor="let content of sourceDescription.description.content">\n                    \x3c!-- content.itemDescription --\x3e\n                    <span *ngIf="content.item || content.itemDescription" class="awg-source-description-content-item"\n                        ><ng-container *ngIf="content.itemLinkTo"\n                            ><a (click)="selectSvgSheet(content.itemLinkTo)"\n                                ><strong>{{ content.item }}</strong></a\n                            ></ng-container\n                        ><ng-container *ngIf="!content.itemLinkTo"\n                            ><strong>{{ content.item }}</strong></ng-container\n                        >\n                        <span *ngIf="content.itemDescription" class="awg-source-description-content-item-description"\n                            >&nbsp;<span [compile-html]="content.itemDescription" [compile-html-ref]="ref"></span></span\n                        >:<br />\n                    </span>\n\n                    \x3c!-- content.folios --\x3e\n                    <ng-container *ngIf="utils.isNotEmptyArray(content.folios)">\n                        <ng-container *ngFor="let folio of content.folios; let lastFolio = last">\n                            <span\n                                *ngIf="folio.folio"\n                                class="awg-source-description-content-item-folio"\n                                [ngClass]="{\n                                    tab: content.item\n                                }">\n                                <ng-container *ngIf="folio.folioLinkTo">\n                                    <a (click)="selectSvgSheet(folio.folioLinkTo)"\n                                        ><ng-template\n                                            *ngTemplateOutlet="\n                                                folioTemplate;\n                                                context: { $implicit: folio }\n                                            "></ng-template></a\n                                ></ng-container>\n                                <ng-container *ngIf="!folio.folioLinkTo">\n                                    <ng-template\n                                        *ngTemplateOutlet="\n                                            folioTemplate;\n                                            context: { $implicit: folio }\n                                        "></ng-template></ng-container\n                                ><span\n                                    *ngIf="folio.folioDescription"\n                                    class="awg-source-description-content-item-folio-description"\n                                    >&nbsp;<span [compile-html]="folio.folioDescription" [compile-html-ref]="ref"></span\n                                ></span>\n                            </span>\n                            <ng-template #folioTemplate let-folio>\n                                <span\n                                    >Bl.&nbsp;<span\n                                        class="awg-source-description-content-item-folio-number"\n                                        *ngIf="folio.folio.endsWith(\'v\') || folio.folio.endsWith(\'r\'); else plainFolio"\n                                        >{{ folio.folio.slice(0, -1)\n                                        }}<sup class="awg-source-description-content-item-folio-side">{{\n                                            folio.folio.slice(-1)\n                                        }}</sup></span\n                                    ></span\n                                >\n                                <ng-template #plainFolio>{{ folio.folio }}</ng-template>\n                            </ng-template>\n\n                            \x3c!-- content.folios.systemGroups --\x3e\n                            <ng-container *ngIf="utils.isNotEmptyArray(folio.systemGroups); else noSystemGroups"\n                                ><ng-container\n                                    *ngFor="\n                                        let systemGroup of folio.systemGroups;\n                                        let firstSystemGroup = first;\n                                        let lastSystemGroup = last\n                                    "\n                                    ><ng-container\n                                        *ngFor="\n                                            let system of systemGroup;\n                                            let i = index;\n                                            let firstSystem = first;\n                                            let lastSystem = last\n                                        "\n                                        ><span\n                                            class="awg-source-description-content-item-system"\n                                            *ngIf="system.system"\n                                            [ngClass]="{\n                                                tab: system.row && !firstSystem,\n                                                doubletab:\n                                                    (system.row &&\n                                                        !firstSystemGroup &&\n                                                        firstSystem &&\n                                                        folio.folio.length === 2) ||\n                                                    (system.measure && !firstSystemGroup && folio.folio.length === 2),\n                                                doubletab_two:\n                                                    (system.row &&\n                                                        !firstSystemGroup &&\n                                                        firstSystem &&\n                                                        folio.folio.length > 2) ||\n                                                    (system.measure && !firstSystemGroup && folio.folio.length > 2)\n                                            }"\n                                            ><ng-template\n                                                *ngTemplateOutlet="\n                                                    systemTemplate;\n                                                    context: { $implicit: system.system }\n                                                "></ng-template></span\n                                        ><ng-template #systemTemplate let-system\n                                            >&nbsp;&nbsp;System&nbsp;{{ system }}:&nbsp;</ng-template\n                                        >\n\n                                        <span class="awg-source-description-content-item-measure" *ngIf="system.measure"\n                                            ><ng-container *ngIf="system.linkTo"\n                                                ><a (click)="selectSvgSheet(system.linkTo)"\n                                                    ><ng-template\n                                                        *ngTemplateOutlet="\n                                                            measureTemplate;\n                                                            context: { $implicit: system.measure }\n                                                        "></ng-template></a></ng-container\n                                            ><ng-container *ngIf="!system.linkTo"\n                                                ><ng-template\n                                                    *ngTemplateOutlet="\n                                                        measureTemplate;\n                                                        context: { $implicit: system.measure }\n                                                    "></ng-template\n                                            ></ng-container>\n                                            <ng-template #measureTemplate let-measure\n                                                ><span>T.&nbsp;{{ measure }}</span></ng-template\n                                            ></span\n                                        ><span\n                                            class="awg-source-description-content-item-row"\n                                            *ngIf="utils.isNotEmptyObject(system.row)"\n                                            ><ng-container *ngIf="system.linkTo">\n                                                <a (click)="selectSvgSheet(system.linkTo)"\n                                                    ><ng-template\n                                                        *ngTemplateOutlet="\n                                                            rowTemplate;\n                                                            context: { $implicit: system.row }\n                                                        "></ng-template> </a></ng-container\n                                            ><ng-container *ngIf="!system.linkTo"\n                                                ><ng-template\n                                                    *ngTemplateOutlet="\n                                                        rowTemplate;\n                                                        context: { $implicit: system.row }\n                                                    "></ng-template\n                                            ></ng-container>\n                                            <ng-template #rowTemplate let-row>\n                                                {{ row.rowType }}<sub>{{ row.rowBase }}</sub> ({{ row.rowNumber }})\n                                            </ng-template></span\n                                        ><span *ngIf="lastFolio && lastSystemGroup && lastSystem; else notLast">.</span>\n                                        <ng-template #notLast\n                                            ><span>;<br *ngIf="(i + 1) % systemGroup.length === 0" /></span\n                                        ></ng-template>\n                                    </ng-container>\n                                </ng-container>\n                            </ng-container>\n                            <ng-template #noSystemGroups>\n                                <br *ngIf="!lastFolio" />\n                            </ng-template>\n                        </ng-container>\n                    </ng-container>\n                </p>\n            </div>\n        </div>\n    </div>\n</div>\n',changeDetection:t.n4l.OnPush,styles:[x()]})],v);var m,M=e(7976),L=e.n(M),b=e(141);let R=((m=class{constructor(n){this.utils=n,this.navigateToReportFragmentRequest=new t.vpe,this.openModalRequest=new t.vpe,this.selectSvgSheetRequest=new t.vpe,this.ref=this}get editionRouteConstants(){return b.LL}navigateToReportFragment(n){n&&this.navigateToReportFragmentRequest.emit(n)}openModal(n){n&&this.openModalRequest.emit(n)}selectSvgSheet(n){n&&this.selectSvgSheetRequest.emit(n)}}).ctorParameters=()=>[{type:h.tI}],m.propDecorators={editionComplex:[{type:t.IIB}],sourceEvaluationListData:[{type:t.IIB}],navigateToReportFragmentRequest:[{type:t.r_U}],openModalRequest:[{type:t.r_U}],selectSvgSheetRequest:[{type:t.r_U}]},m);R=(0,o.gn)([(0,t.wA2)({selector:"awg-source-evaluation",template:'<div class="awg-source-evaluation-list para" *ngIf="sourceEvaluationListData">\n    <ng-container\n        *ngIf="utils.isNotEmptyArray(sourceEvaluationListData.sources[0].content); else evaluationPlaceholder">\n        <p\n            class="awg-source-evaluation-entry"\n            *ngFor="let evaluation of sourceEvaluationListData.sources[0].content"\n            [compile-html]="evaluation"\n            [compile-html-ref]="this"></p>\n    </ng-container>\n    <ng-template #evaluationPlaceholder>\n        <p class="awg-source-evaluation-empty p-5 border rounded-3">\n            <small class="text-muted"\n                >[Die Quellenbewertung zum Editionskomplex\n                <span [innerHTML]="editionComplex.complexId.full"></span> erscheint im Zusammenhang der vollsta\u0308ndigen\n                Edition von {{ editionComplex.complexId.short }} in {{ editionRouteConstants.EDITION.short }}\n                {{ editionComplex.series.short }}/{{ editionComplex.section.short }}.]\n            </small>\n        </p>\n    </ng-template>\n</div>\n',changeDetection:t.n4l.OnPush,styles:[L()]})],R);var u,P=e(3779),N=e.n(P);let S=((u=class{constructor(){this.openModalRequest=new t.vpe,this.ref=this}openModal(n){n&&this.openModalRequest.emit(n)}}).ctorParameters=()=>[],u.propDecorators={sourceListData:[{type:t.IIB}],openModalRequest:[{type:t.r_U}]},u);S=(0,o.gn)([(0,t.wA2)({selector:"awg-source-list",template:'<table aria-label="Table for list of sources" class="table table-hover borderless">\n    <tbody>\n        \x3c!--  at the moment only for the first item ("source.siglum == \'A\'") --\x3e\n        <tr *ngFor="let source of sourceListData.sources; let sourceIndex = index">\n            <th scope="row">\n                <ng-container *ngIf="source.hasDescription === true; else modalHint">\n                    <a [routerLink]="[\'./\']" fragment="{{ source.linkTo }}" [innerHTML]="source.siglum"></a>\n                </ng-container>\n                <ng-template #modalHint>\n                    <a (click)="openModal(source.linkTo)" [innerHTML]="source.siglum"></a>\n                </ng-template>\n            </th>\n            <td>\n                <span [compile-html]="source.type" [compile-html-ref]="ref"></span> <br />\n                <span class="text-muted" [innerHTML]="source.location"></span>\n            </td>\n        </tr>\n    </tbody>\n</table>\n',changeDetection:t.n4l.OnPush,styles:[N()]})],S);var g,k=e(6241),$=e.n(k);let _=((g=class{constructor(n){this.utils=n,this.openModalRequest=new t.vpe,this.selectSvgSheetRequest=new t.vpe,this.ref=this}openModal(n){n&&this.openModalRequest.emit(n)}selectSvgSheet(n){n&&this.selectSvgSheetRequest.emit(n)}}).ctorParameters=()=>[{type:h.tI}],g.propDecorators={textcriticsData:[{type:t.IIB}],openModalRequest:[{type:t.r_U}],selectSvgSheetRequest:[{type:t.r_U}]},g);_=(0,o.gn)([(0,t.wA2)({selector:"awg-textcritics-list",template:'<ngb-accordion #textCriticsAcc="ngbAccordion" id="textCriticsAcc" *ngIf="textcriticsData">\n    <ngb-panel *ngFor="let textcritic of textcriticsData.textcritics" [id]="textcritic.id">\n        <ng-template ngbPanelHeader>\n            <div class="accordion-button awg-accordion-button-custom-header justify-content-between">\n                <button ngbPanelToggle class="p-0 btn btn-link text-start">{{ textcritic.label }}</button>\n                <button type="button" class="btn btn-sm btn-outline-info" (click)="selectSvgSheet(textcritic.id)">\n                    Zur Transkription\n                </button>\n            </div>\n        </ng-template>\n        <ng-template ngbPanelContent>\n            <div *ngIf="utils.isNotEmptyArray(textcritic.description)">\n                <p class="caps">Skizzenkommentar:</p>\n                <p\n                    *ngFor="let description of textcritic.description"\n                    [compile-html]="description"\n                    [compile-html-ref]="ref"></p>\n            </div>\n            <div *ngIf="utils.isNotEmptyArray(textcritic.comments)">\n                <p class="caps">Textkritischer Kommentar:</p>\n                <awg-edition-tka-table\n                    [textcriticalComments]="textcritic.comments"\n                    [isRowTable]="textcritic.rowtable"\n                    (openModalRequest)="openModal($event)"\n                    (selectSvgSheetRequest)="selectSvgSheet($event)">\n                </awg-edition-tka-table>\n            </div>\n        </ng-template>\n    </ngb-panel>\n</ngb-accordion>\n',styles:[$()]})],_);var y=e(5867);var d,U=e(8845),j=e.n(U),B=e(515),H=e(3900),q=e(262),w=e(3212);let f=((d=class{constructor(n,c,J){this.editionDataService=n,this.editionService=c,this.router=J,this.errorObject=null,this.titles={sourceList:"1. Quellen\xfcbersicht",sourceDescription:"2. Quellenbeschreibung",sourceEvaluation:"3. Quellenbewertung",tka:"4. Textkritische Anmerkungen"}}get editionRouteConstants(){return b.LL}ngOnInit(){this.getEditionReportData()}getEditionReportData(){this.editionReportData$=this.editionService.getEditionComplex().pipe((0,H.w)(n=>(this.editionComplex=n,this.editionDataService.getEditionReportData(this.editionComplex))),(0,q.K)(n=>(this.errorObject=n,B.E)))}onModalOpen(n){n&&this.modal.open(n)}onReportFragmentNavigate(n){n||(n="");const c={fragment:n};this.router.navigate([this.editionComplex.baseRoute,this.editionRouteConstants.EDITION_REPORT.route],c)}onSvgSheetSelect(n){n||(n="");const c={queryParams:{sketch:n}};this.router.navigate([this.editionComplex.baseRoute,this.editionRouteConstants.EDITION_SHEETS.route],c)}}).ctorParameters=()=>[{type:w.Ko},{type:w.OE},{type:y.F0}],d.propDecorators={modal:[{type:t.i9L,args:["modal",{static:!0}]}]},d);f=(0,o.gn)([(0,t.wA2)({selector:"awg-edition-report",template:'\x3c!-- content: edition report --\x3e\n<div>\n    \x3c!-- modal --\x3e\n    <awg-modal #modal></awg-modal>\n\n    <ngb-accordion\n        id="reportAcc"\n        #reportAcc="ngbAccordion"\n        activeIds="awg-source-list, awg-source-desc, awg-source-evaluation, awg-tka-panel"\n        *ngIf="editionReportData$ | async as editionReportData">\n        \x3c!-- source list --\x3e\n        <ngb-panel id="awg-source-list" [title]="titles.sourceList">\n            <ng-template ngbPanelContent>\n                <awg-source-list\n                    *ngIf="editionReportData[0]"\n                    [sourceListData]="editionReportData[0]"\n                    (openModalRequest)="onModalOpen($event)">\n                </awg-source-list>\n            </ng-template>\n        </ngb-panel>\n\n        \x3c!-- source description --\x3e\n        <ngb-panel id="awg-source-desc" [title]="titles.sourceDescription">\n            <ng-template ngbPanelContent>\n                <awg-source-description\n                    *ngIf="editionReportData[1]"\n                    [sourceDescriptionListData]="editionReportData[1]"\n                    (openModalRequest)="onModalOpen($event)"\n                    (selectSvgSheetRequest)="onSvgSheetSelect($event)">\n                </awg-source-description>\n            </ng-template>\n        </ngb-panel>\n\n        \x3c!-- source evaluation --\x3e\n        <ngb-panel id="awg-source-evaluation" [title]="titles.sourceEvaluation">\n            <ng-template ngbPanelContent>\n                <awg-source-evaluation\n                    *ngIf="editionReportData[2]"\n                    [editionComplex]="editionComplex"\n                    [sourceEvaluationListData]="editionReportData[2]"\n                    (navigateToReportFragmentRequest)="onReportFragmentNavigate($event)"\n                    (openModalRequest)="onModalOpen($event)"\n                    (selectSvgSheetRequest)="onSvgSheetSelect($event)">\n                </awg-source-evaluation>\n            </ng-template>\n        </ngb-panel>\n\n        \x3c!-- text critics --\x3e\n        <ngb-panel id="awg-tka-panel" [title]="titles.tka">\n            <ng-template ngbPanelContent>\n                <awg-textcritics-list\n                    *ngIf="editionReportData[3]"\n                    [textcriticsData]="editionReportData[3]"\n                    (openModalRequest)="onModalOpen($event)"\n                    (selectSvgSheetRequest)="onSvgSheetSelect($event)">\n                </awg-textcritics-list>\n            </ng-template>\n        </ngb-panel>\n    </ngb-accordion>\n    \x3c!-- END accordion --\x3e\n</div>\n',changeDetection:t.n4l.OnPush,styles:[j()]})],f);const z=[{path:"",component:f,data:{title:"AWG Online Edition \u2013 Report"}}],X=[f];let I=class{};I=(0,o.gn)([(0,t.LVF)({imports:[y.Bz.forChild(z)],exports:[y.Bz]})],I);let D=class{};D=(0,o.gn)([(0,t.LVF)({imports:[s.m,O.K,I],declarations:[_,v,R,S,X]})],D)},8845:(i,a,e)=>{var o=e(135),s=e(479)(o);s.push([i.id,"",""]),i.exports=s.toString()},7183:(i,a,e)=>{var o=e(135),s=e(479)(o);s.push([i.id,"",""]),i.exports=s.toString()},7976:(i,a,e)=>{var o=e(135),s=e(479)(o);s.push([i.id,"",""]),i.exports=s.toString()},3779:(i,a,e)=>{var o=e(135),s=e(479)(o);s.push([i.id,"",""]),i.exports=s.toString()},6241:(i,a,e)=>{var o=e(135),s=e(479)(o);s.push([i.id,"",""]),i.exports=s.toString()}}]);