import { FeatureS1Module } from './feature-s1.module';

describe('FeatureS1Module', () => {
  let featureS1Module: FeatureS1Module;

  beforeEach(() => {
    featureS1Module = new FeatureS1Module();
  });

  it('should create an instance', () => {
    expect(featureS1Module).toBeTruthy();
  });
});
