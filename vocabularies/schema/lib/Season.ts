import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface Season<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, rdfine.RdfResource<D> {
}

export function SeasonMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Season & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class SeasonClass extends CreativeWorkMixin(Resource) {
  }
  return SeasonClass as any
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

export const fromPointer = createFactory<Season>([CreativeWorkMixin, SeasonMixin], { types: [schema.Season] });
