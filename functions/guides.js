exports.handler = async (event, context) => {
    const guides = [
        {title: 'Le Lorem Ipsum est simplement du faux texte employé dans la composi', author: 'mario'},
        {title: 'ge avant impression. Le Lorem Ipsum est le faux texte standard deLe', author: 'luigi'},
        {title: 'Le LLe Lorem Ipsum est simplement du faux texte employé dans la co', author: 'bowzer'},
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