import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { InsertActionMixin } from './InsertAction.js';

export interface PrependAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.InsertAction<D>, RdfResource<D> {
}

export function PrependActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<PrependAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class PrependActionClass extends InsertActionMixin(Resource) implements Partial<PrependAction> {
  }
  return PrependActionClass
}

class PrependActionImpl extends PrependActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PrependAction>) {
    super(arg, init)
    this.types.add(schema.PrependAction)
  }

  static readonly __mixins: Mixin[] = [PrependActionMixin, InsertActionMixin];
}
PrependActionMixin.appliesTo = schema.PrependAction
PrependActionMixin.Class = PrependActionImpl

export const fromPointer = createFactory<PrependAction>([InsertActionMixin, PrependActionMixin], { types: [schema.PrependAction] });
