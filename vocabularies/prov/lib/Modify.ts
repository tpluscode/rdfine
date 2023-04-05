import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '..';
import { ActivityMixin } from './Activity';

export interface Modify<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.Activity<D>, RdfResource<D> {
}

export function ModifyMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Modify> & RdfResourceCore> & Base {
  @namespace(prov)
  class ModifyClass extends ActivityMixin(Resource) implements Partial<Modify> {
  }
  return ModifyClass
}

class ModifyImpl extends ModifyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Modify>) {
    super(arg, init)
    this.types.add(prov.Modify)
  }

  static readonly __mixins: Mixin[] = [ModifyMixin, ActivityMixin];
}
ModifyMixin.appliesTo = prov.Modify
ModifyMixin.Class = ModifyImpl

export const fromPointer = createFactory<Modify>([ActivityMixin, ModifyMixin], { types: [prov.Modify] });
