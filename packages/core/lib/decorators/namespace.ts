import ns from '@rdfjs/namespace'
import type { NamespaceBuilder } from '@rdfjs/namespace'
import type { Constructor } from '../ResourceFactory'
import type { ClassDescriptor } from '.'
import type { RdfResourceCore } from '../../RdfResource'

function setNamespace(clazz: Constructor, stringOrNamespace: string | NamespaceBuilder) {
  clazz.__ns = typeof stringOrNamespace === 'string'
    ? ns(stringOrNamespace) : stringOrNamespace
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
