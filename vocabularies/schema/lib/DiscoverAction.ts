import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { FindActionMixin } from './FindAction.js';

export interface DiscoverAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.FindAction<D>, rdfine.RdfResource<D> {
}

export function DiscoverActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<DiscoverAction> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class DiscoverActionClass extends FindActionMixin(Resource) implements Partial<DiscoverAction> {
  }
  return DiscoverActionClass
}

class DiscoverActionImpl extends DiscoverActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DiscoverAction>) {
    super(arg, init)
    this.types.add(schema.DiscoverAction)
  }

  static readonly __mixins: Mixin[] = [DiscoverActionMixin, FindActionMixin];
}
DiscoverActionMixin.appliesTo = schema.DiscoverAction
DiscoverActionMixin.Class = DiscoverActionImpl

export const fromPointer = createFactory<DiscoverAction>([FindActionMixin, DiscoverActionMixin], { types: [schema.DiscoverAction] });
