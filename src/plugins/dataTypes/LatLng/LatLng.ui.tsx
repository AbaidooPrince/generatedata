import * as React from 'react';
import { HelpProps, OptionsProps } from '../../../../types/dataTypes';

export type LatLngState = {
	lat: boolean;
	lng: boolean;
};

export const state: LatLngState = {
	lat: true,
	lng: true
};

export const Options = ({ i18n, data, id, onUpdate }: OptionsProps): JSX.Element => {
	const onChange = (field: string, checked: boolean): void => {
		onUpdate({
			...data,
			[field]: checked
		});
	};

	return (
		<>
			<input type="checkbox" id={`${id}-lat`} checked={data.lat}
				onChange={(e): void => onChange('lat', e.target.checked)} />
			<label htmlFor={`${id}-lat`}>{i18n.latitude}</label>
			<input type="checkbox" id={`${id}-lng`} checked={data.lng}
				onChange={(e): void => onChange('lng', e.target.checked)} />
			<label htmlFor={`${id}-lng`}>{i18n.longitude}</label>
		</>
	);
};

export const Help = ({ i18n }: HelpProps): JSX.Element => <p>{i18n.DESC}</p>;
