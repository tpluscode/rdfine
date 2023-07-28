import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface Poster<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, rdfine.RdfResource<D> {
}

export function PosterMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Poster & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class PosterClass extends CreativeWorkMixin(Resource) {
  }
  return PosterClass as any
}

class PosterImpl extends PosterMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Poster>) {
    super(arg, init)
    this.types.add(schema.Poster)
  }

  static readonly __mixins: Mixin[] = [PosterMixin, CreativeWorkMixin];
}
PosterMixin.appliesTo = schema.Poster
PosterMixin.Class = PosterImpl

export const fromPointer = createFactory<Poster>([CreativeWorkMixin, PosterMixin], { types: [schema.Poster] });
