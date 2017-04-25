export default class EUFuckingLaw {
  constructor ({ onCookiesAccepted, onCookiesRejected, onCookiesRevoked }) {
    this.onCookiesAccepted = onCookiesAccepted
    this.onCookiesRejected = onCookiesRejected
    this.onCookiesRevoked = onCookiesRevoked

    this.parent = null // The container for the cookie bars
    this.cookieAcceptBar = null // The cookiebar with the info text and got it / decline buttons
    this.cookieRevokeBar = null // The cookie bar with the reject button after the cookie has been accepted

    this.accepted = false // Whether cookies are accepted or not
  }

  init (parentSelector) {
    this.parent = document.getElementById(parentSelector)

    this.cookieAcceptBar = document.createElement('div')
    this.cookieAcceptBar.className = 'eufuckingcookie-acceptbar'

    const infoTextElement = document.createElement('p')
    infoTextElement.innerText = `Diese Seite verwendet Cookies. NAch EU-Richtlinien sind wir verpflichtet, Ihnen dies mitzuteilen und Ihnen die Möglichkeit zu gewähren,
      Cookies für diese Seite zu deaktivieren. Bitte beachten Sie jedoch, dass mit der Ablehnung der Cookies der Funktionsumfang der Seite
      unter Umständen eingeschränkt wird.
    `
    this.cookieAcceptBar.appendChild(infoTextElement)

    const rejectButton = document.createElement('button')
    rejectButton.className = 'eufuckingcookie-declinebutton'
    rejectButton.onclick = this.rejectCookies
    rejectButton.innerText = 'Decline'
    this.cookieAcceptBar.appendChild(rejectButton)

    const acceptButton = document.createElement('button')
    acceptButton.className = 'eufuckingcookie-acceptbutton'
    acceptButton.onclick = this.acceptCookies
    acceptButton.innerText = 'Accept'
    this.cookieAcceptBar.appendChild(acceptButton)

    this.parent.appendChild(this.cookieAcceptBar)
  }

  rejectCookies = () => {
    this.accepted = true
    this.onCookiesRejected()
  }

  acceptCookies = () => {
    this.accepted = false
    this.onCookiesAccepted()
  }
}

window.EUFuckingLaw = EUFuckingLaw
