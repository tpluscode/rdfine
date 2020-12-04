import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';

export interface Poster<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
}

export function PosterMixin<Base extends Constructor>(Resource: Base): Constructor<Poster> & Base {
  @namespace(schema)
  class PosterClass extends CreativeWorkMixin(Resource) implements Poster {
  }
  return PosterClass
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
