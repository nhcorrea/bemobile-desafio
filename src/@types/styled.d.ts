import "styled-components"

declare module "styled-components" {
	export interface DefaultTheme {
			COLORS: {
				BLUE_PRIMARY: string;
				BLACK: string;
				GRAY_10: string;
				GRAY_20: string;
				GRAY_00: string;
				WHITE: string;
			},
			FONT_FAMILY: {
				MEDIUM: string;
				REGULAR: string;
			},
			FONT_SIZE:{
				HEADING_1: string;
				HEADING_2_AND_3: string;
			},
			BOX_SHADOW: {
				SHADOW_1: string;
				SHADOW_2: string;
			}
		}
}
