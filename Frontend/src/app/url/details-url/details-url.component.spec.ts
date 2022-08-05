import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsUrlComponent } from './details-url.component';

describe('DetailsUrlComponent', () => {
  let component: DetailsUrlComponent;
  let fixture: ComponentFixture<DetailsUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsUrlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
