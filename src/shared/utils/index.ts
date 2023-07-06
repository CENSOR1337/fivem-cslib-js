import { isServer, isClient } from "../resource";

const cfx = {
	// @ts-ignore
	addEventListener: global.addEventListener,
	// @ts-ignore
	triggerEvent: global.TriggerEvent,
	// @ts-ignore
	triggerServerEvent: global.TriggerServerEvent,
	// @ts-ignore
	triggerClientEvent: global.TriggerClientEvent,
	// @ts-ignore
	addNetEventListener: global.addNetEventListener,
};

export function on(eventName: string, callback: (...args: any[]) => void): any {
	return cfx.addEventListener(eventName, callback);
}

export function onNet(eventName: string, callback: (...args: any[]) => void): any {
	return cfx.addEventListener(eventName, callback, true);
}

export function emitServer(eventName: string, ...args: any[]): void {
	if (isServer) {
		log("emitServer is not available on server-side");
		return;
	}
	return cfx.triggerServerEvent(eventName, ...args);
}

export function emitClient(eventName: string, target: number | string, ...args: any[]): void {
	if (isClient) {
		log("emitAllClients is not available on client-side");
		return;
	}
	return cfx.triggerClientEvent(eventName, target, ...args);
}

export function emitAllClients(eventName: string, ...args: any[]): void {
	return emitClient(eventName, -1, ...args);
}

export function emit(eventName: string, ...args: any[]): void {
	return cfx.triggerEvent(eventName, ...args);
}

export function log(...args: any[]) {
	console.log(...args);
}
