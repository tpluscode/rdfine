import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CommunicateActionMixin } from './CommunicateAction';

export interface ShareAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CommunicateAction<D>, RdfResource<D> {
}

export function ShareActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ShareAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class ShareActionClass extends CommunicateActionMixin(Resource) implements Partial<ShareAction> {
  }
  return ShareActionClass
}

class ShareActionImpl extends ShareActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ShareAction>) {
    super(arg, init)
    this.types.add(schema.ShareAction)
  }

  static readonly __mixins: Mixin[] = [ShareActionMixin, CommunicateActionMixin];
}
ShareActionMixin.appliesTo = schema.ShareAction
ShareActionMixin.Class = ShareActionImpl
