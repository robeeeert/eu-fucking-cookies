export default class EUFuckingLaw {
  constructor ({ parent: parentSelector, onCookiesAccepted, onCookiesRejected, onCookiesRevoked, style }) {
    this.onCookiesAccepted = onCookiesAccepted
    this.onCookiesRejected = onCookiesRejected
    this.onCookiesRevoked = onCookiesRevoked

    this.cookieAcceptBar = null // The cookiebar with the info text and got it / decline buttons
    this.cookieRevokeBar = null // The cookie bar with the reject button after the cookie has been accepted

    this.init(parentSelector)
  }

  init = parentSelector => {
    if (!this.isCookieAccepted()) {
      this.showAcceptCookieBar()
    }
  }

  showAcceptCookieBar = parentSelector => {
    const parent = document.getElementById(parentSelector) || document.body

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

    parent.appendChild(this.cookieAcceptBar)
  }

  rejectCookies = () => {
    this.revokeCookies()
    this.onCookiesRejected && this.onCookiesRejected()
    this.hide()
  }

  acceptCookies = () => {
    this.setCookie()
    this.onCookiesAccepted && this.onCookiesAccepted()
    this.hide()
  }

  revokeCookies = () => {
    this.unsetCookie()
    this.onCookiesRevoked && this.onCookiesRevoked()
  }

  hide = () => {
    this.cookieAcceptBar.className += ' eufuckingcookie-acceptbar-hidden'
  }

  isCookieAccepted = () => {
    return /eufuckingcookies=allow/.test(document.cookie)
  }

  setCookie = () => {
    document.cookie = `eufuckingcookies=allow; expires=${new Date() + 30 * 7 * 24 * 60 * 60 * 1000}`
  }

  unsetCookie = () => {
    document.cookie += `; expires=${new Date() - 60 * 1000}`
  }
}

window.EUFuckingLaw = EUFuckingLaw
