import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { hydra } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Hydra from '../index.js';
import { IriTemplateExMixin } from '../extensions/index.js';

export interface IriTemplate<D extends RDF.DatasetCore = RDF.DatasetCore> extends rdfine.RdfResource<D> {
  mapping: Array<Hydra.IriTemplateMapping<D>>;
  resolveRelativeUsing: RDF.NamedNode | undefined;
  template: string | undefined;
  variableRepresentation: Hydra.VariableRepresentation<D> | undefined;
}

export function IriTemplateMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<IriTemplate> & RdfResourceCore> & Base {
  @rdfine.namespace(hydra)
  class IriTemplateClass extends IriTemplateExMixin(Resource) implements Partial<IriTemplate> {
    @rdfine.property.resource({ values: 'array', implicitTypes: [hydra.IriTemplateMapping] })
    mapping!: Array<Hydra.IriTemplateMapping>;
    @rdfine.property()
    resolveRelativeUsing: RDF.NamedNode | undefined;
    @rdfine.property.literal({ datatype: $rdf.namedNode('http://www.w3.org/ns/hydra/core#Rfc6570Template') })
    template: string | undefined;
    @rdfine.property.resource({ implicitTypes: [hydra.VariableRepresentation] })
    variableRepresentation: Hydra.VariableRepresentation | undefined;
  }
  return IriTemplateClass
}

class IriTemplateImpl extends IriTemplateMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<IriTemplate>) {
    super(arg, init)
    this.types.add(hydra.IriTemplate)
  }

  static readonly __mixins: Mixin[] = [IriTemplateExMixin, IriTemplateMixin];
}
IriTemplateMixin.appliesTo = hydra.IriTemplate
IriTemplateMixin.Class = IriTemplateImpl

export const fromPointer = createFactory<IriTemplate>([IriTemplateMixin], { types: [hydra.IriTemplate] });
