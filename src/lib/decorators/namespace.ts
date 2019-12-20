import ns from '@rdfjs/namespace'
import { RdfResource } from '../RdfResource'

type Constructor<T = RdfResource> = {
  new (...args: any[]): T
  __ns?: any
};

export function namespace(stringOrNamespace: string | unknown) {
  return <T extends RdfResource>(classOrDescriptor: Constructor<T>) => {
    classOrDescriptor.__ns = typeof stringOrNamespace === 'string'
      ? ns(stringOrNamespace) : ns
  }
}
