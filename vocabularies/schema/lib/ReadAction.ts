import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ConsumeActionMixin } from './ConsumeAction';

export interface ReadAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.ConsumeAction<D>, RdfResource<D> {
}

export function ReadActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ReadAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class ReadActionClass extends ConsumeActionMixin(Resource) implements Partial<ReadAction> {
  }
  return ReadActionClass
}

class ReadActionImpl extends ReadActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ReadAction>) {
    super(arg, init)
    this.types.add(schema.ReadAction)
  }

  static readonly __mixins: Mixin[] = [ReadActionMixin, ConsumeActionMixin];
}
ReadActionMixin.appliesTo = schema.ReadAction
ReadActionMixin.Class = ReadActionImpl

export const fromPointer = createFactory<ReadAction>([ConsumeActionMixin, ReadActionMixin], { types: [schema.ReadAction] });
