import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ProjectMixin } from './Project.js';

export interface FundingAgency<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Project<D>, rdfine.RdfResource<D> {
}

export function FundingAgencyMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<FundingAgency> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class FundingAgencyClass extends ProjectMixin(Resource) implements Partial<FundingAgency> {
  }
  return FundingAgencyClass
}

class FundingAgencyImpl extends FundingAgencyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<FundingAgency>) {
    super(arg, init)
    this.types.add(schema.FundingAgency)
  }

  static readonly __mixins: Mixin[] = [FundingAgencyMixin, ProjectMixin];
}
FundingAgencyMixin.appliesTo = schema.FundingAgency
FundingAgencyMixin.Class = FundingAgencyImpl

export const fromPointer = createFactory<FundingAgency>([ProjectMixin, FundingAgencyMixin], { types: [schema.FundingAgency] });
