import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { HomeAndConstructionBusinessMixin } from './HomeAndConstructionBusiness';

export interface RoofingContractor<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.HomeAndConstructionBusiness<D>, RdfResource<D> {
}

export function RoofingContractorMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class RoofingContractorClass extends HomeAndConstructionBusinessMixin(Resource) implements RoofingContractor {
  }
  return RoofingContractorClass
}

class RoofingContractorImpl extends RoofingContractorMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<RoofingContractor>) {
    super(arg, init)
    this.types.add(schema.RoofingContractor)
  }

  static readonly __mixins: Mixin[] = [RoofingContractorMixin, HomeAndConstructionBusinessMixin];
}
RoofingContractorMixin.appliesTo = schema.RoofingContractor
RoofingContractorMixin.Class = RoofingContractorImpl
