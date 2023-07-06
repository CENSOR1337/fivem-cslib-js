const cfx = {
	//@ts-ignore
	emitServer: global.TriggerServerEvent,
};

export const emitServer = (event: string, ...args: any[]): void => {
	return cfx.emitServer(event, ...args);
};
