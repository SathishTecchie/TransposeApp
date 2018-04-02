import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [FormsModule]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  }));
  
  // it is used to reverse the input data for single row
  it('validataing reverseTheText method', () => {
    component.inputString = "DBS";
    component.reverseTheText();
    expect(component.inputString).toBeDefined();
    expect(component.outPutString).toEqual('SBD');
  });

  // it is used to reverse the input data for multiple rows
  it('validataing reverseTheText method for multiple lines', () => {
    component.inputString = "DBS\nDapeng";
    component.reverseTheText();
    expect(component.inputString).toBeDefined();
    expect(component.outPutString).toEqual('gnepaD\n\nSBD');
  });
});
