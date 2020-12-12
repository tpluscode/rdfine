import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { IntangibleMixin } from './Intangible';

export interface Series<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, RdfResource<D> {
}

export function SeriesMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Series> & RdfResourceCore> & Base {
  @namespace(schema)
  class SeriesClass extends IntangibleMixin(Resource) implements Partial<Series> {
  }
  return SeriesClass
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
