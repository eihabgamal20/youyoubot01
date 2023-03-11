module.exports = async (client) => {
    
    require(`${process.cwd()}/modules/AntiLink`)(client);
    require(`${process.cwd()}/modules/antiDiscord`)(client);
    require(`${process.cwd()}/modules/autoDelete`)(client);
    require(`${process.cwd()}/modules/leveling`)(client);
    require(`${process.cwd()}/modules/autoNick`)(client);
    require(`${process.cwd()}/modules/autoRole`)(client);

    console.log(`Loaded Modules`.brightGreen);
}