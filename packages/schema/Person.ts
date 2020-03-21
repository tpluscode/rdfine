import { Constructor, namespace, property, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine'
import { schema } from '@tpluscode/rdf-ns-builders'

export interface Person {
  givenName: string
  familyName: string
  name: string
}

export default function PersonMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PersonClass extends Resource implements Person {
    @property.literal()
    public familyName!: string

    @property.literal()
    public givenName!: string

    @property.literal()
    public name!: string
  }

  return PersonClass
}

PersonMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Person)
PersonMixin.Class = PersonMixin(RdfResourceImpl)
