import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MoveActionMixin } from './MoveAction';

export interface DepartAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MoveAction<D>, RdfResource<D> {
}

export function DepartActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<DepartAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class DepartActionClass extends MoveActionMixin(Resource) implements Partial<DepartAction> {
  }
  return DepartActionClass
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
