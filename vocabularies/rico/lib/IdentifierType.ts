import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { TypeMixin } from './Type.js';

export interface IdentifierType<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Type<D>, RdfResource<D> {
  isIdentifierTypeOf: Rico.Identifier<D> | undefined;
}

export function IdentifierTypeMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<IdentifierType> & RdfResourceCore> & Base {
  @namespace(rico)
  class IdentifierTypeClass extends TypeMixin(Resource) implements Partial<IdentifierType> {
    @property.resource({ implicitTypes: [rico.Identifier] })
    isIdentifierTypeOf: Rico.Identifier | undefined;
  }
  return IdentifierTypeClass
}

class IdentifierTypeImpl extends IdentifierTypeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<IdentifierType>) {
    super(arg, init)
    this.types.add(rico.IdentifierType)
  }

  static readonly __mixins: Mixin[] = [IdentifierTypeMixin, TypeMixin];
}
IdentifierTypeMixin.appliesTo = rico.IdentifierType
IdentifierTypeMixin.Class = IdentifierTypeImpl

export const fromPointer = createFactory<IdentifierType>([TypeMixin, IdentifierTypeMixin], { types: [rico.IdentifierType] });
