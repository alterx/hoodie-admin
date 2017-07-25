module.exports.register = register
module.exports.register.attributes = {
  name: 'helloapp'
}

async function register (server, options, next) {
    try {
        await server.plugins.store.api.create('mydbname', {access: 'read'})
    } catch(e) {
        console.log('Store already exists.')
    }
    
    server.route({
        method: 'GET',
        path: '/api',
        handler: function (request, reply) {
            reply('Hello, world!')
        }
    })

    next()
}