import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '..';
import { GroupMixin } from './Group';

export interface CorporateBody<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Group<D>, RdfResource<D> {
  hasOrHadCorporateBodyType: Rico.CorporateBodyType<D> | undefined;
}

export function CorporateBodyMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<CorporateBody> & RdfResourceCore> & Base {
  @namespace(rico)
  class CorporateBodyClass extends GroupMixin(Resource) implements Partial<CorporateBody> {
    @property.resource({ implicitTypes: [rico.CorporateBodyType] })
    hasOrHadCorporateBodyType: Rico.CorporateBodyType | undefined;
  }
  return CorporateBodyClass
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
