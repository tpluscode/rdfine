import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '..';
import { ActivityMixin } from './Activity';

export interface Update<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Activity<D>, RdfResource<D> {
}

export function UpdateMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Update> & RdfResourceCore> & Base {
  @namespace(as)
  class UpdateClass extends ActivityMixin(Resource) implements Partial<Update> {
  }
  return UpdateClass
}

class UpdateImpl extends UpdateMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Update>) {
    super(arg, init)
    this.types.add(as.Update)
  }

  static readonly __mixins: Mixin[] = [UpdateMixin, ActivityMixin];
}
UpdateMixin.appliesTo = as.Update
UpdateMixin.Class = UpdateImpl

export const fromPointer = createFactory<Update>([ActivityMixin, UpdateMixin], { types: [as.Update] });
