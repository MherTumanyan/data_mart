import { Kafka } from 'kafkajs';
import { saveToPosts } from '../db';

const kafka = new Kafka({
  brokers: ['localhost:9092'],
});
const groupId = process.env.GROUP_ID || 'group-4';
const serviceTopic = process.env.SERVICE_TOPIC || 'data_mart';

const consumer = kafka.consumer({ groupId });

export const consume = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: serviceTopic });
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const finalMessage: ChangedPost = JSON.parse(message.value.toString());
      await saveToPosts(finalMessage);
    },
  });
};

consume().catch((error) => {
  console.error(`Error consuming messages: ${error}`);
});
