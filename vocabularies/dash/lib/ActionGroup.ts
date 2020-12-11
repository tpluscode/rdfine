import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { dash } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '..';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource';

export interface ActionGroup<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, RdfResource<D> {
}

export function ActionGroupMixin<Base extends Constructor>(Resource: Base) {
  @namespace(dash)
  class ActionGroupClass extends RdfsResourceMixin(Resource) implements ActionGroup {
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
