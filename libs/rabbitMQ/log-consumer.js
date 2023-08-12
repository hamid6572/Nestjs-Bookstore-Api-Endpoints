const amqp = require('amqplib/callback_api');
const fs = require('fs');

const QUEUE_NAME = 'api_logs';
const LOG_FILE_PATH = 'rabbitmq_logs.txt';

amqp.connect('amqp://localhost', (err, connection) => {
  if (err) {
    console.error('Error connecting to RabbitMQ:', err);
    return;
  }

  connection.createChannel((err, channel) => {
    if (err) {
      console.error('Error creating RabbitMQ channel:', err);
      return;
    }

    channel.assertQueue(QUEUE_NAME, { durable: false });
    console.log('Consumer waiting for logs...');

    channel.consume(
      QUEUE_NAME,
      (msg) => {
        const logData = msg.content.toString();
        console.log('Received log:', logData);

        fs.appendFile(LOG_FILE_PATH, logData + '\n', (err) => {
          if (err) {
            console.error('Error writing log to file:', err);
          }
        });
      },
      { noAck: true },
    );
  });
});
