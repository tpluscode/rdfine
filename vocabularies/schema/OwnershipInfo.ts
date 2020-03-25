import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<OwnershipInfo>) {
    super(arg)
    this.types.add(schema.OwnershipInfo)
    initializeProperties<OwnershipInfo>(this, init)
  }
}
OwnershipInfoMixin.shouldApply = (r: RdfResource) => r.types.has(schema.OwnershipInfo)
OwnershipInfoMixin.Class = OwnershipInfoImpl
