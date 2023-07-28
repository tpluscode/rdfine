import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ReactActionMixin } from './ReactAction.js';

export interface WantAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.ReactAction<D>, rdfine.RdfResource<D> {
}

export function WantActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<WantAction & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class WantActionClass extends ReactActionMixin(Resource) {
  }
  return WantActionClass as any
}

class WantActionImpl extends WantActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<WantAction>) {
    super(arg, init)
    this.types.add(schema.WantAction)
  }

  static readonly __mixins: Mixin[] = [WantActionMixin, ReactActionMixin];
}
WantActionMixin.appliesTo = schema.WantAction
WantActionMixin.Class = WantActionImpl

export const fromPointer = createFactory<WantAction>([ReactActionMixin, WantActionMixin], { types: [schema.WantAction] });
