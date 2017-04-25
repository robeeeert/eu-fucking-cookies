export default class EUFuckingLaw {
  constructor ({
      parent: parentSelector,
      onCookiesAccepted,
      onCookiesRejected,
      onCookiesRevoked,
      allowReject = true,
      allowRevoke = false,
      acceptText = `This site uses cookies. Due to EU laws we have to inform you about this.`,
      revokeText = `According to EU laws we grant to you the possibility of revoking your agreement on cookie usage on this site.`
  }) {
    this.onCookiesAccepted = onCookiesAccepted
    this.onCookiesRejected = onCookiesRejected
    this.onCookiesRevoked = onCookiesRevoked

    this.allowRevoke = allowRevoke
    this.allowReject = allowReject
    this.acceptText = acceptText
    this.revokeText = revokeText
    this.cookieAcceptBar = null // The cookiebar with the info text and got it / decline buttons
    this.cookieRevokeBar = null // The cookie bar with the reject button after the cookie has been accepted

    this.init(parentSelector)
  }

  init = parentSelector => {
    if (!this.isCookieAccepted()) {
      this.showAcceptCookieBar(parent)
    } else if (this.allowRevoke) {
      this.showRevokeBar(parent)
    }
  }

  showRevokeBar = parentSelector => {
    if (this.cookieRevokeBar) {
      this.cookieRevokeBar.className = this.cookieRevokeBar.className.replace(/eufuckingcookie-revokebar-hidden/g, '')
    } else {
      const parent = document.getElementById(parentSelector) || document.body

      this.cookieRevokeBar = document.createElement('div')
      this.cookieRevokeBar.className = 'eufuckingcookie-revokebar'

      const infoTextElement = document.createElement('p')
      infoTextElement.innerText = this.revokeText
      this.cookieRevokeBar.appendChild(infoTextElement)

      const revokeButton = document.createElement('button')
      revokeButton.className = 'eufuckingcookie-revokebutton'
      revokeButton.innerText = 'Revoke'
      revokeButton.onclick = this.revokeCookies
      this.cookieRevokeBar.appendChild(revokeButton)

      parent.appendChild(this.cookieRevokeBar)
    }
  }

  showAcceptCookieBar = parentSelector => {
    if (this.cookieAcceptBar) {
      this.cookieAcceptBar.className = this.cookieAcceptBar.className.replace(/eufuckingcookie-acceptbar-hidden/g, '')
    } else {
      const parent = document.getElementById(parentSelector) || document.body

      this.cookieAcceptBar = document.createElement('div')
      this.cookieAcceptBar.className = 'eufuckingcookie-acceptbar'

      const infoTextElement = document.createElement('p')
      infoTextElement.innerText = this.acceptText
      this.cookieAcceptBar.appendChild(infoTextElement)

      if (this.allowReject) {
        const rejectButton = document.createElement('button')
        rejectButton.className = 'eufuckingcookie-declinebutton'
        rejectButton.onclick = this.rejectCookies
        rejectButton.innerText = 'Decline'
        this.cookieAcceptBar.appendChild(rejectButton)
      }

      const acceptButton = document.createElement('button')
      acceptButton.className = 'eufuckingcookie-acceptbutton'
      acceptButton.onclick = this.acceptCookies
      acceptButton.innerText = 'Got it'
      this.cookieAcceptBar.appendChild(acceptButton)

      parent.appendChild(this.cookieAcceptBar)
    }
  }

  rejectCookies = () => {
    this.unsetCookie()
    this.onCookiesRejected && this.onCookiesRejected()
    this.hideAcceptBar()
  }

  acceptCookies = () => {
    this.setCookie()
    this.onCookiesAccepted && this.onCookiesAccepted()
    this.hideAcceptBar()
    this.allowRevoke && this.showRevokeBar()
  }

  revokeCookies = () => {
    this.unsetCookie()
    this.onCookiesRevoked && this.onCookiesRevoked()
    this.hideRevokeBar()
  }

  hideRevokeBar = () => {
    this.cookieRevokeBar.className += ' eufuckingcookie-revokebar-hidden'
  }

  hideAcceptBar = () => {
    this.cookieAcceptBar.className += ' eufuckingcookie-acceptbar-hidden'
  }

  isCookieAccepted = () => {
    return /eufuckingcookies=allow/.test(document.cookie)
  }

  setCookie = () => {
    document.cookie = `eufuckingcookies=allow; expires=${new Date() + 30 * 7 * 24 * 60 * 60 * 1000}`
  }

  unsetCookie = () => {
    document.cookie += `eufuckingcookies=deny; expires=Thu, 01 Jan 1970 00:00:00 UTC`
  }
}

window.EUFuckingLaw = EUFuckingLaw
