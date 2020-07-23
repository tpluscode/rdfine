import ns from '@rdf-esm/namespace'
import type { NamespaceBuilder } from '@rdf-esm/namespace'
import type { RdfResource } from '../../RdfResource'
import type { ClassDescriptor } from '.'

type Constructor<T = RdfResource<any>> = {
  new (...args: any[]): T
  __ns?: any
};

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
  (classOrDescriptor: Constructor|ClassDescriptor) =>
    (typeof classOrDescriptor === 'function')
      ? legacyNamespace(stringOrNamespace, classOrDescriptor)
      : standardNamespace(stringOrNamespace, classOrDescriptor)
