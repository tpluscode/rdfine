import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { hydra } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Hydra from '../index.js';

export interface IriTemplate<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
  mapping: Array<Hydra.IriTemplateMapping<D>>;
  resolveRelativeUsing: RDF.NamedNode | undefined;
  template: string | undefined;
  variableRepresentation: Hydra.VariableRepresentation<D> | undefined;
}

export function IriTemplateMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<IriTemplate> & RdfResourceCore> & Base {
  @namespace(hydra)
  class IriTemplateClass extends Resource implements Partial<IriTemplate> {
    @property.resource({ values: 'array', implicitTypes: [hydra.IriTemplateMapping] })
    mapping!: Array<Hydra.IriTemplateMapping>;
    @property()
    resolveRelativeUsing: RDF.NamedNode | undefined;
    @property.literal({ datatype: $rdf.namedNode('http://www.w3.org/ns/hydra/core#Rfc6570Template') })
    template: string | undefined;
    @property.resource({ implicitTypes: [hydra.VariableRepresentation] })
    variableRepresentation: Hydra.VariableRepresentation | undefined;
  }
  return IriTemplateClass
}

class IriTemplateImpl extends IriTemplateMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<IriTemplate>) {
    super(arg, init)
    this.types.add(hydra.IriTemplate)
  }

  static readonly __mixins: Mixin[] = [IriTemplateMixin];
}
IriTemplateMixin.appliesTo = hydra.IriTemplate
IriTemplateMixin.Class = IriTemplateImpl

export const fromPointer = createFactory<IriTemplate>([IriTemplateMixin], { types: [hydra.IriTemplate] });
