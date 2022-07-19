export type Country = {
	name: {
		common: string;
		nativeName: {
			[key: string]: {
				official: string;
				common: string;
			};
		};
	};
	region: string;
	population: number;
	subregion: string;
	capital: string;
	currencies: {
		[key: string]: {
			name: string;
			symbol: string;
		};
	};
	languages: {
		[key: string]: string;
	};
	borders?: string[];
	tld: string[];
	flags: {
		png: string;
		svg: string;
	};
};

export enum Details {
	Language = 'language',
	Currency = 'currency',
	NativeName = 'nativeName',
}
