import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindingDemoComponent } from './databinding-demo.component';

describe('DatabindingDemoComponent', () => {
  let component: DatabindingDemoComponent;
  let fixture: ComponentFixture<DatabindingDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatabindingDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabindingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
