import * as amqp from 'amqplib/callback_api';

export class RabbitMQService {
  private readonly QUEUE_NAME = 'api_logs';

  async logRequest(request: any) {
    const connection = await new Promise<amqp.Connection>((resolve, reject) => {
      amqp.connect('amqp://localhost', (err, connection) => {
        if (err) reject(err);
        resolve(connection);
      });
    });

    const channel = await connection.createChannel();
    await channel.assertQueue(this.QUEUE_NAME, { durable: false });

    const logData = JSON.stringify({
      timestamp: new Date().toISOString(),
      method: request.method,
      url: request.url,
      body: request.body,
    });

    channel.sendToQueue(this.QUEUE_NAME, Buffer.from(logData));

    setTimeout(() => {
      connection.close();
    }, 500);
  }
}
