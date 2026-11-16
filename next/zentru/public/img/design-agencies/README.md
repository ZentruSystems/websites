# Development integrated Design images

Referenced from `app/[locale]/design-agencies/config.ts` and shown in the case studies' carousel.

| File | Where | Notes |
|---|---|---|
| `crm-funnel.png` | The CRM case | A screenshot of the platform's funnel visualization, on a transparent background and padded to the carousel's 16:10. |
| `crm-funnel-dark.png` | The CRM case, in dark mode | Derived from the light one, not a second screenshot. See below. |
| `finance-forecast.png` | The finance case | A screenshot of the forecasting interface. Its own UI is dark, so it is shown as is in both themes. Widened from 10:7 to 16:10 by repeating its outermost columns – the plain background, and the blue band that runs off the right edge – so the carousel shows all of it uncropped. |

## How the dark version was made

Each pixel was separated from the white it was drawn on into a colour and an opacity, so both
versions have a transparent background and sit on whichever surface the theme gives them. Then:

- The four upper bands, with their numbers, stay exactly as drawn – dark digits on cyan read on any
  background.
- Greys – the labels, percentages, separator lines and the tooltip text – have their lightness
  flipped: dark text becomes light, colours keep their hue.
- The "9" and "2", which sit across the narrow bands and the background, are flipped too, but only
  where they are darker than the band behind them, so the band's own edge stays teal.
- The tooltip is a solid box in both: white in light, `#262626` in dark, its shadow kept dark.

A new screenshot needs the same treatment; the band and tooltip positions are specific to this one.
