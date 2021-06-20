import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '..';
import { ActivityMixin } from './Activity';

export interface Create<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Activity<D>, RdfResource<D> {
}

export function CreateMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Create> & RdfResourceCore> & Base {
  @namespace(as)
  class CreateClass extends ActivityMixin(Resource) implements Partial<Create> {
  }
  return CreateClass
}

class CreateImpl extends CreateMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Create>) {
    super(arg, init)
    this.types.add(as.Create)
  }

  static readonly __mixins: Mixin[] = [CreateMixin, ActivityMixin];
}
CreateMixin.appliesTo = as.Create
CreateMixin.Class = CreateImpl

export const fromPointer = createFactory<Create>([ActivityMixin, CreateMixin], { types: [as.Create] });
