import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { OrganizeActionMixin } from './OrganizeAction.js';

export interface AllocateAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.OrganizeAction<D>, rdfine.RdfResource<D> {
}

export function AllocateActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<AllocateAction> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class AllocateActionClass extends OrganizeActionMixin(Resource) implements Partial<AllocateAction> {
  }
  return AllocateActionClass
}

class AllocateActionImpl extends AllocateActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AllocateAction>) {
    super(arg, init)
    this.types.add(schema.AllocateAction)
  }

  static readonly __mixins: Mixin[] = [AllocateActionMixin, OrganizeActionMixin];
}
AllocateActionMixin.appliesTo = schema.AllocateAction
AllocateActionMixin.Class = AllocateActionImpl

export const fromPointer = createFactory<AllocateAction>([OrganizeActionMixin, AllocateActionMixin], { types: [schema.AllocateAction] });
