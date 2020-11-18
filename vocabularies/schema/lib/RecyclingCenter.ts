import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { LocalBusinessMixin } from './LocalBusiness';

export interface RecyclingCenter<ID extends ResourceNode = ResourceNode> extends Schema.LocalBusiness<ID>, RdfResource<ID> {
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
