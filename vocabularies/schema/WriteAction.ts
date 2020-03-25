import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CreateActionMixin from './CreateAction';

export interface WriteAction extends Schema.CreateAction, RdfResource {
  inLanguage: Schema.Language;
  inLanguageLiteral: string;
  language: Schema.Language;
}

export default function WriteActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class WriteActionClass extends CreateActionMixin(Resource) implements WriteAction {
    @property.resource()
    inLanguage!: Schema.Language;
    @property.literal({ path: schema.inLanguage })
    inLanguageLiteral!: string;
    @property.resource()
    language!: Schema.Language;
  }
  return WriteActionClass
}

class WriteActionImpl extends WriteActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<WriteAction>) {
    super(arg, init)
    this.types.add(schema.WriteAction)
  }
}
WriteActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.WriteAction)
WriteActionMixin.Class = WriteActionImpl
