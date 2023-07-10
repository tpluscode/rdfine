import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '../index.js';
import { ResourceActionMixin } from './ResourceAction.js';

export interface ModifyAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Dash.ResourceAction<D>, rdfine.RdfResource<D> {
}

export function ModifyActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<ModifyAction & RdfResourceCore> & Base {
  @rdfine.namespace(dash)
  class ModifyActionClass extends ResourceActionMixin(Resource) {
  }
  return ModifyActionClass as any
}

class ModifyActionImpl extends ModifyActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ModifyAction>) {
    super(arg, init)
    this.types.add(dash.ModifyAction)
  }

  static readonly __mixins: Mixin[] = [ModifyActionMixin, ResourceActionMixin];
}
ModifyActionMixin.appliesTo = dash.ModifyAction
ModifyActionMixin.Class = ModifyActionImpl

export const fromPointer = createFactory<ModifyAction>([ResourceActionMixin, ModifyActionMixin], { types: [dash.ModifyAction] });
