import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { IntangibleMixin } from './Intangible';

export interface EnergyConsumptionDetails<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, RdfResource<D> {
  energyEfficiencyScaleMax: Schema.EUEnergyEfficiencyEnumeration | undefined;
  energyEfficiencyScaleMin: Schema.EUEnergyEfficiencyEnumeration | undefined;
  hasEnergyEfficiencyCategory: Schema.EnergyEfficiencyEnumeration | undefined;
}

export function EnergyConsumptionDetailsMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<EnergyConsumptionDetails> & RdfResourceCore> & Base {
  @namespace(schema)
  class EnergyConsumptionDetailsClass extends IntangibleMixin(Resource) implements Partial<EnergyConsumptionDetails> {
    @property()
    energyEfficiencyScaleMax: Schema.EUEnergyEfficiencyEnumeration | undefined;
    @property()
    energyEfficiencyScaleMin: Schema.EUEnergyEfficiencyEnumeration | undefined;
    @property()
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
