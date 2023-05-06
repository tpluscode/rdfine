import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { HomeAndConstructionBusinessMixin } from './HomeAndConstructionBusiness.js';

export interface RoofingContractor<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.HomeAndConstructionBusiness<D>, RdfResource<D> {
}

export function RoofingContractorMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<RoofingContractor> & RdfResourceCore> & Base {
  @namespace(schema)
  class RoofingContractorClass extends HomeAndConstructionBusinessMixin(Resource) implements Partial<RoofingContractor> {
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

export const fromPointer = createFactory<RoofingContractor>([HomeAndConstructionBusinessMixin, RoofingContractorMixin], { types: [schema.RoofingContractor] });
