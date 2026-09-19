"use client";

import { useEffect } from "react";
import { captureSourceFromUrl } from "./acquisitionSource";

/**
 * Persists `?src=` on arrival. Rendered once per page, renders nothing.
 */
export default function SourceCapture() {
	useEffect(captureSourceFromUrl, []);

	return null;
}
