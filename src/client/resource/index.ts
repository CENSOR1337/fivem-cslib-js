import { getResourceEventName, resource as sharedResource } from "../../shared/resource";
import { emitServer } from "../utils";
export const resource = {
	...sharedResource,
	emitServer: (eventName: string, target: number, ...args: any[]) => emitServer(getResourceEventName(eventName), target, ...args),
};
