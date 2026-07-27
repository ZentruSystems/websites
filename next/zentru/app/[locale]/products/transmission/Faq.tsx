import copy from "./copy";
import style from "./transmission.module.css";

export default function Faq() {
	return <>
		{copy.faq.items.map(item => <details key={item.question} className={style.faqItem}>
			<summary className={style.faqQuestion}>{item.question}</summary>
			<p className={style.faqAnswer}>{item.answer}</p>
		</details>)}
	</>;
}
