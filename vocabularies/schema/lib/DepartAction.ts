import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MoveActionMixin } from './MoveAction.js';

export interface DepartAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MoveAction<D>, rdfine.RdfResource<D> {
}

export function DepartActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<DepartAction & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class DepartActionClass extends MoveActionMixin(Resource) {
  }
  return DepartActionClass as any
}

class DepartActionImpl extends DepartActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DepartAction>) {
    super(arg, init)
    this.types.add(schema.DepartAction)
  }

  static readonly __mixins: Mixin[] = [DepartActionMixin, MoveActionMixin];
}
DepartActionMixin.appliesTo = schema.DepartAction
DepartActionMixin.Class = DepartActionImpl

export const fromPointer = createFactory<DepartAction>([MoveActionMixin, DepartActionMixin], { types: [schema.DepartAction] });
