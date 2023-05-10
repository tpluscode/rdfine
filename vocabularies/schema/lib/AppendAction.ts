import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { InsertActionMixin } from './InsertAction.js';

export interface AppendAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.InsertAction<D>, rdfine.RdfResource<D> {
}

export function AppendActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<AppendAction> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class AppendActionClass extends InsertActionMixin(Resource) implements Partial<AppendAction> {
  }
  return AppendActionClass
}

class AppendActionImpl extends AppendActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AppendAction>) {
    super(arg, init)
    this.types.add(schema.AppendAction)
  }

  static readonly __mixins: Mixin[] = [AppendActionMixin, InsertActionMixin];
}
AppendActionMixin.appliesTo = schema.AppendAction
AppendActionMixin.Class = AppendActionImpl

export const fromPointer = createFactory<AppendAction>([InsertActionMixin, AppendActionMixin], { types: [schema.AppendAction] });
