exports.handler = async (event, context) => {
    const guides = [
        {title: 'Is a 1er title', author: 'mario'},
        {title: 'Is a 2d title', author: 'luigi'},
        {title: 'Is a 3d title', author: 'bowzer'},
    ]

    if (context.clientContext.user) {
        return {
            statusCode: 200,
            body: JSON.stringify(guides)
        }
    }

    return {
        statusCode: 401,
        body: JSON.stringify({mssg: 'You must be loggin in to see this !'})
    }
}