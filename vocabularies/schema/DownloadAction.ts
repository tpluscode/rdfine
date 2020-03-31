import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import TransferActionMixin from './TransferAction';

export interface DownloadAction extends Schema.TransferAction, RdfResource {
}

export default function DownloadActionMixin<Base extends Constructor>(Resource: Base) {
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
}
DownloadActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DownloadAction)
DownloadActionMixin.Class = DownloadActionImpl
