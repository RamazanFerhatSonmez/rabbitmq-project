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
   
    //Mesajın alınması

    channel.consume("jobsQueue", message => {
        console.log("Message=>> ",message.content.toString())

    })

} catch (error) {
    console.log(error)
}




} 