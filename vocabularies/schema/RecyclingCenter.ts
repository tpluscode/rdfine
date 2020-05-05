import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { LocalBusinessMixin } from './LocalBusiness';

export interface RecyclingCenter extends Schema.LocalBusiness, RdfResource {
}

export function RecyclingCenterMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class RecyclingCenterClass extends LocalBusinessMixin(Resource) implements RecyclingCenter {
  }
  return RecyclingCenterClass
}

class RecyclingCenterImpl extends RecyclingCenterMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<RecyclingCenter>) {
    super(arg, init)
    this.types.add(schema.RecyclingCenter)
  }

  static readonly __mixins: Mixin[] = [RecyclingCenterMixin, LocalBusinessMixin];
}
RecyclingCenterMixin.appliesTo = schema.RecyclingCenter
RecyclingCenterMixin.Class = RecyclingCenterImpl
