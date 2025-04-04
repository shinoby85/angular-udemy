import {TestBed} from '@angular/core/testing';

import {UserComponent} from './user.component';
import {UserService} from './user.service';

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
});
