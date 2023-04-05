import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreateActionMixin } from './CreateAction.js';

export interface DrawAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreateAction<D>, RdfResource<D> {
}

export function DrawActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<DrawAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class DrawActionClass extends CreateActionMixin(Resource) implements Partial<DrawAction> {
  }
  return DrawActionClass
}

class DrawActionImpl extends DrawActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DrawAction>) {
    super(arg, init)
    this.types.add(schema.DrawAction)
  }

  static readonly __mixins: Mixin[] = [DrawActionMixin, CreateActionMixin];
}
DrawActionMixin.appliesTo = schema.DrawAction
DrawActionMixin.Class = DrawActionImpl

export const fromPointer = createFactory<DrawAction>([CreateActionMixin, DrawActionMixin], { types: [schema.DrawAction] });
