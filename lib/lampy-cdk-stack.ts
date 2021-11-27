import * as cdk from '@aws-cdk/core'
// import * as sqs from '@aws-cdk/aws-sqs';

export class LampyCdkStack extends cdk.Stack {
  // eslint-disable-next-line no-useless-constructor
  constructor (scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'LampyCdkQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
