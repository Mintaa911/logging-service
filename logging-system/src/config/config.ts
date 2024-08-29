const config = {
    mongoUri: process.env.MONGO_URI || 'mongodb://localhost/logSystem',
    kafkaHost: process.env.KAFKA_HOST || 'localhost:9092',
    kafkaBroker: process.env.KAFKA_BROKER || '',
    port: process.env.PORT || 5000
    
}

export default config
