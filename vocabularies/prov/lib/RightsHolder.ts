import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '../index.js';
import { RoleMixin } from './Role.js';

export interface RightsHolder<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.Role<D>, RdfResource<D> {
}

export function RightsHolderMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<RightsHolder> & RdfResourceCore> & Base {
  @namespace(prov)
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
