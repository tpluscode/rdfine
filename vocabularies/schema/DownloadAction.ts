import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { TransferActionMixin } from './TransferAction';

export interface DownloadAction extends Schema.TransferAction, RdfResource {
}

export function DownloadActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DownloadActionClass extends TransferActionMixin(Resource) implements DownloadAction {
  }
  return DownloadActionClass
}

class DownloadActionImpl extends DownloadActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DownloadAction>) {
    super(arg, init)
    this.types.add(schema.DownloadAction)
  }

  static readonly __mixins: Mixin[] = [DownloadActionMixin, TransferActionMixin];
}
DownloadActionMixin.appliesTo = schema.DownloadAction
DownloadActionMixin.Class = DownloadActionImpl
