import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PromotionListPage } from './promotion-list.page';

describe('PromotionListPage', () => {
  let component: PromotionListPage;
  let fixture: ComponentFixture<PromotionListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PromotionListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
