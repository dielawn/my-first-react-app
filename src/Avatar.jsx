const person = {
    name: "Gregorio Y. Zara",
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
}

export function Avatar() {
    const avatar = "https://i.imgur.com/7vQD0fPs.jpg"
    const desc = "Gregorio Y. Zara"
    const today = new Date()

    function formatDate(date) {
        return new Intl.DateTimeFormat(
            'en-US',
            {weekday: 'long' }
        ).format(date)
    }

    return (     
        <div style={person.theme}>
            <img src={avatar} alt={desc} className="avatar" />
            <h1>{person.name}'s To Do List for {formatDate(today)}</h1>
            <ul>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>       
    )
}