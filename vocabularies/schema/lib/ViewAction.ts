import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ConsumeActionMixin } from './ConsumeAction.js';

export interface ViewAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.ConsumeAction<D>, rdfine.RdfResource<D> {
}

export function ViewActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<ViewAction & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ViewActionClass extends ConsumeActionMixin(Resource) {
  }
  return ViewActionClass as any
}

class ViewActionImpl extends ViewActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ViewAction>) {
    super(arg, init)
    this.types.add(schema.ViewAction)
  }

  static readonly __mixins: Mixin[] = [ViewActionMixin, ConsumeActionMixin];
}
ViewActionMixin.appliesTo = schema.ViewAction
ViewActionMixin.Class = ViewActionImpl

export const fromPointer = createFactory<ViewAction>([ConsumeActionMixin, ViewActionMixin], { types: [schema.ViewAction] });
