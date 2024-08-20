const ListOfLovedTechTools = () => {
    return(
        <>
        <h1>List of Tech tools I like</h1>
        <ul>
            <ol>
                <li>Git and Github</li>
                <li>Tailwind</li>
                <li>Code Editors</li>
                <li>Google</li>
                <li>Chat gpt</li>
                <li>Stackoverflow</li>
                <li>W3schools</li>
            </ol>
        </ul>
        </>
    )
}

const ListOfHatedTechThings = () => {
    return (
        <>
                <h1>List of Tech tools I do not like</h1>
                <ul>
            <ol>
                <li>Bugs</li>
                <li>Errors</li>
                <li>Code Editors not working</li>
                <li>Google is down</li>
                <li>Chat gpt is down</li>
                <li>Stackoverflow is deleted</li>
                <li>W3schools is now premium</li>
            </ol>
        </ul>
        </>
    )
}

const ToDisplay = (props) => {
    // eslint-disable-next-line react/prop-types
    const Display = props.Display;
    if (Display) {
      return  <ListOfLovedTechTools/>
    }
    return  <ListOfHatedTechThings/>   
}

export const IsStatement = () => {
    return (
        <div className="text-center mt-10">
       <ToDisplay Display={false}/>

        </div>
    )
}

