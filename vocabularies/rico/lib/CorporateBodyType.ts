import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '..';
import { TypeMixin } from './Type';

export interface CorporateBodyType<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Type<D>, RdfResource<D> {
  isOrWasCorporateBodyTypeOf: Rico.CorporateBody<D> | undefined;
}

export function CorporateBodyTypeMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<CorporateBodyType> & RdfResourceCore> & Base {
  @namespace(rico)
  class CorporateBodyTypeClass extends TypeMixin(Resource) implements Partial<CorporateBodyType> {
    @property.resource({ implicitTypes: [rico.CorporateBody] })
    isOrWasCorporateBodyTypeOf: Rico.CorporateBody | undefined;
  }
  return CorporateBodyTypeClass
}

class CorporateBodyTypeImpl extends CorporateBodyTypeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CorporateBodyType>) {
    super(arg, init)
    this.types.add(rico.CorporateBodyType)
  }

  static readonly __mixins: Mixin[] = [CorporateBodyTypeMixin, TypeMixin];
}
CorporateBodyTypeMixin.appliesTo = rico.CorporateBodyType
CorporateBodyTypeMixin.Class = CorporateBodyTypeImpl

export const fromPointer = createFactory<CorporateBodyType>([TypeMixin, CorporateBodyTypeMixin], { types: [rico.CorporateBodyType] });
