import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '..';
import { RoleMixin } from './Role';

export interface Contributor<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.Role<D>, RdfResource<D> {
}

export function ContributorMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Contributor> & RdfResourceCore> & Base {
  @namespace(prov)
  class ContributorClass extends RoleMixin(Resource) implements Partial<Contributor> {
  }
  return ContributorClass
}

class ContributorImpl extends ContributorMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Contributor>) {
    super(arg, init)
    this.types.add(prov.Contributor)
  }

  static readonly __mixins: Mixin[] = [ContributorMixin, RoleMixin];
}
ContributorMixin.appliesTo = prov.Contributor
ContributorMixin.Class = ContributorImpl

export const fromPointer = createFactory<Contributor>([RoleMixin, ContributorMixin], { types: [prov.Contributor] });
