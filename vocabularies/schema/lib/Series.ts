import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { IntangibleMixin } from './Intangible.js';

export interface Series<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, rdfine.RdfResource<D> {
}

export function SeriesMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Series & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class SeriesClass extends IntangibleMixin(Resource) {
  }
  return SeriesClass as any
}

class SeriesImpl extends SeriesMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Series>) {
    super(arg, init)
    this.types.add(schema.Series)
  }

  static readonly __mixins: Mixin[] = [SeriesMixin, IntangibleMixin];
}
SeriesMixin.appliesTo = schema.Series
SeriesMixin.Class = SeriesImpl

export const fromPointer = createFactory<Series>([IntangibleMixin, SeriesMixin], { types: [schema.Series] });
