import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.DownloadAction)
  }
}
DownloadActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DownloadAction)
DownloadActionMixin.Class = DownloadActionImpl
