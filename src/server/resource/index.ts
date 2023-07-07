import { getResourceEventName, resource as sharedResource } from "../../shared/resource";
import { emitClient, emitAllClients } from "../utils";
export const resource = {
	...sharedResource,
	emitAllClients: (eventName: string, ...args: any[]) => emitAllClients(getResourceEventName(eventName), ...args),
	emitClient: (eventName: string, target: number, ...args: any[]) => emitClient(getResourceEventName(eventName), target, ...args),
};
