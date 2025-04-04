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
    expect(userService.user.name).toEqual(component.user?.name);
  });
});
