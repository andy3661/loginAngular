import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaCreationComponent } from './marca-creation.component';

describe('MarcaCreationComponent', () => {
  let component: MarcaCreationComponent;
  let fixture: ComponentFixture<MarcaCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcaCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcaCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
