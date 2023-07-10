import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '../index.js';
import { ContributorMixin } from './Contributor.js';

export interface Creator<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.Contributor<D>, rdfine.RdfResource<D> {
}

export function CreatorMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Creator & RdfResourceCore> & Base {
  @rdfine.namespace(prov)
  class CreatorClass extends ContributorMixin(Resource) {
  }
  return CreatorClass as any
}

class CreatorImpl extends CreatorMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Creator>) {
    super(arg, init)
    this.types.add(prov.Creator)
  }

  static readonly __mixins: Mixin[] = [CreatorMixin, ContributorMixin];
}
CreatorMixin.appliesTo = prov.Creator
CreatorMixin.Class = CreatorImpl

export const fromPointer = createFactory<Creator>([ContributorMixin, CreatorMixin], { types: [prov.Creator] });
