import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FolioOverviewComponent } from './folio-overview.component';
import { FolioService } from './folio.service';
import { EditionSvgSheet, FolioConvolute } from '@awg-views/edition-view/models';

describe('FolioComponent', () => {
    let component: FolioOverviewComponent;
    let fixture: ComponentFixture<FolioOverviewComponent>;

    let expectedConvolute: FolioConvolute;
    let expectedSvgSheet: EditionSvgSheet;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [FolioOverviewComponent],
                providers: [FolioService],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(FolioOverviewComponent);
        component = fixture.componentInstance;

        // Test data
        // Mock the inputs supplied by the parent component
        expectedSvgSheet = {
            id: 'Aa:SkI/2',
            svg: 'assets/img/edition/series1/section5/op12/SkI_2n_small_cut_opt.svg',
            image: 'assets/img/edition/series1/section5/op12/SkI_2_small.jpg',
            alt: 'Aa:SkI/2',
        };
        expectedConvolute = {
            convoluteId: 'A Skizzen (Basel, Paul Sacher Stiftung)',
            folios: [
                {
                    folioId: '1r',
                    systems: '16',
                    format: {
                        height: 175,
                        width: 270,
                    },
                    content: [
                        {
                            sigle: 'Aa:SkI/1a',
                            measure: '1–2, [3–6]',
                            sectionPartition: 1,
                            sections: [
                                {
                                    startSystem: 2,
                                    endSystem: 4,
                                },
                            ],
                        },
                    ],
                },
            ],
        };
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('BEFORE initial data binding', () => {
        it('should not have folios input', () => {
            expect(component.selectedConvolute).toBeUndefined('should be undefined');
        });

        it('should not have svg file input', () => {
            expect(component.selectedSvgSheet).toBeUndefined('should be undefined');
        });
    });

    describe('AFTER initial data binding', () => {
        beforeEach(() => {
            // Simulate the parent setting the input properties
            component.selectedConvolute = expectedConvolute;
            component.selectedSvgSheet = expectedSvgSheet;

            // Trigger initial data binding
            fixture.detectChanges();
        });

        it('should have svg file input', () => {
            expect(component.selectedSvgSheet).toBe(expectedSvgSheet);
        });

        it('should have folios input', () => {
            expect(component.selectedConvolute).toBe(expectedConvolute);
        });
    });
});