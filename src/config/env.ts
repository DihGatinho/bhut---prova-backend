export const env = {
  port: process.env.PORT || 3000,
  externalApi: process.env.EXTERNAL_API!,
  apiUser: process.env.API_USER!,
  apiPassword: process.env.API_PASSWORD!,
  mongoUri: process.env.MONGO_URI!,
  rabbitUrl: process.env.RABBITMQ_URL!,
  webhookUrl: process.env.WEBHOOK_URL!
};