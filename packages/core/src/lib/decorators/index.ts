import { RdfResource } from '../RdfResource'
import { Constructor } from '../ResourceFactory'

// From the TC39 Decorators proposal
export interface ClassElement {
  kind: 'field'|'method'
  key: PropertyKey
  placement: 'static'|'prototype'|'own'
  initializer?: Function
  extras?: ClassElement[]
  finisher?: <T extends RdfResource>(clazz: Constructor<T>) => undefined | Constructor<T>
  descriptor?: PropertyDescriptor
}

// From the TC39 Decorators proposal
export interface ClassDescriptor {
  kind: 'class'
  elements: ClassElement[]
  finisher?: <T extends RdfResource>(clazz: Constructor<T>) => undefined | Constructor<T>
}
