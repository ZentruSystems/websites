import style from "./Spinner.module.css";

export default function Spinner(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
	return <div className={style.Spinner} {...props}/>
}