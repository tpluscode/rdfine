import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ConsumeActionMixin } from './ConsumeAction.js';

export interface InstallAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.ConsumeAction<D>, rdfine.RdfResource<D> {
}

export function InstallActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<InstallAction & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class InstallActionClass extends ConsumeActionMixin(Resource) {
  }
  return InstallActionClass as any
}

class InstallActionImpl extends InstallActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<InstallAction>) {
    super(arg, init)
    this.types.add(schema.InstallAction)
  }

  static readonly __mixins: Mixin[] = [InstallActionMixin, ConsumeActionMixin];
}
InstallActionMixin.appliesTo = schema.InstallAction
InstallActionMixin.Class = InstallActionImpl

export const fromPointer = createFactory<InstallAction>([ConsumeActionMixin, InstallActionMixin], { types: [schema.InstallAction] });
