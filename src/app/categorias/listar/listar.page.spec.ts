import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListarPage } from "./ListarPage";

describe('ListarPage', () => {
  let component: ListarPage;
  let fixture: ComponentFixture<ListarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
