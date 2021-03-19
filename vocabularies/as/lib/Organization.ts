import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { as } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '..';
import { ObjectMixin } from './Object';

export interface Organization<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Object<D>, RdfResource<D> {
}

export function OrganizationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Organization> & RdfResourceCore> & Base {
  @namespace(as)
  class OrganizationClass extends ObjectMixin(Resource) implements Partial<Organization> {
  }
  return OrganizationClass
}

class OrganizationImpl extends OrganizationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Organization>) {
    super(arg, init)
    this.types.add(as.Organization)
  }

  static readonly __mixins: Mixin[] = [OrganizationMixin, ObjectMixin];
}
OrganizationMixin.appliesTo = as.Organization
OrganizationMixin.Class = OrganizationImpl

export const fromPointer = createFactory<Organization>([ObjectMixin, OrganizationMixin], { types: [as.Organization] });
