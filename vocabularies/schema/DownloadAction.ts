import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<DownloadAction>) {
    super(arg)
    this.types.add(schema.DownloadAction)
    initializeProperties(this, init)
  }
}
DownloadActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DownloadAction)
DownloadActionMixin.Class = DownloadActionImpl
