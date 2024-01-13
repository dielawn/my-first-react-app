import { poem } from "./data";

export function Poem() {
    let output = []
   const title = <h1 key={poem.title}>{poem.title}</h1>
    poem.lines.forEach((line, i) => {
        output.push(
            <hr key={i + '-separator'} />
        )
        output.push(
            <p key={i + '-text'}>{line}</p>
        )
    })
    output.push(
        <p key={poem.author}>-{poem.author}</p>
    )
    //remove the first <hr />
    output.shift()

    return (
        <article>
            {title}
            {output}
        </article>
    )
}