import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BlogCommentsPage } from './blog-comments.page';

describe('BlogCommentsPage', () => {
  let component: BlogCommentsPage;
  let fixture: ComponentFixture<BlogCommentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogCommentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BlogCommentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
