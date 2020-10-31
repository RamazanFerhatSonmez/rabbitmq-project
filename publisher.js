const amqp = require("amqplib")

const message = {
    description : "Bu bir test mesajıdır."
}
connect_rabbitmq()
async function connect_rabbitmq() {
try {
    const connection = await amqp.connect("amqp://localhost:5672")
    const channel = await connection.createChannel()//Rabbitmq mesajlaşmak için kanallar oluşturuyoruz.Kanal ürettik.
    const assertion = await channel.assertQueue("jobsQueue") // Oluşturulan channel hangi işe ait olduğunu belirttik.
    channel.sendToQueue("jobsQueue",Buffer.from(JSON.stringify(message))) //Kanaldaki queue bu bilgiyi gönderilen kısım.
    
    console.log("Gönderilen Mesaj ==>",message);
} catch (error) {
    console.log(error)
}




} 