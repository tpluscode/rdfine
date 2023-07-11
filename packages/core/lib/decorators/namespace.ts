import type { NamespaceBuilder } from '@rdfjs/namespace'
import type { Constructor } from '../ResourceFactory.js'
import type { RdfResourceCore } from '../../RdfResource.js'
import type { ClassDescriptor } from './index.js'

function setNamespace(clazz: Constructor, stringOrNamespace: string | NamespaceBuilder) {
  clazz.__ns = typeof stringOrNamespace === 'string'
    ? clazz.env.namespace(stringOrNamespace)
    : stringOrNamespace
}

const legacyNamespace =
  (stringOrNamespace: string | NamespaceBuilder, clazz: Constructor) => {
    setNamespace(clazz, stringOrNamespace)

    return clazz as any
  }

const standardNamespace =
  (stringOrNamespace: string | NamespaceBuilder, descriptor: ClassDescriptor) => {
    const { kind, elements } = descriptor
    return {
      kind,
      elements,
      // This callback is called once the class is otherwise fully defined
      finisher(clazz: Constructor) {
        setNamespace(clazz, stringOrNamespace)
      },
    }
  }

export const namespace = (stringOrNamespace: string | NamespaceBuilder) =>
  (classOrDescriptor: Constructor<RdfResourceCore<any>>|ClassDescriptor) =>
    (typeof classOrDescriptor === 'function')
      ? legacyNamespace(stringOrNamespace, classOrDescriptor)
      : standardNamespace(stringOrNamespace, classOrDescriptor)
