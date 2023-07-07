import cslib from "../../server";
export const resourceName = GetCurrentResourceName();

export const getResourceEventName = (event: string) => {
	return `${resourceName}:${event}`;
};

export const isServer = IsDuplicityVersion();
export const isClient = !isServer;

export const onResourceStop = (callback: () => void) => {
	return cslib.on("onResourceStop", (resource: string) => {
		if (resource !== resourceName) return;
		callback();
	});
};

export const onResourceStart = (callback: () => void) => {
	return cslib.on("onResourceStart", (resource: string) => {
		if (resource !== resourceName) return;
		callback();
	});
};

export const resource = {
	on: (eventName: string, callback: (...args: any[]) => void): any => cslib.on(getResourceEventName(eventName), callback),
	onNet: (eventName: string, callback: (...args: any[]) => void): any => cslib.onNet(getResourceEventName(eventName), callback),
	emit: (eventName: string, ...args: any[]): void => cslib.emit(getResourceEventName(eventName), ...args),
};
