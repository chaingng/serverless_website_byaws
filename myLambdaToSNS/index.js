console.log('Loading function');

var AWS = require('aws-sdk');

var sns = new AWS.SNS({
    accessKeyId: 'myid',
    secretAccessKey: 'mykey',
    region: 'us-west-2'
});
 
exports.handler = function(event, context){
    console.log('called function');
    var mymessage = 'HPから以下のお問い合わせがありました。\n\n■メールアドレス：' + event.email +'\n\n■問い合わせ内容：\n' + event.message +'\n\n\n\n\n\n\n\n\n'

    sns.publish({
	Message: mymessage,
	Subject: '【HPからの問い合わせ】'+event.subject,
	TopicArn: 'arn:aws:sns:us-west-2:830908922734:MyTopic'
    }, function(err, data){
	if(err) throw err;
	else context.succeed('success!');
    });
}
