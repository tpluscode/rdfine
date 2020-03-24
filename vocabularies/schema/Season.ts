import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<Season>) {
    super(arg)
    this.types.add(schema.Season)
    initializeProperties(this, init)
  }
}
SeasonMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Season)
SeasonMixin.Class = SeasonImpl
