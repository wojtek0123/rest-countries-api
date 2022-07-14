export type Currency = {
	name: string;
	symbol: string;
};

// export type Flag = {
// 	png: string;
// 	svg: string;
// };

export type Country = {
	name: {
		common: string;
		nativeName: string[];
	};
	region: string;
	population: number;
	subregion: string;
	capital: string;
	currencies: string[];
	languages: Object[];
	borders?: string[];
	tld: string[];
	flags: {
    png: string,
    svg: string
  };
};

export enum Details {
	Language = 'language',
	Currency = 'currency',
	NativeName = 'nativeName',
}