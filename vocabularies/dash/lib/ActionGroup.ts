import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '../index.js';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource.js';

export interface ActionGroup<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, RdfResource<D> {
}

export function ActionGroupMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ActionGroup> & RdfResourceCore> & Base {
  @namespace(dash)
  class ActionGroupClass extends RdfsResourceMixin(Resource) implements Partial<ActionGroup> {
  }
  return ActionGroupClass
}

class ActionGroupImpl extends ActionGroupMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ActionGroup>) {
    super(arg, init)
    this.types.add(dash.ActionGroup)
  }

  static readonly __mixins: Mixin[] = [ActionGroupMixin, RdfsResourceMixin];
}
ActionGroupMixin.appliesTo = dash.ActionGroup
ActionGroupMixin.Class = ActionGroupImpl

export const fromPointer = createFactory<ActionGroup>([RdfsResourceMixin, ActionGroupMixin], { types: [dash.ActionGroup] });
