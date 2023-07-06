export const resourceName = GetCurrentResourceName();

export const getResourceEventName = (event: string) => {
	return `${resourceName}:${event}`;
};

export const onResourceStop = (callback: () => void) => {
	return on("onResourceStop", (resource: string) => {
		if (resource !== resourceName) return;
		callback();
	});
};

export const onResourceStart = (callback: () => void) => {
	return on("onResourceStart", (resource: string) => {
		if (resource !== resourceName) return;
		callback();
	});
};
