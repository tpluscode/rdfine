import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { prov } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '..';
import { ActivityMixin } from './Activity';

export interface Contribute<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.Activity<D>, RdfResource<D> {
}

export function ContributeMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Contribute> & RdfResourceCore> & Base {
  @namespace(prov)
  class ContributeClass extends ActivityMixin(Resource) implements Partial<Contribute> {
  }
  return ContributeClass
}

class ContributeImpl extends ContributeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Contribute>) {
    super(arg, init)
    this.types.add(prov.Contribute)
  }

  static readonly __mixins: Mixin[] = [ContributeMixin, ActivityMixin];
}
ContributeMixin.appliesTo = prov.Contribute
ContributeMixin.Class = ContributeImpl

export const fromPointer = createFactory<Contribute>([ActivityMixin, ContributeMixin], { types: [prov.Contribute] });
