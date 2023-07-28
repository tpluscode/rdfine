import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { hydra } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Hydra from '../index.js';
import type * as Rdf from '@rdfine/rdf';
import { PropertyMixin as RdfPropertyMixin } from '@rdfine/rdf/lib/Property';

export interface IriTemplateMapping<D extends RDF.DatasetCore = RDF.DatasetCore> extends rdfine.RdfResource<D> {
  property: Rdf.Property<D> | undefined;
  required: boolean | undefined;
  variable: string | undefined;
  variableRepresentation: Hydra.VariableRepresentation<D> | undefined;
}

export function IriTemplateMappingMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<IriTemplateMapping & RdfResourceCore> & Base {
  @rdfine.namespace(hydra)
  class IriTemplateMappingClass extends Resource {
    @rdfine.property.resource({ as: [RdfPropertyMixin] })
    property: Rdf.Property | undefined;
    @rdfine.property.literal({ type: Boolean })
    required: boolean | undefined;
    @rdfine.property.literal()
    variable: string | undefined;
    @rdfine.property.resource({ implicitTypes: [hydra.VariableRepresentation] })
    variableRepresentation: Hydra.VariableRepresentation | undefined;
  }
  return IriTemplateMappingClass as any
}

class IriTemplateMappingImpl extends IriTemplateMappingMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<IriTemplateMapping>) {
    super(arg, init)
    this.types.add(hydra.IriTemplateMapping)
  }

  static readonly __mixins: Mixin[] = [IriTemplateMappingMixin];
}
IriTemplateMappingMixin.appliesTo = hydra.IriTemplateMapping
IriTemplateMappingMixin.Class = IriTemplateMappingImpl

export const fromPointer = createFactory<IriTemplateMapping>([IriTemplateMappingMixin], { types: [hydra.IriTemplateMapping] });
