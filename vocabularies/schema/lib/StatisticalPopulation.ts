import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { IntangibleMixin } from './Intangible.js';

export interface StatisticalPopulation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, rdfine.RdfResource<D> {
  constrainingProperty: number | undefined;
  numConstraints: number | undefined;
  populationType: RDF.Term | undefined;
}

export function StatisticalPopulationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<StatisticalPopulation> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class StatisticalPopulationClass extends IntangibleMixin(Resource) implements Partial<StatisticalPopulation> {
    @rdfine.property.literal({ type: Number })
    constrainingProperty: number | undefined;
    @rdfine.property.literal({ type: Number })
    numConstraints: number | undefined;
    @rdfine.property()
    populationType: RDF.Term | undefined;
  }
  return StatisticalPopulationClass
}

class StatisticalPopulationImpl extends StatisticalPopulationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<StatisticalPopulation>) {
    super(arg, init)
    this.types.add(schema.StatisticalPopulation)
  }

  static readonly __mixins: Mixin[] = [StatisticalPopulationMixin, IntangibleMixin];
}
StatisticalPopulationMixin.appliesTo = schema.StatisticalPopulation
StatisticalPopulationMixin.Class = StatisticalPopulationImpl

export const fromPointer = createFactory<StatisticalPopulation>([IntangibleMixin, StatisticalPopulationMixin], { types: [schema.StatisticalPopulation] });
