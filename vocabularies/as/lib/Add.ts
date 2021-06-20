import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '..';
import { ActivityMixin } from './Activity';

export interface Add<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Activity<D>, RdfResource<D> {
}

export function AddMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Add> & RdfResourceCore> & Base {
  @namespace(as)
  class AddClass extends ActivityMixin(Resource) implements Partial<Add> {
  }
  return AddClass
}

class AddImpl extends AddMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Add>) {
    super(arg, init)
    this.types.add(as.Add)
  }

  static readonly __mixins: Mixin[] = [AddMixin, ActivityMixin];
}
AddMixin.appliesTo = as.Add
AddMixin.Class = AddImpl

export const fromPointer = createFactory<Add>([ActivityMixin, AddMixin], { types: [as.Add] });
