import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Season)
  }
}
SeasonMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Season)
SeasonMixin.Class = SeasonImpl
