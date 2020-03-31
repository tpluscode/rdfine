import { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import StructuredValueMixin from './StructuredValue';

export interface OwnershipInfo extends Schema.StructuredValue, RdfResource {
  acquiredFrom: Schema.Organization | Schema.Person;
  ownedFrom: Date;
  ownedThrough: Date;
  typeOfGood: Schema.Product | Schema.Service;
}

export default function OwnershipInfoMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class OwnershipInfoClass extends StructuredValueMixin(Resource) implements OwnershipInfo {
    @property.resource()
    acquiredFrom!: Schema.Organization | Schema.Person;
    @property.literal()
    ownedFrom!: Date;
    @property.literal()
    ownedThrough!: Date;
    @property.resource()
    typeOfGood!: Schema.Product | Schema.Service;
  }
  return OwnershipInfoClass
}

class OwnershipInfoImpl extends OwnershipInfoMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<OwnershipInfo>) {
    super(arg, init)
    this.types.add(schema.OwnershipInfo)
  }
}
OwnershipInfoMixin.shouldApply = (r: RdfResource) => r.types.has(schema.OwnershipInfo)
OwnershipInfoMixin.Class = OwnershipInfoImpl
