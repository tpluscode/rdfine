import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { dash } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '..';
import { ResourceActionMixin } from './ResourceAction';

export interface ModifyAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Dash.ResourceAction<D>, RdfResource<D> {
}

export function ModifyActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ModifyAction> & RdfResourceCore> & Base {
  @namespace(dash)
  class ModifyActionClass extends ResourceActionMixin(Resource) implements Partial<ModifyAction> {
  }
  return ModifyActionClass
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
