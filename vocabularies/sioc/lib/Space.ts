import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sioc } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sioc from '..';

export interface Space<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
  'has_usergroup': Sioc.Usergroup<D> | undefined;
  'space_of': RDF.Term | undefined;
}

export function SpaceMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Space> & RdfResourceCore> & Base {
  @namespace(sioc)
  class SpaceClass extends Resource implements Partial<Space> {
    @property.resource({ implicitTypes: [sioc.Usergroup] })
    'has_usergroup': Sioc.Usergroup | undefined;
    @property()
    'space_of': RDF.Term | undefined;
  }
  return SpaceClass
}

class SpaceImpl extends SpaceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Space>) {
    super(arg, init)
    this.types.add(sioc.Space)
  }

  static readonly __mixins: Mixin[] = [SpaceMixin];
}
SpaceMixin.appliesTo = sioc.Space
SpaceMixin.Class = SpaceImpl

export const fromPointer = createFactory<Space>([SpaceMixin], { types: [sioc.Space] });
