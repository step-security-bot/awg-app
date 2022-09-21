import { AppConfig } from '@awg-app/app.config';
import { EditionConstants, EditionComplex } from '../models';

/**
 * The EditionComplexes class.
 *
 * It is used in the context of the edition view
 * to store information about the edition complexes.
 */
export class EDITION_COMPLEXES {
    /**
     * An EditionComplex object for M 34.
     */
    static readonly M34: EditionComplex = new EditionComplex(
        {
            title: 'Studienkomposition für Klavier',
            catalogueType: EditionConstants.MNR,
            catalogueNumber: '34',
        },
        {
            editors: [
                {
                    name: 'Michael Matter',
                    homepage: AppConfig.AWG_PROJECT_URL + 'index.php?id=3',
                },
            ],
            lastModified: '07. Juli 2022',
        },
        {
            route: '/m34',
            short: 'M 34',
            full: 'M 34',
        },
        EditionConstants.SERIES_2,
        EditionConstants.SECTION_2A,
        EditionConstants.SKETCH_EDITION
    );

    /**
     * An EditionComplex object for Opus 12.
     */
    static readonly OP12: EditionComplex = new EditionComplex(
        {
            title: 'Vier Lieder',
            catalogueType: EditionConstants.OPUS,
            catalogueNumber: '12',
        },
        {
            editors: [
                {
                    name: 'Thomas Ahrend',
                    homepage: AppConfig.AWG_PROJECT_URL + 'index.php?id=3',
                },
            ],
            lastModified: '01. Juni 2022',
        },
        {
            route: '/op12',
            short: 'Op. 12',
            full: 'Opus 12',
        },
        EditionConstants.SERIES_1,
        EditionConstants.SECTION_5,
        EditionConstants.SKETCH_EDITION
    );

    /**
     * An EditionComplex object for Opus 19.
     */
    static readonly OP19: EditionComplex = new EditionComplex(
        {
            title: 'Zwei Lieder für gemischten Chor und Ensemble',
            catalogueType: EditionConstants.OPUS,
            catalogueNumber: '19',
        },
        {
            editors: [
                {
                    name: 'Thomas Ahrend',
                    homepage: AppConfig.AWG_PROJECT_URL + 'index.php?id=3',
                },
            ],
            lastModified: '23. März 2022',
        },
        {
            route: '/op19',
            short: 'Op. 19',
            full: 'Opus 19',
        },
        EditionConstants.SERIES_1,
        EditionConstants.SECTION_3,
        EditionConstants.SKETCH_EDITION
    );

    /**
     * An EditionComplex object for Opus 23.
     */
    static readonly OP23: EditionComplex = new EditionComplex(
        {
            title: 'Drei Gesänge aus Viae Inviae von Hildegard Jone',
            catalogueType: EditionConstants.OPUS,
            catalogueNumber: '23',
        },
        {
            editors: [
                {
                    name: 'Thomas Ahrend',
                    homepage: AppConfig.AWG_PROJECT_URL + 'index.php?id=3',
                },
            ],
            lastModified: '23. März 2022',
        },
        {
            route: '/op23',
            short: 'Op. 23',
            full: 'Opus 23',
        },
        EditionConstants.SERIES_1,
        EditionConstants.SECTION_5,
        EditionConstants.SKETCH_EDITION
    );

    /**
     * An EditionComplex object for Opus 24.
     */
    static readonly OP24: EditionComplex = new EditionComplex(
        {
            title: 'Konzert für neun Instrumente',
            catalogueType: EditionConstants.OPUS,
            catalogueNumber: '24',
        },
        {
            editors: [
                {
                    name: 'Thomas Ahrend',
                    homepage: AppConfig.AWG_PROJECT_URL + 'index.php?id=3',
                },
            ],
            lastModified: '23. März 2022',
        },
        {
            route: '/op24',
            short: 'Op. 24',
            full: 'Opus 24',
        },
        EditionConstants.SERIES_1,
        EditionConstants.SECTION_1,
        EditionConstants.SKETCH_EDITION
    );

    /**
     * An EditionComplex object for Opus 25.
     */
    static readonly OP25: EditionComplex = new EditionComplex(
        {
            title: 'Drei Lieder nach Gedichten von Hildegard Jone',
            catalogueType: EditionConstants.OPUS,
            catalogueNumber: '25',
        },
        {
            editors: [
                {
                    name: 'Thomas Ahrend',
                    homepage: AppConfig.AWG_PROJECT_URL + 'index.php?id=3',
                },
            ],
            lastModified: '23. Februar 2022',
        },
        {
            route: '/op25',
            short: 'Op. 25',
            full: 'Opus 25',
        },
        EditionConstants.SERIES_1,
        EditionConstants.SECTION_5,
        EditionConstants.SKETCH_EDITION
    );
}