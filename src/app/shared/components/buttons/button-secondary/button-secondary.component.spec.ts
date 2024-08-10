import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSecondaryComponent } from './button-secondary.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslocoRootModule } from 'src/app/transloco-root.module';

describe('ButtonSecondaryComponent', () => {
  let component: ButtonSecondaryComponent;
  let fixture: ComponentFixture<ButtonSecondaryComponent>;
  let button: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonSecondaryComponent ],
      imports: [
        HttpClientTestingModule,
        TranslocoRootModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    button = fixture.debugElement.query(By.
      css('#stroke'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe estar deshabilitado si isDisabled es true', () => {
    component.isDisabled = true;
    fixture.detectChanges();
    expect(button.nativeElement.disabled).toBe(true)
  })

  it('debe estar habilitado si isDisabled es false', () => {
    component.isDisabled = false;
    fixture.detectChanges();
    expect(button.nativeElement.disabled).toBe(false)
  })

  it('triggerea el evento click si esta habilitado', () => {
    fixture.detectChanges();
    spyOn(component.btnClick, 'emit');

    button.nativeElement.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(component.btnClick.emit).toHaveBeenCalled();

  });
});
