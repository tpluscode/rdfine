import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreateActionMixin } from './CreateAction';

export interface PaintAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreateAction<D>, RdfResource<D> {
}

export function PaintActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<PaintAction> & RdfResourceCore> & Base {
  @namespace(schema)
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
