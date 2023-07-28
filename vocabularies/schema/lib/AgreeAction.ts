import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ReactActionMixin } from './ReactAction.js';

export interface AgreeAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.ReactAction<D>, rdfine.RdfResource<D> {
}

export function AgreeActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<AgreeAction & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class AgreeActionClass extends ReactActionMixin(Resource) {
  }
  return AgreeActionClass as any
}

class AgreeActionImpl extends AgreeActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AgreeAction>) {
    super(arg, init)
    this.types.add(schema.AgreeAction)
  }

  static readonly __mixins: Mixin[] = [AgreeActionMixin, ReactActionMixin];
}
AgreeActionMixin.appliesTo = schema.AgreeAction
AgreeActionMixin.Class = AgreeActionImpl

export const fromPointer = createFactory<AgreeAction>([ReactActionMixin, AgreeActionMixin], { types: [schema.AgreeAction] });
