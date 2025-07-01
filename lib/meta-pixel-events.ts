/**
 * Pomocná funkce pro sledování konverzí a událostí pomocí Meta Pixelu
 */

// Typy událostí, které Meta Pixel podporuje
export type MetaPixelEventType =
  | "AddPaymentInfo"
  | "AddToCart"
  | "AddToWishlist"
  | "CompleteRegistration"
  | "Contact"
  | "CustomizeProduct"
  | "Donate"
  | "FindLocation"
  | "InitiateCheckout"
  | "Lead"
  | "Purchase"
  | "Schedule"
  | "Search"
  | "StartTrial"
  | "SubmitApplication"
  | "Subscribe"
  | "ViewContent"
  | string // Pro vlastní události

// Funkce pro sledování standardních událostí
export function trackEvent(eventName: MetaPixelEventType, params?: Record<string, any>) {
  if (typeof window !== "undefined") {
    // Kontrola, zda je fbq definováno
    if (window.fbq) {
      window.fbq("track", eventName, params)
    } else {
      // Pokud fbq ještě není načteno, přidáme událost do fronty
      window.setTimeout(() => {
        if (window.fbq) {
          window.fbq("track", eventName, params)
        } else {
          console.warn("Meta Pixel není načten ani po čekání")
        }
      }, 1000)
    }
  }
}

// Funkce pro sledování vlastních událostí
export function trackCustomEvent(eventName: string, params?: Record<string, any>) {
  if (typeof window !== "undefined") {
    // Kontrola, zda je fbq definováno
    if (window.fbq) {
      window.fbq("trackCustom", eventName, params)
    } else {
      // Pokud fbq ještě není načteno, přidáme událost do fronty
      window.setTimeout(() => {
        if (window.fbq) {
          window.fbq("trackCustom", eventName, params)
        } else {
          console.warn("Meta Pixel není načten ani po čekání")
        }
      }, 1000)
    }
  }
}

// Příklady použití pro konkrétní události
export const pixelEvents = {
  // Sledování dokončení registrace
  trackRegistration: (params?: Record<string, any>) => {
    trackEvent("CompleteRegistration", params)
  },

  // Sledování zahájení platby
  trackInitiateCheckout: (params?: Record<string, any>) => {
    trackEvent("InitiateCheckout", params)
  },

  // Sledování dokončení nákupu
  trackPurchase: (value: number, currency = "CZK", params?: Record<string, any>) => {
    trackEvent("Purchase", {
      value,
      currency,
      ...params,
    })
  },

  // Sledování získání leadu
  trackLead: (params?: Record<string, any>) => {
    trackEvent("Lead", params)
  },

  // Sledování zobrazení obsahu
  trackViewContent: (contentId: string, contentType: string, params?: Record<string, any>) => {
    trackEvent("ViewContent", {
      content_ids: [contentId],
      content_type: contentType,
      ...params,
    })
  },
}
