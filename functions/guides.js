exports.handler = async (event, context) => {
    const guides = [
        { title: 'Le Lorem Ipsum est simplement du faux texte employé dans la composi', author: 'mario'},
        { title: 'ge avant impression. Le Lorem Ipsum est le faux texte standard deLe', author: 'luigi'},
        { title: 'Le LLe Lorem Ipsum est simplement du faux texte employé dans la co', author: 'bowzer'}
    ]

    //return
    return {
        statusCode: 200,
        body: JSON.stringify(guides)
    }
}