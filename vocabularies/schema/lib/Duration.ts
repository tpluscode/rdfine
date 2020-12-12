import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { QuantityMixin } from './Quantity';

export interface Duration<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Quantity<D>, RdfResource<D> {
}

export function DurationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Duration> & RdfResourceCore> & Base {
  @namespace(schema)
  class DurationClass extends QuantityMixin(Resource) implements Partial<Duration> {
  }
  return DurationClass
}

class DurationImpl extends DurationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Duration>) {
    super(arg, init)
    this.types.add(schema.Duration)
  }

  static readonly __mixins: Mixin[] = [DurationMixin, QuantityMixin];
}
DurationMixin.appliesTo = schema.Duration
DurationMixin.Class = DurationImpl
