import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenDreamTreeComponent } from './green-dream-tree.component';

describe('GreenDreamTreeComponent', () => {
  let component: GreenDreamTreeComponent;
  let fixture: ComponentFixture<GreenDreamTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenDreamTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenDreamTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
