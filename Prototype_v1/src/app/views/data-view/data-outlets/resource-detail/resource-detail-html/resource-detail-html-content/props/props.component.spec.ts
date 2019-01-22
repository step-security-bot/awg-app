import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceDetailHtmlContentPropsComponent } from './props.component';
import { CompileHtmlComponent } from '@awg-shared/compile-html';

describe('ResourceDetailHtmlContentPropsComponent', () => {
    let component: ResourceDetailHtmlContentPropsComponent;
    let fixture: ComponentFixture<ResourceDetailHtmlContentPropsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ResourceDetailHtmlContentPropsComponent, CompileHtmlComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ResourceDetailHtmlContentPropsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});