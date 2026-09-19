import style from "./blocks.module.css";

export type FaqItem = { key: string, question: string, answer: string };

/**
 * Questions that open in place – `<details>`, so they work without JavaScript and from the keyboard.
 *
 * Answers are plain strings so the same text can go into the page's FAQPage structured data.
 */
export default function Faq(props: { items: FaqItem[] }) {
	return <div>
		{props.items.map(item => <details key={item.key} className={style.faqItem}>
			<summary className={style.faqQuestion}>{item.question}</summary>
			<p className={style.faqAnswer}>{item.answer}</p>
		</details>)}
	</div>;
}
