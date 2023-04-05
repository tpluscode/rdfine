import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface Season<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
}

export function SeasonMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Season> & RdfResourceCore> & Base {
  @namespace(schema)
  class SeasonClass extends CreativeWorkMixin(Resource) implements Partial<Season> {
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

export const fromPointer = createFactory<Season>([CreativeWorkMixin, SeasonMixin], { types: [schema.Season] });
