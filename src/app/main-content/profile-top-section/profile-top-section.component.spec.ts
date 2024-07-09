import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTopSectionComponent } from './profile-top-section.component';

describe('ProfileTopSectionComponent', () => {
  let component: ProfileTopSectionComponent;
  let fixture: ComponentFixture<ProfileTopSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileTopSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileTopSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
