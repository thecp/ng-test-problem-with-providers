import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AlertService } from './alert.service';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatSnackBarModule, NoopAnimationsModule],
      providers: [AlertService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('succeeding test', () => {
    // why does this work?
    const alertService = fixture.debugElement.injector.get(AlertService);

    const alertSpy = spyOn(alertService, 'alert').and.stub();

    component.doSomething();
    expect(alertSpy).toHaveBeenCalled();
  });

  it('failing test', () => {
    // why doesn't this work?
    const alertService = TestBed.inject(AlertService);

    const alertSpy = spyOn(alertService, 'alert').and.stub();

    component.doSomething();
    expect(alertSpy).toHaveBeenCalled();
  });
});
