import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CreativeWorkMixin } from './CreativeWork';

export interface Season extends Schema.CreativeWork, RdfResource {
}

export function SeasonMixin<Base extends Constructor>(Resource: Base) {
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

  static readonly __mixins: Mixin[] = [SeasonMixin, CreativeWorkMixin];
}
SeasonMixin.appliesTo = schema.Season
SeasonMixin.Class = SeasonImpl
