import { CriteriaListModule } from './criteria-list.module';

describe('CriteriaListModule', () => {
  let criteriaListModule: CriteriaListModule;

  beforeEach(() => {
    criteriaListModule = new CriteriaListModule();
  });

  it('should create an instance', () => {
    expect(criteriaListModule).toBeTruthy();
  });
});
