"use client";

import useTheme from "./useTheme";

type AdditionalProps = {
	lightSrc: string;
	darkSrc: string;
}

export type ThemedImgPropsType = AdditionalProps & Exclude<React.ImgHTMLAttributes<HTMLImageElement>, { src: string }>;

export default function ThemedImg(props: ThemedImgPropsType) {
	const { prefersLight } = useTheme();

	const { lightSrc, darkSrc } = props;

	const imgProps = { ...props, lightSrc: undefined, darkSrc: undefined };
	delete imgProps.lightSrc;
	delete imgProps.darkSrc;

	if (prefersLight == undefined) {
		return <img src={lightSrc} {...imgProps} />
	}

	// for better performance:
	// https://stackoverflow.com/questions/71313889/how-can-i-present-a-different-next-image-based-on-the-users-preferred-color-sch
	return <img src={prefersLight ? lightSrc : darkSrc} {...imgProps} />
}