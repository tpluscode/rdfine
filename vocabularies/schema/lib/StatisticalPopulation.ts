import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { IntangibleMixin } from './Intangible';

export interface StatisticalPopulation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, RdfResource<D> {
  constrainingProperty: number | undefined;
  numConstraints: number | undefined;
  populationType: RDF.Term | undefined;
}

export function StatisticalPopulationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class StatisticalPopulationClass extends IntangibleMixin(Resource) implements StatisticalPopulation {
    @property.literal({ type: Number })
    constrainingProperty: number | undefined;
    @property.literal({ type: Number })
    numConstraints: number | undefined;
    @property()
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
