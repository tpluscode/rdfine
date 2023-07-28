import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { TypeMixin } from './Type.js';

export interface RepresentationType<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Type<D>, rdfine.RdfResource<D> {
  isRepresentationTypeOf: Rico.Instantiation<D> | undefined;
}

export function RepresentationTypeMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<RepresentationType & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class RepresentationTypeClass extends TypeMixin(Resource) {
    @rdfine.property.resource({ implicitTypes: [rico.Instantiation] })
    isRepresentationTypeOf: Rico.Instantiation | undefined;
  }
  return RepresentationTypeClass as any
}

class RepresentationTypeImpl extends RepresentationTypeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<RepresentationType>) {
    super(arg, init)
    this.types.add(rico.RepresentationType)
  }

  static readonly __mixins: Mixin[] = [RepresentationTypeMixin, TypeMixin];
}
RepresentationTypeMixin.appliesTo = rico.RepresentationType
RepresentationTypeMixin.Class = RepresentationTypeImpl

export const fromPointer = createFactory<RepresentationType>([TypeMixin, RepresentationTypeMixin], { types: [rico.RepresentationType] });
