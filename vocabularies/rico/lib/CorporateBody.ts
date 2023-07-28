import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { GroupMixin } from './Group.js';

export interface CorporateBody<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Group<D>, rdfine.RdfResource<D> {
  hasOrHadCorporateBodyType: Rico.CorporateBodyType<D> | undefined;
}

export function CorporateBodyMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<CorporateBody & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class CorporateBodyClass extends GroupMixin(Resource) {
    @rdfine.property.resource({ implicitTypes: [rico.CorporateBodyType] })
    hasOrHadCorporateBodyType: Rico.CorporateBodyType | undefined;
  }
  return CorporateBodyClass as any
}

class CorporateBodyImpl extends CorporateBodyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CorporateBody>) {
    super(arg, init)
    this.types.add(rico.CorporateBody)
  }

  static readonly __mixins: Mixin[] = [CorporateBodyMixin, GroupMixin];
}
CorporateBodyMixin.appliesTo = rico.CorporateBody
CorporateBodyMixin.Class = CorporateBodyImpl

export const fromPointer = createFactory<CorporateBody>([GroupMixin, CorporateBodyMixin], { types: [rico.CorporateBody] });
