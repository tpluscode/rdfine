import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { IntangibleMixin } from './Intangible.js';

export interface EnergyConsumptionDetails<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, rdfine.RdfResource<D> {
  energyEfficiencyScaleMax: Schema.EUEnergyEfficiencyEnumeration | undefined;
  energyEfficiencyScaleMin: Schema.EUEnergyEfficiencyEnumeration | undefined;
  hasEnergyEfficiencyCategory: Schema.EnergyEfficiencyEnumeration | undefined;
}

export function EnergyConsumptionDetailsMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<EnergyConsumptionDetails> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class EnergyConsumptionDetailsClass extends IntangibleMixin(Resource) implements Partial<EnergyConsumptionDetails> {
    @rdfine.property()
    energyEfficiencyScaleMax: Schema.EUEnergyEfficiencyEnumeration | undefined;
    @rdfine.property()
    energyEfficiencyScaleMin: Schema.EUEnergyEfficiencyEnumeration | undefined;
    @rdfine.property()
    hasEnergyEfficiencyCategory: Schema.EnergyEfficiencyEnumeration | undefined;
  }
  return EnergyConsumptionDetailsClass
}

class EnergyConsumptionDetailsImpl extends EnergyConsumptionDetailsMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<EnergyConsumptionDetails>) {
    super(arg, init)
    this.types.add(schema.EnergyConsumptionDetails)
  }

  static readonly __mixins: Mixin[] = [EnergyConsumptionDetailsMixin, IntangibleMixin];
}
EnergyConsumptionDetailsMixin.appliesTo = schema.EnergyConsumptionDetails
EnergyConsumptionDetailsMixin.Class = EnergyConsumptionDetailsImpl

export const fromPointer = createFactory<EnergyConsumptionDetails>([IntangibleMixin, EnergyConsumptionDetailsMixin], { types: [schema.EnergyConsumptionDetails] });
