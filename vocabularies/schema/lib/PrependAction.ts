import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { InsertActionMixin } from './InsertAction.js';

export interface PrependAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.InsertAction<D>, rdfine.RdfResource<D> {
}

export function PrependActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<PrependAction & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class PrependActionClass extends InsertActionMixin(Resource) {
  }
  return PrependActionClass as any
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
