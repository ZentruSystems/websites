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

	// for better performance:
	// https://stackoverflow.com/questions/71313889/how-can-i-present-a-different-next-image-based-on-the-users-preferred-color-sch

	return <img src={prefersLight ? lightsrc : darksrc} {...imgProps} />
}