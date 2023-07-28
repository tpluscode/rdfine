import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ActionMixin } from './Action.js';

export interface OrganizeAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Action<D>, rdfine.RdfResource<D> {
}

export function OrganizeActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<OrganizeAction & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class OrganizeActionClass extends ActionMixin(Resource) {
  }
  return OrganizeActionClass as any
}

class OrganizeActionImpl extends OrganizeActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<OrganizeAction>) {
    super(arg, init)
    this.types.add(schema.OrganizeAction)
  }

  static readonly __mixins: Mixin[] = [OrganizeActionMixin, ActionMixin];
}
OrganizeActionMixin.appliesTo = schema.OrganizeAction
OrganizeActionMixin.Class = OrganizeActionImpl

export const fromPointer = createFactory<OrganizeAction>([ActionMixin, OrganizeActionMixin], { types: [schema.OrganizeAction] });
