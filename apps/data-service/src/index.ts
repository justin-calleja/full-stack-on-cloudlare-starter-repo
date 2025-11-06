import { WorkerEntrypoint } from 'cloudflare:workers';
// import { } from "@repo/data-ops"

export default class DataService extends WorkerEntrypoint<Env> {
	fetch(request: Request) {
		return new Response('Hello World!');
	}
}
