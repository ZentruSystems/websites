"use client";

import useTheme from "./useTheme";

export type ThemedImgPropsType = {
	lightsrc: string;
	darksrc: string;
} & Exclude<React.ImgHTMLAttributes<HTMLImageElement>, { src: string }>;

export default function ThemedImg(props: ThemedImgPropsType) {
	const { prefersLight } = useTheme();

	const { lightsrc, darksrc } = props;

	const imgProps = { ...props, lightsrc: undefined, darksrc: undefined };

	return <img src={prefersLight ? lightsrc : darksrc} {...imgProps} />
}