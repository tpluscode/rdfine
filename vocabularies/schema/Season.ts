import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface Season extends Schema.CreativeWork, RdfResource {
}

export default function SeasonMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SeasonClass extends CreativeWorkMixin(Resource) implements Season {
  }
  return SeasonClass
}

class SeasonImpl extends SeasonMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Season>) {
    super(arg, init)
    this.types.add(schema.Season)
  }
}
SeasonMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Season)
SeasonMixin.Class = SeasonImpl
