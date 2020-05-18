/**
 * Creates a Flux Standard Action (https://github.com/acdlite/flux-standard-action)
 * @param  {string} type    Type of the action.
 * @param  {*} payload Payload of the action.
 * @param  {*} meta    Metadata of the action.
 * @return {object}    A Flux Standard Action.
 */
export default function createAction(type, payload, meta) {
  const action = { type };
  if (payload !== undefined) {
    action.payload = payload;
    if (payload instanceof Error) {
      action.error = true;
    }
  }
  if (meta !== undefined) { action.meta = meta; }
  return action;
}
