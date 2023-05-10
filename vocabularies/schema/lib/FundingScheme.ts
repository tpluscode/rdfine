import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { OrganizationMixin } from './Organization.js';

export interface FundingScheme<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Organization<D>, rdfine.RdfResource<D> {
}

export function FundingSchemeMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<FundingScheme> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class FundingSchemeClass extends OrganizationMixin(Resource) implements Partial<FundingScheme> {
  }
  return FundingSchemeClass
}

class FundingSchemeImpl extends FundingSchemeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<FundingScheme>) {
    super(arg, init)
    this.types.add(schema.FundingScheme)
  }

  static readonly __mixins: Mixin[] = [FundingSchemeMixin, OrganizationMixin];
}
FundingSchemeMixin.appliesTo = schema.FundingScheme
FundingSchemeMixin.Class = FundingSchemeImpl

export const fromPointer = createFactory<FundingScheme>([OrganizationMixin, FundingSchemeMixin], { types: [schema.FundingScheme] });
