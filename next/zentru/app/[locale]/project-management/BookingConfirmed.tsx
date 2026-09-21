"use client";

import { trackEvent } from "@/lib/analytics";
import { useEffect } from "react";

const STORAGE_KEY = "projectBootstrap.bookingConfirmed";

/**
 * Reports `booking_confirmed` when Cal.com sends someone here after booking. Renders nothing.
 *
 * Once per browser session, so a reload of this page doesn't count as a second booking. Nothing
 * is read from the URL: if Cal.com is set to forward the booker's details, they stay out of the event.
 */
export default function BookingConfirmed() {
	useEffect(() => {
		try {
			if (window.sessionStorage.getItem(STORAGE_KEY) != null) return;
			window.sessionStorage.setItem(STORAGE_KEY, "1");
		} catch {
			// Storage blocked: a reload may count twice, which beats not counting at all
		}
		trackEvent("booking_confirmed", {});
	}, []);

	return null;
}
