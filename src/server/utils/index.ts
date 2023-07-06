const cfx = {
	//@ts-ignore
	emitClient: global.TriggerClientEvent,
};

export const emitClient = (eventName: string, target: number | string, ...args: any[]): void => {
	return cfx.emitClient(eventName, target, ...args);
};

export const emitAllClients = (eventName: string, ...args: any[]): void => {
	return cfx.emitClient(eventName, -1, ...args);
};
