import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { OrganizationMixin } from './Organization.js';

export interface ResearchOrganization<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Organization<D>, RdfResource<D> {
}

export function ResearchOrganizationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ResearchOrganization> & RdfResourceCore> & Base {
  @namespace(schema)
  class ResearchOrganizationClass extends OrganizationMixin(Resource) implements Partial<ResearchOrganization> {
  }
  return ResearchOrganizationClass
}

class ResearchOrganizationImpl extends ResearchOrganizationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ResearchOrganization>) {
    super(arg, init)
    this.types.add(schema.ResearchOrganization)
  }

  static readonly __mixins: Mixin[] = [ResearchOrganizationMixin, OrganizationMixin];
}
ResearchOrganizationMixin.appliesTo = schema.ResearchOrganization
ResearchOrganizationMixin.Class = ResearchOrganizationImpl

export const fromPointer = createFactory<ResearchOrganization>([OrganizationMixin, ResearchOrganizationMixin], { types: [schema.ResearchOrganization] });
