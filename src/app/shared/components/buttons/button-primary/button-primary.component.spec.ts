import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPrimaryComponent } from './button-primary.component';
import { MatButtonModule } from '@angular/material/button';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslocoRootModule } from 'src/app/transloco-root.module';

describe('ButtonPrimaryComponent', () => {
  let component: ButtonPrimaryComponent;
  let fixture: ComponentFixture<ButtonPrimaryComponent>;
  let button: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonPrimaryComponent ],
      imports: [
        MatButtonModule,
        HttpClientTestingModule,
        TranslocoRootModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonPrimaryComponent);
    component = fixture.componentInstance;
    button = fixture.debugElement.query(By.
      css('#flat'));
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

  it('triggerea el evento de click si esta habilitado', () => {
    spyOn(component.btnClick, 'emit');
    button.nativeElement.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    expect(component.btnClick.emit).toHaveBeenCalled();
  });
});
