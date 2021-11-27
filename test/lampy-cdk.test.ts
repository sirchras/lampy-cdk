// eslint-env jest
import { Template } from '@aws-cdk/assertions'
import * as cdk from '@aws-cdk/core'
import * as LampyCdk from '../lib/lampy-cdk-stack'

// example test. To run these tests, uncomment this file along with the
// example resource in lib/lampy-cdk-stack.ts
test('VPC Created', () => {
  const app = new cdk.App()
  // WHEN
  const stack = new LampyCdk.LampyCdkStack(app, 'MyTestStack')
  // THEN
  const template = Template.fromStack(stack)

  template.hasResourceProperties('AWS::EC2::VPC', {
    CidrBlock: '172.16.0.0/16'
  })
})
