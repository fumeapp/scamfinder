import { defineNuxtRouteMiddleware, useRequestHeaders } from '#app'

export default defineNuxtRouteMiddleware(async () => {
  const runtimePublic = useRuntimeConfig().public
  const headers = useRequestHeaders()
  const userAgent = headers['user-agent']
  const ipAddress = headers['x-forwarded-for'] || headers['x-real-ip'] || 'N/A'
  const referrer = headers.referer || headers.referrer || 'N/A'
  const acceptLanguage = headers['accept-language'] || 'N/A'

  if (import.meta.server) {
    try {
      const payload = {
        content: `
**User Agent:** ${userAgent}
**IP Address:** ${ipAddress}
**Referrer:** ${referrer}
**Accept-Language:** ${acceptLanguage}
`.trim() // Trim any unintended whitespace
      }

      await fetch(runtimePublic.hook, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload) // Discord webhook payload
      })
    } catch (error) {
      console.error('Failed to send user data to webhook:', error)
    }
  }
})