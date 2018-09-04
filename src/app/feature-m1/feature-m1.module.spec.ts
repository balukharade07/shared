import { FeatureM1Module } from './feature-m1.module';

describe('FeatureM1Module', () => {
  let featureM1Module: FeatureM1Module;

  beforeEach(() => {
    featureM1Module = new FeatureM1Module();
  });

  it('should create an instance', () => {
    expect(featureM1Module).toBeTruthy();
  });
});
