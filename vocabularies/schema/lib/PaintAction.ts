import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreateActionMixin } from './CreateAction.js';

export interface PaintAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreateAction<D>, rdfine.RdfResource<D> {
}

export function PaintActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<PaintAction> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class PaintActionClass extends CreateActionMixin(Resource) implements Partial<PaintAction> {
  }
  return PaintActionClass
}

class PaintActionImpl extends PaintActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PaintAction>) {
    super(arg, init)
    this.types.add(schema.PaintAction)
  }

  static readonly __mixins: Mixin[] = [PaintActionMixin, CreateActionMixin];
}
PaintActionMixin.appliesTo = schema.PaintAction
PaintActionMixin.Class = PaintActionImpl

export const fromPointer = createFactory<PaintAction>([CreateActionMixin, PaintActionMixin], { types: [schema.PaintAction] });
