import mongoose  from 'mongoose';

const Connection = async (username = 'username', password = 'iamamit') => {
    const URL = `mongodb://${username}:${password}@ac-cqvdeyg-shard-00-00.6jcbtgf.mongodb.net:27017,ac-cqvdeyg-shard-00-01.6jcbtgf.mongodb.net:27017,ac-cqvdeyg-shard-00-02.6jcbtgf.mongodb.net:27017/PROJECT 0?ssl=true&replicaSet=atlas-uzwcz2-shard-0&authSource=admin&retryWrites=true&w=majority&appName=docsdata`;

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {   
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;