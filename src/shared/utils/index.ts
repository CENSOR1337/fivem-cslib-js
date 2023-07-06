import { isServer, isClient } from "../resource";

const cfx = {
	// @ts-ignore
	addEventListener: global.addEventListener,
	// @ts-ignore
	triggerEvent: global.TriggerEvent,
	// @ts-ignore
	addNetEventListener: global.addNetEventListener,
};

export function on(eventName: string, callback: (...args: any[]) => void): any {
	return cfx.addEventListener(eventName, callback);
}

export function onNet(eventName: string, callback: (...args: any[]) => void): any {
	return cfx.addEventListener(eventName, callback, true);
}

export function emit(eventName: string, ...args: any[]): void {
	return cfx.triggerEvent(eventName, ...args);
}

export function log(...args: any[]) {
	console.log(...args);
}
