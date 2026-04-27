"use client";

import useTheme from "common/theming/useTheme";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image, { ImageProps } from "next/image";

type AdditionalProps = {
	/** Path or imported image */
	lightSrc: String | any;
	/** Path or imported image */
	darkSrc: String | any;
}
type ThemedImagePropsType = AdditionalProps & Exclude<ImageProps, { src: string | StaticImport }>;

export default function ThemedImage(props: any) {
	const { prefersLight } = useTheme();

	const { lightSrc, darkSrc } = props;

	const imgProps = { ...props, lightSrc: undefined, darkSrc: undefined };
	delete imgProps.lightSrc;
	delete imgProps.darkSrc;

	// for better performance:
	// https://stackoverflow.com/questions/71313889/how-can-i-present-a-different-next-image-based-on-the-users-preferred-color-sch
	return <Image src={prefersLight ? lightSrc : darkSrc} {...imgProps} />
}