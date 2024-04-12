import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartscreenLoginComponent } from './startscreen-login.component';

describe('StartscreenLoginComponent', () => {
  let component: StartscreenLoginComponent;
  let fixture: ComponentFixture<StartscreenLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartscreenLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StartscreenLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
