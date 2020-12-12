import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalEntityMixin } from './MedicalEntity';

export interface DrugCost<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalEntity<D>, RdfResource<D> {
  applicableLocation: Schema.AdministrativeArea<D> | undefined;
  costCategory: Schema.DrugCostCategory | undefined;
  costCurrency: string | undefined;
  costOrigin: string | undefined;
  costPerUnit: number | string | undefined;
  costPerUnitTerm: Schema.QualitativeValue | undefined;
  drugUnit: string | undefined;
}

export function DrugCostMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<DrugCost> & RdfResourceCore> & Base {
  @namespace(schema)
  class DrugCostClass extends MedicalEntityMixin(Resource) implements Partial<DrugCost> {
    @property.resource()
    applicableLocation: Schema.AdministrativeArea | undefined;
    @property()
    costCategory: Schema.DrugCostCategory | undefined;
    @property.literal()
    costCurrency: string | undefined;
    @property.literal()
    costOrigin: string | undefined;
    @property.literal()
    costPerUnit: number | string | undefined;
    @property({ path: schema.costPerUnit })
    costPerUnitTerm: Schema.QualitativeValue | undefined;
    @property.literal()
    drugUnit: string | undefined;
  }
  return DrugCostClass
}

class DrugCostImpl extends DrugCostMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DrugCost>) {
    super(arg, init)
    this.types.add(schema.DrugCost)
  }

  static readonly __mixins: Mixin[] = [DrugCostMixin, MedicalEntityMixin];
}
DrugCostMixin.appliesTo = schema.DrugCost
DrugCostMixin.Class = DrugCostImpl
