import { useState } from "react"

const ArticleForm = () => {
    const [state, setState] = useState(null) // zur darstellung ob das senden geklappt hat oder ob es einen Fehler gab

    // methode um einen neuen artikel ins backend zu senden
    // frontend erzeugt ein request
    const submit = (e) => {
        e.preventDefault() // wir wollen nicht das die seite neu geladen wird -> das macht ein form per default

        // erzeugen eines FormData objects
        const form = new FormData(e.target)

        fetch('http://localhost:9999/api/posts', {
            method: "POST",
            body: form
        })
            .then(response => {
                if (response.status === 200) setState('OK')
                else setState('NOK')
            })


    }

    const checkState = () => {
        if (state) {
            if (state === 'OK')
                return <div className="bg-green-500 rounded-lg text-white">Alles gut</div>
            else if (state === 'NOK')
                return <div className="bg-red-500 rounded-lg text-white">Alles kaputt</div>
        }
    }

    const removeContent = () => {
        fetch('http://localhost:9999/api/posts', {
            method: "DELETE",
        })
    }
    return (
        <>
            {checkState()}
            <form onSubmit={submit}>
                <input name="title" type="text" placeholder="Title" />
                <input name="text" type="text" placeholder="Schreib eine Geschichte" />
                <input name="postpic" type="file" />
                <input type="submit" value="Senden" />
            </form>
            <button onClick={removeContent}>Lösche ALLES</button>
        </>

    )
}

export default ArticleForm