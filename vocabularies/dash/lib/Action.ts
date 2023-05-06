import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '../index.js';
import type * as Shacl from '@rdfine/shacl';
import { ParameterizableMixin as ShaclParameterizableMixin } from '@rdfine/shacl/lib/Parameterizable.js';
import { ScriptMixin } from './Script.js';

export interface Action<D extends RDF.DatasetCore = RDF.DatasetCore> extends Shacl.Parameterizable<D>, Dash.Script<D>, RdfResource<D> {
  actionGroup: Dash.ActionGroup<D> | undefined;
  actionIconClass: string | undefined;
}

export function ActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Action> & RdfResourceCore> & Base {
  @namespace(dash)
  class ActionClass extends ScriptMixin(ShaclParameterizableMixin(Resource)) implements Partial<Action> {
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

  static readonly __mixins: Mixin[] = [ActionMixin, ShaclParameterizableMixin, ScriptMixin];
}
ActionMixin.appliesTo = dash.Action
ActionMixin.Class = ActionImpl

export const fromPointer = createFactory<Action>([ScriptMixin, ShaclParameterizableMixin, ActionMixin], { types: [dash.Action] });
