const config = {
    mongoUri: process.env.MONGO_URI || 'mongodb://localhost/auth-service',
    kafkaHost: process.env.KAFKA_HOST || 'localhost:9092',
    kafkaBroker: process.env.KAFKA_BROKER || '',
    port: process.env.PORT || 5001
}

export default config
