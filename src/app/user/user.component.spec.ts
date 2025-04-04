import {fakeAsync, TestBed, tick, waitForAsync} from '@angular/core/testing';

import {UserComponent} from './user.component';
import {UserService} from './user.service';
import {DataService} from '../shared/data.service';

describe('UserComponent', () => {
  // let component: UserComponent;
  // let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserComponent]
    })
      .compileComponents();

    // fixture = TestBed.createComponent(UserComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
  it('should use the username from the service', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let component = fixture.debugElement.componentInstance;
    let userService = fixture.debugElement.injector.get(UserService);
    fixture.detectChanges();
    expect(userService.user.name).toEqual(component.user.name);
  });
  it('should display the user name if user is logged in', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let component = fixture.debugElement.componentInstance;
    component.isLoggedIn = true;
    fixture.detectChanges();
    let complete = fixture.debugElement.nativeElement;
    expect(complete.querySelector('p').textContent).toContain(component.user.name);
  });
  it('shouldn\'t display the user name if user is not logged in', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let component = fixture.debugElement.componentInstance;
    component.isLoggedIn = false;
    fixture.detectChanges();
    let complete = fixture.debugElement.nativeElement;
    expect(complete.querySelector('p').textContent).not.toContain(component.user.name);
  });
  it('shouldn\'t fetch data successfully if not called asynchronously', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let component = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, 'getDetails')
      .and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    expect(component.data).toBe(undefined);
  });
  it('should fetch data successfully if called asynchronously', waitForAsync(() => {
    let fixture = TestBed.createComponent(UserComponent);
    let component = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, 'getDetails')
      .and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.data).toBe('Data');
    });
  }));
  it('should fetch data successfully if called asynchronously with tick', fakeAsync(() => {
    let fixture = TestBed.createComponent(UserComponent);
    let component = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, 'getDetails')
      .and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    tick(1500);
    expect(component.data).toBe('Data');

  }));
});
