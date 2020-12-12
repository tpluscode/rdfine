import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { OrganizationMixin } from './Organization';

export interface FundingScheme<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Organization<D>, RdfResource<D> {
}

export function FundingSchemeMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<FundingScheme> & RdfResourceCore> & Base {
  @namespace(schema)
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
