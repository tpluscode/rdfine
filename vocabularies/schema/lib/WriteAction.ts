import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreateActionMixin } from './CreateAction.js';

export interface WriteAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreateAction<D>, RdfResource<D> {
  inLanguage: Schema.Language<D> | undefined;
  inLanguageLiteral: string | undefined;
  language: Schema.Language<D> | undefined;
}

export function WriteActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<WriteAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class WriteActionClass extends CreateActionMixin(Resource) implements Partial<WriteAction> {
    @property.resource()
    inLanguage: Schema.Language | undefined;
    @property.literal({ path: schema.inLanguage })
    inLanguageLiteral: string | undefined;
    @property.resource()
    language: Schema.Language | undefined;
  }
  return WriteActionClass
}

class WriteActionImpl extends WriteActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<WriteAction>) {
    super(arg, init)
    this.types.add(schema.WriteAction)
  }

  static readonly __mixins: Mixin[] = [WriteActionMixin, CreateActionMixin];
}
WriteActionMixin.appliesTo = schema.WriteAction
WriteActionMixin.Class = WriteActionImpl

export const fromPointer = createFactory<WriteAction>([CreateActionMixin, WriteActionMixin], { types: [schema.WriteAction] });
