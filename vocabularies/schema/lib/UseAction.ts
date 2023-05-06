import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ConsumeActionMixin } from './ConsumeAction.js';

export interface UseAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.ConsumeAction<D>, RdfResource<D> {
}

export function UseActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<UseAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class UseActionClass extends ConsumeActionMixin(Resource) implements Partial<UseAction> {
  }
  return UseActionClass
}

class UseActionImpl extends UseActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<UseAction>) {
    super(arg, init)
    this.types.add(schema.UseAction)
  }

  static readonly __mixins: Mixin[] = [UseActionMixin, ConsumeActionMixin];
}
UseActionMixin.appliesTo = schema.UseAction
UseActionMixin.Class = UseActionImpl

export const fromPointer = createFactory<UseAction>([ConsumeActionMixin, UseActionMixin], { types: [schema.UseAction] });
