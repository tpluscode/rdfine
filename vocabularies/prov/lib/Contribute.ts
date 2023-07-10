import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '../index.js';
import { ActivityMixin } from './Activity.js';

export interface Contribute<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.Activity<D>, rdfine.RdfResource<D> {
}

export function ContributeMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Contribute & RdfResourceCore> & Base {
  @rdfine.namespace(prov)
  class ContributeClass extends ActivityMixin(Resource) {
  }
  return ContributeClass as any
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
