import { Component, OnInit } from '@angular/core';

import {
    faCaretDown,
    faFileAlt,
    faEnvelope,
    faHome,
    faNetworkWired,
    faSearch
} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'awg-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    isCollapsed = true;

    // fontawesome icons
    faCaretDown = faCaretDown;
    faEnvelope = faEnvelope;
    faFileAlt = faFileAlt;
    faHome = faHome;
    faNetworkWired = faNetworkWired;
    faSearch = faSearch;

    constructor() {}

    ngOnInit() {}

    toggleNav(): boolean {
        return (this.isCollapsed = !this.isCollapsed);
    }
}