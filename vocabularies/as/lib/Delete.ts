import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { as } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '..';
import { ActivityMixin } from './Activity';

export interface Delete<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Activity<D>, RdfResource<D> {
}

export function DeleteMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Delete> & RdfResourceCore> & Base {
  @namespace(as)
  class DeleteClass extends ActivityMixin(Resource) implements Partial<Delete> {
  }
  return DeleteClass
}

class DeleteImpl extends DeleteMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Delete>) {
    super(arg, init)
    this.types.add(as.Delete)
  }

  static readonly __mixins: Mixin[] = [DeleteMixin, ActivityMixin];
}
DeleteMixin.appliesTo = as.Delete
DeleteMixin.Class = DeleteImpl

export const fromPointer = createFactory<Delete>([ActivityMixin, DeleteMixin], { types: [as.Delete] });
