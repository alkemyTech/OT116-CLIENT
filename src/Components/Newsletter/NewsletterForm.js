import React from 'react'
import '../../Styles/NewsletterForm.css'

const SetTokenNewsLetter = () =>{
    localStorage.setItem("tokenNL","settokenNL")
}
    function NewsletterForm() {
    return (
            <form  onSubmit={SetTokenNewsLetter} className="GreyRoundedContainerForm">
                <h4>Subscribite a nuestras actualizaciones!</h4>
                <input
                type="email"
                required
                className="InputEmailNL"
                placeholder="Email"
                ></input>
                <button className="StandardButton">Enviar</button>
                <p>No te preocupes, no te enviaremos spam</p>
            </form>
    )
}
export default NewsletterForm
