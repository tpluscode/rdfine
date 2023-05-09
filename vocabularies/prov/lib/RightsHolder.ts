import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '../index.js';
import { RoleMixin } from './Role.js';

export interface RightsHolder<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.Role<D>, rdfine.RdfResource<D> {
}

export function RightsHolderMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<RightsHolder> & RdfResourceCore> & Base {
  @rdfine.namespace(prov)
  class RightsHolderClass extends RoleMixin(Resource) implements Partial<RightsHolder> {
  }
  return RightsHolderClass
}

class RightsHolderImpl extends RightsHolderMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<RightsHolder>) {
    super(arg, init)
    this.types.add(prov.RightsHolder)
  }

  static readonly __mixins: Mixin[] = [RightsHolderMixin, RoleMixin];
}
RightsHolderMixin.appliesTo = prov.RightsHolder
RightsHolderMixin.Class = RightsHolderImpl

export const fromPointer = createFactory<RightsHolder>([RoleMixin, RightsHolderMixin], { types: [prov.RightsHolder] });
