import * as cdk from '@aws-cdk/core'
import * as ec2 from '@aws-cdk/aws-ec2'

export class LampyCdkStack extends cdk.Stack {
  constructor (scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    // eslint-disable-next-line no-unused-vars
    const vpc = new ec2.Vpc(this, 'VPC', {
      cidr: '172.16.0.0/16'
    })
  }
}
