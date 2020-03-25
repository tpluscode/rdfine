import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import EventMixin from './Event';

export interface Festival extends Schema.Event, RdfResource {
}

export default function FestivalMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class FestivalClass extends EventMixin(Resource) implements Festival {
  }
  return FestivalClass
}

class FestivalImpl extends FestivalMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<Festival>) {
    super(arg)
    this.types.add(schema.Festival)
    initializeProperties<Festival>(this, init)
  }
}
FestivalMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Festival)
FestivalMixin.Class = FestivalImpl
