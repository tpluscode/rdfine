import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { StructuredValueMixin } from './StructuredValue';

export interface OwnershipInfo extends Schema.StructuredValue, RdfResource {
  acquiredFrom: Schema.Organization | Schema.Person;
  ownedFrom: Date;
  ownedThrough: Date;
  typeOfGood: Schema.Product | Schema.Service;
}

export function OwnershipInfoMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class OwnershipInfoClass extends StructuredValueMixin(Resource) implements OwnershipInfo {
    @property.resource()
    acquiredFrom!: Schema.Organization | Schema.Person;
    @property.literal({ type: Date })
    ownedFrom!: Date;
    @property.literal({ type: Date })
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

  static readonly __mixins: Mixin[] = [OwnershipInfoMixin, StructuredValueMixin];
}
OwnershipInfoMixin.appliesTo = schema.OwnershipInfo
OwnershipInfoMixin.Class = OwnershipInfoImpl
