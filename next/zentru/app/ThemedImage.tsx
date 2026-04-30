"use client";

import useTheme from "common/theming/useTheme";
import Image, { ImageProps } from "next/image";

type AdditionalProps = {
	/** Path or imported image */
	lightSrc: String | any;
	/** Path or imported image */
	darkSrc: String | any;
}
type ThemedImagePropsType = AdditionalProps & Omit<ImageProps, "src">;

export default function ThemedImage(props: ThemedImagePropsType) {
	const { prefersLight } = useTheme();

	const { lightSrc, darkSrc } = props;

	// trust me bro
	const imgProps: any = { ...props, lightSrc: undefined, darkSrc: undefined, src: undefined } as any;
	delete imgProps.lightSrc;
	delete imgProps.darkSrc;
	delete imgProps.src;

	if (prefersLight == undefined) {
		return <Image src={lightSrc} {...imgProps} />
	}

	// for better performance:
	// https://stackoverflow.com/questions/71313889/how-can-i-present-a-different-next-image-based-on-the-users-preferred-color-sch
	return <Image src={prefersLight ? lightSrc : darkSrc} {...imgProps} />
}