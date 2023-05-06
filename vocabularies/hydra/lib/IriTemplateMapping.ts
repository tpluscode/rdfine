import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { hydra } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Hydra from '../index.js';
import type * as Rdf from '@rdfine/rdf';
import { PropertyMixin as RdfPropertyMixin } from '@rdfine/rdf/lib/Property';

export interface IriTemplateMapping<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
  property: Rdf.Property<D> | undefined;
  required: boolean | undefined;
  variable: string | undefined;
  variableRepresentation: Hydra.VariableRepresentation<D> | undefined;
}

export function IriTemplateMappingMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<IriTemplateMapping> & RdfResourceCore> & Base {
  @namespace(hydra)
  class IriTemplateMappingClass extends Resource implements Partial<IriTemplateMapping> {
    @property.resource({ as: [RdfPropertyMixin] })
    property: Rdf.Property | undefined;
    @property.literal({ type: Boolean })
    required: boolean | undefined;
    @property.literal()
    variable: string | undefined;
    @property.resource({ implicitTypes: [hydra.VariableRepresentation] })
    variableRepresentation: Hydra.VariableRepresentation | undefined;
  }
  return IriTemplateMappingClass
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
