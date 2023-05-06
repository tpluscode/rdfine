import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkSeriesMixin } from './CreativeWorkSeries.js';

export interface Periodical<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWorkSeries<D>, RdfResource<D> {
}

export function PeriodicalMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Periodical> & RdfResourceCore> & Base {
  @namespace(schema)
  class PeriodicalClass extends CreativeWorkSeriesMixin(Resource) implements Partial<Periodical> {
  }
  return PeriodicalClass
}

class PeriodicalImpl extends PeriodicalMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Periodical>) {
    super(arg, init)
    this.types.add(schema.Periodical)
  }

  static readonly __mixins: Mixin[] = [PeriodicalMixin, CreativeWorkSeriesMixin];
}
PeriodicalMixin.appliesTo = schema.Periodical
PeriodicalMixin.Class = PeriodicalImpl

export const fromPointer = createFactory<Periodical>([CreativeWorkSeriesMixin, PeriodicalMixin], { types: [schema.Periodical] });
