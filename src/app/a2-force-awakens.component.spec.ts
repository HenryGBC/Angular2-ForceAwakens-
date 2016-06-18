import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { A2ForceAwakensAppComponent } from '../app/a2-force-awakens.component';

beforeEachProviders(() => [A2ForceAwakensAppComponent]);

describe('App: A2ForceAwakens', () => {
  it('should create the app',
      inject([A2ForceAwakensAppComponent], (app: A2ForceAwakensAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'a2-force-awakens works!\'',
      inject([A2ForceAwakensAppComponent], (app: A2ForceAwakensAppComponent) => {
    expect(app.title).toEqual('a2-force-awakens works!');
  }));
});
