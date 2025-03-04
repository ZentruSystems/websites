"use client";

import useTheme from "./useTheme";

export default function ThemedImg(props: {
	lightSrc: string,
	darkSrc: string
} & Exclude<React.ImgHTMLAttributes<HTMLImageElement>, { src: string }>) {
	const { prefersLight } = useTheme();

	const { lightSrc, darkSrc } = props;

	return <img src={prefersLight ? lightSrc : darkSrc} {...props} />
}