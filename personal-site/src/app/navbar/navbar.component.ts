import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(
    changeDectorRef: ChangeDetectorRef, media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
   }

  ngOnDestroy() { }
}
