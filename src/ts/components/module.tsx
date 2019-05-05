import * as React from 'react';
import { IoProps, Io } from './io';
import { moduleRemove } from '../flux/actions/module';
import { KitchenContext } from '../flux';

export interface ModuleProps {
	name: string;
	id: string;
	node: any;
	params: IoProps[];
	inputs: IoProps[];
	mods: IoProps[];
	outputs: IoProps[];
}

export interface ModuleViewProps extends ModuleProps {
	trackIndex: number;
	index: number;
}

export const Module: React.FunctionComponent<ModuleViewProps> = (props) => {
	const { dispatch } = React.useContext(KitchenContext);

	return (
		<li className="module" tabIndex={0}>
			<h3>{props.name}</h3>
			<p>{props.name}</p>
			<ul className="inputs">
				{props.inputs.map((input, index) => (
					<Io key={index} {...input}>
						+
					</Io>
				))}
			</ul>
			<ul className="mods">
				{props.mods.map((mod, index) => (
					<Io key={index} {...mod}>
						~
					</Io>
				))}
			</ul>
			<ul className="outputs">
				{props.outputs.map((output, index) => (
					<Io key={index} {...output}>
						-
					</Io>
				))}
			</ul>
			<button onClick={() => dispatch(moduleRemove(props.trackIndex, props.index))} aria-label="delete">X</button>
		</li>
	)
}