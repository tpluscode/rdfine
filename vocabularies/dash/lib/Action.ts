import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { dash } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '..';
import type * as Shacl from '@rdfine/shacl';
import { ScriptMixin } from './Script';
import { ParameterizableMixin as ShaclParameterizableMixin } from '@rdfine/shacl/lib/Parameterizable';

export interface Action<D extends RDF.DatasetCore = RDF.DatasetCore> extends Dash.Script<D>, Shacl.Parameterizable<D>, RdfResource<D> {
  actionGroup: Dash.ActionGroup<D> | undefined;
  actionIconClass: string | undefined;
}

export function ActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(dash)
  class ActionClass extends ShaclParameterizableMixin(ScriptMixin(Resource)) implements Partial<Action> {
    @property.resource({ implicitTypes: [dash.ActionGroup] })
    actionGroup: Dash.ActionGroup | undefined;
    @property.literal()
    actionIconClass: string | undefined;
  }
  return ActionClass
}

class ActionImpl extends ActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Action>) {
    super(arg, init)
    this.types.add(dash.Action)
  }

  static readonly __mixins: Mixin[] = [ActionMixin, ScriptMixin, ShaclParameterizableMixin];
}
ActionMixin.appliesTo = dash.Action
ActionMixin.Class = ActionImpl
