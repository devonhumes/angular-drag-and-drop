import { SampleCriteriaModule } from './sample-criteria.module';

describe('SampleCriteriaModule', () => {
  let sampleCriteriaModule: SampleCriteriaModule;

  beforeEach(() => {
    sampleCriteriaModule = new SampleCriteriaModule();
  });

  it('should create an instance', () => {
    expect(sampleCriteriaModule).toBeTruthy();
  });
});
