import { ID } from '@datorama/akita';

export interface <%= singular(classify(name)) %> {
  id: ID;
  // TODO: delete this after done testing
  name: string;
  value: string;
}

/**
 * A factory function that creates <%= classify(name) %>
 */
export function create<%= singular(classify(name)) %>(params: Partial<<%= singular(classify(name)) %>>) {
  return {

  } as <%= singular(classify(name)) %>;
}
