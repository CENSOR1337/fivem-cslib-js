const cfx = {
	//@ts-ignore
	on: global.on,
	//@ts-ignore
	onNet: global.onNet,
	//@ts-ignore
	emit: global.emit,
};

export const on = (event: string, callback: (...args: any[]) => void): any => {
	return cfx.on(event, callback);
};

export const onNet = (event: string, callback: (...args: any[]) => void): any => {
	return cfx.onNet(event, callback);
};

export const emit = (event: string, ...args: any[]): void => {
	cfx.emit(event, ...args);
};

export const log = (...args: any[]) => {
	console.log(...args);
};
