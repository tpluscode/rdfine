import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<Festival>) {
    super(arg, init)
    this.types.add(schema.Festival)
  }
}
FestivalMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Festival)
FestivalMixin.Class = FestivalImpl
