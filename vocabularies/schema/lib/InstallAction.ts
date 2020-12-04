import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ConsumeActionMixin } from './ConsumeAction';

export interface InstallAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.ConsumeAction<D>, RdfResource<D> {
}

export function InstallActionMixin<Base extends Constructor>(Resource: Base): Constructor<InstallAction> & Base {
  @namespace(schema)
  class InstallActionClass extends ConsumeActionMixin(Resource) implements InstallAction {
  }
  return InstallActionClass
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
