import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { HomeAndConstructionBusinessMixin } from './HomeAndConstructionBusiness';

export interface GeneralContractor<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.HomeAndConstructionBusiness<D>, RdfResource<D> {
}

export function GeneralContractorMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<GeneralContractor> & RdfResourceCore> & Base {
  @namespace(schema)
  class GeneralContractorClass extends HomeAndConstructionBusinessMixin(Resource) implements Partial<GeneralContractor> {
  }
  return GeneralContractorClass
}

class GeneralContractorImpl extends GeneralContractorMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<GeneralContractor>) {
    super(arg, init)
    this.types.add(schema.GeneralContractor)
  }

  static readonly __mixins: Mixin[] = [GeneralContractorMixin, HomeAndConstructionBusinessMixin];
}
GeneralContractorMixin.appliesTo = schema.GeneralContractor
GeneralContractorMixin.Class = GeneralContractorImpl
